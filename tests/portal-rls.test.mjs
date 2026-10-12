import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";

test("portal migration enforces owner isolation, publication and administrator privileges", async (t) => {
  const db = new PGlite({ extensions: { pgcrypto } });
  const owner = "11111111-1111-4111-8111-111111111111";
  const other = "22222222-2222-4222-8222-222222222222";
  const admin = "33333333-3333-4333-8333-333333333333";
  const client = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
  const client2 = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
  const villa = "cccccccc-cccc-4ccc-8ccc-cccccccccccc";
  const villa2 = "dddddddd-dddd-4ddd-8ddd-dddddddddddd";
  const published = "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee";
  const draft = "ffffffff-ffff-4fff-8fff-ffffffffffff";
  async function as(user) {
    await db.exec(
      `reset role; set role authenticated; set request.jwt.claim.sub = '${user}';`,
    );
  }
  try {
    await db.exec(`
      create role anon; create role authenticated;
      create schema auth;
      create table auth.users(id uuid primary key, email text, invited_at timestamptz);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
      grant usage on schema auth, public to anon, authenticated;
      grant execute on function auth.uid() to anon, authenticated;
    `);
    await db.exec(
      await readFile(
        new URL(
          "../supabase/migrations/202609150001_owner_portal.sql",
          import.meta.url,
        ),
        "utf8",
      ),
    );
    await db.exec(`
      insert into auth.users values ('${owner}','one@example.com',null),('${other}','two@example.com',null),('${admin}','admin@example.com',null);
      insert into public.portal_admins values ('${admin}');
      insert into public.portal_clients(id,auth_user_id,full_name,email) values ('${client}','${owner}','Owner One','one@example.com'),('${client2}','${other}','Owner Two','two@example.com');
      insert into public.portal_villas(id,client_id,villa_number) values ('${villa}','${client}','A-1'),('${villa2}','${client2}','B-2');
      insert into public.portal_updates(id,villa_id,title,body,published) values ('${published}','${villa}','Public report','Published report',true),('${draft}','${villa}','Draft report','Unpublished report',false);
      insert into public.portal_media(update_id,public_id,resource_type,ready) values ('${published}','ready','image',true),('${published}','pending','image',false),('${draft}','draft-media','image',true);
    `);
    await db.exec(await readFile(new URL(
      "../supabase/migrations/202609160001_client_codes.sql", import.meta.url,
    ), "utf8"));
    await t.test("existing clients receive unique IDs without changing villa ownership", async () => {
      const codes = (await db.query("select client_code from portal_clients")).rows.map((r) => r.client_code);
      assert.equal(new Set(codes).size, 2);
      assert.ok(codes.every((code) => /^AB-\d{6}$/.test(code)));
      assert.equal((await db.query(`select client_id from portal_villas where id='${villa}'`)).rows[0].client_id, client);
    });
    await t.test("owner reads only their profile and villa", async () => {
      await as(owner);
      assert.deepEqual(
        (await db.query("select id from portal_clients")).rows.map((r) => r.id),
        [client],
      );
      assert.deepEqual(
        (await db.query("select id from portal_villas")).rows.map((r) => r.id),
        [villa],
      );
      assert.equal(
        (await db.query(`select * from portal_villas where id='${villa2}'`))
          .rows.length,
        0,
      );
    });
    await t.test(
      "draft updates and unverified media are hidden from the owner",
      async () => {
        assert.deepEqual(
          (await db.query("select id from portal_updates")).rows.map(
            (r) => r.id,
          ),
          [published],
        );
        assert.deepEqual(
          (await db.query("select public_id from portal_media")).rows.map(
            (r) => r.public_id,
          ),
          ["ready"],
        );
      },
    );
    await t.test(
      "another owner cannot see these updates or photos",
      async () => {
        await as(other);
        assert.equal(
          (await db.query("select * from portal_updates")).rows.length,
          0,
        );
        assert.equal(
          (await db.query("select * from portal_media")).rows.length,
          0,
        );
      },
    );
    await t.test(
      "owners cannot promote themselves or link a different identity",
      async () => {
        await assert.rejects(() =>
          db.exec(`insert into portal_admins values ('${other}')`),
        );
        await assert.rejects(() =>
          db.exec(
            `update portal_clients set auth_user_id='${other}' where id='${client}'`,
          ),
        );
        await assert.rejects(() =>
          db.exec(`update portal_media set ready=true`),
        );
        assert.equal(
          (
            await db.query(
              `update portal_villas set progress=100 where id='${villa2}' returning id`,
            )
          ).rows.length,
          0,
        );
        await assert.rejects(() =>
          db.exec(
            `insert into portal_updates(villa_id,title,body) values ('${villa2}','Invalid report','Owner write attempt')`,
          ),
        );
      },
    );
    await t.test(
      "administrators can create and update clients through granted columns",
      async () => {
        await as(admin);
        await db.exec(
          `insert into portal_clients(full_name,email,phone,address,country,occupation,emergency_contact,status) values ('New Owner','new@example.com','','','Bangladesh','','','active');`,
        );
        assert.equal(
          (await db.query("select * from portal_clients")).rows.length,
          3,
        );
        await db.exec(
          `update portal_clients set full_name='Updated Owner' where email='new@example.com'`,
        );
        await db.exec(
          `update portal_villas set progress=55,stage='Structure' where id='${villa}'`,
        );
        assert.equal(
          (
            await db.query(
              `select progress from portal_villas where id='${villa}'`,
            )
          ).rows[0].progress,
          55,
        );
      },
    );
    await t.test(
      "publishing makes the draft visible to its owner",
      async () => {
        await db.exec(
          `update portal_updates set published=true where id='${draft}'`,
        );
        await as(owner);
        assert.equal(
          (await db.query("select * from portal_updates")).rows.length,
          2,
        );
        assert.equal(
          (await db.query("select * from portal_media")).rows.length,
          2,
        );
      },
    );
    await t.test(
      "deactivating a client revokes all their portal data access",
      async () => {
        await as(admin);
        await db.exec(
          `update portal_clients set status='inactive' where id='${client}'`,
        );
        await as(owner);
        for (const table of [
          "portal_clients",
          "portal_villas",
          "portal_updates",
          "portal_media",
        ])
          assert.equal(
            (await db.query(`select * from ${table}`)).rows.length,
            0,
          );
      },
    );
    await t.test("anonymous access and audit access are denied", async () => {
      await assert.rejects(() => db.query("select * from portal_admins"));
      assert.equal(
        (await db.query("select * from portal_audit")).rows.length,
        0,
      );
      await db.exec("reset role; set role anon;");
      await assert.rejects(() => db.query("select * from portal_clients"));
      await assert.rejects(() => db.query("select * from portal_media"));
      await assert.rejects(() => db.query("select public.is_portal_admin()"));
    });
    await t.test(
      "invited identities link to pre-created profiles",
      async () => {
        await db.exec(
          `reset role; insert into auth.users(id,email,invited_at) values ('44444444-4444-4444-8444-444444444444','new@example.com',now());`,
        );
        assert.equal(
          (
            await db.query(
              `select auth_user_id from portal_clients where email='new@example.com'`,
            )
          ).rows[0].auth_user_id,
          "44444444-4444-4444-8444-444444444444",
        );
      },
    );
    await t.test(
      "1500 extra profiles can be counted and paginated without returning all rows",
      async () => {
        await db.exec(
          `insert into portal_clients(full_name,email) select 'Test Owner ' || n, 'owner-' || n || '@example.com' from generate_series(1,1500) as n;`,
        );
        await as(admin);
        assert.equal(
          Number(
            (await db.query("select count(*) from portal_clients")).rows[0]
              .count,
          ),
          1503,
        );
        assert.equal(
          (
            await db.query(
              "select id from portal_clients order by created_at desc,id limit 20 offset 1480",
            )
          ).rows.length,
          20,
        );
        assert.ok(
          (await db.query("select * from portal_audit limit 1")).rows.length,
        );
      },
    );
    await t.test("automatic IDs remain unique across 1503 profiles", async () => {
      const { rows } = await db.query("select count(distinct client_code) as total from portal_clients");
      assert.equal(Number(rows[0].total), 1503);
    });
    await t.test("manual IDs normalize and duplicates are rejected", async () => {
      const { rows } = await db.query("insert into portal_clients(full_name,email,client_code) values ('Manual Owner','manual@example.com',' ab-custom-01 ') returning client_code");
      assert.equal(rows[0].client_code, "AB-CUSTOM-01");
      await assert.rejects(() => db.exec("insert into portal_clients(full_name,email,client_code) values ('Duplicate Owner','duplicate@example.com','ab-custom-01')"), (error) => error.code === "23505");
      await assert.rejects(() => db.exec("insert into portal_clients(full_name,email,client_code) values ('Invalid Owner','invalid@example.com','bad id!')"), (error) => error.code === "23514");
    });
    await t.test("blank IDs are generated and skip manually reserved sequence codes", async () => {
      await db.exec("reset role");
      const next = Number((await db.query("select last_value from portal_client_code_seq")).rows[0].last_value) + 1;
      const reserved = `AB-${String(next).padStart(6, "0")}`;
      await as(admin);
      await db.query("insert into portal_clients(full_name,email,client_code) values ('Reserved Code','reserved@example.com',$1)", [reserved]);
      const { rows } = await db.query("insert into portal_clients(full_name,email,client_code) values ('Auto Owner','auto@example.com','   ') returning client_code");
      assert.equal(rows[0].client_code, `AB-${String(next + 1).padStart(6, "0")}`);
    });
    await t.test("client IDs are immutable and cannot bypass owner access controls", async () => {
      await assert.rejects(() => db.exec("update portal_clients set client_code='AB-CHANGED' where email='manual@example.com'"));
      await assert.rejects(() => db.query("select nextval('public.portal_client_code_seq')"));
      await db.exec("reset role");
      await assert.rejects(() => db.exec("update portal_clients set client_code='AB-CHANGED' where email='manual@example.com'"), /cannot be changed/);
      await as(other);
      await assert.rejects(() => db.exec("insert into portal_clients(full_name,email,client_code) values ('Unauthorized Owner','unauthorized@example.com','AB-UNAUTHORIZED')"));
      assert.equal((await db.query("select * from portal_clients where client_code='AB-CUSTOM-01'")).rows.length, 0);
    });
  } finally {
    await db.close();
  }
});

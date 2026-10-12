import { randomUUID } from "node:crypto";
import { ZodError } from "zod";
import {
  authorize,
  check,
  fail,
  mediaCloud,
  serviceDb,
} from "@/lib/portal/server";
import {
  clientFields,
  createClientSchema,
  villaSchema,
  updateSchema,
  uploadSchema,
  readySchema,
  uuid,
} from "@/lib/portal/validation";
import {
  MAX_IMAGE_BYTES,
  MAX_VIDEO_BYTES,
  PAGE_SIZE,
} from "@/lib/portal/constants";

export const config = { api: { bodyParser: { sizeLimit: "64kb" } } };

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.setHeader("X-Content-Type-Options", "nosniff");
  try {
    if (!["GET", "POST", "PATCH"].includes(req.method)) {
      res.setHeader("Allow", "GET, POST, PATCH");
      throw fail("Method not allowed.", 405);
    }
    const { db, user, admin } = await authorize(req);
    const [route, id, action] = req.query.path || [];
    const write = req.method !== "GET";
    if (write && !admin) throw fail("Administrator access is required.", 403);
    if (id) uuid.parse(id);
    const page = Math.max(
      1,
      Math.min(100000, Number.parseInt(req.query.page, 10) || 1),
    );
    const from = (page - 1) * PAGE_SIZE;

    if (route === "session" && !id && !write)
      return res.json({ role: admin ? "admin" : "client", email: user.email });

    if (route === "summary" && !id && !write) {
      const requests = [
        db.from("portal_clients").select("id", { count: "exact", head: true }),
        db.from("portal_villas").select("id", { count: "exact", head: true }),
        db
          .from("portal_updates")
          .select("id", { count: "exact", head: true })
          .eq("published", true),
        db
          .from("portal_media")
          .select("id", { count: "exact", head: true })
          .eq("ready", true),
      ];
      const results = await Promise.all(requests);
      results.forEach(check);
      return res.json({
        clients: results[0].count,
        villas: results[1].count,
        updates: results[2].count,
        media: results[3].count,
      });
    }

    if (route === "clients") {
      if (action === "invite" && id && req.method === "POST") {
        const client = check(
          await db.from("portal_clients").select("*").eq("id", id).single(),
        ).data;
        if (client.status !== "active")
          throw fail("Activate this client before sending an invitation.");
        const site = process.env.PORTAL_SITE_URL;
        if (!site)
          throw fail("Set PORTAL_SITE_URL before sending invitations.", 503);
        const redirectTo = `${new URL(site).origin}/portal/reset-password`;
        const service = serviceDb();
        if (client.auth_user_id) {
          const result = await service.auth.resetPasswordForEmail(
            client.email,
            { redirectTo },
          );
          if (result.error)
            throw fail(
              "The access email could not be sent. Check your SMTP configuration and try again.",
            );
          return res.json({
            message: "A new account access email has been requested.",
          });
        }
        const result = await service.auth.admin.inviteUserByEmail(
          client.email,
          { redirectTo, data: { full_name: client.full_name } },
        );
        if (result.error)
          throw fail(
            "Invitation could not be sent. Check SMTP settings or whether this email already has an account.",
          );
        // The database invitation trigger binds the new identity atomically.
        return res.json({ message: "Invitation sent to the client." });
      }
      if (action) throw fail("Not found.", 404);
      if (req.method === "GET") {
        let query = db
          .from("portal_clients")
          .select("*", { count: "exact" })
          .order("created_at", { ascending: false })
          .order("id");
        if (id) query = query.eq("id", id);
        const search = String(req.query.q || "")
          .slice(0, 100)
          .replace(/[^\p{L}\p{N}@. +\-]/gu, "")
          .trim();
        if (search)
          query = query.or(
            `client_code.ilike.%${search}%,full_name.ilike.%${search}%,email.ilike.%${search}%`,
          );
        const result = check(await query.range(from, from + PAGE_SIZE - 1));
        return res.json({ rows: result.data, total: result.count, page });
      }
      if (req.method === "POST" && !id) {
        const value = createClientSchema.parse(req.body);
        return res
          .status(201)
          .json(
            check(
              await db.from("portal_clients").insert(value).select().single(),
            ).data,
          );
      }
      if (req.method === "PATCH" && id) {
        const value = clientFields.parse(req.body);
        return res.json(
          check(
            await db
              .from("portal_clients")
              .update(value)
              .eq("id", id)
              .select()
              .single(),
          ).data,
        );
      }
    }

    if (route === "villas" && !action) {
      if (req.method === "GET") {
        let query = db
          .from("portal_villas")
          .select("*,client:portal_clients(full_name)", { count: "exact" })
          .order("created_at", { ascending: false })
          .order("id");
        if (id) query = query.eq("id", id);
        if (req.query.client_id)
          query = query.eq("client_id", uuid.parse(req.query.client_id));
        const result = check(await query.range(from, from + PAGE_SIZE - 1));
        return res.json({ rows: result.data, total: result.count, page });
      }
      if ((req.method === "POST" && !id) || (req.method === "PATCH" && id)) {
        const value = villaSchema.parse(req.body);
        const query = id
          ? db
              .from("portal_villas")
              .update({ ...value, updated_at: new Date().toISOString() })
              .eq("id", id)
          : db.from("portal_villas").insert(value);
        return res
          .status(id ? 200 : 201)
          .json(check(await query.select().single()).data);
      }
    }

    if (route === "updates" && !action) {
      if (req.method === "GET") {
        let query = db
          .from("portal_updates")
          .select(
            "*,media:portal_media(id,resource_type,caption,ready),villa:portal_villas(villa_number)",
            { count: "exact" },
          )
          .order("created_at", { ascending: false })
          .order("id");
        if (id) query = query.eq("id", id);
        if (req.query.villa_id)
          query = query.eq("villa_id", uuid.parse(req.query.villa_id));
        const result = check(await query.range(from, from + PAGE_SIZE - 1));
        return res.json({ rows: result.data, total: result.count, page });
      }
      if ((req.method === "POST" && !id) || (req.method === "PATCH" && id)) {
        const value = updateSchema.parse(req.body);
        const query = id
          ? db.from("portal_updates").update(value).eq("id", id)
          : db.from("portal_updates").insert(value);
        return res
          .status(id ? 200 : 201)
          .json(check(await query.select().single()).data);
      }
    }

    if (route === "upload" && !id && req.method === "POST") {
      const value = uploadSchema.parse(req.body);
      check(
        await db
          .from("portal_updates")
          .select("id")
          .eq("id", value.update_id)
          .single(),
      );
      const cloud = mediaCloud();
      const mediaId = randomUUID();
      const publicId = `anondo-bhubon-private/${value.update_id}/${mediaId}`;
      check(
        await serviceDb()
          .from("portal_media")
          .insert({ id: mediaId, ...value, public_id: publicId }),
      );
      const params = {
        timestamp: Math.floor(Date.now() / 1000),
        public_id: publicId,
        type: "authenticated",
        overwrite: false,
        allowed_formats:
          value.resource_type === "image"
            ? "jpg,jpeg,png,webp"
            : "mp4,webm,mov",
      };
      return res.json({
        media_id: mediaId,
        url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/${value.resource_type}/upload`,
        params,
        api_key: process.env.CLOUDINARY_API_KEY,
        signature: cloud.utils.api_sign_request(
          params,
          process.env.CLOUDINARY_API_SECRET,
        ),
      });
    }

    if (route === "complete-upload" && !id && req.method === "POST") {
      const { media_id } = readySchema.parse(req.body);
      const item = check(
        await db.from("portal_media").select("*").eq("id", media_id).single(),
      ).data;
      const cloud = mediaCloud();
      const uploaded = await cloud.api.resource(item.public_id, {
        resource_type: item.resource_type,
        type: "authenticated",
      });
      const allowed =
        item.resource_type === "image"
          ? ["jpg", "jpeg", "png", "webp"]
          : ["mp4", "webm", "mov"];
      const maxBytes =
        item.resource_type === "image" ? MAX_IMAGE_BYTES : MAX_VIDEO_BYTES;
      if (
        !allowed.includes(uploaded.format) ||
        uploaded.bytes > maxBytes ||
        uploaded.type !== "authenticated"
      ) {
        await cloud.uploader.destroy(item.public_id, {
          resource_type: item.resource_type,
          type: "authenticated",
          invalidate: true,
        });
        throw fail(
          "Unsupported file or file too large. Images: 10 MB maximum. Videos: 50 MB maximum.",
        );
      }
      check(
        await serviceDb()
          .from("portal_media")
          .update({
            ready: true,
            format: uploaded.format,
            bytes: uploaded.bytes,
          })
          .eq("id", media_id),
      );
      return res.json({ message: "Media uploaded and verified." });
    }

    if (route === "media" && id && !action && !write) {
      // This lookup uses the viewer's JWT and RLS before issuing a short-lived URL.
      const item = check(
        await db
          .from("portal_media")
          .select("*")
          .eq("id", id)
          .eq("ready", true)
          .single(),
      ).data;
      const cloud = mediaCloud();
      const expires = Math.floor(Date.now() / 1000) + 300;
      const url = cloud.utils.private_download_url(
        item.public_id,
        item.format,
        {
          resource_type: item.resource_type,
          type: "authenticated",
          expires_at: expires,
          attachment: false,
        },
      );
      return res.json({ url, expires_at: expires });
    }
    throw fail("Not found.", 404);
  } catch (error) {
    if (error instanceof ZodError)
      return res
        .status(400)
        .json({ error: "Please check the required fields and their values." });
    return res
      .status(error.status || 500)
      .json({
        error: error.status
          ? error.message
          : "This request could not be completed. Please try again shortly.",
      });
  }
}

import assert from "node:assert/strict";
import test from "node:test";
import { clientFields, createClientSchema, villaSchema, uploadSchema } from "../lib/portal/validation.js";
import { portalPageProps } from "../lib/portal/page.js";

const client = {
  full_name: "Test Client", email: "CLIENT@example.com", phone: "",
  address: "", country: "Bangladesh", occupation: "", emergency_contact: "", status: "active",
};

test("client creation accepts auto/manual IDs and normalizes references", () => {
  assert.equal(createClientSchema.parse(client).client_code, undefined);
  assert.equal(createClientSchema.parse({ ...client, client_code: "  " }).client_code, "");
  const parsed = createClientSchema.parse({ ...client, client_code: " ab-custom-42 " });
  assert.equal(parsed.client_code, "AB-CUSTOM-42");
  assert.equal(parsed.email, "client@example.com");
  for (const value of ["a", "-abc", "bad id", "a".repeat(33), "<script>"])
    assert.equal(createClientSchema.safeParse({ ...client, client_code: value }).success, false);
});

test("creation and edits reject protected identity fields", () => {
  assert.equal(createClientSchema.safeParse({ ...client, auth_user_id: "forged" }).success, false);
  const { email, ...editable } = client;
  assert.equal(clientFields.safeParse(editable).success, true);
  assert.equal(clientFields.safeParse({ ...editable, client_code: "AB-NEW" }).success, false);
  assert.equal(clientFields.safeParse({ ...editable, email }).success, false);
});

test("property validation supports Bhubon property types and bounded progress", () => {
  const property = {
    client_id: "11111111-1111-4111-8111-111111111111", villa_number: "AB-A-12",
    villa_type: "Luxury Villa", block: "Block A", plot_size: "5 Katha",
    stage: "Foundation", progress: 25, handover_date: "2028-12-31",
  };
  for (const type of ["Luxury Villa", "Apartment", "Condominium", "Residential Plot"])
    assert.equal(villaSchema.safeParse({ ...property, villa_type: type }).success, true);
  for (const value of [-1, 101, 12.5])
    assert.equal(villaSchema.safeParse({ ...property, progress: value }).success, false);
  assert.equal(villaSchema.safeParse({ ...property, handover_date: "2028-02-31" }).success, false);
  assert.equal(villaSchema.safeParse({ ...property, handover_date: null }).success, true);
});

test("media requests allow only image/video metadata", () => {
  const upload = { update_id: "11111111-1111-4111-8111-111111111111", resource_type: "image", caption: "Site view" };
  assert.equal(uploadSchema.safeParse(upload).success, true);
  assert.equal(uploadSchema.safeParse({ ...upload, resource_type: "raw" }).success, false);
  assert.equal(uploadSchema.safeParse({ ...upload, public_id: "another-client" }).success, false);
});

test("production never enables preview and private pages cannot be cached/indexed", () => {
  const previous = process.env.NODE_ENV;
  try {
    const headers = {};
    const context = { query: { preview: "1" }, res: { setHeader: (key, value) => { headers[key] = value; } } };
    process.env.NODE_ENV = "production";
    assert.deepEqual(portalPageProps(context).props, { allowPreview: false, preview: false });
    assert.match(headers["Cache-Control"], /no-store/);
    assert.match(headers["X-Robots-Tag"], /noindex/);
    assert.equal(headers["X-Frame-Options"], "DENY");
    process.env.NODE_ENV = "development";
    assert.equal(portalPageProps(context).props.preview, true);
    context.query = {};
    assert.equal(portalPageProps(context).props.preview, false);
  } finally {
    if (previous === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = previous;
  }
});

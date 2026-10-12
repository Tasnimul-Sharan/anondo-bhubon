import { createClient } from "@supabase/supabase-js";
import { v2 as cloudinary } from "cloudinary";

export function fail(message, status = 400) {
  return Object.assign(new Error(message), { status });
}
export function check(result) {
  if (result.error) {
    if (result.error.code === "23505") {
      if (result.error.message?.includes("portal_clients_client_code_key"))
        throw fail("This client ID already exists. Please use a different ID.", 409);
      throw fail("This email or property number already exists.", 409);
    }
    throw fail(
      "The record could not be saved or loaded. Please check the portal setup and try again.",
      400,
    );
  }
  return result;
}
export async function authorize(req) {
  const token = req.headers.authorization?.match(/^Bearer (.+)$/)?.[1];
  if (!token) throw fail("Please sign in to continue.", 401);
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw fail("The owner portal is not configured yet.", 503);
  const db = createClient(url, key, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await db.auth.getUser(token);
  if (error || !data.user)
    throw fail("Your session has expired. Please sign in again.", 401);
  const { data: admin } = check(await db.rpc("is_portal_admin"));
  return { db, user: data.user, admin: Boolean(admin) };
}
export function serviceDb() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY)
    throw fail("Client invitations are not configured yet.", 503);
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
export function mediaCloud() {
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
    process.env;
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET)
    throw fail("Photo and video storage is not configured yet.", 503);
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
  });
  return cloudinary;
}

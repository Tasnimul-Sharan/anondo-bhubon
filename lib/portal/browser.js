import { createClient } from "@supabase/supabase-js";

let instance;
export function portalConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
export function portalAuth() {
  if (!portalConfigured())
    throw new Error(
      "The owner portal is not connected yet. Please contact the project team.",
    );
  if (!instance)
    instance = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    );
  return instance;
}
export async function portalRequest(path, options = {}) {
  const {
    data: { session },
  } = await portalAuth().auth.getSession();
  if (!session) throw new Error("Please sign in to continue.");
  const response = await fetch(`/api/portal/${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
      ...options.headers,
    },
    cache: "no-store",
  });
  const result = await response.json();
  if (!response.ok)
    throw new Error(
      result.error || "Unable to complete this request. Please try again.",
    );
  return result;
}

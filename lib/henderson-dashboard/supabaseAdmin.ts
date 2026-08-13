import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getServerSupabaseEnv } from "./env";

let cachedClient: SupabaseClient | null = null;

export function getHendersonSupabaseAdmin() {
  if (cachedClient) return cachedClient;

  const env = getServerSupabaseEnv();
  if (!env.isServerConfigured) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }

  cachedClient = createClient(env.url, env.serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return cachedClient;
}

export function tryGetHendersonSupabaseAdmin() {
  try {
    return getHendersonSupabaseAdmin();
  } catch {
    return null;
  }
}

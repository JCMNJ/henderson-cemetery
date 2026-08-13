"use client";

import { createClient } from "@supabase/supabase-js";
import { getPublicSupabaseEnv } from "./env";

let browserClient: ReturnType<typeof createClient> | null = null;

export function getHendersonSupabaseBrowser() {
  const env = getPublicSupabaseEnv();
  if (!env.isConfigured) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  if (!browserClient) {
    browserClient = createClient(env.url, env.anonKey);
  }

  return browserClient;
}

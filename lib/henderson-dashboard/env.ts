export function getPublicSupabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";
  return { url, anonKey, isConfigured: Boolean(url && anonKey) };
}

export function getServerSupabaseEnv() {
  const publicEnv = getPublicSupabaseEnv();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ?? "";
  return {
    ...publicEnv,
    serviceRoleKey,
    isServerConfigured: Boolean(publicEnv.url && serviceRoleKey),
  };
}

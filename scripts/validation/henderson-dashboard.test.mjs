import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";

const statusSource = readFileSync("lib/henderson-dashboard/status.ts", "utf8");
const authSource = readFileSync("lib/henderson-dashboard/auth.ts", "utf8");
const typesSource = readFileSync("lib/henderson-dashboard/types.ts", "utf8");
const repoSource = readFileSync("lib/henderson-dashboard/repository.ts", "utf8");
const migration = readFileSync("supabase/migrations/202608131200_henderson_dashboard_foundation.sql", "utf8");
const homepage = readFileSync("app/page.tsx", "utf8");

test("active public filtering requires published status and date window", () => {
  assert.match(statusSource, /item\.status !== "published"/);
  assert.match(statusSource, /publishMs[^;]+> nowMs/);
  assert.match(statusSource, /expiresMs[^;]+<= nowMs/);
  assert.match(migration, /status = 'published'/);
  assert.match(migration, /publish_at is null or publish_at <= now\(\)/);
  assert.match(migration, /expires_at is null or expires_at > now\(\)/);
});

test("scheduled, expiration, and archive status behavior is explicit", () => {
  assert.match(statusSource, /return "expired"/);
  assert.match(statusSource, /return "scheduled"/);
  assert.match(statusSource, /input\.status === "archived"/);
  assert.match(migration, /'draft', 'scheduled', 'published', 'expired', 'archived'/);
});

test("duplicate reuse creates private draft from existing content", () => {
  assert.match(statusSource, /duplicateContentDraft/);
  assert.match(statusSource, /status: "draft"/);
  assert.match(statusSource, /publish_at: null/);
  assert.match(repoSource, /eventType: "duplicate"/);
});

test("role authorization includes Jay admin and Tamsen editor with publishing rights", () => {
  assert.match(typesSource, /jccarver03@gmail\.com/);
  assert.match(typesSource, /role: "admin"/);
  assert.match(typesSource, /TamsenErcole@gmail\.com/);
  assert.match(typesSource, /role: "editor"/);
  assert.match(repoSource, /requireDashboardSession\(\)/);
  const itemPage = readFileSync("app/dashboard/items/[id]/page.tsx", "utf8");
  assert.match(itemPage, /"publish", "published"/);
});

test("admin-only user management is guarded", () => {
  assert.match(authSource, /requireDashboardAdmin/);
  assert.match(repoSource, /listAuthorizedUsers/);
  assert.match(repoSource, /updateUserRole/);
  assert.match(migration, /henderson_is_dashboard_admin/);
});

test("homepage safely falls back when Supabase is not configured", () => {
  assert.match(homepage, /getActivePublicContent/);
  const publicContent = readFileSync("lib/henderson-dashboard/publicContent.ts", "utf8");
  assert.match(publicContent, /if \(!supabase\) return \[\]/);
  assert.match(publicContent, /if \(error \|\| !Array\.isArray\(data\)\) return \[\]/);
});

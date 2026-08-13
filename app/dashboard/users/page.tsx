import { DashboardShell } from "../components/DashboardShell";
import { listAuthorizedUsers, updateUserRole } from "@/lib/henderson-dashboard/repository";

export const dynamic = "force-dynamic";

export default async function DashboardUsersPage() {
  const { session, users } = await listAuthorizedUsers();

  return (
    <DashboardShell session={session} title="Authorized Users" description="Admin-only foundation for Henderson dashboard access.">
      <div className="space-y-3">
        {users.length ? users.map((user) => (
          <form key={user.user_id} action={updateUserRole} className="grid gap-3 rounded-sm bg-white p-4 shadow-lg shadow-[#243A2E]/8 ring-1 ring-[#D8D4C8] md:grid-cols-[1fr_auto_auto_auto] md:items-center">
            <input type="hidden" name="user_id" value={user.user_id} />
            <div>
              <p className="font-semibold">{user.email}</p>
              <p className="text-sm text-[#77746C]">{user.user_id}</p>
            </div>
            <select name="role" defaultValue={user.role} className="border border-[#D8D4C8] bg-white px-3 py-2">
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
            <label className="flex items-center gap-2 text-sm font-semibold">
              <input type="checkbox" name="is_active" defaultChecked={user.is_active} />
              Active
            </label>
            <button className="rounded-full bg-[#243A2E] px-4 py-2 text-sm font-semibold text-white">Save</button>
          </form>
        )) : (
          <p className="rounded-sm bg-white p-5 text-sm text-[#77746C] ring-1 ring-[#D8D4C8]">
            No dashboard users have completed login yet.
          </p>
        )}
      </div>
    </DashboardShell>
  );
}

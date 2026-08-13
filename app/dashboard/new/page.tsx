import { DashboardShell } from "../components/DashboardShell";
import { ContentForm } from "../components/ContentForm";
import { createContentItem } from "@/lib/henderson-dashboard/repository";
import { requireDashboardSession } from "@/lib/henderson-dashboard/auth";

export const dynamic = "force-dynamic";

export default async function NewDashboardItemPage() {
  const session = await requireDashboardSession();

  return (
    <DashboardShell session={session} title="New Content" description="Create a Henderson Cemetery announcement or event.">
      <ContentForm action={createContentItem} submitLabel="Create item" />
    </DashboardShell>
  );
}

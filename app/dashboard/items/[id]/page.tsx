import { notFound } from "next/navigation";
import { DashboardShell } from "../../components/DashboardShell";
import { ContentForm } from "../../components/ContentForm";
import {
  duplicateContentItem,
  getDashboardItem,
  transitionContentItem,
  updateContentItem,
} from "@/lib/henderson-dashboard/repository";
import { formatDashboardDateTime } from "@/lib/henderson-dashboard/time";

export const dynamic = "force-dynamic";

export default async function DashboardItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { session, item } = await getDashboardItem(id);
  if (!item) notFound();

  const updateAction = updateContentItem.bind(null, item.id);
  const publishAction = transitionContentItem.bind(null, item.id, "publish", "published");
  const unpublishAction = transitionContentItem.bind(null, item.id, "unpublish", "draft");
  const archiveAction = transitionContentItem.bind(null, item.id, "archive", "archived");
  const rescheduleAction = transitionContentItem.bind(null, item.id, "reschedule", "scheduled");
  const duplicateAction = duplicateContentItem.bind(null, item.id);

  return (
    <DashboardShell session={session} title={item.title} description="Edit, preview, publish, archive, duplicate, or reschedule this content item.">
      <div className="mb-5 grid gap-4 rounded-sm bg-white p-5 shadow-lg shadow-[#243A2E]/8 ring-1 ring-[#D8D4C8] md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77746C]">Status</p>
          <p className="mt-1 text-lg font-semibold capitalize">{item.status}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77746C]">Publish</p>
          <p className="mt-1 text-sm">{formatDashboardDateTime(item.publish_at)}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77746C]">Expires</p>
          <p className="mt-1 text-sm">{formatDashboardDateTime(item.expires_at)}</p>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-3">
        <form action={publishAction}><button className="rounded-full bg-[#243A2E] px-4 py-2 text-sm font-semibold text-white">Publish</button></form>
        <form action={unpublishAction}><button className="rounded-full border border-[#D8D4C8] bg-white px-4 py-2 text-sm font-semibold">Unpublish to draft</button></form>
        <form action={archiveAction}><button className="rounded-full border border-[#B08A3E] bg-white px-4 py-2 text-sm font-semibold">Archive</button></form>
        <form action={rescheduleAction}><button className="rounded-full border border-[#B08A3E] bg-white px-4 py-2 text-sm font-semibold">Reschedule</button></form>
        <form action={duplicateAction}><button className="rounded-full bg-[#702F35] px-4 py-2 text-sm font-semibold text-white">Duplicate / Reuse</button></form>
      </div>

      <section className="mb-5 rounded-sm bg-[#243A2E] p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7C16C]">Preview</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold">{item.title}</h2>
        {item.body ? <p className="mt-3 max-w-2xl text-sm leading-6 text-white/82">{item.body}</p> : null}
        {item.action_href && item.action_label ? (
          <a href={item.action_href} className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#243A2E]">
            {item.action_label}
          </a>
        ) : null}
      </section>

      <ContentForm item={item} action={updateAction} submitLabel="Save changes" />
    </DashboardShell>
  );
}

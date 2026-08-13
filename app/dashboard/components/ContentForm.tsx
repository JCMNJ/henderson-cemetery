import { toDashboardDateTimeLocal } from "@/lib/henderson-dashboard/time";
import type { HendersonContentItem } from "@/lib/henderson-dashboard/types";

export function ContentForm({
  item,
  action,
  submitLabel,
}: {
  item?: HendersonContentItem | null;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
}) {
  const contentType = item?.content_type ?? "announcement";

  return (
    <form action={action} className="grid gap-5 rounded-sm bg-white p-5 shadow-xl shadow-[#243A2E]/8 ring-1 ring-[#D8D4C8] sm:p-6">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="block">
          <span className="text-sm font-semibold">Type</span>
          <select name="content_type" defaultValue={contentType} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3">
            <option value="announcement">Announcement</option>
            <option value="event">Event</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Tone</span>
          <select name="tone" defaultValue={item?.tone ?? "standard"} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3">
            <option value="standard">Standard</option>
            <option value="urgent">Urgent</option>
            <option value="support">Support</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Status</span>
          <select name="status" defaultValue={item?.status ?? "draft"} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3">
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-semibold">Title</span>
        <input name="title" required defaultValue={item?.title ?? ""} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3 text-lg" />
      </label>

      <label className="block">
        <span className="text-sm font-semibold">Body</span>
        <textarea name="body" rows={5} defaultValue={item?.body ?? ""} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3" />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold">Publish date/time</span>
          <input type="datetime-local" name="publish_at" defaultValue={toDashboardDateTimeLocal(item?.publish_at)} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Expiration date/time</span>
          <input type="datetime-local" name="expires_at" defaultValue={toDashboardDateTimeLocal(item?.expires_at)} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="block">
          <span className="text-sm font-semibold">Event start</span>
          <input type="datetime-local" name="event_starts_at" defaultValue={toDashboardDateTimeLocal(item?.event_starts_at)} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Event end</span>
          <input type="datetime-local" name="event_ends_at" defaultValue={toDashboardDateTimeLocal(item?.event_ends_at)} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Location</span>
          <input name="event_location" defaultValue={item?.event_location ?? ""} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold">Action label</span>
          <input name="action_label" defaultValue={item?.action_label ?? ""} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Action URL</span>
          <input name="action_href" defaultValue={item?.action_href ?? ""} className="mt-2 w-full border border-[#D8D4C8] bg-white px-3 py-3" />
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white">
          {submitLabel}
        </button>
        <p className="self-center text-sm text-[#77746C]">Times are entered and displayed in America/New_York.</p>
      </div>
    </form>
  );
}

import Link from "next/link";
import { formatHistoricalDate } from "@/app/lib/formatHistoricalDate";
import type { BurialRecord } from "./types";

type BurialRecordCardProps = {
  record: BurialRecord;
};

const fields: Array<{ key: keyof BurialRecord; label: string }> = [
  { key: "surname", label: "Surname" },
  { key: "givenMiddle", label: "Given / Middle" },
  { key: "birth", label: "Birth" },
  { key: "death", label: "Death" },
  { key: "plan", label: "Plan" },
  { key: "plot", label: "Plot" },
];

export function BurialRecordCard({ record }: BurialRecordCardProps) {
  const fullName = `${record.givenMiddle} ${record.surname}`.trim();
  const noteExcerpt =
    record.comments.length > 200
      ? `${record.comments.slice(0, 200).trimEnd()}...`
      : record.comments;

  return (
    <article className="border-b border-[#D8D4C8] bg-white px-4 py-5 last:border-b-0">
      <Link
        href={`/burial-records/${record.slug}`}
        className="link-soft font-serif text-2xl font-semibold text-[#243A2E] underline decoration-[#B08A3E] decoration-2 underline-offset-4 hover:text-[#702F35]"
      >
        {fullName || "Unnamed Record"}
      </Link>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        {fields.map((field) => (
          <div key={field.key}>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77746C]">
              {field.label}
            </dt>
            <dd className="mt-1 text-sm text-[#243A2E]">
              {field.key === "birth" || field.key === "death"
                ? formatHistoricalDate(record[field.key]) || "—"
                : record[field.key] || "—"}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 border-t border-[#D8D4C8] pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77746C]">
          Notes
        </p>
        <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-[#514B42]">
          {noteExcerpt || "—"}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 border-t border-[#D8D4C8] pt-4 text-sm">
        <Link
          href={`/burial-records/${record.slug}`}
          className="link-soft font-semibold text-[#243A2E] underline decoration-[#B08A3E] underline-offset-4 hover:text-[#702F35]"
        >
          View full record
        </Link>
        {record.image ? (
          <a
            href={record.image}
            target="_blank"
            rel="noreferrer"
            className="link-soft font-semibold text-[#243A2E] underline decoration-[#B08A3E] underline-offset-4 hover:text-[#702F35]"
          >
            View stone photo
          </a>
        ) : null}
      </div>
    </article>
  );
}

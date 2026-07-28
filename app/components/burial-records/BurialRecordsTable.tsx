import Link from "next/link";
import { formatHistoricalDate } from "@/app/lib/formatHistoricalDate";
import type { BurialRecord } from "./types";

type BurialRecordsTableProps = {
  records: BurialRecord[];
  sortKey: "name" | "birth" | "death" | "plan" | "plot" | "photo";
  sortDirection: "asc" | "desc";
  onSort: (key: "name" | "birth" | "death" | "plan" | "plot" | "photo") => void;
};

export function BurialRecordsTable({
  records,
  sortKey,
  sortDirection,
  onSort,
}: BurialRecordsTableProps) {
  const sortIndicator = (key: BurialRecordsTableProps["sortKey"]) =>
    sortKey === key ? (sortDirection === "asc" ? "↑" : "↓") : "";

  return (
    <div className="min-w-[980px]">
      <div className="sticky top-0 z-10 grid grid-cols-[1.05fr_1.05fr_0.85fr_0.85fr_0.5fr_0.6fr_1.7fr_0.7fr] border-b border-[#D8D4C8] bg-[#F7F6F1] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#77746C]">
        <button
          type="button"
          onClick={() => onSort("name")}
          className="link-soft text-left"
        >
          Name {sortIndicator("name")}
        </button>
        <span>Given / Middle</span>
        <button
          type="button"
          onClick={() => onSort("birth")}
          className="link-soft text-left"
        >
          Birth {sortIndicator("birth")}
        </button>
        <button
          type="button"
          onClick={() => onSort("death")}
          className="link-soft text-left"
        >
          Death {sortIndicator("death")}
        </button>
        <button
          type="button"
          onClick={() => onSort("plan")}
          className="link-soft text-left"
        >
          Plan {sortIndicator("plan")}
        </button>
        <button
          type="button"
          onClick={() => onSort("plot")}
          className="link-soft text-left"
        >
          Plot {sortIndicator("plot")}
        </button>
        <span>Notes</span>
        <button
          type="button"
          onClick={() => onSort("photo")}
          className="link-soft text-left"
        >
          Stone Photo {sortIndicator("photo")}
        </button>
      </div>

      <div>
        {records.map((record) => (
          <div
            key={record.slug}
            className="grid grid-cols-[1.05fr_1.05fr_0.85fr_0.85fr_0.5fr_0.6fr_1.7fr_0.7fr] gap-3 border-b border-[#D8D4C8] px-5 py-4 text-sm text-[#243A2E] last:border-b-0"
          >
            <span>{record.surname || "—"}</span>
            <span>
              <Link
                href={`/burial-records/${record.slug}`}
                className="link-soft font-medium underline decoration-[#B08A3E] underline-offset-4 hover:text-[#702F35]"
              >
                {record.givenMiddle || "—"}
              </Link>
            </span>
            <span>{formatHistoricalDate(record.birth) || "—"}</span>
            <span>{formatHistoricalDate(record.death) || "—"}</span>
            <span>{record.plan || "—"}</span>
            <span>{record.plot || "—"}</span>
            <span className="whitespace-pre-wrap leading-6 text-[#514B42]">{record.comments || "—"}</span>
            <span>
              {record.image ? (
                <a
                  href={record.image}
                  target="_blank"
                  rel="noreferrer"
                  className="link-soft text-xs font-semibold text-[#243A2E] underline decoration-[#B08A3E] underline-offset-4 hover:text-[#702F35]"
                >
                  View
                </a>
              ) : (
                "—"
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

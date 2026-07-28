import Image from "next/image";
import type { HistoricalItem } from "@/app/data/historical-exploration";
import { HistoricalLinks } from "@/app/components/history/HistoricalLinks";

const confidenceLabel: Record<HistoricalItem["confidence"], string> = {
  verified: "Independently verified",
  "association-records": "Association records",
  "local-records": "Local cemetery records",
  researching: "Still being researched",
};

type HistoricalFactCardProps = {
  item: HistoricalItem;
  compact?: boolean;
};

export function HistoricalFactCard({ item, compact = false }: HistoricalFactCardProps) {
  return (
    <article
      id={item.id}
      className="card-soft scroll-mt-28 overflow-hidden rounded-2xl border border-stone-300 bg-stone-50/90"
    >
      {item.image && !compact ? (
        <div className="relative h-44 w-full">
          <Image src={item.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      ) : null}
      <div className={compact ? "p-4 sm:p-5" : "p-5 sm:p-6"}>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            {item.period}
          </p>
          <span className="rounded-full border border-stone-200 bg-stone-100 px-2.5 py-1 text-[11px] font-medium text-stone-600">
            {confidenceLabel[item.confidence]}
          </span>
        </div>
        <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-950">
          {item.title}
        </h2>
        <p className="mt-3 text-base leading-7 text-stone-800">{item.summary}</p>
        {!compact ? (
          <p className="mt-2 text-sm leading-6 text-stone-600">{item.context}</p>
        ) : null}
        <HistoricalLinks links={compact ? item.links.slice(0, 2) : item.links} />
      </div>
    </article>
  );
}

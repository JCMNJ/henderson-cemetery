import Link from "next/link";
import { notFound } from "next/navigation";
import type { BurialRecord } from "@/app/components/burial-records/types";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import burialRecords from "@/app/data/burial-records.json";
import { formatHistoricalDate } from "@/app/lib/formatHistoricalDate";
import type { Metadata } from "next";

type BurialRecordPageProps = {
  params: Promise<{ slug: string }>;
};

const records = burialRecords as BurialRecord[];

export function generateStaticParams() {
  return records.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({
  params,
}: BurialRecordPageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = records.find((item) => item.slug === slug);

  if (!record) {
    return {
      title: "Burial Record",
      description: "Burial record details from the Henderson Cemetery archive.",
    };
  }

  const fullName = `${record.givenMiddle} ${record.surname}`.trim();
  const dateText = [formatHistoricalDate(record.birth), formatHistoricalDate(record.death)]
    .filter(Boolean)
    .join(" - ");
  const plotText = [record.plan, record.plot].filter(Boolean).join(" / ");
  const summaryParts = [
    fullName || "Unnamed record",
    dateText || "",
    plotText ? `Plan/Plot: ${plotText}` : "",
  ].filter(Boolean);
  const summary = summaryParts.join(" · ");

  return {
    title: `${fullName || "Burial Record"}`,
    description: `${summary}. Henderson Cemetery archival burial record in Harmarville (Acmetonia), Pennsylvania.`,
    openGraph: {
      title: `${fullName || "Burial Record"} | Henderson Cemetery Archive`,
      description: `${summary}.`,
      url: `/burial-records/${record.slug}`,
      type: "article",
    },
    twitter: {
      title: `${fullName || "Burial Record"} | Henderson Cemetery Archive`,
      description: `${summary}.`,
    },
  };
}

export default async function BurialRecordDetailPage({ params }: BurialRecordPageProps) {
  const { slug } = await params;
  const record = records.find((item) => item.slug === slug);

  if (!record) {
    notFound();
  }

  const fullName = `${record.givenMiddle} ${record.surname}`.trim();
  const birth = formatHistoricalDate(record.birth);
  const death = formatHistoricalDate(record.death);
  const fieldValue = (value: string) => value.trim() || "Not recorded";

  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <Link
          href="/burial-records"
          className="link-soft text-xs uppercase tracking-[0.18em] text-stone-600 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
        >
          Back to Burial Records
        </Link>

        <h1 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {fullName || "Unnamed Record"}
        </h1>

        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-stone-500">
          Henderson Cemetery Archive Record
        </p>

        <div className="mt-7 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:mt-8 sm:p-8">
          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Surname</dt>
              <dd className="mt-1 text-base text-stone-800">{fieldValue(record.surname)}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Given / Middle</dt>
              <dd className="mt-1 text-base text-stone-800">{fieldValue(record.givenMiddle)}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Birth</dt>
              <dd className="mt-1 text-base text-stone-800">{birth || "Not recorded"}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Death</dt>
              <dd className="mt-1 text-base text-stone-800">{death || "Not recorded"}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Plan</dt>
              <dd className="mt-1 text-base text-stone-800">{fieldValue(record.plan)}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Plot</dt>
              <dd className="mt-1 text-base text-stone-800">{fieldValue(record.plot)}</dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-stone-200 pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Notes</p>
            <p className="mt-2 max-w-3xl whitespace-pre-wrap text-base leading-7 text-stone-700">
              {fieldValue(record.comments)}
            </p>
          </div>

          {record.image ? (
            <div className="mt-6 border-t border-stone-200 pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                Stone Photo
              </p>
              <a
                href={record.image}
                target="_blank"
                rel="noreferrer"
                className="image-soft mt-3 block overflow-hidden rounded-2xl border border-stone-300 bg-stone-100"
              >
                <img
                  src={record.image}
                  alt={`Tombstone for ${fullName || "archival record"}`}
                  className="h-[220px] w-full object-cover sm:h-[320px]"
                />
              </a>
            </div>
          ) : null}

          <p className="mt-6 border-t border-stone-200 pt-6 text-sm leading-6 text-stone-600">
            Records are presented as documented. Some abbreviations and
            historical notes may reflect the original cemetery records.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

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
      description: "Burial record details from Henderson Cemetery.",
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
    description: `${summary}. Henderson Cemetery archival burial record in Harmarville, Pennsylvania.`,
    openGraph: {
      title: `${fullName || "Burial Record"} | Henderson Cemetery`,
      description: `${summary}.`,
      url: `/burial-records/${record.slug}`,
      type: "article",
    },
    twitter: {
      title: `${fullName || "Burial Record"} | Henderson Cemetery`,
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
  const dateText = [birth, death].filter(Boolean).join(" - ");
  const locationItems = [
    record.plan.trim() ? { label: "Plan", value: record.plan.trim() } : null,
    record.plot.trim() ? { label: "Lot / Plot", value: record.plot.trim() } : null,
  ].filter((item): item is { label: string; value: string } => Boolean(item));
  const nameParts = [
    record.surname.trim() ? { label: "Surname", value: record.surname.trim() } : null,
    record.givenMiddle.trim()
      ? { label: "Given / Middle", value: record.givenMiddle.trim() }
      : null,
  ].filter((item): item is { label: string; value: string } => Boolean(item));
  const dateItems = [
    birth ? { label: "Birth", value: birth } : null,
    death ? { label: "Death", value: death } : null,
  ].filter((item): item is { label: string; value: string } => Boolean(item));

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-[86rem] px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
        <Link
          href="/burial-records"
          className="link-soft text-xs font-semibold uppercase tracking-[0.18em] text-[#77746C] underline decoration-[#B08A3E] underline-offset-4 hover:text-[#243A2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
        >
          Back to Burial Records
        </Link>

        <div className="mt-6 border-l-4 border-[#B08A3E] bg-white px-5 py-6 shadow-xl shadow-[#243A2E]/8 sm:px-7 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B08A3E]">
            Henderson Cemetery Record
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-7xl">
            {fullName || "Unnamed Record"}
          </h1>
          {dateText ? (
            <p className="mt-4 font-serif text-3xl font-semibold text-[#702F35]">
              {dateText}
            </p>
          ) : null}
          {locationItems.length ? (
            <dl className="mt-6 flex flex-wrap gap-3">
              {locationItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-full bg-[#F7F6F1] px-4 py-2 ring-1 ring-[#D8D4C8]"
                >
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="text-sm font-semibold text-[#243A2E]">
                    {item.label}: {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            {nameParts.length || dateItems.length ? (
              <section className="bg-white p-5 shadow-lg shadow-[#243A2E]/6 ring-1 ring-[#D8D4C8] sm:p-6">
                <h2 className="font-serif text-3xl font-semibold text-[#243A2E]">
                  Record Information
                </h2>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[...nameParts, ...dateItems].map((item) => (
                    <div key={item.label}>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#77746C]">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-base text-[#243A2E]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            {locationItems.length ? (
              <section className="bg-white p-5 shadow-lg shadow-[#243A2E]/6 ring-1 ring-[#D8D4C8] sm:p-6">
                <h2 className="font-serif text-3xl font-semibold text-[#243A2E]">
                  Burial Location
                </h2>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  {locationItems.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#77746C]">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-base text-[#243A2E]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/plot-maps"
                  className="mt-5 inline-flex rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                >
                  View Cemetery Plans
                </Link>
              </section>
            ) : null}

            {record.comments.trim() ? (
              <section className="bg-white p-5 shadow-lg shadow-[#243A2E]/6 ring-1 ring-[#D8D4C8] sm:p-6">
                <h2 className="font-serif text-3xl font-semibold text-[#243A2E]">
                  Record Notes
                </h2>
                <p className="mt-4 max-w-3xl whitespace-pre-wrap text-base leading-7 text-[#514B42]">
                  {record.comments.trim()}
                </p>
              </section>
            ) : null}
          </div>

          <aside className="space-y-6">
            {record.image ? (
              <section className="bg-white p-4 shadow-lg shadow-[#243A2E]/6 ring-1 ring-[#D8D4C8]">
                <h2 className="px-1 font-serif text-3xl font-semibold text-[#243A2E]">
                  Stone Photograph
                </h2>
                <a
                  href={record.image}
                  target="_blank"
                  rel="noreferrer"
                  className="image-soft mt-4 block overflow-hidden bg-[#F7F6F1]"
                >
                  <img
                    src={record.image}
                    alt={`Tombstone for ${fullName || "burial record"}`}
                    className="h-[260px] w-full object-cover sm:h-[360px]"
                  />
                </a>
              </section>
            ) : null}

            <section className="bg-[#702F35] p-5 text-white shadow-xl shadow-[#702F35]/15 sm:p-6">
              <h2 className="font-serif text-3xl font-semibold">Corrections</h2>
              <p className="mt-3 text-sm leading-6 text-white/86">
                Surviving records may contain gaps or transcription issues.
              </p>
              <Link
                href="/contact#association-contact"
                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#702F35] hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                Share a Correction
              </Link>
            </section>

            <section className="bg-white p-5 shadow-lg shadow-[#243A2E]/6 ring-1 ring-[#D8D4C8] sm:p-6">
              <h2 className="font-serif text-3xl font-semibold text-[#243A2E]">
                Related Actions
              </h2>
              <div className="mt-5 flex flex-col gap-3">
                {record.surname.trim() ? (
                  <Link
                    href={`/burial-records?q=${encodeURIComponent(record.surname.trim())}`}
                    className="rounded-full border border-[#B08A3E] bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                  >
                    Search Related Surname
                  </Link>
                ) : null}
                <Link
                  href="/burial-records"
                  className="rounded-full border border-[#D8D4C8] bg-[#F7F6F1] px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                >
                  Search Burial Records
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

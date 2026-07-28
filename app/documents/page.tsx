import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Documents",
  description:
    "Explore Henderson Cemetery association minutes, cemetery plans, and surviving historical documents.",
  openGraph: {
    title: "Henderson Cemetery Documents",
    description:
      "Read the records that shaped Henderson Cemetery.",
    url: "/documents",
  },
  twitter: {
    title: "Henderson Cemetery Documents",
    description:
      "Read the records that shaped Henderson Cemetery.",
  },
};

const documentCollections = [
  {
    title: "Association Formation and Early Minutes",
    period: "1909",
    summary:
      "Early records document transfer of control, by-laws, founding contributions, and the charter application.",
    href: "/documents/association-formation",
    transcriptionLabel: "View Transcription",
    relatedHref: "/history#association-formation",
    relatedLabel: "View the 1909 Timeline",
  },
  {
    title: "Cemetery Plans and Surveys",
    period: "1884-1911",
    summary:
      "Plan-era notes connect surveyed lots, Plan I, Plan II, and cemetery expansion.",
    relatedHref: "/history#plan-one-survey",
    relatedLabel: "Explore Cemetery History",
    extraHref: "/burial-records?plan=1",
    extraLabel: "Search Plan I Burials",
  },
  {
    title: "Burial and Stone Records",
    period: "2012",
    summary:
      "Roster and stone-inventory work connects names, photographs, and plot references.",
    relatedHref: "/burial-records",
    relatedLabel: "Search Burial Records",
  },
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-18">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Henderson Cemetery Records
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-7xl">
              Read the Records That Shaped Henderson
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#514B42]">
              Explore association minutes, cemetery plans, and surviving
              historical documents.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#documents" className="rounded-full bg-[#243A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]">
                Explore the Documents
              </a>
              <Link href="/history" className="rounded-full bg-[#702F35] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5D252B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]">
                View the History
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[460px]">
            <Image
              src="/gallery/cemetery-wintersnow-flagsflowers.jpg"
              alt="Flags and flowers beside Henderson Cemetery markers"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="documents" className="scroll-mt-28 bg-[#F7F6F1]">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-18">
          <div className="relative min-h-[360px] overflow-hidden bg-[#243A2E]">
            <Image
              src="/gallery/cemetery-summer-view03-obelisk-headstones.jpg"
              alt="Henderson Cemetery monument and headstones"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="divide-y divide-[#D8D4C8] bg-white shadow-2xl shadow-[#243A2E]/10">
            {documentCollections.map((item) => (
              <details key={item.title} className="group p-5 sm:p-6">
                <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-4">
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#B08A3E]">
                      {item.period}
                    </span>
                    <span className="mt-2 block font-serif text-3xl font-semibold text-[#243A2E]">
                      {item.title}
                    </span>
                  </span>
                  <span className="text-3xl text-[#702F35]" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#514B42]">
                  {item.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {item.href ? (
                    <Link href={item.href} className="rounded-full bg-[#243A2E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1A2C22]">
                      {item.transcriptionLabel}
                    </Link>
                  ) : null}
                  <Link href={item.relatedHref} className="rounded-full border border-[#B08A3E] bg-white px-4 py-2 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1]">
                    {item.relatedLabel}
                  </Link>
                  {item.extraHref ? (
                    <Link href={item.extraHref} className="rounded-full bg-[#702F35] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5D252B]">
                      {item.extraLabel}
                    </Link>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#243A2E] text-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-18">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C16C]">
              Help Preserve the Record
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Family documents, photographs, obituaries, and corrections can help complete Henderson&apos;s story.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#association-contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1]">
              Share Historical Material
            </Link>
            <Link href="/contact#association-contact" className="rounded-full border border-white/55 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Submit a Correction
            </Link>
            <Link href="/contact#association-contact" className="rounded-full bg-[#702F35] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5D252B]">
              Contact the Association
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

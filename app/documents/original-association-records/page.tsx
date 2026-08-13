import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

const pdfHref = "/documents/harmarville-cemetery-association-original-records.pdf";

export const metadata: Metadata = {
  title: "Original Harmarville Cemetery Association Records",
  description:
    "View the supplied original Harmarville Cemetery Association records scan.",
  openGraph: {
    title: "Original Harmarville Cemetery Association Records",
    description:
      "An 11-page scan of the supplied original Association records.",
    url: "/documents/original-association-records",
  },
  twitter: {
    title: "Original Harmarville Cemetery Association Records",
    description:
      "An 11-page scan of the supplied original Association records.",
  },
};

export default function OriginalAssociationRecordsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-[86rem] px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
        <Link
          href="/documents"
          className="link-soft text-xs font-semibold uppercase tracking-[0.18em] text-[#77746C] underline decoration-[#B08A3E] underline-offset-4 hover:text-[#243A2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
        >
          Back to Documents
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Henderson Cemetery Records
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-7xl">
              Original Harmarville Cemetery Association Records
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#514B42]">
              An 11-page scan of the supplied original Association records.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={pdfHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                View Document
              </a>
              <a
                href={pdfHref}
                download
                className="rounded-full bg-[#702F35] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5D252B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                Download PDF
              </a>
              <Link
                href="/documents/association-formation"
                className="rounded-full border border-[#B08A3E] bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                Read Existing Transcription
              </Link>
            </div>
          </div>

          <div className="overflow-hidden bg-white shadow-xl shadow-[#243A2E]/10 ring-1 ring-[#D8D4C8]">
            <object
              data={pdfHref}
              type="application/pdf"
              className="h-[70vh] min-h-[520px] w-full"
            >
              <div className="p-6">
                <p className="text-sm leading-6 text-[#514B42]">
                  This browser cannot display the PDF inline.
                </p>
                <a
                  href={pdfHref}
                  className="mt-4 inline-flex rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22]"
                >
                  Open PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

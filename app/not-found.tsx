import Link from "next/link";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-5xl px-5 py-16 text-center sm:px-6 lg:px-10 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
          Henderson Cemetery
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-[#243A2E] sm:text-7xl">
          This Record Could Not Be Found
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#514B42]">
          The page may have moved, or the record may need another spelling.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/burial-records"
            className="rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
          >
            Search Burial Records
          </Link>
          <Link
            href="/research"
            className="rounded-full border border-[#B08A3E] bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
          >
            Visit the Research Center
          </Link>
          <Link
            href="/contact#association-contact"
            className="rounded-full bg-[#702F35] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5D252B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
          >
            Contact the Association
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

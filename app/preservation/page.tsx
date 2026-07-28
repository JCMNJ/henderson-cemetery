import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { DROPBOX_FILE_REQUEST_URL, SUBMISSION_NOTICE } from "@/app/lib/siteLinks";

export const metadata: Metadata = {
  title: "Preservation",
  description:
    "Volunteer, share records, and support Henderson Cemetery preservation in Harmarville, Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Preservation",
    description:
      "Learn how volunteers and supporters can help care for Henderson Cemetery.",
    url: "/preservation",
  },
  twitter: {
    title: "Henderson Cemetery Preservation",
    description:
      "Learn how volunteers and supporters can help care for Henderson Cemetery.",
  },
};

export default function PreservationPage() {
  const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL?.trim();

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-18">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              The Next Chapter Depends on Us
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-7xl">
              Preservation Begins With People Who Choose to Care
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#514B42]">
              You do not need a family connection to become part of Henderson
              Cemetery&apos;s future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#association-contact" className="rounded-full bg-[#243A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22]">
                Give Your Time
              </Link>
              <a href="#donation-support" className="rounded-full bg-[#702F35] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5D252B]">
                Support Preservation
              </a>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src="/gallery/cemetery-summer-view05-headstones-flag.jpg"
              alt="Headstones on a sunny Henderson Cemetery lawn with a flag"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F1]">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-18">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Why Support Matters
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#243A2E] sm:text-5xl">
              A cemetery survives through ordinary, repeated acts of care.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Grounds require continued care.",
              "Markers weather and deteriorate.",
              "Burial information remains incomplete.",
              "Documents and photographs need preservation.",
              "Local stories can disappear.",
              "Long-term stewardship needs a new generation.",
            ].map((item) => (
              <p key={item} className="border-l-4 border-[#B08A3E] bg-white p-4 text-sm font-semibold leading-6 text-[#514B42] shadow-md shadow-[#243A2E]/6">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="current-needs" className="scroll-mt-28 bg-[#243A2E] text-white">
        <div className="mx-auto w-full max-w-[86rem] px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C16C]">
              Ways to Help
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Choose the work you can carry.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <Link href="/contact#association-contact" className="min-h-80 bg-[#1A2C22] p-7 shadow-xl shadow-black/15 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C16C]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C16C]">Join a Work Day</p>
              <h3 className="mt-4 font-serif text-4xl font-semibold">Grounds care, cleanup, documentation, and seasonal projects.</h3>
            </Link>
            {[
              ["Help Document the Cemetery", "Marker photographs, inscriptions, condition notes, and record corrections."],
              ["Contribute a Skill", "Research, landscaping, preservation, photography, mapping, design, technology, or outreach."],
            ].map(([title, body]) => (
              <Link key={title} href="/contact#association-contact" className="bg-white p-6 text-[#243A2E] shadow-lg shadow-black/10 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C16C]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B08A3E]">{title}</p>
                <p className="mt-4 text-sm leading-6 text-[#514B42]">{body}</p>
              </Link>
            ))}
            <div className="bg-white p-6 text-[#243A2E] shadow-lg shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B08A3E]">
                Help Preserve the Record
              </p>
              <p className="mt-4 text-sm leading-6 text-[#514B42]">
                Family photographs, obituaries, documents, and other historical
                materials can help complete Henderson&apos;s story.
              </p>
              <p className="mt-4 text-xs leading-5 text-[#77746C]">
                {SUBMISSION_NOTICE}
              </p>
              <a
                href={DROPBOX_FILE_REQUEST_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share historical materials for Henderson Cemetery through Dropbox"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C16C]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 16V4" />
                  <path d="m7 9 5-5 5 5" />
                  <path d="M5 20h14" />
                </svg>
                Share Historical Materials
              </a>
            </div>
            <div id="donation-support" className="scroll-mt-28 bg-[#702F35] p-7 text-white shadow-xl shadow-black/15 lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2D68B]">Support Financially</p>
              <h3 className="mt-4 font-serif text-4xl font-semibold">Donations support maintenance, stone care, record preservation, materials, and future projects.</h3>
              <p className="mt-5 text-sm leading-6 text-white/86">
                The Association has 501(c)(3) nonprofit status. Donations are
                tax-deductible to the extent permitted by law.
              </p>
              <address className="mt-5 not-italic text-sm leading-7 text-white/90">
                Harmarville Cemetery Association<br />
                c/o David Campbell<br />
                505 Bicker Road<br />
                Cabot, PA 16023
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                {donationUrl ? (
                  <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#702F35] hover:bg-[#F7F6F1]">
                    Donate Online
                  </a>
                ) : null}
                <Link href="/contact#association-contact" className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Contact About Giving
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-22">
          <Image src="/gallery/cemetery-summer-view10-wide-lawn-monuments.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative mx-auto w-full max-w-[86rem] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="max-w-3xl bg-white/92 p-6 shadow-2xl shadow-[#243A2E]/12 sm:p-8">
            <h2 className="font-serif text-4xl font-semibold text-[#243A2E] sm:text-5xl">
              The cemetery has endured because each generation found someone willing to care.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#514B42]">
              The next generation can begin here.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact#association-contact" className="rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22]">Volunteer</Link>
              <Link href="/contact#association-contact" className="rounded-full border border-[#B08A3E] bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1]">Share Historical Material</Link>
              <a href="#donation-support" className="rounded-full bg-[#702F35] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5D252B]">Donate</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

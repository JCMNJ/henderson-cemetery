import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/app/components/contact/ContactForm";
import { FacebookFollow } from "@/app/components/site/FacebookFollow";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { DROPBOX_FILE_REQUEST_URL, SUBMISSION_NOTICE } from "@/app/lib/siteLinks";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=750%20Gulf%20Lab%20Road%2C%20Cheswick%2C%20PA%2015024";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Harmarville Cemetery Association about cemetery questions, burial records, family history, volunteering, and preservation support.",
  openGraph: {
    title: "Henderson Cemetery Contact",
    description:
      "Contact Henderson Cemetery about records, family materials, volunteering, directions, and preservation support.",
    url: "/contact",
  },
  twitter: {
    title: "Henderson Cemetery Contact",
    description:
      "Contact Henderson Cemetery about records, family materials, volunteering, directions, and preservation support.",
  },
};

export default function ContactPage() {
  const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL?.trim();

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-18">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Connect With Henderson
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-7xl">
              Questions, Records, Stories, and Offers to Help Are Welcome
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#514B42]">
              Whether you are researching a family member, sharing historical
              material, volunteering, or supporting preservation, the
              association would like to hear from you.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[460px]">
            <Image
              src="/gallery/tamsen-review-2026-08-05.jpg"
              alt="Large tree and cemetery markers at Henderson Cemetery"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_58%]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[86rem] px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          <Link href="#association-contact" className="min-h-72 bg-[#243A2E] p-7 text-white shadow-xl shadow-[#243A2E]/16 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C16C]">
              Volunteer or Join a Work Day
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Tell us how you would like to help.
            </h2>
            <p className="mt-5 text-sm leading-6 text-white/84">
              Include your availability, interests, skills, or resources you may
              wish to contribute.
            </p>
          </Link>
          {[
            ["Burial or Cemetery Question", "Ask about a record, burial, plan, lot, or cemetery visit."],
            ["Share a Correction", "Help improve names, dates, relationships, or notes."],
          ].map(([title, body]) => (
            <Link key={title} href="#association-contact" className="bg-white p-6 shadow-lg shadow-[#243A2E]/8 ring-1 ring-[#D8D4C8] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B08A3E]">{title}</p>
              <p className="mt-4 text-sm leading-6 text-[#514B42]">{body}</p>
            </Link>
          ))}
          <div className="bg-white p-6 shadow-lg shadow-[#243A2E]/8 ring-1 ring-[#D8D4C8]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B08A3E]">
              Contribute Records or Photographs
            </p>
            <p className="mt-4 text-sm leading-6 text-[#514B42]">
              Send family materials, obituaries, photographs, or local history.
            </p>
            <p className="mt-4 text-xs leading-5 text-[#77746C]">
              {SUBMISSION_NOTICE}
            </p>
            <a
              href={DROPBOX_FILE_REQUEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upload photos or records for Henderson Cemetery through Dropbox"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 16V4" />
                <path d="m7 9 5-5 5 5" />
                <path d="M5 20h14" />
              </svg>
              Upload Photos or Records
            </a>
          </div>
          <div className="bg-[#702F35] p-6 text-white shadow-xl shadow-[#702F35]/18 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F2D68B]">
              Support Preservation
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Donations help maintain grounds, records, and materials.
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {donationUrl ? (
                <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#702F35] hover:bg-[#F7F6F1]">
                  Donate Online
                </a>
              ) : null}
              <a href="#mailing-address" className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Mailing Address
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="association-contact" className="scroll-mt-28 bg-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-18">
          <ContactForm />

          <div className="space-y-5">
            <div className="bg-[#F7F6F1] p-6 shadow-lg shadow-[#243A2E]/8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">
                Physical Location
              </p>
              <address className="mt-4 not-italic text-base leading-7 text-[#514B42]">
                Henderson Cemetery<br />
                750 Gulf Lab Road<br />
                Cheswick, PA 15024<br />
                Located in Harmar Township
              </address>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22]">
                Get Directions
              </a>
            </div>

            <div id="mailing-address" className="scroll-mt-28 bg-white p-6 shadow-lg shadow-[#243A2E]/8 ring-1 ring-[#D8D4C8]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">
                Association Mailing Address
              </p>
              <address className="mt-4 not-italic text-base leading-7 text-[#514B42]">
                Harmarville Cemetery Association<br />
                c/o David Campbell<br />
                505 Bicker Road<br />
                Cabot, PA 16023
              </address>
            </div>

            <div className="bg-white">
              <FacebookFollow />
            </div>

            <div className="bg-[#F7F6F1] p-6 shadow-lg shadow-[#243A2E]/8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">
                Verified Email
              </p>
              <a
                className="mt-4 inline-flex text-base font-semibold text-[#243A2E] underline decoration-[#B08A3E] decoration-2 underline-offset-4 hover:text-[#702F35]"
                href="mailto:TamsenErcole@gmail.com"
              >
                TamsenErcole@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

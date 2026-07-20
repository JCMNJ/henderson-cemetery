import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/app/components/site/PageHeader";
import { PageHeroImage } from "@/app/components/site/PageHeroImage";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { ContactForm } from "@/app/components/contact/ContactForm";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=40.54480%2C-79.82320";
const facebookUrl = "https://www.facebook.com/profile.php?id=100057152182753";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact and donation information for the Harmarville Cemetery Association and Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Contact",
    description:
      "View contact, donation, directions, and association context for Henderson Cemetery preservation inquiries.",
    url: "/contact",
  },
  twitter: {
    title: "Henderson Cemetery Contact",
    description:
      "View contact, donation, directions, and association context for Henderson Cemetery preservation inquiries.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <PageHeader
          eyebrow="Correspondence"
          title="Contact"
          description="Contact Henderson Cemetery Preserving Our History for burial record questions, family history notes, cemetery information, and preservation support."
        />

        <PageHeroImage
          src="/images/hendersoncemeterycontactheader.png"
          alt="Henderson Cemetery contact header"
          figureClassName="mt-7 bg-stone-100 sm:mt-8"
          frameClassName="relative aspect-[1983/793] w-full"
          imageClassName="object-contain mix-blend-multiply"
        />

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.85fr)] lg:items-start">
          <ContactForm />

          <div className="grid gap-5">
            <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Visit Henderson Cemetery
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-950">
                750 Gulf Lab Road
              </h2>
              <p className="mt-2 text-base leading-7 text-stone-700">
                Harmarville (Acmetonia), Pennsylvania
              </p>
              <p className="mt-4 text-sm leading-6 text-stone-600">
                Historical records list GPS coordinates as latitude 40.54480 and
                longitude -79.82320.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-soft inline-flex rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-100 hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                >
                  Get Directions
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-soft inline-flex rounded-full border border-stone-400 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                >
                  Facebook
                </a>
              </div>
            </article>

            <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Association Contact
              </p>
              <p className="mt-3 text-base leading-7 text-stone-700">
                Historical records identify the Harmarville Cemetery Association
                as the managing body for Henderson Cemetery.
              </p>
              <p className="mt-4 text-base leading-7 text-stone-700">
                Email:{" "}
                <a
                  className="underline decoration-stone-400 underline-offset-4 hover:text-stone-950"
                  href="mailto:TamsenErcole@gmail.com"
                >
                  TamsenErcole@gmail.com
                </a>
              </p>
            </article>

            <article className="rounded-3xl border border-stone-300 bg-stone-100/80 p-5 sm:p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Archive Resources
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                For cemetery records, plot maps, documents, photographs, and
                outside genealogy links, start with the Research Center.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/research"
                  className="button-soft rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-stone-700"
                >
                  Research Center
                </Link>
                <Link
                  href="/burial-records"
                  className="button-soft rounded-full border border-stone-400 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-200"
                >
                  Burial Records
                </Link>
                <Link
                  href="/documents"
                  className="button-soft rounded-full border border-stone-400 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-200"
                >
                  Documents
                </Link>
              </div>
            </article>

            <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Preservation Support
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-950">
                Volunteer care keeps the cemetery record intact.
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Donations help support mowing, stone care, record preservation,
                and ongoing maintenance of Henderson Cemetery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

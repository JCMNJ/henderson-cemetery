import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { DonateButton } from "@/app/components/site/DonateButton";
import { FacebookFollow } from "@/app/components/site/FacebookFollow";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { getGalleryImages } from "@/lib/gallery";

type HomepageAnnouncement = {
  id: string;
  title: string;
  date?: string;
  actionLabel?: string;
  actionHref?: string;
  tone?: "standard" | "urgent" | "support";
};

const publishedAnnouncements: HomepageAnnouncement[] = [];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Search Henderson Cemetery burial records, help preserve the grounds, and explore cemetery history in Harmarville, Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Preserving Our History",
    description:
      "Search burial records, support preservation, and explore Henderson Cemetery history in Harmarville, Pennsylvania.",
    url: "https://www.hendersoncemetery.com",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Henderson Cemetery monogram and preserving our history text over a cemetery photograph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henderson Cemetery Preserving Our History",
    description:
      "Search burial records, support preservation, and explore Henderson Cemetery history in Harmarville, Pennsylvania.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Henderson Cemetery monogram and preserving our history text over a cemetery photograph",
      },
    ],
  },
};

export default async function HomePage() {
  const galleryImages = await getGalleryImages();
  const previewImages = [
    "/gallery/cemetery-summer-view10-wide-lawn-monuments.jpg",
    "/gallery/cemetery-wintersnow-group.jpg",
    "/gallery/cemetery-summer-view03-obelisk-headstones.jpg",
    "/gallery/cemetery-summer-monument.jpg",
  ];
  const availablePreviewImages = previewImages
    .map((src) => galleryImages.find((image) => image.src === src))
    .filter((image): image is NonNullable<typeof image> => Boolean(image))
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader sticky />

      <section className="relative overflow-hidden bg-[#F7F6F1]">
        <div className="absolute inset-0">
          <Image
            src="/gallery/tamsen-review-2026-08-04.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[52%_54%] opacity-28"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(247,246,241,0.98)_0%,rgba(247,246,241,0.84)_48%,rgba(247,246,241,0.52)_100%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[86rem] gap-10 px-5 pb-12 pt-12 sm:px-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,0.72fr)] lg:px-10 lg:pb-20 lg:pt-18">
          <div className="max-w-4xl">
            <h1 className="max-w-4xl font-serif text-[2.8rem] font-semibold leading-[0.95] text-[#243A2E] sm:text-6xl lg:text-7xl">
              Preserving Henderson Cemetery&apos;s History and Future
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#514B42]">
              More than two centuries of local lives, family records, and
              community stewardship remain here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/burial-records"
                className="button-soft rounded-full bg-[#243A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                Search Burial Records
              </Link>
              <Link
                href="/preservation#current-needs"
                className="button-soft rounded-full bg-[#702F35] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5D252B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                Help Preserve Henderson
              </Link>
            </div>
          </div>

          <form
            action="/burial-records"
            method="get"
            className="self-end rounded-[1.75rem] bg-white p-5 shadow-2xl shadow-[#243A2E]/18 ring-1 ring-[#D8D4C8] sm:p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">
              Burial Record Search
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#243A2E]">
              Begin with a name.
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#77746C]">
              Search surname, given name, date, plan, plot, or notes.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                name="q"
                type="search"
                placeholder="Surname, given name, plot, or note"
                className="min-h-12 w-full rounded-full border border-[#D8D4C8] bg-white px-5 py-3 text-base text-[#243A2E] outline-none transition focus:border-[#243A2E] focus:ring-2 focus:ring-[#B08A3E]/35"
              />
              <button
                type="submit"
                className="button-soft rounded-full bg-[#243A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] sm:shrink-0"
              >
                Search
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/burial-records"
                className="font-semibold text-[#243A2E] underline decoration-[#B08A3E] decoration-2 underline-offset-4 hover:text-[#702F35]"
              >
                Browse all records
              </Link>
              <Link
                href="/plot-maps"
                className="font-semibold text-[#243A2E] underline decoration-[#B08A3E] decoration-2 underline-offset-4 hover:text-[#702F35]"
              >
                Compare plot maps
              </Link>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#243A2E] text-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-18">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C16C]">
              Ways to Help
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Henderson needs its next generation of caretakers.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#F7F6F1]/85">
              Stewardship does not require a family connection. Henderson
              survives because people choose to care.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <Link
              href="/contact#association-contact"
              className="group min-h-72 bg-[#1A2C22] p-6 shadow-xl shadow-black/15 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C16C] sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C16C]">
                Give Your Time
              </p>
              <h3 className="mt-4 font-serif text-4xl font-semibold">
                Join the work.
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-white/86">
                <li>Help document markers</li>
                <li>Assist with grounds care</li>
              </ul>
              <p className="mt-7 text-sm font-semibold underline decoration-[#E7C16C] decoration-2 underline-offset-4">
                Contact the association
              </p>
            </Link>

            <div className="grid gap-4">
              <Link
                href="/contact#association-contact"
                className="group bg-white p-6 text-[#243A2E] shadow-lg shadow-black/10 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C16C]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">
                  Share What You Know
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">
                  Add a family record.
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#514B42]">
                  Share records, photographs, or local history.
                </p>
              </Link>

              <div className="bg-[#702F35] p-6 text-white shadow-lg shadow-black/10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2D68B]">
                  Support Preservation
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">
                  Fund the care.
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/86">
                  Support maintenance, records, and materials.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <DonateButton className="button-soft rounded-full border border-[#E0B85D] bg-[#F5EFD8] px-4 py-2 text-sm font-semibold text-[#063F22] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B85D]">
                    Donate Online
                  </DonateButton>
                  <Link
                    href="/contact#association-contact"
                    className="button-soft rounded-full border border-white/55 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Mailing Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch lg:px-10 lg:py-18">
          <div className="relative min-h-[520px] overflow-hidden bg-[#243A2E] text-white shadow-2xl shadow-[#243A2E]/12">
            <Image
              src="/gallery/cemetery-summer-view10-wide-lawn-monuments.jpg"
              alt="Wide view of Henderson Cemetery grounds and monuments"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,58,46,0.18)_0%,rgba(36,58,46,0.9)_100%)]" />
            <div className="relative flex min-h-[520px] flex-col justify-end p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C16C]">
                From the Grounds
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Follow the Work of Preserving Henderson
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/86 sm:text-base sm:leading-7">
                See cemetery care, historical discoveries, seasonal work, and
                the people helping carry Henderson forward.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/preservation"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C16C]"
                >
                  Help Preserve Henderson
                </Link>
                <Link
                  href="/contact#association-contact"
                  className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C16C]"
                >
                  Share Photos or Records
                </Link>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col lg:max-w-[520px] lg:justify-start">
            {publishedAnnouncements.length ? (
              <div className="mb-5 space-y-3" aria-label="Henderson Cemetery announcements">
                {publishedAnnouncements.map((announcement) => {
                  const toneClass =
                    announcement.tone === "urgent"
                      ? "border-[#702F35]"
                      : announcement.tone === "support"
                        ? "border-[#243A2E]"
                        : "border-[#B08A3E]";

                  return (
                    <article
                      key={announcement.id}
                      className={`border-l-4 ${toneClass} bg-[#F7F6F1] px-5 py-4`}
                    >
                      {announcement.date ? (
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77746C]">
                          {announcement.date}
                        </p>
                      ) : null}
                      <h2 className="font-serif text-2xl font-semibold text-[#243A2E]">
                        {announcement.title}
                      </h2>
                      {announcement.actionHref && announcement.actionLabel ? (
                        <Link
                          href={announcement.actionHref}
                          className="mt-3 inline-flex rounded-full bg-[#243A2E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                        >
                          {announcement.actionLabel}
                        </Link>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            ) : null}
            <FacebookFollow showFeed />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F1]">
        <div className="mx-auto grid w-full max-w-[86rem] gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-18">
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src="/gallery/cemetery-summer-view03-obelisk-headstones.jpg"
              alt="Cemetery monuments and headstones beneath a bright sky"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Follow the Cemetery&apos;s Story
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#243A2E] sm:text-5xl">
              One place, many lives, and records still being connected.
            </h2>
            <div className="mt-8 grid gap-5 border-y border-[#D8D4C8] py-6">
              {[
                ["1807", "Earliest surviving marker noted in association records."],
                ["1909", "The Harmarville Cemetery Association is organized."],
                ["Today", "A new generation is needed to continue the work."],
              ].map(([date, fact]) => (
                <div key={date} className="grid grid-cols-[5.5rem_1fr] gap-4">
                  <p className="font-serif text-3xl font-semibold text-[#702F35]">
                    {date}
                  </p>
                  <p className="text-sm leading-6 text-[#514B42]">{fact}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/history"
                className="rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22]"
              >
                Explore the Timeline
              </Link>
              <Link
                href="/documents/original-association-records"
                className="rounded-full border border-[#B08A3E] bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1]"
              >
                See Original Records
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
                See Henderson Cemetery
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#243A2E]">
                The grounds tell part of the story.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="font-semibold text-[#243A2E] underline decoration-[#B08A3E] decoration-2 underline-offset-4 hover:text-[#702F35]"
            >
              View the Gallery
            </Link>
          </div>
          <div className="grid auto-rows-[180px] gap-4 md:grid-cols-4 md:auto-rows-[220px]">
            {availablePreviewImages.map((image, index) => (
              <div
                key={image.src}
                className={[
                  "relative overflow-hidden",
                  index === 0 ? "md:col-span-2 md:row-span-2" : "",
                  index === 2 ? "md:row-span-2" : "",
                ].join(" ")}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F1]">
        <div className="mx-auto grid w-full max-w-[86rem] gap-6 px-5 py-14 sm:px-6 md:grid-cols-2 lg:px-10 lg:py-18">
          <Link
            href="/plot-maps"
            className="group grid min-h-[300px] overflow-hidden bg-white shadow-xl shadow-[#243A2E]/10 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E] md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative min-h-[220px]">
              <Image
                src="/images/plot-map/henderson-cemetery-plots-medium.jpg"
                alt="Detail of Henderson Cemetery plot map"
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover object-left"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">
                Plot Maps
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-[#243A2E]">
                Locate plan and lot references.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#514B42]">
                Compare cemetery records with map details.
              </p>
            </div>
          </Link>

          <Link
            href="/documents"
            className="group grid min-h-[300px] overflow-hidden bg-[#702F35] text-white shadow-xl shadow-[#702F35]/20 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E] md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative min-h-[220px] bg-[#F7F6F1]">
              <Image
                src="/gallery/cemetery-wintersnow-flagsflowers.jpg"
                alt="Flags and flowers beside cemetery markers"
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2D68B]">
                Historical Documents
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold">
                Read the surviving records.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/82">
                Review minutes, formation records, and document summaries.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

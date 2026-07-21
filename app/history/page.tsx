import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { PageHeader } from "@/app/components/site/PageHeader";
import { PageHeroImage } from "@/app/components/site/PageHeroImage";
import { DonationBanner } from "@/app/components/site/DonationBanner";

export const metadata: Metadata = {
  title: "History",
  description:
    "Historical narrative and timeline for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania, including association stewardship and cemetery development.",
  openGraph: {
    title: "Henderson Cemetery History",
    description:
      "Read the preserved historical timeline for Henderson Cemetery, including early burials, plan development, and community stewardship.",
    url: "/history",
  },
  twitter: {
    title: "Henderson Cemetery History",
    description:
      "Read the preserved historical timeline for Henderson Cemetery, including early burials, plan development, and community stewardship.",
  },
};

const timeline = [
  {
    period: "1790-1795",
    title: "Denny and Henderson Land",
    body: "Two prominent landowners in the Allegheny River Valley in the early 1800s were Ebenezer Denny and James Henderson. James Henderson, an Irish immigrant, acquired approximately 150 acres in 1790 through Pennsylvania's post-Revolutionary War land settlement system, cleared the wooded land, and established himself as a farmer and landowner. In 1795, Ebenezer Denny received a 640-acre tract associated with his Revolutionary War service, which he named Deer Creek. Portions of these early family lands are now connected to Henderson Cemetery.",
  },
  {
    period: "c. 1800-1828",
    title: "Early Burial Ground",
    body: "As one of the oldest pioneer burial grounds in the Allegheny River Valley, the Denny-Henderson Cemetery was created from lands donated by the Ebenezer Denny and William Henderson families. Because the area was primarily agricultural and many families could not afford permanent grave markers, additional unmarked graves may exist within the cemetery, their identities and exact resting places now lost to history. The earliest surviving gravestone found is dated 1807 and bears only the initials J.P. The earliest inscribed headstone found belongs to Hannah Henderson, who died in 1828.",
  },
  {
    period: "Late 1800s",
    title: "Surveyed Lots and Name Change",
    body: "In 1884, Oliver Henderson contributed additional land from his property to expand the cemetery. He formally surveyed this new section into 54 lots, each designed to accommodate eight graves, with proceeds going to the Henderson family. Cemetery records refer to this section as Plan I. The burial ground became known then as Henderson Cemetery.",
  },
  {
    period: "1909",
    title: "Formation of the Harmarville Cemetery Association",
    body: "In 1909, Rev. Harry Joseph Rose, pastor of nearby Harmarville Presbyterian Church, visited the grounds and found them grown up in weeds, brush, and waist-high grass. He organized descendants and local residents and established the Harmarville Cemetery Association, a legal entity formed to protect the gravesites. The Association's sole purpose was, and still is, to operate and manage Henderson Cemetery.",
  },
  {
    period: "1911",
    title: "Expansion and Ongoing Stewardship",
    body: "In 1911, Anna Melzena Spring, great-granddaughter of Ebenezer Denny and heir to the Denny estate through Ebenezer's son Harmar Denny and daughter Mary O'Hara Denny, donated additional Denny land on which 100 lots were established. The gift was structured to support cemetery maintenance through funds from the sale of these lots. Cemetery records refer to this section as Plan II. Anna Spring also donated nine nearby acres to the Federation of Girls' School Societies, where the Harmarville Convalescent Home for Women was built in 1913.",
  },
  {
    period: "1952",
    title: "A Renewal",
    body: "In 1952, Charles Nixon Carson, a descendant of two local pioneer families of the Denny and Henderson era, the Carsons and the Nixons, organized a new board of the Harmarville Cemetery Association after noticing that the cemetery grounds had once again fallen into neglect and disrepair. The Association's stewardship mission was revived, helping ensure the continued care and preservation of this historic cemetery.",
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Historical Stewardship"
          title="History"
          description="Henderson Cemetery in Acmetonia (near Harmarville, Pennsylvania) reflects more than two centuries of local family history, community stewardship, and preservation work."
        />

        <PageHeroImage
          src="/gallery/cemetery-summer-view10-wide-lawn-monuments.jpg"
          alt="Wide summer view across Henderson Cemetery lawn and monuments"
          imageClassName="object-cover object-[50%_78%]"
        />

        <p className="mt-4 max-w-3xl text-base leading-7 text-stone-700">
          The narrative below reflects association history and documented
          cemetery records preserved over time.
        </p>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            History of the Property
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-950">
            Denny and Henderson family lands
          </h2>
          <div className="mt-4 space-y-3 text-base leading-7 text-stone-700">
            <p>
              Two prominent landowners in the Allegheny River Valley in the
              early 1800s were Ebenezer Denny and James Henderson. Their efforts
              preserved a lasting connection to the land&apos;s early history and
              the families who settled, cultivated, and cared for it.
            </p>
            <p>
              James Henderson, an Irish immigrant, acquired approximately 150
              acres in 1790 through Pennsylvania&apos;s post-Revolutionary War land
              settlement system, when tracts of land were opened for development
              west of the Allegheny River. He cleared the densely wooded land
              and established himself as a farmer and landowner. A portion of
              his original land is where Henderson Cemetery now lies.
            </p>
            <p>
              James, his wife Clara, and his grandson Oliver, who donated
              additional land in 1884, are among the many family members and
              descendants buried at Henderson, providing a lasting connection to
              the property that bears their name.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-5 sm:mt-10">
          {timeline.map((item) => (
            <article
              key={`${item.period}-${item.title}`}
              className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                {item.period}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-7 text-stone-700">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/burial-records"
          className="button-soft mt-8 inline-flex rounded-full border border-stone-400 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
        >
          Return to Burial Records
        </Link>
      </section>

      <DonationBanner />

      <SiteFooter />
    </main>
  );
}

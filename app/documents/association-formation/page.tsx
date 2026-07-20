import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/app/components/site/PageHeader";
import { PageHeroImage } from "@/app/components/site/PageHeroImage";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Association Formation and Early Minutes",
  description:
    "Archival transcription of Henderson Cemetery documents related to lot ownership, association formation, early by-laws, founding contributions, and the 1909 charter record.",
  openGraph: {
    title: "Association Formation and Early Minutes",
    description:
      "Read transcribed early documents connected to Henderson Cemetery and The Harmarville Cemetery Association.",
    url: "/documents/association-formation",
  },
  twitter: {
    title: "Association Formation and Early Minutes",
    description:
      "Read transcribed early documents connected to Henderson Cemetery and The Harmarville Cemetery Association.",
  },
};

const documentSections = [
  {
    date: "June 20, 1892",
    title: "Indenture for Lot 21",
    body: `This Indenture -

Made the 20th day of June Anno Domini One Thousand Eight Hundred Ninety-two;

BETWEEN

AJ Barton, Guardian of James, Charles G, Clara E and Mattie B Henderson, minor children of Oliver P Henderson, deceased, party of the first part;
AND
Gottlieb Dickie of O'Hara Township, Allegheny County party of the second part;

WITNESSETH: that the Orphans' Court of Allegheny county, Pennsylvania, a No. ___ May Term 1892 upon the application of said Guardian, did, on the 20th of May, AD 1892, make a general order of sale of Real Estate; authorizing said Guardian to sell the interests of said minors at private sale, subject to the approval of said Court, and

WHEREAS: said Guardian [Barton] did make such sale to the party of the second part, which sale upon report thereof to the Court, was on the 20th day of May, 1892, approved by said Court and the Guardian [Barton] authorized and directed to make a DEED therefore, now the said party of the first part [Barton], for and in consideration of the sum of Twenty ($20.00) Dollars lawful money of the United States unto him well and truly paid by the said party of the second [Dickey] part, at or before the sealing and delivering of these presents, the receipt whereof is hereby acknowledged, has granted, bargained, sold, aliened, enfeoffed, released, conveyed and confirmed, and by these presents does grant, bargain, sell, alien, enfeoff, release, convey and confirm, for the purpose hereinafter set forth, unto the said party of the second [Dickey] part, his heirs and assigns, forever, all the interest of said minors, being the undivided Five Sevenths, in that certain lot of ground being number Twenty-one (21) sixteen by sixteen feet in a plan of lots laid out by Oliver P Henderson, which said plan is recorded in Plan book Vol. VII, Page 114 in the Recorder's office of Allegheny county.

The said party of the second part, his heirs and assigns, ________. To have and hold the said described lot of ground, with, appurtenances (Subject, however, to any and all the provisions and conditions of the hereinafter recited rules and regulations of the Harmarville Cemetery) unto the said party of the second [Dickey] part, his heirs and assigns, to and for the only proper and behoof of the said party of the second [Dickey] part, to heirs and assigns, forever, and AJ Barton, Guardian as aforesaid, said party of the first part, by these presents, covenants, grants and agrees, to and with the said party of the second part, his heirs and assigns, that the said party of the first part, all and singular, the hereditaments and premises herein above described and granted or mentioned and intended so to be, with the appurtenances, unto the said party of the second part, his heirs and assigns, against them the said minors aforesaid and their heirs and against all and every other person or persons whomsoever lawfully claiming or to claim the same or any part thereof from, through, by or under him, as Guardian [Barton] aforesaid, shall and will warrant and forever defend. It is expressly understood and agreed that this DEED be taken and held by the said party of the second [Dickey] part or his heirs, subject to any and all the following rules and regulations adopted by Oliver P Henderson, in his lifetime, for the protection of lot holders and government of burial grounds.

1st - Purchasers of lots are required to pay one-half the price thereof in cash when making application for their lots before any instruments are made therein and the balance within six months, without interest, and it is expressly provided and understood that no interest shall pass or DEED be given the purchaser until the purchase money be paid.

2nd - The proprietors of lots shall erect at their own expense, suitable landmarks at the corners thereof and shall also cause the number to be legibly and permanently marked on the premises; and if the proprietor of any lot or lots shall neglect or refuse to erect such landmarks for three months after being notified so to do, the said parties of the first part or their heirs or assigns shall have authority to have the same done at the expense of said proprietor.

3rd - If any trees or shrubs in any lot be permitted to grow over six feet in height or shall by means of their roots or branches or otherwise become detrimental to adjacent lots or avenues or dangerous or inconvenient to passers, the said parties of the first part or their heirs or assigns shall have the right to enter upon said lot and remove said trees or shrubs or any part thereof that is over six feet in height, detrimental, dangerous or inconvenient.

4th - No lot shall be used for any other purpose than as a place for the burial of the dead and all graves upon said lot shall be excavated so as to line at the head.

5th - The proprietors of lots shall have the right to enclose the same with a wall, fence or hedge which shall be placed on the line of said lot, provided no wall or curb be more than eighteen inches high and no fence or hedge or enclosure of any kind be, in the aggregate, over three and one-half feet high.

6th - Proprietors of lots shall be required to keep their lots in good order, grass cut close and the premises free from briars and weeds and from any and all vining and running plants or shrubs; and if the said proprietor neglect or refuse to comply with this regulation after twenty days notice, then the said parties of the first part may cause the same to be done at the cost and expense of said proprietor.

7th - Lots shall be secured to the purchaser forever and his heirs and assigns. But owners cannot sell, transfer or convey their lots without first having said transfer recorded on the books of the said parties of the first part or their heirs or assigns.

IN WITNESS WHEREOF the said Guardian [Barton] has to these presents set his hand and seal. Dated the day and year aforesaid.

AJ Barton, Guardian
Signed sealed and delivered in the presence of
Fred Lingelbach

COMMONWEALTH OF PENNSYLVANIA
COUNTY OF ALLEGHENY
S.S.

Be it remembered that on the 20th day of June A D 1892, at an Orphans' Court, held at the Court House in the City of Pittsburg, County of Allegheny, and State of Pennsylvania, Hon. Wm G Hawkins, Jr, P. Judge of said Court being present; came AJ Barton, Guardian of James, Charles G, Clara E and Mattie B Henderson, minors, and acknowledged the foregoing INDENTURE to be his act and deed as such Guardian and desired the same to be recorded as such.

IN TESTIMONY WHEREOF I have hereunto set my hand and caused the seal of said Court to be attached this 20th day of June A D 1892.

Samuel R Comen, Clk.

Received the day of the date of the above INDENTURE of the above named Gottlieb Dickie the sum of Twenty Dollars lawful money of the United States; being the consideration money above mentioned in full.

WITNESS:             AJ Barton
                     Fred Lingelbach`,
  },
  {
    date: "May 21, 1909",
    title: "Establishment of Association Control",
    body: `Establishment
We the undersigned persons interested in "Henderson's Graveyard" situate in Harmar Township, Allegheny County, Pa., all of whom have relatives buried therein, and according to the usages and customs thereof, do hereby sell assign transfer and set over to The Harmarville Cemetery Association (an association this day organized) all our rights and powers in the general management and control of the said graveyard and agree to be bound by the rules and regulations hereafter adopted by said association, and in case said association secures a charter, which it is the intention to apply for, then we agree that said corporation shall take full and complete charge of said cemetery and manage and care for the same we to be bound by its action. Witness our hands and seals this 21st day of May 1909.

Jno Henderson        Seal    Mrs WM Nixon        Seal
John Robbins        Seal    Mrs WJ Arbuckle     Seal
Sarah Robbins       Seal    Grace B McRoberts   Seal
Samuel Robbins      Seal    Mrs James Wilson    Seal
Annie Nixon         Seal    Gottlieb Dickey     Seal
WA Armstrong        Seal    Anna Smeaton        Seal
Suzetta Robbins     Seal    Jessie McGeary      Seal
Mary J Conley       Seal    Wm J Wilson         Seal
Geo S Conley        Seal    Alex Campbell       Seal
Eleanora Harrison   Seal    Anna Wachter        Seal
Mary Harrison       Seal    Mrs Henry Dremmel   Seal
JH Kemper           Seal    Mrs Eliza Myers     Seal
Henrietta Campbell  Seal    WL Carson           Seal
SM Armstrong        Seal    GM Nixon            Seal
Lilly Brown         Seal    JA Smeaton          Seal`,
  },
  {
    date: "May 31, 1909",
    title: "By-Laws of The Harmarville Cemetery Association",
    body: `By-Laws of the Harmarville Cemetery Association

First. The regular annual meeting of The Harmarville Cemetery Association shall hereafter be held upon the cemetery grounds in Harmar Township, on "Decoration Day", May 31st of each year.

Second. The meeting shall be called to order by the President of the board of directors, or in his absence by the Vice-President, who shall act as temporary chairman of the meeting.

Third. At such regular annual meeting the board of directors for the ensuing year shall be elected, as required by the charter.

Fourth. Special meetings of the corporation may be called by the board of directors to meet at such other place of meeting within Harmar Township, as may be designated in such call, ten days notice thereof to be given to the members of the association by letter or postal mailed to his or her last known address.

Fifth. Election to membership shall be by ballot.

Sixth. Any person eligible to membership under section nine of the charter may be elected a member of the association at any regular meeting thereof, or at any special meeting, upon receiving three fourths of the ballots cast, provided, that the names of all persons proposed for membership, who are to be voted on at any special meeting, shall be given in the notice calling said meeting.

Seventh. It shall be the duty of the Secretary of the board of directors to keep a list of the names and addresses of the members of the association, the same to be furnished by said members, and such list shall be the official guide in mailing all notices.

Eighth. The board of directors shall cause to be laid off in burial lots the land acquired by the Corporation from Miss Spring, to fix a scale of prices for the same, which may be altered from time to time, and to grant to purchasers thereof, their heirs and assigns, the perpetual right of burial therein, subject to such reasonable regulations and restrictions as the board of directors may from time to time adopt.

Ninth. Amendments to these By-Laws shall not be acted upon until the first annual meeting following that on which such amendment has proposed, unless the proposed amendment be first approved by the board of directors and notice thereof, containing a copy of said amendment, be sent to each member one month before the regular meeting or one month before the time fixed for a special meeting called for the purpose of acting on said amendment.

Witness our hands and seals this 31st day of May 1909

Jno Henderson        Seal    Grace B McRoberts   Seal
HJ Rose              Seal    Mrs James Wilson    Seal
John R Robbins      Seal    Gottlieb Dickey     Seal
Sarah Robbins       Seal    Anna Smeaton        Seal
Annie Nixon         Seal    Jessie McGeary      Seal
Samuel Robbins      Seal    Wm J Wilson         Seal
Suzetta Robbins     Seal    Alex Campbell       Seal
WA Armstrong        Seal    Charles Wachter     Seal
JH Kemper           Seal    Mrs Henry Dremmel   Seal
Mary J Conley       Seal    Mrs Eliza Myers     Seal
GS Conley           Seal    Anna Wachter        Seal
Eleanora Harrison   Seal    WL Carson           Seal
Mary Harrison       Seal    WM Nixon            Seal
SM Armstrong        Seal    Wm J Barton         Seal
Henrietta Campbell  Seal    Daniel Harrison     Seal
Mrs WM Nixon        Seal    George W Wilson     Seal
Miss Lilly Brown    Seal    JA Smeaton          Seal
Mrs WJ Arbuckle     Seal    Joseph Barton       Seal`,
  },
  {
    date: "June 1, 1909",
    title: "Founding Members and Fence Contributions",
    body: `Founding Members
Harmar Township
We the undersigned agree to contribute the amounts set opposite our respective names to be used in building a fence around Henderson's Graveyard in Harmar Township, Allegheny County, Pa., and in otherwise beautifying, maintaining and caring for the same, such sums to be paid over to the treasurer of "The Harmarville Cemetery Association", an association formed for the purposes aforesaid, any sum collected in excess of the amount needed for immediate use to be held in trust for the future care and maintenance of the said graveyard or cemetery.

Joseph Barton          $50.00    WB & C Dalzell             $200.00
Julia Hickey            50.00    Mrs Mary W Patterson        100.00
WJ Wilson               10.00    JN Harrison, MD              35.00
WJ McGeary              25.00    Mrs Kate Paxon               10.00
Wm J Barton             25.00    Mrs Mary E Armstrong         25.00
JH Kemper               10.00    Mrs Catherine Hawkins        10.00
JA Smeaton              25.00    Mrs E Hetherington           10.00
Mrs Elizabeth Campbell   5.00    Mrs Caroline (illegible)      5.00
Mrs DK Bryce            25.00    James Brown                  10.00
WL Carson               25.00    Mrs A Kier                   10.00
WM Nixon                25.00    Robert S (illegible)         15.00
Miss Eva Henderson      10.00    Mrs JL Loring                 5.00
Frank H Hanna           10.00    J & M Slaigh                 10.00
RP Hanna                 2.00    Mrs M Ingersoll              10.00
WW Campbell              2.00    Cora J Hickey                 5.00
Charles Kemper          20.00    JD Hancock                    5.00
Mary Harrison           20.00    JA Campbell                   5.00
Eleanora Harrison        5.00    Miss Margaret Patterson      10.00
Mrs Grant Wise           2.00    Miss A Nixon                 10.00
Antony Hodel             5.00    Mrs FV (illegible)            5.00
CC Wilson               10.00    Mrs TN Power                  5.00
Miss Mary J Clark        5.00    HS Rickenbach                10.00
Mrs Callie Walter        2.00    Mary P Arbuckle              25.00
Mrs FB Black             1.00    Mrs J Lenz                    5.00
Charles Wachter          5.00    AB Hickey                     5.00
Anna Wachter             1.00    G Dickey                      5.00
John Mullett             2.00    Mrs A Hickey                  1.00
Samuel Mullett           1.00    Sam R Duganne                 1.00
Mrs Samuel Mullett       1.00    WA Armstrong                  5.00
Mrs Thos Duncan          5.00    GC Yute                       1.00
Mrs James Nilson         5.00    HJ Henderson                  5.00
Ella & James McKelvy     2.00    Geo W Yute                    1.00
Geo Moyes                5.00    Mrs ME Bervinkle              1.00
EB McRoberts            25.00    Jacob Dock                     .50
Miss Denny              30.00    Mrs FE Duganne                1.00
SM Armstrong             5.00    CH Hanna                      5.00
HC McGraw               10.00    Mrs J Huling                  1.00
WA Clowes                3.00    Mrs C Hetzel                  1.00
CP Illig                10.00    Mrs EE Ralston                5.00
PT Clark                 5.00    Alex Campbell                 1.00
A McKinley              10.00    A Coss                        5.00
Mrs HJ Rose              5.00    Moore                          .50
HJ Rose                 10.00    JN Charles                    1.00
Dr WP McCullough         5.00    Jack Huling                   1.00
Mrs Cornelius Casey     10.00    Mrs Robt Simon (Lot 31)
JP Campbell             15.00    Charles JW Simon (Lot 30)
Mrs Florence Black       1.00
Mrs Ann Coss             5.00
Calista McFeatter        5.00
Mrs HF (illegible)       1.00
Frank (illegible)        2.00`,
  },
  {
    date: "July 1909",
    title: "Court Record and Charter Application",
    body: `Court Record
In the Court of Common Pleas No 2 of Allegheny County, Pa

In re application of the
"Harmarville Cemetery
Association"
Of
Harmar Township, Allegheny
County, Pennsylvania, for
A charter

No. 840 July Term 1909

Be it known, that the subscribers, all of whom are citizens of the Commonwealth of Pennsylvania, have associated themselves for the purpose of forming and maintaining an association for the objects and purposes hereinafter set forth, and being desirous that they and such persons as may be associated with them should become incorporated agreeably to the provisions of the Act of General Assembly of the Commonwealth of Pennsylvania entitled "An Act to Provide for the Incorporation and Regulation of Certain Corporations" approved the 29th day of April A D 1874, and its supplements, do hereby certify, set forth and declare, that the following are the purposes, objects, articles and conditions of the said association which they desire to be incorporated.

First. The name of the corporation shall be "The Harmarville Cemetery Association".
Second. The purposes for which the corporation is formed, are to acquire control of the cemetery or graveyard known as "Henderson's Graveyard" situate in Harmar Township, Allegheny County, Pennsylvania, to manage, regulate and maintain the same, to acquire land adjoining and maintain the whole as a public cemetery
Third. The place where the business of the corporation is to be transacted is in Harmar Township. Allegheny County, Pennsylvania.
Fourth. The Corporation is to exist perpetually.
Fifth The names and residences of the subscribers are as follows.

John Henderson          Hoboken             Allegheny County   Pa
HJ Rose                 Harmar Township     "                  "
John Robbins            Cheswick            "                  "
Sarah Robbins           Harmar Township     "                  "
Annie Nixon             "                   "                  "
Samuel Robbins          Cheswick            "                  "
Suzetta Robbins         "                   "                  "
WA Armstrong            "                   "                  "
JH Kemper               Harmar Township     "                  "
Mary J Conley           "                   "                  "
GS Conley               "                   "                  "
Eleanor Harrison        "                   "                  "
Mary Harrison           "                   "                  "
SM Armstrong            Cheswick            "                  "
Henrietta Campbell      Hoboken             "                  "
Mrs WM Nixon            Harmar Township     "                  "
Miss Lilly Brown        "                   "                  "
Mrs WJ Arbuckle         Pittsburg           "                  "
Grace B McRoberts       Harmar Township     "                  "
Mrs James Wilson        Indiana Township    "                  "
Gottleib Dickey         Hoboken             "                  "
Anna Smeaton            Harmar Township     "                  "
Jessie McGeary          Indiana Township    "                  "
Wm J Wilson             "                   "                  "
Alex Campbell           Harmar Township     "                  "
Charles Wachter         Cheswick            "                  "
Mrs Henry Dremmel       Harmar Township     "                  "
Mrs Eliza Myers         "                   "                  "
Anna Wachter            Cheswick            "                  "
WS Carson               Harmar Township     "                  "
WM Nixon                "                   "                  "
Jas A Smeaton           "                   "                  "
Daniel Harrison         Ingram              "                  "
Wm J Barton             Sharpsburg          "                  "
Joseph Barton           "                   "                  "
Geo H Wilson            Indiana Township    "                  "

Sixth. The corporation is to be managed by a Board of Directors consisting of seven members who shall be elected annually by ballot, who shall elect from their number a president, vice president, secretary and treasurer, the names and residences of those chosen for the first year are as follows.

Rev John Henderson      Rev John Henderson  Allegheny County   Pa
Rev HJ Rose             Harmar Township     "                  "
Miss Grace B McRoberts  "                   "                  "
James A Smeaton         "                   "                  "
Wm M Nixon              "                   "                  "
Wm S Carson             "                   "                  "
Joseph Barton           Sharpsburg          "                  "

By whom Rev HJ Rose has been chosen President, Joseph Barton, Vice President, Grace B McRoberts, Secretary and WS Carson, Treasurer.

Seventh. The corporation is not for profit and has no capital stock, but all money received from any source, as well as fees for membership of other charges fixed in the By-Laws, shall be collected, held in trust and applied from time-to-time in caring for and maintaining said cemetery.
Eighth. The corporation shall have power to adopt suitable By-Laws, not inconsistent with the Constitution and laws of the Commonwealth of Pennsylvania.
Ninth. The membership shall be increased and perpetuated by the election from time to time, in such manner and on such terms and conditions as may be prescribed in the By-Laws of the Corporation of any person who has now or may hereafter have relatives or friends buried in the aforesaid graveyard or cemetery, or of any person who may be willing to assist either financially or otherwise in maintaining said cemetery.
Tenth. That a sum equal to at least one-tenth of the gross amount arising from the sale of lots in said burial ground or cemetery shall be set aside for the perpetual care and preservation of the grounds and renewal of the buildings and property of said burial or cemetery company.`,
  },
];

export default function AssociationFormationPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <Link
          href="/documents"
          className="link-soft text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-950"
        >
          Back to Documents
        </Link>

        <div className="mt-6">
          <PageHeader
            eyebrow="Archival Transcription"
            title="Association Formation and Early Minutes"
            description="Transcribed early records documenting lot ownership, cemetery rules, the transfer of management authority, by-laws, founding contributions, and the 1909 charter application for The Harmarville Cemetery Association."
          />
        </div>

        <PageHeroImage
          src="/gallery/cemetery-summer-monument.jpg"
          alt="Monument view in Henderson Cemetery"
        />

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Document Dates
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {documentSections.map((section) => (
              <a
                key={section.date}
                href={`#${section.date.toLowerCase().replaceAll(" ", "-").replace(",", "")}`}
                className="button-soft rounded-full border border-stone-300 bg-stone-100 px-4 py-2 text-sm text-stone-700 hover:bg-stone-200"
              >
                {section.date}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {documentSections.map((section) => (
            <article
              key={section.date}
              id={section.date.toLowerCase().replaceAll(" ", "-").replace(",", "")}
              className="rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                {section.date}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-950">
                {section.title}
              </h2>
              <pre className="mt-5 whitespace-pre-wrap break-words rounded-2xl border border-stone-200 bg-stone-50 p-4 font-serif text-sm leading-7 text-stone-800 sm:p-5 sm:text-base">
                {section.body}
              </pre>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

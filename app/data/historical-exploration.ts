export type HistoricalLinkType =
  | "explore-henderson"
  | "view-source"
  | "continue-exploring";

export type HistoricalLink = {
  type: HistoricalLinkType;
  label: string;
  href: string;
};

export type HistoricalItem = {
  id: string;
  title: string;
  period: string;
  summary: string;
  context: string;
  confidence: "verified" | "association-records" | "local-records" | "researching";
  image?: string;
  links: HistoricalLink[];
};

export const historicalItems: HistoricalItem[] = [
  {
    id: "original-graveyard",
    title: "Original Graveyard",
    period: "Circa 1800",
    summary:
      "Early pioneer families set aside portions of their properties for a public burial ground now known as Henderson Cemetery.",
    context:
      "Cemetery archival materials identify Ebenezer Denny's 1795 land grant and James Henderson's 1790 land grant as part of the cemetery's origin story. Published county history places James Henderson's tract east of Ebenezer Denny's property, while cemetery burial records identify JP 1807 as the oldest readable marker and Hannah Henderson's 1828 grave as the oldest documented grave.",
    confidence: "association-records",
    image: "/gallery/tamsen-review-2026-08-06.jpg",
    links: [
      { type: "explore-henderson", label: "James Henderson Burial Record", href: "/burial-records/henderson-james-1758-may-6-1840-h-d-henderson" },
      { type: "explore-henderson", label: "Hannah Henderson Burial Record", href: "/burial-records/henderson-hannah-1753-jul-12-1828-h-d-henderson" },
      { type: "view-source", label: "Public transcription of 1889 History of Allegheny County", href: "https://www.allegheny.pagenweb.org/Individual_Townships/Harmer.html" },
      { type: "view-source", label: "Harmar Township History", href: "https://www.harmartownship-pa.gov/1396/About" },
    ],
  },
  {
    id: "plan-one-1884",
    title: "Henderson Cemetery: Expansion, Plan I",
    period: "1884",
    summary:
      "Oliver Henderson expanded the original cemetery by donating 54 additional lots of eight graves each.",
    context:
      "The 1884 Plan I map is held in the Henderson Cemetery archive. Cemetery archival materials state that the transaction was recorded in the Allegheny County Recorder's Office, the name legally became Henderson Cemetery, and this expansion is now known as Plan I. An independently accessible online source for the donation details has not yet been identified.",
    confidence: "association-records",
    image: "/gallery/tamsen-review-2026-08-01.jpg",
    links: [
      { type: "explore-henderson", label: "View Henderson Cemetery Plan I - 1884", href: "/plot-maps#plan-i-1884" },
      { type: "view-source", label: "View Original Plan I Map", href: "/documents/henderson-cemetery-plan-i-1884.pdf" },
      { type: "explore-henderson", label: "Search Plan I Burials", href: "/burial-records?plan=1" },
    ],
  },
  {
    id: "association-formation",
    title: "Harmarville Cemetery Association",
    period: "1909",
    summary:
      "Rev. Harry Joseph Rose's interest in saving the overgrown cemetery helped inspire the Harmarville Cemetery Association.",
    context:
      "Harmarville Cemetery Association records document the transfer of control, early by-laws, founding contributions, and charter application. Cemetery archival materials connect the association's formation with renewed preservation interest after Rev. Rose found the grounds overgrown.",
    confidence: "association-records",
    image: "/gallery/cemetery-wintersnow-flagsflowers.jpg",
    links: [
      { type: "view-source", label: "View Original Association Records", href: "/documents/original-association-records" },
      { type: "view-source", label: "Read Existing Transcription", href: "/documents/association-formation" },
      { type: "explore-henderson", label: "Volunteer Stewardship", href: "/preservation#current-needs" },
    ],
  },
  {
    id: "plan-two-1911",
    title: "Expansion: Plan II",
    period: "1911",
    summary:
      "Anna Melzena Spring donated an additional 100 lots of eight graves each, creating the expansion now known as Plan II.",
    context:
      "Cemetery archival materials describe Anna Melzena Spring as Ebenezer Denny's philanthropist great-granddaughter and sole heir to the Denny estate, and state that lot-sale proceeds were to be used only for cemetery maintenance. Independently accessible online corroboration for the Plan II donation details has not yet been identified.",
    confidence: "association-records",
    links: [
      { type: "explore-henderson", label: "Search Plan II Burials", href: "/burial-records?plan=2" },
      { type: "view-source", label: "Documents Archive", href: "/documents" },
    ],
  },
  {
    id: "railroad-boundary-1916",
    title: "Railroad and Eastern Boundary",
    period: "1916",
    summary:
      "The railroad buried an adjacent wooden trestle beneath slag, built a new elevated rail line, and a wall protected the cemetery grounds.",
    context:
      "Documented in Henderson Cemetery archival materials; independent online corroboration has not yet been identified. Cemetery archival materials state that the wall still stands today and forms part of the cemetery's eastern boundary.",
    confidence: "association-records",
    image: "/gallery/tamsen-review-2026-08-05.jpg",
    links: [
      { type: "explore-henderson", label: "Open Plot Maps", href: "/plot-maps" },
      { type: "explore-henderson", label: "Contact With Historical Information", href: "/contact#association-contact" },
    ],
  },
  {
    id: "turnpike-boundary-1951",
    title: "Pennsylvania Turnpike Western Boundary",
    period: "1951",
    summary:
      "Construction of the western extension of the Pennsylvania Turnpike became the cemetery's permanent western border.",
    context:
      "The Pennsylvania Turnpike Commission's public history states that the Western Extension opened in stages in 1951. Cemetery archival materials describe the turnpike as a natural buffer that shields the grounds from nearby businesses and industry.",
    confidence: "association-records",
    image: "/gallery/tamsen-review-2026-08-03.jpg",
    links: [
      { type: "explore-henderson", label: "Open Plot Maps", href: "/plot-maps" },
      { type: "view-source", label: "PA Turnpike History", href: "https://www.paturnpike.com/about-us/turnpike-history/interactive-timeline" },
      { type: "explore-henderson", label: "Preservation Needs", href: "/preservation#current-needs" },
    ],
  },
  {
    id: "renewed-interest-1952",
    title: "Renewed Interest",
    period: "1952",
    summary:
      "Charles Nixon Carson helped revive interest after the cemetery had again become overgrown and fallen into neglect.",
    context:
      "Cemetery archival materials state that the Harmarville Cemetery Association was revived, renewed its core mission, cleaned up the grounds, elected a new board, and moved forward. An independently accessible online source for the 1952 renewal has not yet been identified.",
    confidence: "association-records",
    image: "/gallery/cemetery-wintersnow-group.jpg",
    links: [
      { type: "explore-henderson", label: "Preservation Needs", href: "/preservation#current-needs" },
      { type: "explore-henderson", label: "Contact the Association", href: "/contact#association-contact" },
    ],
  },
  {
    id: "final-land-acquisition-2020",
    title: "Final Adjacent Land Acquisition",
    period: "2020",
    summary:
      "The last privately held parcel directly adjacent to the cemetery became part of the cemetery grounds.",
    context:
      "Cemetery archival materials identify the parcel as 2.06 wooded acres extending from Plan I to the Route 28 expressway, creating cemetery property bounded by permanent physical barriers. An independently accessible online source for the parcel-transfer details has not yet been identified.",
    confidence: "association-records",
    image: "/gallery/tamsen-review-2026-08-04.jpg",
    links: [
      { type: "explore-henderson", label: "Preservation Needs", href: "/preservation#current-needs" },
      { type: "explore-henderson", label: "Contact the Association", href: "/contact#association-contact" },
    ],
  },
];

export function getHistoricalItem(id: string) {
  return historicalItems.find((item) => item.id === id);
}

export function getHistoricalItems(ids: string[]) {
  return ids
    .map((id) => getHistoricalItem(id))
    .filter((item): item is HistoricalItem => Boolean(item));
}

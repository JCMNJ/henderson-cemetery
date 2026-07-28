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
    id: "denny-henderson-lands",
    title: "Denny and Henderson Lands",
    period: "Early Harmar Township",
    summary:
      "An 1889 county history places James Henderson's tract immediately east of Ebenezer Denny's property near Harmarville.",
    context:
      "Available evidence establishes neighboring early properties; it does not yet prove which tract contained the original burial parcel.",
    confidence: "verified",
    image: "/gallery/cemetery-summer-view10-wide-lawn-monuments.jpg",
    links: [
      { type: "explore-henderson", label: "Explore Cemetery History", href: "/history#denny-henderson-lands" },
      { type: "explore-henderson", label: "James Henderson Burial Record", href: "/burial-records/henderson-james-1758-may-6-1840-h-d-henderson" },
      { type: "view-source", label: "1889 History of Allegheny County", href: "https://www.allegheny.pagenweb.org/Individual_Townships/Harmer.html" },
    ],
  },
  {
    id: "ebenezer-denny",
    title: "Ebenezer Denny",
    period: "1761-1822",
    summary:
      "Ebenezer Denny, associated with early Denny land in the region, became Pittsburgh's first mayor in 1816.",
    context:
      "The City of Pittsburgh identifies Denny as a Revolutionary War veteran and the city's first mayor.",
    confidence: "verified",
    links: [
      { type: "explore-henderson", label: "Denny and Henderson Lands", href: "/history#denny-henderson-lands" },
      { type: "view-source", label: "City of Pittsburgh", href: "https://www.pittsburghpa.gov/City-Government/The-Mayor/Mayors-of-Pittsburgh" },
    ],
  },
  {
    id: "harmar-denny",
    title: "Harmar Denny",
    period: "1794-1852",
    summary:
      "Named for General Josiah Harmar, Harmar Denny served in Pennsylvania's legislature and the United States Congress.",
    context:
      "Dickinson College Archives and the U.S. House historian document his education, public service, and transportation advocacy.",
    confidence: "verified",
    links: [
      { type: "explore-henderson", label: "Denny and Henderson Lands", href: "/history#denny-henderson-lands" },
      { type: "view-source", label: "Dickinson College Archives", href: "https://archives.dickinson.edu/encyclopedia/harmar-denny-1794-1852" },
      { type: "view-source", label: "U.S. House of Representatives", href: "https://history.house.gov/People/Detail/12137" },
      { type: "continue-exploring", label: "Harmar Township", href: "https://www.harmartownship-pa.gov/1396/About" },
    ],
  },
  {
    id: "early-burial-ground",
    title: "Early Burial Ground",
    period: "c. 1800-1828",
    summary:
      "The earliest surviving inscribed Henderson family marker in the records is for Hannah Henderson, who died in 1828.",
    context:
      "Local cemetery records also note older and fragmentary markers, including an 1807 stone bearing only initials.",
    confidence: "local-records",
    image: "/gallery/cemetery-summer-view03-obelisk-headstones.jpg",
    links: [
      { type: "explore-henderson", label: "Hannah Henderson Burial Record", href: "/burial-records/henderson-hannah-1753-jul-12-1828-h-d-henderson" },
      { type: "explore-henderson", label: "Search Early Burials", href: "/burial-records?q=H%2FD" },
      { type: "explore-henderson", label: "Open Plot Maps", href: "/plot-maps" },
    ],
  },
  {
    id: "plan-one-survey",
    title: "Plan I Survey",
    period: "1884",
    summary:
      "Association notes identify an 1884 Oliver P. Henderson survey that organized 54 cemetery lots.",
    context:
      "The surviving records connect this surveyed section with the cemetery's Plan I references.",
    confidence: "association-records",
    links: [
      { type: "explore-henderson", label: "Plan Map Experience", href: "/plot-maps" },
      { type: "view-source", label: "Documents Archive", href: "/documents" },
      { type: "explore-henderson", label: "Search Plan I Burials", href: "/burial-records?plan=1" },
    ],
  },
  {
    id: "association-formation",
    title: "Harmarville Cemetery Association",
    period: "1909",
    summary:
      "In 1909, descendants and local residents transferred management of Henderson's Graveyard to the Harmarville Cemetery Association.",
    context:
      "The association records document the transfer of control, early by-laws, founding contributions, and charter application.",
    confidence: "association-records",
    image: "/gallery/cemetery-wintersnow-flagsflowers.jpg",
    links: [
      { type: "explore-henderson", label: "1909 Timeline Moment", href: "/history#association-formation" },
      { type: "view-source", label: "View Original Minutes", href: "/documents/association-formation" },
      { type: "explore-henderson", label: "Volunteer Stewardship", href: "/preservation#current-needs" },
    ],
  },
  {
    id: "plan-two-expansion",
    title: "Plan II Expansion",
    period: "1911",
    summary:
      "Association history records a 1911 land gift from Anna Melzena Spring that established 100 additional lots.",
    context:
      "The surviving records suggest the lot sales were intended to support cemetery maintenance.",
    confidence: "association-records",
    links: [
      { type: "explore-henderson", label: "Search Plan II Burials", href: "/burial-records?plan=2" },
      { type: "view-source", label: "Documents Archive", href: "/documents" },
      { type: "continue-exploring", label: "Dickinson College Archives", href: "https://archives.dickinson.edu/encyclopedia/harmar-denny-1794-1852" },
    ],
  },
  {
    id: "stewardship-renewal",
    title: "Stewardship Renewal",
    period: "1952",
    summary:
      "Association history credits a renewed board in 1952 with reviving care after the cemetery again fell into neglect.",
    context:
      "This preservation story remains directly connected to today's volunteer, record, and grounds-care needs.",
    confidence: "association-records",
    image: "/gallery/cemetery-wintersnow-group.jpg",
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

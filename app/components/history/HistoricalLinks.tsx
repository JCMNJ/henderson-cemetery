import Link from "next/link";
import type { HistoricalLink, HistoricalLinkType } from "@/app/data/historical-exploration";

const linkTypeLabel: Record<HistoricalLinkType, string> = {
  "explore-henderson": "Explore Henderson",
  "view-source": "View the Source",
  "continue-exploring": "Continue Exploring",
};

const linkTypeClassName: Record<HistoricalLinkType, string> = {
  "explore-henderson": "border-stone-400 bg-stone-900 text-stone-50 hover:bg-stone-700",
  "view-source": "border-stone-300 bg-stone-50 text-stone-800 hover:bg-stone-100",
  "continue-exploring": "border-stone-400 bg-stone-200/70 text-stone-900 hover:bg-stone-200",
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function HistoricalLinks({ links }: { links: HistoricalLink[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2.5">
      {links.map((link) => {
        const className = `button-soft inline-flex rounded-full border px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 ${linkTypeClassName[link.type]}`;
        const accessibleLabel = `${linkTypeLabel[link.type]}: ${link.label}`;

        return isExternalHref(link.href) ? (
          <a
            key={`${link.type}-${link.href}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={accessibleLabel}
            className={className}
          >
            <span className="sr-only">{linkTypeLabel[link.type]}: </span>
            {link.label}
          </a>
        ) : (
          <Link
            key={`${link.type}-${link.href}`}
            href={link.href}
            aria-label={accessibleLabel}
            className={className}
          >
            <span className="sr-only">{linkTypeLabel[link.type]}: </span>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

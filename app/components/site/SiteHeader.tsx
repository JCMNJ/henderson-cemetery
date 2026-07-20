"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/burial-records", label: "Burial Records" },
  { href: "/plot-maps", label: "Plot Maps" },
  { href: "/documents", label: "Documents" },
  { href: "/gallery", label: "Gallery" },
  { href: "/research", label: "Research" },
  { href: "/preservation", label: "Preservation" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://www.facebook.com/profile.php?id=100057152182753",
    label: "Facebook",
    external: true,
  },
];

type SiteHeaderProps = {
  sticky?: boolean;
};

export function SiteHeader({ sticky = true }: SiteHeaderProps) {
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLElement>(null);
  const activeMobileLinkRef = useRef<HTMLAnchorElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const mobileNav = mobileNavRef.current;
    const activeLink = activeMobileLinkRef.current;

    if (!mobileNav || !activeLink) return;

    mobileNav.scrollTo({
      left: activeLink.offsetLeft - mobileNav.clientWidth / 2 + activeLink.clientWidth / 2,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <header
      className={[
        "border-b border-stone-300 bg-stone-100/95 shadow-[0_1px_0_rgba(51,71,80,0.08)]",
        sticky ? "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-stone-100/90" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-stone-300 bg-stone-200 shadow-sm sm:h-11 sm:w-11">
              <Image
                src="/images/cemeteryheader.png"
                alt=""
                fill
                sizes="(min-width: 640px) 44px, 40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-[0.24em] text-stone-500">
                Henderson Cemetery
              </span>
              <span className="block truncate font-serif text-lg font-semibold text-stone-900 sm:text-2xl">
                Preserving Our History
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = !link.external && isActive(link.href);

              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-soft rounded-full px-2.5 py-1.5 text-[13px] text-stone-700 transition hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "link-soft rounded-full px-2.5 py-1.5 text-[13px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500",
                    active
                      ? "bg-stone-900 text-stone-100"
                      : "text-stone-700 hover:bg-stone-200",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <nav
          ref={mobileNavRef}
          className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-3 lg:hidden"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const active = !link.external && isActive(link.href);

            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-soft shrink-0 snap-start rounded-full border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                ref={active ? activeMobileLinkRef : undefined}
                aria-current={active ? "page" : undefined}
                className={[
                  "link-soft shrink-0 snap-start rounded-full px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500",
                  active
                    ? "bg-stone-900 text-stone-100"
                    : "border border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-100",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

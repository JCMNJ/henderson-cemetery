"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FacebookLogo } from "@/app/components/site/FacebookFollow";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/history", label: "History" },
  { href: "/gallery", label: "Gallery" },
  { href: "/preservation", label: "Preservation" },
];

const facebookUrl = "https://www.facebook.com/profile.php?id=100057152182753";

type SiteHeaderProps = {
  sticky?: boolean;
};

export function SiteHeader({ sticky = true }: SiteHeaderProps) {
  const pathname = usePathname();
  const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL?.trim();
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
                Henderson Cemetery · Harmar Township
              </span>
              <span className="block truncate font-serif text-lg font-semibold text-stone-900 sm:text-2xl">
                750 Gulf Lab Road
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
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

          <div className="hidden items-center gap-2 lg:flex" aria-label="Contact and support links">
            <Link
              href="/contact"
              className="link-soft rounded-full border border-stone-300 px-3 py-1.5 text-[13px] text-stone-700 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Contact
            </Link>
            <Link
              href="/preservation#current-needs"
              className="link-soft rounded-full border border-[#B08D3C] bg-[#F6E6B8]/55 px-3 py-1.5 text-[13px] font-medium text-stone-900 hover:bg-[#F6E6B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Support
            </Link>
            {donationUrl ? (
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-soft rounded-full bg-[#6F1D1B] px-3 py-1.5 text-[13px] font-medium text-stone-50 hover:bg-[#5B1716] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                Donate
              </a>
            ) : null}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="link-soft inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white hover:bg-[#0F66D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
            >
              <FacebookLogo className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav
          ref={mobileNavRef}
          className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-3 lg:hidden"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
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
          <Link
            href="/contact"
            className="link-soft shrink-0 snap-start rounded-full border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
          >
            Contact
          </Link>
          <Link
            href="/preservation#current-needs"
            className="link-soft shrink-0 snap-start rounded-full border border-[#B08D3C] bg-[#F6E6B8]/60 px-3 py-2 text-sm font-medium text-stone-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
          >
            Support
          </Link>
          {donationUrl ? (
            <a
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-soft shrink-0 snap-start rounded-full bg-[#6F1D1B] px-3 py-2 text-sm font-medium text-stone-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Donate
            </a>
          ) : null}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="link-soft inline-flex shrink-0 snap-start items-center gap-2 rounded-full bg-[#1877F2] px-3 py-2 text-sm font-medium text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
          >
            <FacebookLogo className="h-4 w-4" />
            Facebook
          </a>
        </nav>
      </div>
    </header>
  );
}

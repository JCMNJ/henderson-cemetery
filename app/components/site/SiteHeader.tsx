"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobilePanelId = useId();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={[
        "border-b border-[#d8d1bd] bg-[#f3efdf]/95 shadow-[0_1px_0_rgba(51,71,80,0.08)]",
        sticky ? "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#f3efdf]/90" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-4">
            <span className="relative h-[3.25rem] w-[4.85rem] shrink-0 sm:h-[3.75rem] sm:w-[5.6rem]">
              <Image
                src="/images/henderson-logo.png"
                alt="Henderson Cemetery"
                fill
                sizes="(min-width: 640px) 90px, 78px"
                className="object-contain mix-blend-multiply"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block max-w-[12rem] font-serif text-base font-semibold leading-tight text-stone-900 min-[390px]:max-w-[15rem] min-[390px]:text-lg sm:max-w-none sm:text-2xl">
                750 Gulf Lab Road, Cheswick, PA 15024
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

          <div ref={mobileMenuRef} className="lg:hidden">
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls={mobilePanelId}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-[#243A2E] shadow-sm transition hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
            >
              <span>Menu</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileMenuOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>

            {mobileMenuOpen ? (
              <div
                id={mobilePanelId}
                className="absolute inset-x-0 top-full z-50 mt-2 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[1.25rem] bg-white p-3 shadow-2xl shadow-[#243A2E]/20 ring-1 ring-[#D8D4C8]"
              >
                <nav aria-label="Mobile primary navigation" className="grid gap-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={[
                          "flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]",
                          active
                            ? "bg-[#243A2E] text-white"
                            : "text-[#243A2E] hover:bg-[#F7F6F1]",
                        ].join(" ")}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                <div
                  className="mt-3 grid grid-cols-[1fr_1fr_auto] items-center gap-2 border-t border-[#D8D4C8] pt-3"
                  aria-label="Mobile utility links"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-11 items-center justify-center rounded-full border border-stone-300 px-3 text-sm font-semibold text-stone-700 transition hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/preservation#current-needs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-11 items-center justify-center rounded-full border border-[#B08A3E] bg-[#F6E6B8]/80 px-3 text-sm font-semibold text-[#243A2E] transition hover:bg-[#F6E6B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                  >
                    Support
                  </Link>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:bg-[#0F66D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                  >
                    <FacebookLogo className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

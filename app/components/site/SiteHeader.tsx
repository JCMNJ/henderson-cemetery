"use client";

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
        "border-b border-[#B08A3E] bg-[#063F22] text-[#F5EFD8] shadow-[0_1px_0_rgba(176,138,62,0.35)]",
        sticky ? "sticky top-0 z-50" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
          <Link href="/" className="flex min-w-0 max-w-[calc(100%-3.5rem)] items-center gap-2 overflow-hidden sm:gap-4 lg:max-w-none">
            <span
              className="h-10 w-[3.3rem] shrink-0 bg-[#F5EFD8] [mask-image:url('/images/henderson-monogram.png')] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center] sm:h-[3.75rem] sm:w-[4.95rem]"
              aria-hidden="true"
            >
              <span className="sr-only">Henderson Cemetery</span>
            </span>
            <span className="min-w-0">
              <span className="block font-serif text-base font-bold uppercase leading-none tracking-normal text-[#F5EFD8] min-[390px]:text-lg sm:text-3xl lg:text-[1.7rem]">
                Henderson Cemetery
              </span>
              <span className="mt-1 block max-w-[9rem] border-t border-[#B08A3E]/70 pt-1 font-serif text-xs font-semibold leading-tight text-[#F5EFD8]/90 min-[390px]:text-sm sm:max-w-none sm:text-2xl lg:text-xl">
                <span className="block">750 Gulf Lab Road</span>
                <span className="block whitespace-nowrap">Cheswick, PA 15024</span>
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
                    "link-soft rounded-full px-2.5 py-1.5 text-[13px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFD8]",
                    active
                      ? "bg-[#F5EFD8] text-[#063F22]"
                      : "text-[#F5EFD8]/85 hover:bg-[#F5EFD8]/10 hover:text-[#F5EFD8]",
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
              className="link-soft rounded-full border border-[#B08A3E]/70 px-3 py-1.5 text-[13px] text-[#F5EFD8]/90 hover:bg-[#F5EFD8]/10 hover:text-[#F5EFD8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFD8]"
            >
              Contact
            </Link>
            <Link
              href="/preservation#current-needs"
              className="link-soft rounded-full border border-[#B08A3E] bg-[#B08A3E]/20 px-3 py-1.5 text-[13px] font-medium text-[#F5EFD8] hover:bg-[#B08A3E]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFD8]"
            >
              Support
            </Link>
            {donationUrl ? (
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-soft rounded-full bg-[#F5EFD8] px-3 py-1.5 text-[13px] font-medium text-[#063F22] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                Donate
              </a>
            ) : null}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="link-soft inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#B08A3E]/70 text-[#F5EFD8] hover:bg-[#F5EFD8]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFD8]"
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
              className={[
                "inline-flex min-h-11 items-center gap-2 rounded-full border border-[#B08A3E] bg-[#F5EFD8] px-3 py-2 text-sm font-semibold text-[#063F22] shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFD8] min-[430px]:px-4",
                mobileMenuOpen ? "fixed right-5 top-3 z-[70]" : "relative z-10",
              ].join(" ")}
            >
              <span className="sr-only min-[430px]:not-sr-only">Menu</span>
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

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className={[
                "fixed inset-0 z-[55] bg-[#063F22]/50 transition-opacity duration-200",
                mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
              ].join(" ")}
            />

            <div
              id={mobilePanelId}
              className={[
                "fixed right-0 top-0 z-[60] flex h-dvh w-[min(82vw,22rem)] max-w-full flex-col overflow-y-auto bg-white shadow-2xl shadow-[#063F22]/25 ring-1 ring-[#D8D4C8] transition-transform duration-300 ease-out",
                mobileMenuOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
              ].join(" ")}
              aria-hidden={!mobileMenuOpen}
            >
              <div className="bg-[#063F22] px-5 py-4 text-[#F5EFD8] ring-1 ring-[#B08A3E]">
                <div className="flex items-start gap-3 pr-12">
                  <span
                    className="h-12 w-16 shrink-0 bg-[#F5EFD8] [mask-image:url('/images/henderson-monogram.png')] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-xl font-bold uppercase leading-none tracking-normal">
                      Henderson Cemetery
                    </p>
                    <p className="mt-1 border-t border-[#B08A3E]/70 pt-1 font-serif text-sm font-semibold leading-tight text-[#F5EFD8]/90">
                      <span className="block">750 Gulf Lab Road</span>
                      <span className="block whitespace-nowrap">Cheswick, PA 15024</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-4 py-4">
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
                          "flex min-h-12 items-center rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]",
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
                  className="mt-4 grid gap-2 border-t border-[#D8D4C8] pt-4 min-[380px]:grid-cols-[1fr_1fr_auto] min-[380px]:items-center"
                  aria-label="Mobile utility links"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-3 text-sm font-semibold text-stone-700 transition hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/preservation#current-needs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-12 items-center justify-center rounded-full border border-[#B08A3E] bg-[#F6E6B8]/80 px-3 text-sm font-semibold text-[#243A2E] transition hover:bg-[#F6E6B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
                  >
                    Support
                  </Link>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:bg-[#0F66D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E] justify-self-center"
                  >
                    <FacebookLogo className="h-5 w-5" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

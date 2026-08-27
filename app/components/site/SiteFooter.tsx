import Link from "next/link";
import Image from "next/image";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=750%20Gulf%20Lab%20Road%2C%20Cheswick%2C%20PA%2015024";
const facebookUrl = "https://www.facebook.com/profile.php?id=100057152182753";

export function SiteFooter() {
  const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL?.trim();

  return (
    <footer className="border-t border-[#d8d1bd] bg-[#f3efdf] px-5 py-8 text-stone-800 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link href="/" className="relative block h-20 w-[7.45rem] shrink-0">
            <Image
              src="/images/henderson-logo.png"
              alt="Henderson Cemetery"
              fill
              sizes="119px"
              className="object-contain mix-blend-multiply"
            />
          </Link>
          <div>
            <p className="font-serif text-base font-semibold text-stone-900">
              <span className="block">750 Gulf Lab Road</span>
              <span className="block">Cheswick, PA 15024</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-stone-600">
            <Link
              href="/contact"
              className="underline decoration-stone-400 underline-offset-4 hover:text-[#173f18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f32]"
            >
              Contact
            </Link>
            <Link
              href="/preservation#current-needs"
              className="underline decoration-stone-400 underline-offset-4 hover:text-[#173f18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f32]"
            >
              Support
            </Link>
            {donationUrl ? (
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-stone-400 underline-offset-4 hover:text-[#173f18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f32]"
              >
                Donate
              </a>
            ) : null}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-400 underline-offset-4 hover:text-[#173f18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f32]"
            >
              Get Directions
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-400 underline-offset-4 hover:text-[#173f18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f32]"
            >
              Facebook
            </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <p className="font-serif text-stone-900">Preserving Our History</p>
          <p className="text-xs text-stone-600">
            Digital preservation by{" "}
            <Link
              href="https://www.jcmnj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-400 underline-offset-4 hover:text-[#173f18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f32]"
            >
              JCMNJ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

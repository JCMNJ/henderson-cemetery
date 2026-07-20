import Link from "next/link";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=40.54480%2C-79.82320";
const facebookUrl = "https://www.facebook.com/profile.php?id=100057152182753";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 px-5 py-8 text-stone-300 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p>Henderson Cemetery · Harmarville, Pennsylvania</p>
          <div className="mt-2 flex flex-wrap gap-4 text-xs text-stone-400">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-600 underline-offset-4 hover:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Get Directions
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-600 underline-offset-4 hover:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <p>Preserving Our History</p>
          <p className="text-xs text-stone-400">
            Digital preservation by{" "}
            <Link
              href="https://www.jcmnj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-600 underline-offset-4 hover:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              JCMNJ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

const facebookUrl = "https://www.facebook.com/profile.php?id=100057152182753";
const pagePluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  facebookUrl,
)}&tabs=timeline&width=500&height=520&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;

export function FacebookLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

export function FacebookFollow({
  showFeed = false,
  className = "",
}: {
  showFeed?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {showFeed ? (
        <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-xl shadow-[#243A2E]/10 ring-1 ring-[#D8D4C8]">
          <div className="flex items-center justify-between gap-4 bg-[#1877F2] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <FacebookLogo className="h-6 w-6" />
              <p className="text-sm font-semibold">Facebook Updates</p>
            </div>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#1877F2] hover:bg-[#EEF4FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Follow
            </a>
          </div>
          <div className="relative min-h-[520px] bg-[#F7F6F1]">
            <iframe
              title="Henderson Cemetery Facebook timeline"
              src={pagePluginUrl}
              width="500"
              height="520"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="h-[520px] w-full border-0"
            />
          </div>
        </div>
      ) : null}

      <div className={showFeed ? "mt-4" : ""}>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Henderson Cemetery on Facebook"
          className="group flex items-center gap-4 rounded-[1.5rem] bg-white p-5 shadow-lg shadow-[#243A2E]/10 ring-1 ring-[#D8D4C8] transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white">
            <FacebookLogo className="h-7 w-7" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-[#243A2E]">
              Follow Henderson Cemetery
            </span>
            <span className="mt-1 block text-sm leading-6 text-[#77746C]">
              See association updates, work days, and cemetery notices on the
              verified Facebook page.
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

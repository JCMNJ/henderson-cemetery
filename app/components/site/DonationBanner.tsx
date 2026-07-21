export function DonationBanner() {
  const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL?.trim();

  return (
    <section className="section-reveal mx-auto mt-10 mb-6 w-full max-w-6xl px-4 sm:mb-8 sm:px-6">
      <div className="rounded-3xl border border-[#8B8E75] bg-[#68604D] p-4 shadow-sm sm:p-7">
        <p className="text-xs uppercase tracking-[0.22em] text-[#F7F6F0]">
          Preservation Support
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-[#F8F6EF] sm:text-3xl">
          Henderson Cemetery is maintained through volunteer care and donations.
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-[#F7F6F0] sm:text-base">
          Donations help support mowing, stone care, record preservation, and
          ongoing maintenance.
        </p>
        {!donationUrl ? (
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#F7F6F0]">
            Online donation options will be available in the future.
          </p>
        ) : null}
        <p className="mt-4 text-sm leading-7 text-[#F7F6F0]">
          Harmarville Cemetery Association
          <br />
          c/o David Campbell
          <br />
          505 Bicker Rd
          <br />
          Cabot, PA 16023
        </p>
        {donationUrl ? (
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-soft inline-flex w-full justify-center rounded-full border border-[#F7F6F0] bg-[#F7F6F0] px-5 py-3 text-sm font-medium text-[#68604D] hover:bg-[#F1ECDD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F6F0] sm:w-auto"
            >
              Donate Online
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

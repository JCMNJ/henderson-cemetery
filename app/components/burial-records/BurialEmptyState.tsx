export function BurialEmptyState() {
  return (
    <div className="bg-white px-5 py-8 text-center sm:px-6">
      <p className="font-serif text-3xl font-semibold text-[#243A2E]">
        No matching records found.
      </p>
      <p className="mt-3 text-sm leading-6 text-[#514B42]">
        Check another spelling or share a correction question with the association.
      </p>
      <a
        href="/contact#association-contact"
        className="mt-5 inline-flex rounded-full bg-[#702F35] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5D252B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
      >
        Submit a Correction or Question
      </a>
    </div>
  );
}

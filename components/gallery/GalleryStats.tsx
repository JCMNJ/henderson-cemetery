type GalleryStatsProps = {
  photographCount: number;
};

export function GalleryStats({ photographCount }: GalleryStatsProps) {
  const stats = [
    {
      label: "Photographs",
      value: photographCount.toLocaleString(),
      detail: "Images in the public archive",
    },
    {
      label: "Burial Records",
      value: "1,223+",
      detail: "Documented cemetery records",
    },
    {
      label: "Years Represented",
      value: "200+ Years",
      detail: "Local family and preservation history",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="card-soft rounded-2xl border border-stone-300 bg-stone-50/90 px-5 py-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.16em] text-stone-500">{stat.label}</p>
          <p className="mt-2 font-serif text-3xl font-semibold text-stone-900">{stat.value}</p>
          <p className="mt-2 text-sm leading-6 text-stone-600">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}

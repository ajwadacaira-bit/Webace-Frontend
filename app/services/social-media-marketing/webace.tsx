export default function WhyChooseWebAce() {
  const points = [
    "Emotional storytelling",
    "Data-driven strategy",
    "Design excellence",
    "Deep audience insights",
    "Human-first engagement",
    "Full transparency",
  ];

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-14">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white">
            Why Choose WebAce?
          </h2>

          <p className="font-inter text-xl text-stone-300 max-w-3xl mx-auto">
            We don’t just manage social media — we build brands people care about.
          </p>
        </div>

        {/* PILL GRID */}
        <div className="w-full max-w-6xl flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6">
            {points.slice(0, 3).map((item, idx) => (
              <Pill key={idx} label={item} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6">
            {points.slice(3).map((item, idx) => (
              <Pill key={idx} label={item} />
            ))}
          </div>
        </div>

        {/* FOOTER LINE */}
        <p className="font-inter text-xl text-white text-center max-w-3xl">
          Your brand becomes relatable, memorable, and consistent everywhere.
        </p>

      </div>
    </section>
  );
}

/* -------------------- */
/* Helper Component     */
/* -------------------- */

function Pill({ label }: { label: string }) {
  return (
    <div className="bg-white rounded-full shadow-[0_0_6px_rgba(151,151,151,0.25)] px-6 py-3 flex items-center justify-center">
      <span className="font-inter text-lg text-black capitalize text-center">
        {label}
      </span>
    </div>
  );
}

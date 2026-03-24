import Link from "next/link";

export default function AwarenessFramework() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-16">

        {/* HEADER */}
        <div className="text-center space-y-6">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-black leading-tight">
            How Social Media Builds Brand Awareness & Engagement
          </h2>

          <p className="font-syne text-2xl md:text-3xl text-black">
            This is where your brand comes alive.
          </p>

          <div className="h-px w-full bg-[#DADEE0]" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.no}
              className="rounded-xl bg-white shadow-[0_0_10px_rgba(116,116,116,0.25)] p-6 flex flex-col gap-4"
            >
              {/* NUMBER */}
              <div className="flex justify-end items-center gap-4">
                <div className="flex-1 h-px bg-[#DADEE0]" />
                <span className="text-4xl font-inter text-zinc-500">
                  {card.no}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-inter text-black capitalize">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-base font-inter text-zinc-500">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h3 className="font-syne text-3xl text-black">
            Want your brand to stay top-of-mind?
          </h3>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 rounded-full bg-black px-14 py-3.5 text-xl text-white hover:opacity-90 transition"
            >
              Schedule a Brand Awareness Strategy
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                →
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* -------------------- */
/* DATA (Clean & Reusable) */
/* -------------------- */

const CARDS = [
  {
    no: "01",
    title: "Strong Visual Identity",
    desc: "Colors, styles, formats — everything tailored for recall.",
  },
  {
    no: "02",
    title: "Consistent Presence",
    desc: "Your brand shows up weekly, consistently.",
  },
  {
    no: "03",
    title: "Emotional Storytelling",
    desc: "Human-centered messaging that builds trust.",
  },
  {
    no: "04",
    title: "Interactive Content",
    desc: "Polls, Q&As, carousels, reels, UGC-based posts.",
  },
  {
    no: "05",
    title: "Platform-Specific Strengths",
    desc: "Using each channel’s best features for visibility & engagement.",
  },
  {
    no: "06",
    title: "Smart Trend Integration",
    desc: "Relevant, purposeful trend usage without losing brand essence.",
  },
];

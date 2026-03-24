import Link from "next/link";

export default function WhySocialMediaMatters() {
  const traits = [
    "Recognizable",
    "Trusted",
    "Memorable",
    "Relatable",
    "Engaging",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-16">

        {/* HEADINGS */}
        <div className="text-center max-w-4xl space-y-6">
          <h2 className="font-syne text-3xl md:text-4xl text-black">
            Why Social Media Matters for Awareness & Engagement
          </h2>

          <h3 className="font-syne text-4xl md:text-5xl font-bold text-blue-600">
            People don’t just follow brands…
          </h3>

          <p className="font-syne text-2xl md:text-3xl text-black">
            They follow stories. Personalities. Emotions. Experiences
          </p>
        </div>

        {/* DIVIDER */}
        <div className="w-full border-t-2 border-[#DADEE0]" />

        {/* SUB HEADING */}
        <h4 className="font-syne text-2xl md:text-3xl font-semibold text-center">
          When your social presence is strong, your brand becomes:
        </h4>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {traits.map((item) => (
            <div
              key={item}
              className="h-48 rounded-2xl bg-white shadow-[0_0_6px_rgba(55,55,55,0.25)]
                         flex flex-col justify-between p-5"
            >
              <div className="h-16 w-16 rounded-full bg-blue-600" />
              <div className="font-syne text-2xl text-black">
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* STATEMENT */}
        <div className="text-center max-w-4xl space-y-4">
          <p className="font-syne text-xl md:text-2xl">
            Your brand becomes more than content,
            <span className="font-semibold">
              {" "}it becomes a part of your audience’s daily life.
            </span>
          </p>

          <p className="font-syne text-xl md:text-2xl">
            Ready to amplify your brand visibility?
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="group inline-flex items-center gap-6
                     rounded-full bg-black px-16 py-4 transition hover:bg-gray-900"
        >
          <span className="font-inter text-lg text-white">
            Request a Free Awareness Audit
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M14 5l5 7-5 7" />
            </svg>
          </span>
        </Link>

      </div>
    </section>
  );
}

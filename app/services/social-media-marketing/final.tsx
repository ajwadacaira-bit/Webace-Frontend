import Link from "next/link";

export default function FinalCTA() {
  const bullets = [
    "Your audience is scrolling right now.",
    "Your competitors are posting.",
    "Your opportunity is waiting.",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">

        {/* HEADING */}
        <h2 className="text-center font-syne text-4xl md:text-5xl font-semibold text-black">
          Let’s Build Your Brand Presence on Social Media
        </h2>

        {/* BULLETS */}
        <div className="flex flex-col items-center gap-2">
          {bullets.map((text) => (
            <p
              key={text}
              className="text-center font-inter text-lg text-black"
            >
              {text}
            </p>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CTAButton
            label="Speak With a Social Media Strategist"
            href="/contact"
          />

          <CTAButton
            label="Request a Custom Proposal"
            href="/contact"
          />

          <CTAButton
            label="Start Your Brand Growth Journey"
            href="/contact"
          />
        </div>

      </div>
    </section>
  );
}

/* -------------------- */
/* Helper Component     */
/* -------------------- */

function CTAButton({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-4 rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white"
    >
      <span className="font-inter text-base text-center">
        {label}
      </span>

      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-black">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M14 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

import Link from "next/link";

export default function PlatformsWeManage() {
  const platforms = [
    "Instagram",
    "Facebook",
    "LinkedIn",
    "YouTube",
    "TikTok",
    "Twitter / X",
    "Pinterest",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-16">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-black capitalize">
            Platforms We Manage
          </h2>

          <p className="font-inter text-xl text-zinc-600">
            Each platform has unique behavior — we tailor your strategy accordingly.
          </p>
        </div>

        {/* PLATFORM STRIP */}
        <div className="bg-black rounded-md shadow-[0_0_10px_rgba(116,116,116,0.25)] px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {platforms.map((platform, index) => (
              <div key={platform} className="flex items-center gap-8">
                <span className="font-inter text-xl text-white capitalize">
                  {platform}
                </span>

                {index !== platforms.length - 1 && (
                  <span className="hidden sm:block h-4 w-px bg-[#DADEE0]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-[#DADEE0]" />

        {/* FOOTER TEXT */}
        <div className="text-center space-y-4">
          <p className="font-inter text-xl text-zinc-500">
            Your brand becomes visible where your audience already spends time.
          </p>

          <p className="font-inter text-xl text-black">
            Not sure which platform is right for your brand?
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-6 rounded-full bg-black px-14 py-3.5 text-xl text-white hover:opacity-90 transition"
          >
            Schedule a Platform Consultation
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

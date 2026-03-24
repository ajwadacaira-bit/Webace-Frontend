import Image from "next/image";
import Link from "next/link";

export default function WhenSMMIsRight() {
  const points = [
    "Build brand awareness",
    "Increase audience interactions",
    "Strengthen recall & identity",
    "Grow your digital presence",
    "Build a community",
    "Develop an emotional brand voice",
    "Introduce or relaunch your brand",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-16">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="font-syne text-4xl md:text-5xl font-semibold text-black">
            When Social Media Marketing Is Right for You
          </h2>

          <p className="font-inter text-2xl text-black">
            Choose this service if you want to:
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LIST */}
          <ul className="space-y-6">
            {points.map((item) => (
              <li
                key={item}
                className="text-xl font-inter text-black"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* IMAGE */}
          <div className="relative w-full h-[420px] rounded-md overflow-hidden">
            <Image
              src="/images/smm-use-cases.jpg"
              alt="Social media marketing use cases"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h3 className="font-inter text-3xl text-black">
            Is Social Media Marketing right for your business?
          </h3>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 rounded-full bg-black px-16 py-3.5 text-xl text-white hover:opacity-90 transition"
            >
              Get a Free Recommendation
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

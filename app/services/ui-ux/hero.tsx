"use client";

import Image from "next/image";

export default function UiUxHero() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Design Digital Experiences That Build Trust, Improve Engagement and Convert Users Into Customers
          </h1>

          {/* Paragraphs */}
          <div className="mt-8 space-y-5 text-gray-300 text-lg leading-relaxed">

            <p>
              A great product or service is not enough. Your customers judge your
              brand within seconds based on how it looks, how intuitive it feels
              and how easily they can navigate your digital experience.
            </p>

            <p>
              UI UX is not only design. It is communication, psychology, visual
              clarity, brand consistency and user satisfaction woven together.
            </p>

            <p>
              It determines whether users stay or exit, explore or abandon,
              trust or hesitate, convert or drop off.
            </p>

            <p>
              At WebAce, our UI UX category brings together brand identity,
              digital visibility, multi platform design, creative expression and
              conversion focused experiences.
            </p>

            <p>
              We help brands look premium, feel intuitive and perform at the
              highest standard across all digital touchpoints.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-10">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
              Get Your UI UX Strategy →
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[420px] w-full rounded-2xl overflow-hidden">

          <Image
            src="/images/ui.jpg"
            alt="UI UX Design Strategy"
            fill
            className="object-cover"
            priority
          />

        </div>

      </div>
    </section>
  );
}
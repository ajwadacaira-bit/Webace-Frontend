"use client";

export default function ConsultationHero() {
  return (
    <section className="bg-black text-white py-36 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Service Label */}
        <p className="uppercase tracking-widest text-blue-400 text-sm font-medium mb-6">
          Digital Consultation
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Understand Your Business Better. Solve Real Challenges. Build a Clear
          Digital Roadmap That Drives Growth.
        </h1>

        {/* Content */}
        <div className="mt-10 space-y-6 text-lg text-gray-300 leading-relaxed">

          <p>
            Every brand has a digital presence, but not every brand has digital clarity.
            In a world where every action online influences visibility, trust and revenue,
            businesses often struggle with one basic question:
          </p>

          <p className="text-white font-medium text-xl">
            “What should we actually do to grow?”
          </p>

          <p>
            Digital Consultation is designed to answer that question with precision,
            strategy and a clear path forward.
          </p>

          <p>
            At WebAce, Digital Consultation is not a generic advice service.
            It is a structured, insight driven and business friendly approach
            where we understand your challenges, diagnose your current situation
            and craft a focused, sustainable roadmap that helps you grow, scale
            and perform better online.
          </p>

          <p>
            Our consultation combines experience, data, creativity and practical
            execution guidance to help businesses make smarter digital decisions.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-blue-500 hover:text-white transition">
            Get Your Digital Consultation Session →
          </button>
        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function DisplayAdsApproachSection() {
  return (
    <main className="bg-white px-6 md:px-12 lg:px-20 py-28">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] mb-6">
            Our Display Ads Approach for{" "}
            <span className="text-blue-600">Awareness & Engagement</span>
          </h2>

          <p className="font-kanit text-lg md:text-xl text-gray-600 mb-4">
            Precision Targeting. Creative Excellence. Massive Reach.
          </p>

          <p className="font-inter text-gray-600 text-base md:text-lg leading-[1.8] max-w-3xl mx-auto">
            Brand awareness is not about showing ads to everyone. It is about reaching the right audience, repeatedly, with the right creative impact.
          </p>

          <p className="font-inter text-gray-600 text-base md:text-lg leading-[1.8] max-w-3xl mx-auto mt-3">
            WebAce follows a structured, analytical, and creative approach tailored for visibility & engagement:
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="space-y-20">

          {[
            {
              title: "1. Audience Understanding & Target Research",
              content: [
                "Who needs to see your brand",
                "Which platforms they use",
                "What content they interact with",
                "What visual styles influence them",
              ],
              closing:
                "This gives us the foundation to deliver visibility that matters - not wasted impressions.",
            },
            {
              title: "2. Creative-Led Display Design",
              content: [
                "High-impact banners",
                "Motion graphics",
                "Responsive ad formats",
                "Story-driven concepts",
                "Identity-focused designs",
              ],
              closing: "Your ads don’t just appear - they stand out.",
            },
            {
              title: "3. Multi-Platform Display Distribution",
              content: [
                "Google Display Network (millions of websites)",
                "Premium publisher platforms",
                "News & media sites",
                "Mobile apps",
                "YouTube placements",
                "High-engagement content categories",
              ],
              closing:
                "Your presence becomes widespread, influence-driven, and consistent.",
              cta: "👉 Need powerful display creatives? Get a Free Creative Audit",
            },
            {
              title: "4. AI-Driven Targeting & Smart Placements",
              content: [
                "Interests",
                "Behaviors",
                "Browsing patterns",
                "Content categories",
                "Competitor audiences",
                "Demographics",
                "Lookalike audiences",
              ],
              closing:
                "Your brand gets placed where your audience is already active.",
            },
            {
              title: "5. Frequency-Based Awareness Strategy",
              content: [
                "Reach",
                "Frequency",
                "Creative variation",
                "Time segmentation",
                "Device optimization",
              ],
              closing:
                "This ensures your brand becomes familiar, recognizable, and memorable.",
            },
            {
              title: "6. Engagement Enhancement",
              content: [
                "Interactive ad formats",
                "Motion elements",
                "Rich media ads",
                "Call-to-interaction creatives",
              ],
              closing:
                "These formats encourage audience engagement, increasing time spent with your brand.",
              cta: "👉 Want interactive display ads that engage? Speak With Our Display Experts",
            },
            {
              title: "7. Continuous Optimization & Scaling",
              content: [
                "Impressions",
                "Viewability",
                "Click-through interactions",
                "Engagement metrics",
                "Placement quality",
                "Frequency capping",
                "Creative performance",
              ],
              closing:
                "Then we refine and scale what works - ensuring results improve week after week.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* card */}
              <div
                className={`group relative rounded-3xl p-8 md:p-10 shadow-sm transition-all duration-500 overflow-hidden border ${
                    step.cta
                    ? "border-gray-200 hover:border-transparent hover:shadow-2xl"
                    : "border-gray-200 hover:shadow-xl"
                }`}
                >

                {/* gradient hover background (only for CTA cards) */}
                {step.cta && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-black via-neutral-900 to-black"></div>
                )}

                {/* content wrapper */}
                <div className="relative z-10">

                {/* title */}
                <h3
                    className={`font-syne text-2xl md:text-3xl font-semibold mb-6 leading-[1.35] transition-colors duration-300 ${
                        step.cta ? "group-hover:text-white" : ""
                    }`}
                >
                    {step.title}
                </h3>
                 

                {/* bullets */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {step.content.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                      <p
                        className={`font-inter text-gray-700 text-base md:text-lg leading-[1.9] transition-colors duration-300 ${
                            step.cta ? "group-hover:text-gray-300" : ""
                        }`}
                        >
                        {item}
                        </p>
                    </div>
                  ))}
                </div>

                {/* closing */}
                <p
                    className={`font-inter text-gray-600 text-base md:text-lg leading-[1.9] transition-colors duration-300 ${
                        step.cta ? "group-hover:text-gray-400" : ""
                    }`}
                >
                    {step.closing}
                </p>

                {/* CTA inside step */}
                {step.cta && (
                  <div className="mt-8">
                    <button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-inter px-8 py-3 rounded-full shadow-md hover:shadow-blue-500/30 transition-all duration-300">

                      <span className="relative z-10">
                        {step.cta}
                      </span>

                      <span className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white blur-xl transition duration-500"></span>

                    </button>
                  </div>
                )}
              </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </main>
  );
}
"use client";

import { motion } from "framer-motion";

export default function DisplayAdsWhySection() {
  return (
    <main className="relative bg-white text-black px-6 md:px-12 lg:px-20 py-28 overflow-hidden">

      {/* subtle premium background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.3] mb-6">
            Why Display Ads Matter for{" "}
            <span className="text-blue-600">Brand Awareness</span>
          </h2>

          <p className="font-inter text-gray-600 text-base md:text-lg leading-[1.8]">
            Display Ads give your brand the spotlight it deserves.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Introduce your brand to new audiences",
            "Build top-of-funnel visibility",
            "Strengthen recall through repeated exposure",
            "Position your brand as credible and established",
            "Reach users across millions of publisher networks",
            "Create visual impact through compelling creatives",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative border border-gray-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 text-center"
            >
              <p className="font-inter text-gray-700 text-base md:text-lg leading-[1.8]">
                {item}
              </p>

              {/* animated gradient underline */}
              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto transition-all duration-300 group-hover:w-3/4"></div>
            </motion.div>
          ))}

        </div>

        {/* CLOSING TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 space-y-5"
        >
          <p className="font-inter text-gray-600 text-base md:text-lg leading-[1.8]">
            This is the stage where people get to know you, recognize you, and remember you.
          </p>

          <p className="font-inter text-gray-600 text-base md:text-lg leading-[1.8]">
            A strong display strategy means your brand becomes a familiar name — not a random link.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white font-inter font-medium px-10 py-4 rounded-full text-sm md:text-base shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">

            {/* glow layer */}
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></span>

            {/* text */}
            <span className="relative z-10">
              👉 Ready to make your brand impossible to ignore? Get Your Visibility Plan
            </span>

          </button>
        </motion.div>

      </div>

    </main>
  );
}
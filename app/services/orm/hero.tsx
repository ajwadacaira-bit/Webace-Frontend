"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-black text-white py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* HEADLINE */}
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Protect Your Brand, Shape Public Perception and Build{" "}
              <span className="text-blue-500">
                Trust That Drives Growth
              </span>
            </h1>

            {/* BODY */}
            <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed mb-10">

              <p>
                In the digital world, perception shapes reality.
              </p>

              <p>
                People do not judge your brand only by what you say.
                They judge it by what they see, what they read, what others say and what appears when they search your name.
              </p>

              <p>
                Trust is built through Google results, social conversations, reviews, ratings, content and customer experiences.
              </p>

              <p>
                This makes Online Reputation Management a mission critical part of your brand’s growth.
              </p>

              <p>
                ORM is not just repairing negativity.
                It is protecting your credibility.
                It is shaping your narrative.
                It is building digital trust that directly influences conversions, sales and long term relationships.
              </p>

              <p>
                At WebAce, ORM is the system that ensures your brand is represented accurately, positively and professionally across every touchpoint.
              </p>

            </div>

            {/* CTA */}
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-sm md:text-base font-medium transition hover:bg-white hover:text-black">
              Get Your ORM Strategy →
            </button>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/rep.jpg"   // replace with your actual image
              alt="Online Reputation Management Strategy"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
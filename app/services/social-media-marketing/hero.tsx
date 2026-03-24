"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // ✅ REQUIRED format
    },
  },
};

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const, // ✅ REQUIRED
    },
  },
};
 
export default function MarketingHero() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-start gap-24"
        >

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <motion.h1
              variants={fadeUp}
              className="font-syne text-white text-4xl md:text-5xl lg:text-6xl leading-tight font-bold"
            >
              WebAce builds social media strategies that drive real growth.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/80 text-lg md:text-xl font-kanit"
            >
              We plan, create, and optimize high-performance social media campaigns
              that turn attention into measurable results — without noise, without guesswork.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-8">
              <a
                href="/contact"
                className="rounded-full bg-[#4A5D70] px-8 py-4 text-white font-kanit text-sm"
              >
                Get a Free Strategy
              </a>

              <a
                href="/pricing"
                className="flex items-center gap-4 text-white font-kanit text-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A5D70]">
                  →
                </span>
                View Pricing
              </a>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual">
            <div className="hero-image">
              <img
                src="/images/marketing-hero1.jpg"
                alt="Team working"
              />
            </div>






            {/* GAP CIRCLE */}
            <span className="hero-circle" />

            {/* CARDS */}
            <div className="hero-cards">
              <div className="hero-card">
                <div className="hero-card-icon"><KnightIcon /></div>
                <p className="text-white text-sm">Social Media Strategy</p>
              </div>

              <div className="hero-card">
                <div className="hero-card-icon"><AnalyticsIcon /></div>
                <p className="text-white text-sm">Growth & Analytics</p>
              </div>

              <div className="hero-card">
                <div className="hero-card-icon"><LayersIcon /></div>
                <p className="text-white text-sm">Content Execution</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}


// ICON COMPONENTS - EXACT SIZING
function KnightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 21h10v-2H9.6c.2-1.2.7-2.3 1.4-3.3l.8-1.1c.5-.7.8-1.5.8-2.4V10l-2-1.5V6.5c0-1.4 1.1-2.5 2.5-2.5h3V2h-3c-2.5 0-4.5 2-4.5 4.5v2.6L7 11v1.2c0 1.2.4 2.4 1.2 3.3l.6.7c-.9 1.4-1.5 3-1.8 4.8H7z"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 20H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 17V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 17V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4l8 4-8 4-8-4 8-4z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 12l8 4 8-4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 16l8 4 8-4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
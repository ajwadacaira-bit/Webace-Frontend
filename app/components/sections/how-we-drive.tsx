"use client";

import { useMemo, useState } from "react";

type Step = {
  tab: string;
  title: string;
  bg: string;
  p1: string;
  p2_bold: string;
  p2_rest: string;
  p3_bold: string;
  p3_rest: string;
};

export default function HowWeDrive() {
  const steps: Step[] = useMemo(
    () => [
      {
        tab: "THE BEGINNING",
        title: "Taking The First Step",
        bg: "/images/howwedrive/beginning.jpg",
        p1:
          "Every great business starts with a dream. You’ve taken that crucial first step into the digital world, eager to share your vision with the world. But as you start to navigate the complexities of online presence, you realize it’s not just about being online—it’s about being seen, heard, and felt.",
        p2_bold: "At This Stage, WebAce is by your side.",
        p2_rest:
          " We help you build a solid foundation for Brand Awareness & Engagement—shaping your digital identity and making your brand visible to those who matter most.",
        p3_bold: "We Start By Creating Your Presence:",
        p3_rest:
          " From crafting your unique brand identity to developing engaging social media strategies, we ensure your audience connects with your story and your brand stands out.",
      },
      {
        tab: "THE JOURNEY",
        title: "Generating Leads & Building Trust",
        bg: "/images/howwedrive/journey.jpg",
        p1:
          "As your brand starts to gain traction, the next step is growth. You need leads—real, qualified people interested in what you offer. But leads aren’t just names on a list; they are relationships waiting to be nurtured.",
        p2_bold: "This is where WebAce steps in with Digital Leads Solutions.",
        p2_rest:
          " We strategically position your brand through PPC Ads, Lead Magnet Pages and Email Marketing—turning your visibility into action and your audience into potential customers.",
        p3_bold: "We Help You Grow:",
        p3_rest:
          " Through targeted campaigns like Google Ads, Meta Ads & engaging Email Marketing, we ensure the people finding you are the ones who will stay and grow with you.",
      },
      {
        tab: "THE EXPANSION",
        title: "Expanding Your Digital Presence",
        bg: "/images/howwedrive/expansion.jpg",
        p1:
          "With consistency in place, it’s time to expand across channels and strengthen authority. We scale what’s working and add new touchpoints that keep your message aligned.",
        p2_bold: "We build systems for reach & retention.",
        p2_rest:
          " Content, campaigns, creatives, and funnels—everything works together to increase reach without losing brand identity.",
        p3_bold: "We ensure every channel supports growth:",
        p3_rest:
          " so your brand feels cohesive across the entire digital journey.",
      },
      {
        tab: "THE GROWTH",
        title: "Scaling What Works",
        bg: "/images/howwedrive/growth.jpg",
        p1:
          "This is where results become repeatable. We optimize performance, improve conversion paths and focus budgets where ROI is strongest.",
        p2_bold: "We refine, test and scale intelligently.",
        p2_rest:
          " Continuous improvements across SEO, paid media, social and landing experiences drive consistent growth.",
        p3_bold: "Growth becomes predictable:",
        p3_rest:
          " because strategy is backed by data, not guesses.",
      },
      {
        tab: "THE LEGACY",
        title: "Building a Brand That Lasts",
        bg: "/images/howwedrive/legacy.jpg",
        p1:
          "When everything clicks, your brand becomes more than marketing—it becomes a legacy. People remember it, trust it, and choose it repeatedly.",
        p2_bold: "We protect and sharpen your edge.",
        p2_rest:
          " Long-term strategy, brand consistency and ongoing refinement keeps you ahead of market noise.",
        p3_bold: "Your digital empire stays strong:",
        p3_rest:
          " across trends, platforms and time.",
      },
    ],
    []
  );

  const [active, setActive] = useState(1);

  const next = () => setActive((p) => Math.min(p + 1, steps.length - 1));
  const prev = () => setActive((p) => Math.max(p - 1, 0));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* headings */}
        <div className="flex flex-col items-center gap-3.5">
          <h2 className="text-center text-black text-4xl sm:text-5xl font-bold font-nunito capitalize">
            How We Drive Your Growth
          </h2>

          <div className="text-center text-slate-600 text-2xl sm:text-3xl font-nunito capitalize">
            <span className="font-light">From </span>
            <span className="font-bold">The First Step</span>
            <span className="font-light"> To Your </span>
            <span className="font-bold">Digital Empire</span>
          </div>
        </div>

        {/* Desktop video layout */}
        <div className="mt-10 hidden lg:block">
          <div className="howdrive-wrap">
            {steps.map((s, idx) => {
              const open = idx === active;

              return (
                <div key={s.tab} className={`howdrive-item ${open ? "is-open" : ""}`}>
                  {/* BG for every panel */}
                  <div className="howdrive-bg" style={{ backgroundImage: `url(${s.bg})` }} />
                  <div className={`howdrive-overlay ${open ? "is-open" : ""}`} />

                  {/* TAB */}
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    className="howdrive-tab"
                    aria-label={`Open ${s.tab}`}
                  >
                    <span className="howdrive-tabText">{s.tab}</span>
                  </button>

                  {/* CONTENT only for open */}
                  {open && (
                    <div className="howdrive-content howdrive-panel-in">
                      <h3 className="howdrive-title font-kanit font-extrabold break-words">
                        {s.title}
                      </h3>

                      <div className="howdrive-body font-nunito text-white/90">
                        <p>{s.p1}</p>

                        <p>
                          <b className="text-white">{s.p2_bold}</b>
                          {s.p2_rest}
                        </p>

                        <p>
                          <b className="text-white">{s.p3_bold}</b>
                          {s.p3_rest}
                        </p>
                      </div>

                      {active !== 0 && (
                        <button
                          type="button"
                          onClick={prev}
                          className="howdrive-nav howdrive-nav-left"
                          aria-label="Previous"
                        >
                          ‹
                        </button>
                      )}

                      {active !== steps.length - 1 && (
                        <button
                          type="button"
                          onClick={next}
                          className="howdrive-nav howdrive-nav-right"
                          aria-label="Next"
                        >
                          ›
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ Mobile/Tablet: Premium accordion (one open at a time like desktop) */}
        <div className="mt-10 lg:hidden">
          <div className="space-y-4">
            {steps.map((s, idx) => {
              const open = idx === active;

              return (
                <div
                  key={s.tab}
                  className={`overflow-hidden rounded-2xl border transition ${
                    open ? "border-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.10)]" : "border-black/10"
                  }`}
                >
                  {/* HEADER */}
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`w-full px-4 py-4 text-left ${
                      open ? "bg-black" : "bg-black"
                    }`}
                    aria-expanded={open}
                    aria-controls={`howdrive-m-${idx}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-syne font-extrabold uppercase tracking-[0.18em] text-white/70 text-[11px]">
                          {s.tab}
                        </div>

                        <div className="mt-1 font-kanit font-semibold text-white text-[16px] leading-snug truncate">
                          {s.title}
                        </div>
                      </div>

                      {/* Chevron */}
                      <span
                        className={`shrink-0 h-11 w-11 rounded-xl border border-white/15 bg-white/10 flex items-center justify-center transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <span className="text-white text-xl leading-none">⌄</span>
                      </span>
                    </div>
                  </button>

                  {/* BODY (open/close smooth) */}
                  <div
                    id={`howdrive-m-${idx}`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.9,0.2,1)] ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="relative h-[460px] sm:h-[520px]">
                        {/* image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${s.bg})` }}
                        />
                        {/* overlay */}
                        <div className="absolute inset-0 bg-black/60" />

                        {/* content */}
                        <div className="relative z-10 h-full px-5 py-6 text-white flex flex-col justify-center">
                          <h3 className="mx-auto text-center font-kanit font-extrabold leading-tight text-[22px] sm:text-[26px] max-w-[22ch]">
                            {s.title}
                          </h3>

                          <div className="mt-5 mx-auto max-w-[520px] space-y-4 font-nunito text-[13.5px] sm:text-[14.5px] leading-[1.85] text-white/90">
                            <p>{s.p1}</p>

                            <p>
                              <span className="font-bold text-white">{s.p2_bold}</span>
                              <span>{s.p2_rest}</span>
                            </p>

                            <p>
                              <span className="font-bold text-white">{s.p3_bold}</span>
                              <span>{s.p3_rest}</span>
                            </p>
                          </div>

                          {/* arrows */}
                          <div className="absolute bottom-4 left-0 right-0 px-5 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={prev}
                              disabled={active === 0}
                              className="h-11 w-11 rounded-xl bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center active:scale-[0.98] disabled:opacity-40"
                              aria-label="Previous"
                            >
                              <span className="text-white text-2xl leading-none">‹</span>
                            </button>

                            <button
                              type="button"
                              onClick={next}
                              disabled={active === steps.length - 1}
                              className="h-11 w-11 rounded-xl bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center active:scale-[0.98] disabled:opacity-40"
                              aria-label="Next"
                            >
                              <span className="text-white text-2xl leading-none">›</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* tiny separator / breathing space */}
                      <div className="h-2 bg-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>



      </div>
    </section>
  );
}

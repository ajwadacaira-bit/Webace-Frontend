"use client";

import React, { useMemo, useState } from "react";

type TabKey = "traffic" | "leads" | "cpl" | "data" | "revenue" | "campaign";

type TabItem = {
  key: TabKey;
  label: string;
  title: string;
  desc: string;
  ctaText: string;
  ctaHref?: string;
  cards: Array<{
    id: string;
    title: string;
    // NOTE: for now keeping simple text; you can plug your SVG icons inside later
    icon?: React.ReactNode;
  }>;
};

export default function TabbingSection() {
  const tabs: TabItem[] = useMemo(
    () => [
      {
        key: "traffic",
        label: "traffic",
        title: "Boost Your Website Traffic and Visibility",
        desc:
          "Without consistent traffic, your brand is missing opportunities to convert visitors into leads. WebAce uses SEO and paid strategies to increase organic search rankings, drive relevant visitors, and improve visibility across channels.",
        ctaText: "Explore our SEO services",
        ctaHref: "#",
        cards: [
          { id: "t1", title: "Improve organic search visibility" },
          { id: "t2", title: "Reach potential customers with paid ads" },
          { id: "t3", title: "Engage users with social media campaigns" },
        ],
      },
      {
        key: "leads",
        label: "leads",
        title: "Turn Visitors Into Qualified Leads",
        desc:
          "We optimize landing pages, funnels, and ad targeting to capture high-intent leads—so your sales team spends time on real opportunities, not noise.",
        ctaText: "Explore our Lead Gen services",
        ctaHref: "#",
        cards: [
          { id: "l1", title: "High-converting landing pages" },
          { id: "l2", title: "Lead magnets & funnel strategy" },
          { id: "l3", title: "Conversion-focused ad targeting" },
        ],
      },
      {
        key: "cpl",
        label: "CPL",
        title: "Lower Cost Per Lead Without Killing Volume",
        desc:
          "We continuously test creatives, audiences, and landing pages to reduce CPL while keeping lead quality strong.",
        ctaText: "Explore performance marketing",
        ctaHref: "#",
        cards: [
          { id: "c1", title: "Creative & audience testing" },
          { id: "c2", title: "Budget optimization" },
          { id: "c3", title: "Lead quality improvement" },
        ],
      },
      {
        key: "data",
        label: "data",
        title: "Track What Matters With Clean Reporting",
        desc:
          "From GA4 events to attribution, we help you see what’s working, what’s not, and where to invest next.",
        ctaText: "Explore analytics setup",
        ctaHref: "#",
        cards: [
          { id: "d1", title: "GA4 & event tracking" },
          { id: "d2", title: "Dashboards & reporting" },
          { id: "d3", title: "Attribution & insights" },
        ],
      },
      {
        key: "revenue",
        label: "revenue",
        title: "Revenue Growth Through Full-Funnel Strategy",
        desc:
          "We connect traffic, leads, and conversion to drive measurable revenue—across organic and paid channels.",
        ctaText: "Explore growth strategy",
        ctaHref: "#",
        cards: [
          { id: "r1", title: "Full-funnel optimization" },
          { id: "r2", title: "Conversion rate improvements" },
          { id: "r3", title: "Retention & remarketing" },
        ],
      },
      {
        key: "campaign",
        label: "campaign management",
        title: "Campaign Management That Actually Performs",
        desc:
          "End-to-end campaign planning, execution, and optimization—so you get results without the day-to-day chaos.",
        ctaText: "Explore campaign management",
        ctaHref: "#",
        cards: [
          { id: "cm1", title: "Planning & execution" },
          { id: "cm2", title: "Creative direction" },
          { id: "cm3", title: "Optimization & scaling" },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState<TabKey>("traffic");
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-[1234px] px-4">
        {/* Outer container (Figma shadow / spacing) */}
        <div className="w-full rounded-[20px] bg-white py-12 shadow-[0px_0px_10px_0px_rgba(116,116,116,0.25)]">
          <div className="flex flex-col items-center gap-14">
            {/* Tabs */}
            <div className="w-full px-6">
              <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-[40px] bg-black px-4 py-2.5">
                {tabs.map((t) => {
                  const isActive = t.key === active;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActive(t.key)}
                      className={[
                        "rounded-[40px] px-5 py-2.5 transition",
                        "text-white/90 hover:text-white",
                        isActive ? "bg-slate-600" : "bg-transparent",
                      ].join(" ")}
                      aria-pressed={isActive}
                    >
                      <span className="font-['Kanit'] text-xl font-light capitalize tracking-tight sm:text-2xl md:text-3xl">
                        {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content row */}
            <div className="w-full px-6">
              <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
                {/* Left text */}
                <div className="flex flex-col justify-between">
                  <div className="space-y-5">
                    <h3 className="font-['Kanit'] text-2xl font-semibold capitalize tracking-tight text-black sm:text-3xl">
                      {current.title}
                    </h3>

                    <p className="font-['Kanit'] text-lg font-light capitalize leading-10 tracking-tight text-black sm:text-xl sm:leading-[55px]">
                      {current.desc}
                    </p>
                  </div>

                  <a
                    href={current.ctaHref ?? "#"}
                    className="mt-6 inline-flex items-center gap-3 rounded-[10px] p-2.5"
                  >
                    <span className="font-['Kanit'] text-xl font-light capitalize tracking-tight text-black sm:text-2xl md:text-3xl">
                      {current.ctaText}
                    </span>

                    {/* Arrow */}
                    <svg
                      width="36"
                      height="25"
                      viewBox="0 0 36 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M35 12.5L1 12.5M35 12.5L23.6667 1M35 12.5L23.6667 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                {/* Right cards stack */}
                <div className="flex flex-col gap-4 md:pl-10">
                  {current.cards.map((c) => (
                    <div
                      key={c.id}
                      className="flex h-36 items-center gap-4 overflow-hidden rounded-bl-[20px] rounded-tl-[20px] bg-black px-4 py-2.5"
                    >
                      {/* Icon slot (keep empty/placeholder now) */}
                      <div className="grid h-16 w-20 place-items-center">
                        <div className="h-12 w-12 rounded-full border border-white/40" />
                      </div>

                      <div className="flex-1">
                        <p className="font-['Kanit'] text-base font-normal capitalize tracking-tight text-white sm:text-lg md:text-xl">
                          {c.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* /content row */}
          </div>
        </div>
      </div>
    </section>
  );
}

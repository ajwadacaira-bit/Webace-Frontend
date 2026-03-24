// app/components/sections/marketing.tsx
"use client";
import React from "react";

/** ===== ICON ===== */
function ArrowCircle({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="28" fill="white" />
      <path
        d="M37.0102 19.2018L19.4142 36.7978M37.0102 19.2018V30.0301M37.0102 19.2018H26.1819"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** ===== SHAPES (Figma SVG) ===== */
function LeftShape() {
  return (
    <svg
      viewBox="0 0 698 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g filter="url(#filter0_d_43_4311)">
        <path
          d="M516.93 331.999C518.139 331.999 519.347 331.984 520.554 331.957H521V331.949C562.774 330.908 602.617 313.871 632.238 284.272C662.82 253.714 680 212.266 680 169.05C680 125.833 662.82 84.3869 632.238 53.8281C602.558 24.1697 562.614 7.12616 520.748 6.14746V6H10V18.8096H520.748V18.7236C559.276 19.6997 596.02 35.4183 623.341 62.7188C651.562 90.9196 667.417 129.168 667.417 169.05C667.417 208.932 651.563 247.181 623.341 275.382C595.119 303.583 556.841 319.426 516.93 319.426V319.466H352C346.477 319.466 342 323.943 342 329.466V331.957H516.93V331.999Z"
          fill="#455A64"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_43_4311"
          x="0"
          y="0"
          width="698"
          height="353.999"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="8" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_43_4311" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_4311" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

function RightShape() {
  return (
    <svg
      viewBox="0 0 618 356"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g filter="url(#filter0_d_43_4318)">
        <path
          d="M151.802 336.987H148.949V336.91C113.079 335.557 78.9208 318.466 53.4619 288.98C34.1467 266.61 20.9901 238.441 15.2549 208.007C13.7149 199.835 12.71 191.499 12.2646 183.068C12.089 179.743 12 176.403 12 173.052C12 129.57 26.9144 87.8693 53.4619 57.123C54.8328 55.5354 56.2292 53.9831 57.6494 52.4678C58.3611 51.7084 59.079 50.9578 59.8027 50.2168C65.1017 44.7913 70.7185 39.8604 76.5986 35.4492C98.5499 18.982 124.175 9.76434 150.672 9.13867V9H602V21.9678H150.672V21.792C124.76 22.4551 99.7598 32.021 78.752 49.0156C72.5183 54.0584 66.6357 59.7553 61.1855 66.0674C60.3933 66.9849 59.6125 67.9132 58.8428 68.8516C35.8106 96.932 22.9229 134.223 22.9229 173.052C22.9229 181.477 23.7344 191.326 24.9199 199.528C29.3807 230.389 41.8305 257.619 61.1855 280.035C84.5958 307.148 115.976 322.907 148.949 324.255V324.219H331.021C336.544 324.219 341.021 328.697 341.021 334.22V336.987H153.561V337C152.974 337 152.388 336.996 151.802 336.987Z"
          fill="#455A64"
        />
      </g>

      <defs>
        <filter
          id="filter0_d_43_4318"
          x="-20"
          y="-20"
          width="660"
          height="400"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="5" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_43_4318" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_4318" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}


/** ===== CARDS =====
 * Mobile (no hover): description + "Services" ALWAYS visible
 * Desktop: hidden until hover (video style)
 */
function FeatureCard({
  title,
  desc,
  services = [],
}: {
  title: string;
  desc: string;
  services?: string[];
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <article className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[460px] overflow-hidden rounded-[18px] shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
      {/* BASE CARD (black default, white on hover like video) */}
      <div
        className="
          group relative flex h-full flex-col rounded-[18px]
          bg-black p-7 sm:p-8 md:p-10 text-white
          transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]
          md:hover:-translate-y-1 md:hover:bg-white md:hover:text-black
        "
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold capitalize leading-snug">
          {title}
        </h3>

        {/* ✅ VIDEO BEHAVIOR:
            - Mobile: show desc always
            - Desktop: desc hidden by default, shows only on CARD hover
        */}
        <p
          className="
            mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/85 md:text-black/80
            md:opacity-0 md:translate-y-2
            md:transition-all md:duration-400
            md:group-hover:opacity-100 md:group-hover:translate-y-0
          "
        >
          {desc}
        </p>

        {/* Bottom-right arrow + Services button */}
        <div className="mt-auto flex items-end justify-end pt-6">
          {/* hover area on arrow */}
          <div className="group/arrow relative">
            {/* Default Arrow (shown normally) */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full
                bg-white text-black transition-all duration-300
                md:group-hover/arrow:opacity-0 md:group-hover/arrow:scale-95"
              aria-label="Arrow"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 6L6 18M18 6V15M18 6H9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Services pill (appears on ARROW hover, click opens panel) */}
           <button
              type="button"
              onClick={() => setOpen(true)}
              className="
                absolute right-0 bottom-0
                inline-flex items-center gap-2
                rounded-xl bg-black px-5 py-2
                text-sm font-semibold text-white
                min-w-[130px] sm:min-w-[140px] justify-center

                hidden md:inline-flex
                opacity-0 translate-y-1 scale-95 pointer-events-none
                transition-all duration-300

                group-hover/arrow:opacity-100
                group-hover/arrow:translate-y-0
                group-hover/arrow:scale-100
                group-hover/arrow:pointer-events-auto
              "
              aria-label="Open services"
            >
              Services <span aria-hidden="true">→</span>
            </button>

          </div>
        </div>


      </div>

      {/* NEXT VIEW (services list on click) */}
      <div
        className={`
          absolute inset-0 bg-white p-6 sm:p-7 md:p-8 text-black overflow-y-auto
          transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-start justify-end">
          

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-8 space-y-4 text-base md:text-lg">
          {services.length ? services.map((s) => <div key={s}>{s}</div>) : <div>No services added</div>}
        </div>
      </div>
    </article>
  );
}


function InputLine({ label }: { label: string }) {
  return (
    <div className="w-full">
      <div className="text-lg font-medium text-white/90 md:text-xl">{label}</div>
      <div className="mt-4 h-[3px] w-full rounded-full bg-white" />
    </div>
  );
}

/** ===== SECTION ===== */
export default function MasteringDigitalSuccess() {
  return (
    <section className="w-full overflow-x-hidden py-10 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP HEADLINE (match ref image) */}
              
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* LEFT BUBBLE (slightly smaller) */}
          <div className="relative isolate flex min-h-[240px] items-center overflow-hidden md:min-h-[480px] md:translate-y-6">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-end">
              {/* ↓ reduced width/height */}
              <div className="h-[220px] w-[min(92vw,720px)] sm:h-[240px] sm:w-[min(92vw,900px)] md:h-[480px] md:w-[1420px]">
                <LeftShape />
              </div>
            </div>

            <div className="relative mx-auto md:ml-auto w-full max-w-[820px] px-2 sm:px-4 md:pr-14 md:pl-0">
              <h1
                className="text-center md:text-right font-normal leading-[1.02] text-black"
                style={{ fontSize: "clamp(50px, 5.6vw, 118px)" }}
              >
                Mastering The <br />
                Art Of
              </h1>
            </div>
          </div>

          {/* RIGHT BUBBLE */}
          <div className="relative isolate flex min-h-[260px] items-center overflow-hidden md:min-h-[520px]">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-start">
              <div className="h-[240px] w-[min(92vw,720px)] translate-y-0 sm:h-[260px] sm:w-[min(92vw,900px)] sm:translate-y-2 md:h-[520px] md:w-[1500px] md:translate-y-10">
                <RightShape />
              </div>
            </div>

            {/* TEXT (moved down) */}
            <div className="relative mx-auto md:mr-auto w-full max-w-[760px] px-2 sm:px-4 md:pl-20 pt-6 sm:pt-10 md:pt-24">
              <h2
                className="text-center md:text-left font-normal leading-[1.02] text-black"
                style={{ fontSize: "clamp(54px, 6vw, 128px)" }}
              >
                Digital <br />
                Success
              </h2>
            </div>
          </div>
        </div>





        {/* CENTER TEXT */}
        <div className="mt-10 flex justify-center px-0 md:px-10">
          {/* <p className="max-w-5xl text-center text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-black"> */}
          <p className="max-w-5xl text-center text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-black">
            At WebAce, expertise is not just about offering services; it’s about
            mastering every aspect of digital growth. With years of experience &
            track record of success,{" "}
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              we deliver results that make a difference
            </span>
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              title="digital marketing excellence"
              desc="Our expertise spans the full spectrum of digital marketing, from SEO strategies that boost your visibility to PPC campaigns that convert leads into loyal customers."
              services={["SEO", "Content Creation", "Social Media Marketing", "Google Ads", "Meta Ads"]}
            />
            <FeatureCard
              title="creative & visual storytelling"
              desc="We believe that creativity is at the heart of every successful brand. Our creative team crafts engaging visuals and content that resonate with your audience."
              services={["Brand Identity", "Video Creation", "Video Editing", "Social Media Creatives", "Story Telling  "]}
            />
            <FeatureCard
              title="data driven strategies"
              desc="We combine data analytics with creative execution, ensuring every strategy is informed by insights that maximize performance and growth."
              services={["Advanced AI Technology", "Data Analysis", "Lead Magnet Pages", "Re-Marketing", "Customized Reporting"]}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              title="ORM"
              desc="Your online reputation is crucial. We ensure that your brand’s image stays positive, whether through proactive reputation management or SERP monitoring."
              services={["Google Review Management", "Personal Branding", "Reputation Monitoring", "Serp Management"]}
            />
            <FeatureCard
              title="technical mastery"
              desc="From UX design to eCommerce funnel optimization, our technical expertise ensures that every digital touchpoint is optimized for conversion and user experience."
              services={["Google Review Management", "Personal Branding", "Reputation Monitoring", "Serp Management"]}
            />

            {/* Form card */}
            <div
              className="
                relative flex min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex-col justify-between overflow-hidden
                rounded-[18px] bg-black p-6 sm:p-7 md:p-8
                shadow-[0_14px_34px_rgba(0,0,0,0.18)]
                transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]
                md:hover:-translate-y-1
              "
            >
              <div className="space-y-10">
                <InputLine label="Enter Email" />
                <InputLine label="Contact Number" />

                <button
                  type="button"
                  className="w-fit rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  aria-label="Let's Discuss Your Project"
                >
                  Let&apos;s Discuss Your Project
                </button>
              </div>

              <div className="mt-8 flex justify-end">
                <ArrowCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

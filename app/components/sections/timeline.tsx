// app/components/sections/marketing-figma.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

/* ---------------- Icons (unchanged) ---------------- */
function DocIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="56"
      height="60"
      viewBox="0 0 56 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="-1.195"
        y="17.882"
        width="38.1538"
        height="49"
        rx="6"
        transform="rotate(-30 -1.195 17.882)"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M41.9195 33.885C42.1147 33.7724 42.3455 33.7397 42.5621 33.7948C42.779 33.85 42.9638 33.9886 43.0748 34.1809C43.1859 34.3733 43.2136 34.6026 43.1529 34.8181C43.0923 35.0332 42.9485 35.2168 42.7535 35.3295L25.7933 45.1215C25.5981 45.2341 25.3666 45.2673 25.1499 45.2121C24.9331 45.1569 24.749 45.0177 24.638 44.8255C24.527 44.6332 24.4985 44.4042 24.5591 44.1888C24.6197 43.9735 24.7642 43.7897 24.9593 43.677L41.9195 33.885ZM38.982 28.7971C39.1772 28.6845 39.408 28.6518 39.6246 28.7069C39.8415 28.7621 40.0263 28.9007 40.1373 29.093C40.2484 29.2854 40.2761 29.5147 40.2154 29.7302C40.1548 29.9453 40.011 30.1289 39.816 30.2416L22.8558 40.0336C22.6606 40.1462 22.4291 40.1794 22.2124 40.1242C21.9956 40.069 21.8115 39.9298 21.7005 39.7376C21.5895 39.5453 21.561 39.3163 21.6216 39.1009C21.6822 38.8856 21.8267 38.7018 22.0218 38.5891L38.982 28.7971ZM36.0445 23.7092C36.2397 23.5966 36.4705 23.5639 36.6871 23.619C36.904 23.6742 37.0888 23.8128 37.1998 24.0051C37.3109 24.1975 37.3386 24.4268 37.2779 24.6423C37.2173 24.8574 37.0735 25.041 36.8785 25.1537L19.9183 34.9457C19.7231 35.0583 19.4916 35.0915 19.2749 35.0363C19.0581 34.9811 18.874 34.8419 18.763 34.6497C18.652 34.4574 18.6235 34.2284 18.6841 34.013C18.7447 33.7977 18.8892 33.6139 19.0843 33.5012L36.0445 23.7092ZM33.107 18.6213C33.3022 18.5087 33.533 18.476 33.7496 18.5311C33.9665 18.5863 34.1513 18.7249 34.2623 18.9172C34.3734 19.1096 34.4011 19.3389 34.3404 19.5544C34.2798 19.7695 34.136 19.9531 33.941 20.0658L16.9808 29.8578C16.7856 29.9704 16.5541 30.0036 16.3374 29.9484C16.1206 29.8932 15.9365 29.754 15.8255 29.5618C15.7145 29.3695 15.686 29.1405 15.7466 28.9251C15.8072 28.7098 15.9517 28.526 16.1468 28.4133L33.107 18.6213ZM21.0374 18.8058C21.2326 18.6932 21.464 18.66 21.6808 18.7151C21.8975 18.7704 22.0817 18.9096 22.1927 19.1018C22.3037 19.2941 22.3321 19.5231 22.2716 19.7385C22.211 19.9537 22.0665 20.1376 21.8713 20.2503L14.0433 24.7699C13.8481 24.8825 13.6166 24.9157 13.3999 24.8605C13.1831 24.8053 12.999 24.6661 12.888 24.4739C12.777 24.2816 12.7485 24.0526 12.8091 23.8372C12.8697 23.6219 13.0142 23.4381 13.2093 23.3254L21.0374 18.8058Z"
        fill="black"
        stroke="black"
        strokeWidth="0.2"
      />
    </svg>
  );
}

/* ---------------- Timeline SVG (NEW: exact rail + rings) ---------------- */
function TimelineSvg({ className = "" }: { className?: string }) {
  // 5 nodes (centers)
  const nodes = [118.5, 355.5, 592.5, 829.5, 1066.5];
  const y = 114.5;

  // white rail
  const barH = 56;
  const barY = y - barH / 2;

  // IMPORTANT: rail should extend under first/last bubble so no “rectangle before circle” is visible
  const railPad = 86; // tune 78/92 if needed
  const barStart = nodes[0] - railPad;
  const barEnd = nodes[4] + railPad;

  // end dots (outside rail)
  const dotGap = 22;
  const leftDotX = barStart - dotGap;
  const rightDotX = barEnd + dotGap;

  // arc radius
  const r = 95;

  // dashed style
  const dash = "10 14";

  const nodeR = 56; // outer white circle approx (same visual radius)


  // helper: point on circle
  const toXY = (cx: number, deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: y + r * Math.sin(rad) };
  };

  // partial arcs (not full circles)
  // TOP arc (node 2,4)
  const topArcPath = (cx: number) => {
    const a = toXY(cx, 205);
    const b = toXY(cx, 335);
    return `M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`;
  };

  // BOTTOM arc (node 1,3,5)
  const bottomArcPath = (cx: number) => {
    const a = toXY(cx, 25);
    const b = toXY(cx, 155);
    return `M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`;
  };

  // For first/last bottom arcs, add small dashed connector line to the dots
  const leftBottomArcEnd = toXY(nodes[0], 155); // left-ish end of arc
  const rightBottomArcStart = toXY(nodes[4], 25); // right-ish start of arc

  // Right-facing triangle arrow
  const arrowW = 22;
  const arrowH = 24;
  const arrowRight = (x: number, yy: number) =>
    `M ${x + arrowW / 2} ${yy} L ${x - arrowW / 2} ${yy - arrowH / 2} L ${x - arrowW / 2} ${yy + arrowH / 2} Z`;

  // Arrow Y exactly on arc peaks
  const topArrowY = y - r;     // top peak
  const bottomArrowY = y + r;  // bottom peak

  return (
    <svg
      className={className}
      viewBox="0 0 1185 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* White rail */}
      <rect
        x={barStart + nodeR}
        y={barY}
        width={barEnd - barStart - nodeR * 2}
        height={barH}
        fill="white"
      />


      {/* End dots */}
      <circle cx={leftDotX} cy={y} r="7" fill="#495C6B" opacity="0.9" />
      <circle cx={rightDotX} cy={y} r="7" fill="#495C6B" opacity="0.9" />

      {/* TOP arcs on node 2 & 4 */}
      {[nodes[1], nodes[3]].map((cx, i) => (
        <path
          key={`top-${i}`}
          d={topArcPath(cx)}
          stroke="#495C6B"
          strokeWidth="3"
          strokeDasharray={dash}
          strokeLinecap="round"
          opacity="0.75"
        />
      ))}

      {/* BOTTOM arcs on node 1,3,5 */}
      {[nodes[0], nodes[2], nodes[4]].map((cx, i) => (
        <path
          key={`bot-${i}`}
          d={bottomArcPath(cx)}
          stroke="#495C6B"
          strokeWidth="3"
          strokeDasharray={dash}
          strokeLinecap="round"
          opacity="0.75"
        />
      ))}

      {/* Connect first bottom arc to LEFT dot (dashed connector) */}
      <path
        d={`M ${leftBottomArcEnd.x} ${leftBottomArcEnd.y} L ${leftDotX} ${y}`}
        stroke="#495C6B"
        strokeWidth="3"
        strokeDasharray={dash}
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Connect last bottom arc to RIGHT dot (dashed connector) */}
      <path
        d={`M ${rightDotX} ${y} L ${rightBottomArcStart.x} ${rightBottomArcStart.y}`}
        stroke="#495C6B"
        strokeWidth="3"
        strokeDasharray={dash}
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Arrows (ALL right facing) */}
      {/* Top arrows on node 2 & 4 */}
      {[nodes[1], nodes[3]].map((cx, i) => (
        <path key={`tarr-${i}`} d={arrowRight(cx, topArrowY)} fill="#495C6B" opacity="0.95" />
      ))}

      {/* Bottom arrows on node 1,3,5 */}
      {[nodes[0], nodes[2], nodes[4]].map((cx, i) => (
        <path key={`barr-${i}`} d={arrowRight(cx, bottomArrowY)} fill="#495C6B" opacity="0.95" />
      ))}
    </svg>
  );
}

function NodeBubble() {
  return (
    <div className="mk-node group relative rounded-[100px] bg-white p-3.5 transition-transform duration-300 ease-out hover:scale-[1.03]">
      <div className="h-28 w-32 rounded-[100px] bg-slate-600 p-3 transition-shadow duration-300 ease-out group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
        <div className="flex h-full w-full items-center justify-center rounded-[100px] bg-white px-5 py-4">
          <DocIcon className="mk-doc mk-doc-tilt transition-transform duration-300 ease-out group-hover:rotate-[2deg]" />
        </div>
      </div>
    </div>
  );
}




/* ---------------- Data ---------------- */
type Step = {
  title: string;
  desc: string;
  align: "top" | "bottom";
};

const steps: Step[] = [
  { title: "advanced aI Technology", desc: "using cutting edge AI tools for optimal performance", align: "top" },
  { title: "collaborative\nefforts", desc: "we work closely with you\nintegrating your feedback", align: "top" },
  { title: "Data driven strategies", desc: "we analyze your market & audience to cre-ate customized plans", align: "bottom" },
  { title: "transparency", desc: "regular updates and reports\nkeep you informed", align: "bottom" },
  { title: "ongoing\noptimization", desc: "continuous monitoring and\nrefining to ensure the best\nresults", align: "bottom" },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      {step.align === "top" ? (
        <>
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-medium capitalize text-black whitespace-pre-line">{step.title}</h3>
            <p className="text-lg font-light capitalize text-black whitespace-pre-line">{step.desc}</p>
          </div>

          <div className="mk-node rounded-[100px] bg-white p-3.5">
            <div className="h-28 w-32 rounded-[100px] bg-slate-600 p-3">
              <div className="flex h-full w-full items-center justify-center rounded-[100px] bg-white px-5 py-4">
                <DocIcon className="mk-doc" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mk-node rounded-[100px] bg-white p-3.5">
            <div className="h-28 w-32 rounded-[100px] bg-slate-600 p-3">
              <div className="flex h-full w-full items-center justify-center rounded-[100px] bg-white px-5 py-4">
                <DocIcon className="mk-doc" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-medium capitalize text-black whitespace-pre-line">{step.title}</h3>
            <p className="text-lg font-light capitalize text-black whitespace-pre-line">{step.desc}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default function MarketingFigmaSection() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-zinc-200" aria-label="Marketing process timeline">
     
      {/* ===== Timeline Block (FIXED: like img-2/img-3) ===== */}
      <div className="mx-auto w-full max-w-[1280px] px-6 py-10">
        <div className="relative rounded-none bg-zinc-200 py-10">
          {/* Background svg decor (dotted circles + ends) */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="relative mx-auto h-[229px] w-[1185px] " aria-hidden="true">
              <TimelineSvg className="h-full w-full" />
            </div>
          </div>

          {/* White bar (center)
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="mx-auto w-[1185px]">
              <div className="h-[56px] w-full bg-white" />
            </div>
          </div> */}

          {/* CONTENT GRID: Top texts / Nodes row / Bottom texts */}
          <div className="relative z-10 mx-auto hidden w-[1185px] grid-cols-5 grid-rows-[180px_160px_220px] gap-x-0 lg:grid">
            {/* ---- Top texts (only col 2 and col 4) ---- */}
            <div className="col-start-2 row-start-1 -mt-6 flex flex-col items-center text-center">
              <h3 className="text-[34px] font-semibold leading-[1.05] text-black">
                Advanced AI<br />Technology
              </h3>
              <p className="mt-6 text-[16px] leading-[2] text-black">
                Using Cutting Edge AI<br />Tools For Optimal Performance
              </p>
            </div>

            <div className="col-start-4 row-start-1 -mt-6 flex flex-col items-center text-center">
              <h3 className="text-[34px] font-semibold leading-[1.05] text-black">
                Collaborative<br />Efforts
              </h3>
              <p className="mt-6 text-[16px] leading-[2] text-black">
                We Work Closely With You<br />Integrating Your Feedback
              </p>
            </div>



            {/* ---- Nodes row (all 5 in a straight line) ---- */}
            <div className="col-span-5 row-start-2 mt-6 grid grid-cols-5 place-items-center">
              <NodeBubble />
              <NodeBubble />
              <NodeBubble />
              <NodeBubble />
              <NodeBubble />
            </div>


            {/* ---- Bottom texts (only col 1,3,5) ---- */}
           <div className="col-start-1 row-start-3 mt-16 text-center">
              <h3 className="text-[34px] font-semibold leading-[1.05] text-black">Data Driven<br />Strategies</h3>
              <p className="mt-6 text-[16px] leading-[2] text-black">
                We Analyze Your Market &<br />Audience To Create<br />Customized Plans
              </p>
            </div>

            <div className="col-start-3 row-start-3 mt-16 text-center">
              <h3 className="text-[34px] font-semibold leading-[1.05] text-black">Transparency</h3>
              <p className="mt-6 text-[16px] leading-[2] text-black">
                Regular Updates And<br />Reports<br />Keep You Informed
              </p>
            </div>

            <div className="col-start-5 row-start-3 mt-16 text-center">
              <h3 className="text-[34px] font-semibold leading-[1.05] text-black">Ongoing<br />Optimization</h3>
              <p className="mt-6 text-[16px] leading-[2] text-black">
                Continuous Monitoring And<br />Refining To Ensure The Best<br />Results
              </p>
            </div>
          </div>

          {/* Mobile fallback (optional): keep your existing stacked layout or simple list) */}
        </div>
      </div>


      {/* ===== CTA Block ===== */}
      <div className="bg-zinc-200 px-6 py-12">
        <div className="mx-auto max-w-[1200px] rounded-[10px] bg-black px-6 py-12 lg:px-12">
          <div className="mx-auto flex max-w-[1134px] flex-col items-center gap-12">
            <p className="text-center text-2xl font-normal capitalize text-white">
              Let’s Build Your Growth Strategy – Share Your Goals with Us
            </p>

            <form
              className="w-full"
              action="#"
              method="post"
              aria-label="Get my custom quote"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Email */}
                <label className="flex items-center justify-between gap-3 rounded-[10px] bg-white px-6 py-5">
                  <span className="text-base font-normal capitalize text-slate-600">
                    work email address
                  </span>
                  <span aria-hidden="true">
                    <svg
                      width="27"
                      height="23"
                      viewBox="0 0 27 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8556 23L12.7687 17.9703L13.7809 16.9694L17.8556 20.9983L25.9878 12.9575L27 13.9569L17.8556 23ZM12.8674 8.48187L23.8647 1.41364H1.87006L12.8674 8.48187ZM12.8674 10.0595L1.42971 2.66472V17.508C1.42971 17.7615 1.51215 17.9698 1.67705 18.1328C1.84194 18.2959 2.05306 18.3774 2.31041 18.3774H9.15012L10.5798 19.791H0V0H25.7347V9.24806L24.305 10.6617V2.66472L12.8674 10.0595Z"
                        fill="#455A64"
                      />
                    </svg>
                  </span>
                  <input
                    className="sr-only"
                    type="email"
                    name="workEmail"
                    autoComplete="email"
                    placeholder="work email address"
                    required
                  />
                </label>

                {/* Name */}
                <label className="flex items-center justify-between gap-3 rounded-[10px] bg-white px-6 py-5">
                  <span className="text-base font-normal text-slate-600">
                    <span className="capitalize">first </span>
                    <span className="lowercase">and</span>
                    <span className="capitalize"> last name</span>
                  </span>
                  <span aria-hidden="true">
                    <svg
                      width="23"
                      height="25"
                      viewBox="0 0 23 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3552 13.1449C14.7779 13.1449 17.5526 10.3702 17.5526 6.94745C17.5526 3.5247 14.7779 0.75 11.3552 0.75C7.93241 0.75 5.15771 3.5247 5.15771 6.94745C5.15771 10.3702 7.93241 13.1449 11.3552 13.1449Z"
                        stroke="#455A64"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.9602 23.7501C21.9602 20.9375 20.8429 18.24 18.854 16.2512C16.8652 14.2623 14.1677 13.145 11.3551 13.145C8.54245 13.145 5.845 14.2623 3.85616 16.2512C1.86732 18.24 0.75 20.9375 0.75 23.7501"
                        stroke="#455A64"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    className="sr-only"
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    placeholder="first and last name"
                    required
                  />
                </label>

                {/* Website */}
                <label className="flex items-center justify-between gap-3 rounded-[10px] bg-white px-6 py-5">
                  <span className="text-base font-normal capitalize text-slate-600">
                    website
                  </span>
                  <span
                    className="rounded-[10px] px-2.5 py-1 text-xs font-normal lowercase text-slate-600 outline outline-1 outline-offset-[-1px] outline-slate-600"
                    aria-hidden="true"
                  >
                    www.
                  </span>
                  <input
                    className="sr-only"
                    type="url"
                    name="website"
                    autoComplete="url"
                    placeholder="website"
                  />
                </label>
              </div>

              <div className="mt-12 flex justify-center">
                <button
                  type="submit"
                  className="rounded-[10px] px-12 py-3.5 text-3xl font-normal capitalize text-white outline outline-2 outline-offset-[-2px] outline-white"
                >
                  Get my custom quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

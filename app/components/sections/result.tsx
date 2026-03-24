// "use client";

// import React from "react";

// type Item = { title: string; desc: string };

// export default function DeliveringResults() {
//   const items: Item[] = [
//     {
//       title: "Industry Leaders",
//       desc: "Delivering impactful results across diverse industries with proven strategies that drive growth",
//     },
//     {
//       title: "Long-Term Growth",
//       desc: "Focusing on sustainable, ongoing success with a commitment to measurable improvements over time",
//     },
//     {
//       title: "Data-Driven Innovators",
//       desc: "Harnessing data and insights to experiment, optimize and deliver transformative results for our clients",
//     },
//   ];

//   return (
//     <section className="w-full py-14 sm:py-16 lg:py-20 font-['Kanit']">
//       <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
//         {/* Heading */}
//         <div className="flex flex-col items-center gap-1 text-center">
//           <h2 className="text-black text-4xl sm:text-6xl lg:text-7xl font-semibold leading-none">
//             Delivering Results
//           </h2>
//           <h2 className="text-black text-4xl sm:text-6xl lg:text-7xl font-semibold leading-none">
//             That Speaks For Themselves
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="mt-10 lg:mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
//           {/* Left */}
//           <div className="flex-1">
//             <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12">
//               {items.map((item) => (
//                 <div key={item.title} className="flex flex-col gap-2 sm:gap-3">
//                   <h3 className="text-black text-2xl sm:text-3xl font-semibold">
//                     {item.title}
//                   </h3>
//                   <p className="text-black/90 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-[44ch]">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right */}
//           <div className="w-full lg:w-[690px]">
//             {/* 2 squares */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <StatCard value="100+" label="Successful Campaigns" variant="small" />
//               <StatCard value="10M+" label="Add Impressions" variant="small" />
//             </div>

//             {/* 1 rectangle */}
//             <div className="mt-5">
//               <StatCard
//                 value="80%"
//                 label="Increase In Lead Generation For Clients"
//                 variant="large"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function StatCard({
//   value,
//   label,
//   variant,
// }: {
//   value: string;
//   label: string;
//   variant: "small" | "large";
// }) {
//   const isLarge = variant === "large";
//   const dur = isLarge ? "3.2s" : "5.2s"; // like video (large faster)

//   return (
//   <div
//     className={[
//       "relative rounded-[22px] bg-[#efefef] p-[8px] border border-black/10",
//       isLarge
//         ? "h-[215px] sm:h-[235px] w-full"
//         : "aspect-square w-full min-h-[205px] sm:min-h-[225px]",
//     ].join(" ")}
//     style={{ ["--dur" as any]: dur }}
//   >
//     {/* animated dash layer */}
//     <div className="stat-card" style={{ ["--dur" as any]: dur }} />

//     {/* inner white card */}
//     <div className="relative z-20 h-full w-full rounded-[18px] bg-white border border-black/10 flex flex-col items-center justify-center text-center px-4 sm:px-5">
//       <div className="text-black font-['Kanit'] font-semibold text-6xl sm:text-[70px] leading-none">
//         {value}
//       </div>
//       <div className="mt-2 text-black font-['Kanit'] font-semibold text-[15px] sm:text-base leading-snug max-w-[30ch]">
//         {label}
//       </div>
//     </div>
//   </div>
// );

// }
"use client";

import React, { useEffect, useRef, useState } from "react";

type Item = { title: string; desc: string };

/* ─── Spinning border card ─── */
function StatCard({
  value,
  label,
  variant,
}: {
  value: string;
  label: string;
  variant: "small" | "large";
}) {
  const isLarge = variant === "large";
  const duration = isLarge ? "3.2s" : "5.2s";
  const key = isLarge ? "lg" : "sm";

  return (
    <>
      <style>{`
        @keyframes sc-spin-${key} {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .sc-outer-${key} {
          position: relative;
          border-radius: 22px;
          background: #efefef;
          padding: 7px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.08);
          ${isLarge
            ? "height: 300px; width: 100%;"
            : "width: 100%; aspect-ratio: 1 / 1; min-height: 205px;"}
        }

        .sc-spinner-${key} {
          position: absolute;
          width: 250%;
          height: 250%;
          top: -75%;
          left: -75%;
          border-radius: 50%;
          background: conic-gradient(
          from 0deg,
          transparent         0deg  255deg,
          rgba(0,0,0,0.60)  255deg  278deg,
          rgba(0,0,0,0.80)  278deg  302deg,
          rgba(0,0,0,0.72)  302deg  322deg,
          rgba(0,0,0,0.80)  322deg  338deg,
          rgba(0,0,0,1)     338deg  347deg,
          rgba(0,0,0,1)     347deg  353deg,
          rgba(0,0,0,0.80)  353deg  357deg,
          rgba(0,0,0,0.20)  357deg  360deg
        );
        filter: blur(0.6px);
          transform-origin: center center;
          animation: sc-spin-${key} ${duration} linear infinite;
          z-index: 1;
          pointer-events: none;
        }

        .sc-mask-${key} {
          position: absolute;
          inset: 7px;
          border-radius: 15px;
          background: #efefef;
          z-index: 2;
        }

        .sc-inner-${key} {
          position: absolute;
          inset: 7px;
          border-radius: 15px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 16px;
        }
      `}</style>

      <div className={`sc-outer-${key}`}>
        <div className={`sc-spinner-${key}`} />
        <div className={`sc-mask-${key}`} />
        <div className={`sc-inner-${key}`}>
          <span
            style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(52px, 6vw, 70px)",
              lineHeight: 1,
              color: "#000",
            }}
          >
            {value}
          </span>
          <span
            style={{
              marginTop: 8,
              fontFamily: "Kanit, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 1.35,
              color: "#000",
              maxWidth: "26ch",
            }}
          >
            {label}
          </span>
        </div>
      </div>
    </>
  );
}

/* ─── Main section ─── */
export default function DeliveringResults() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const items: Item[] = [
    {
      title: "Industry Leaders",
      desc: "Delivering impactful results across diverse industries with proven strategies that drive growth",
    },
    {
      title: "Long-Term Growth",
      desc: "Focusing on sustainable, ongoing success with a commitment to measurable improvements over time",
    },
    {
      title: "Data-Driven Innovators",
      desc: "Harnessing data and insights to experiment, optimize and deliver transformative results for our clients",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-14 sm:py-16 lg:py-20"
      style={{ fontFamily: "Kanit, sans-serif" }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col items-center gap-1 text-center">
          {["Delivering Results", "That Speaks For Themselves"].map((line, i) => (
            <h2
              key={line}
              className="text-black text-4xl sm:text-6xl lg:text-7xl font-semibold leading-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.8s ease ${i * 0.1}s, transform 0.8s ease ${i * 0.1}s`,
              }}
            >
              {line}
            </h2>
          ))}
        </div>

        {/* Content */}
        <div className="mt-10 lg:mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

          {/* Left */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12">
              {items.map((item, i) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 sm:gap-3"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-28px)",
                    transition: `opacity 0.75s ease ${0.2 + i * 0.13}s, transform 0.75s ease ${0.2 + i * 0.13}s`,
                  }}
                >
                  <h3 className="text-black text-2xl sm:text-3xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-black/90 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-[44ch]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat cards */}
          <div
            className="w-full lg:w-[690px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <StatCard value="100+" label="Successful Campaigns" variant="small" />
              <StatCard value="10M+" label="Add Impressions" variant="small" />
            </div>
            <div className="mt-5">
              <StatCard
                value="80%"
                label="Increase In Lead Generation For Clients"
                variant="large"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
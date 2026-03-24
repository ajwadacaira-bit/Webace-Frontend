// "use client";
// import { useState } from "react";

// export default function MarketingApproach() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   return (
//     <section className="bg-white py-20">
//       <div className="mx-auto max-w-7xl px-6 flex flex-col gap-20">

//         {/* HEADER */}
//         <div className="text-center space-y-6">
//           <h2 className="font-syne text-5xl font-bold text-black">
//             Our Social Media Marketing Approach
//           </h2>

//           <p className="font-syne text-2xl text-zinc-600">
//             Strategic. Creative. Human. Data-Driven.
//           </p>

//           <p className="mx-auto max-w-5xl font-syne text-2xl text-zinc-600">
//             We follow a holistic approach that blends creativity, storytelling,
//             platform intelligence, and performance insights.
//           </p>
//         </div>

//         {/* STEPS */}
//         <div className="bg-black rounded-2xl px-8 py-16">
//           <ul className="space-y-14">
//             {STEPS.map((step, index) => (
//               <li key={step.no} className="flex items-start gap-6 group cursor-pointer onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}">

//                 {/* LEFT BAR */}
//                 <div className="relative">
//                   <div
//                     className={`w-[5px] h-32 ${
//                       activeIndex === index
//                         ? "bg-white shadow-[4px_0_5px_rgba(73,92,107,1)]"
//                         : "bg-transparent"
//                     }`}
//                   />
//                 </div>

//                 {/* NUMBER */}
//                 <div
//                   className={`h-36 px-3 py-6 flex items-start ${
//                     activeIndex === index
//                       ? "bg-white rounded-t-[40px]"
//                       : "bg-white"
//                   }`}
//                 >
//                   <div
//                     className={`w-7 py-1 rounded-full text-center text-base font-inter shadow
//                       ${
//                         activeIndex === index
//                           ? "bg-black text-white"
//                           : "bg-white text-black"
//                       }`}
//                   >
//                     {step.no}
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="flex flex-col gap-3 pt-6">
//                   <h3
//                     className={`text-2xl font-inter ${
//                       index === 0 ? "text-white" : "text-zinc-500"
//                     }`}
//                   >
//                     {step.title}
//                   </h3>

//                   <p
//                     className={`text-xl font-inter max-w-2xl ${
//                       index === 0 ? "text-white" : "text-zinc-500"
//                     }`}
//                   >
//                     {step.desc}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CTA */}
//         <div className="text-center space-y-6">
//           <h3 className="text-3xl font-inter font-semibold text-black">
//             Want a strategy built for your brand personality?
//           </h3>

//           <a
//             href="/contact"
//             className="inline-flex items-center gap-6 rounded-full bg-black px-16 py-4 text-xl text-white hover:opacity-90 transition"
//           >
//             Talk to Our Social Media Experts
//             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
//               →
//             </span>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

export default function MarketingApproach() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-20">

        {/* HEADER */}
        <div className="text-center space-y-6">
          <h2 className="font-syne text-5xl font-bold text-black">
            Our Social Media Marketing Approach
          </h2>

          <p className="font-syne text-2xl text-zinc-600">
            Strategic. Creative. Human. Data-Driven.
          </p>
        </div>

        {/* STEPS */}
        <div className="bg-black rounded-2xl px-8 py-16">
          <ul className="space-y-14">
            {STEPS.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <li
                  key={step.no}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="flex items-start gap-6 cursor-pointer"
                >
                  {/* LEFT BAR */}
                  <div className="relative w-[6px]">
                    <div
                      className={`absolute left-0 top-0 h-full w-[5px] transition-all duration-300
                        ${isActive ? "bg-white shadow-[4px_0_8px_rgba(255,255,255,0.8)]" : "bg-transparent"}
                      `}
                    />
                  </div>

                  {/* NUMBER */}
                  <div
                    className={`h-36 px-4 py-6 flex items-start transition-all duration-300
                      ${isActive ? "bg-white rounded-t-[40px]" : "bg-transparent"}
                    `}
                  >
                    <div
                      className={`w-8 py-1 rounded-full text-center text-sm font-inter transition-all duration-300
                        ${isActive ? "bg-black text-white" : "bg-white/10 text-zinc-400"}
                      `}
                    >
                      {step.no}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col gap-3 pt-6">
                    <h3
                      className={`text-2xl font-inter transition-colors duration-300
                        ${isActive ? "text-white" : "text-zinc-500"}
                      `}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`text-xl font-inter max-w-2xl transition-colors duration-300
                        ${isActive ? "text-white" : "text-zinc-500"}
                      `}
                    >
                      {step.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
         <div className="mx-auto max-w-5xl text-center space-y-8">
    
          <h3 className="text-3xl font-inter font-semibold text-black">
            Want a strategy built for your brand personality?
          </h3>

          <a
            href="/contact"
            className="group inline-flex items-center gap-6 rounded-full bg-black px-14 py-4 text-lg font-inter text-white transition hover:opacity-90"
          >
            Talk To Our Social Media Experts

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
const STEPS = [
  {
    no: 1,
    title: "Understand Your Brand",
    desc: "Before strategy, we understand your identity, tone, values, and audience.",
  },
  {
    no: 2,
    title: "Build a Cohesive Content Strategy",
    desc: "We map out how your brand communicates, interacts, and grows.",
  },
  {
    no: 3,
    title: "Create Visual & Emotional Storytelling",
    desc: "Designs, reels, videos, stories — all crafted to create emotional impact.",
  },
  {
    no: 4,
    title: "Maximize Reach Through Distribution",
    desc: "Using AI audience sets, optimized timings, and platform intelligence.",
  },
  {
    no: 5,
    title: "Drive Authentic Engagement",
    desc: "Human-first interactions that build community and trust.",
  },
  {
    no: 6,
    title: "Optimize with Data",
    desc: "Every week, we refine what works — and scale what performs.",
  },
];


// const STEPS = [
//   {
//     no: 1,
//     title: "Understand Your Brand",
//     desc: "Before strategy, we understand your identity, tone, values, and audience.",
//   },
//   {
//     no: 2,
//     title: "Build a Cohesive Content Strategy",
//     desc: "We map out how your brand communicates, interacts, and grows.",
//   },
//   {
//     no: 3,
//     title: "Create Visual & Emotional Storytelling",
//     desc: "Designs, reels, videos, stories — all crafted to create emotional impact.",
//   },
//   {
//     no: 4,
//     title: "Maximize Reach Through Distribution",
//     desc: "Using AI audience sets, optimized timings, and platform intelligence.",
//   },
//   {
//     no: 5,
//     title: "Drive Authentic Engagement",
//     desc: "Human-first interactions that build community and trust.",
//   },
//   {
//     no: 6,
//     title: "Optimize with Data",
//     desc: "Every week, we refine what works — and scale what performs.",
//   },
// ];

// import Image from "next/image";

// export default function BrandHero() {
//   return (
//     <section className="relative bg-black text-white overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6 py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* LEFT CONTENT */}
//           <div>
//             <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
//               Build a Brand People <br className="hidden sm:block" />
//               Recognize, Remember, <br className="hidden sm:block" />
//               and Connect With.
//             </h1>

//             <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
//               In the digital world, visibility is more than just being seen —
//               it’s about being felt, understood, and remembered.
//             </p>

//             <p className="mt-4 max-w-xl text-white/70">
//               When your audience connects with your brand on an emotional and
//               experiential level, awareness becomes affinity — and affinity
//               becomes loyalty.
//             </p>

//             <p className="mt-4 max-w-xl text-white/70">
//               At WebAce, we help brands move beyond noise.<br className="hidden sm:block"/>
//               We craft moments of connection, shape powerful first impressions, and build lasting engagement across every digital touchpoint.
//             </p>

//             <p className="mt-4 max-w-xl text-white/70">
//             This page introduces everything your brand needs to build awareness, spark engagement, and establish an unforgettable presence online.
//             </p>

           
//           </div>

//           {/* RIGHT VISUAL (REFERENCE-STYLE PLACEHOLDER) */}
//           <div className="relative">
//             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
//               <Image
//                 src="/images/b1.jpg"
//                 alt="Team collaborating to build brand awareness and customer engagement"
//                 fill
//                 className="object-cover"
//                 priority
//                 />


//               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
//             </div>

            
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BrandHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .bh-section {
          font-family: 'Kanit', sans-serif;
          position: relative;
          background: #000;
          color: #fff;
          overflow: hidden;
        }

        /* subtle radial glow behind text */
        .bh-section::before {
          content: '';
          position: absolute;
          top: -100px; left: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%);
          pointer-events: none;
        }

        .bh-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 32px 110px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .bh-inner {
            grid-template-columns: 1fr;
            padding: 72px 24px 80px;
            gap: 48px;
          }
        }

        /* ── LEFT ── */
        .bh-left { position: relative; }

        .bh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .bh-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .bh-eyebrow-line {
          display: block; width: 24px; height: 1px;
          background: #60a5fa; opacity: 0.45;
        }

        .bh-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 800;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s;
        }
        .bh-title.vis { opacity: 1; transform: translateY(0); }
        .bh-title-accent { color: #2563eb; }

        .bh-divider {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 2px;
          margin-bottom: 28px;
          opacity: 0;
          transition: opacity 0.8s ease 0.32s;
        }
        .bh-divider.vis { opacity: 1; }

        .bh-body {
          font-size: 15.5px;
          color: rgba(255,255,255,0.65);
          line-height: 1.85;
          max-width: 500px;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .bh-body.vis { opacity: 1; transform: translateY(0); }

        .bh-body-highlight {
          color: rgba(255,255,255,0.88);
          font-size: 16px;
        }

        /* ── STATS ROW ── */
        .bh-stats {
          display: flex;
          gap: 32px;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.07);
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.8s ease 0.72s, transform 0.8s ease 0.72s;
        }
        .bh-stats.vis { opacity: 1; transform: translateY(0); }

        .bh-stat { display: flex; flex-direction: column; gap: 4px; }

        .bh-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .bh-stat-num span { color: #2563eb; }

        .bh-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.06em;
        }

        .bh-stat-sep {
          width: 1px;
          background: rgba(255,255,255,0.07);
          align-self: stretch;
        }

        /* ── RIGHT IMAGE ── */
        .bh-right {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 1s ease 0.4s, transform 1s ease 0.4s;
        }
        .bh-right.vis { opacity: 1; transform: translateY(0); }

        .bh-img-wrap {
          position: relative;
          aspect-ratio: 4/3;
          width: 100%;
          overflow: hidden;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
        }
      `}</style>

      <section className="bh-section" ref={sectionRef}>
        <div className="bh-inner">

          {/* ── LEFT ── */}
          <div className="bh-left">

            <span className={`bh-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="bh-eyebrow-line" />
              Brand Awareness &amp; Engagement
              <span className="bh-eyebrow-line" />
            </span>

            <h1 className={`bh-title ${isVisible ? "vis" : ""}`}>
              Build a Brand People{" "}
              <span className="bh-title-accent">Recognize</span>,{" "}
              Remember, and{" "}
              <span className="bh-title-accent">Connect</span> With.
            </h1>

            <div className={`bh-divider ${isVisible ? "vis" : ""}`} />

            <p
              className={`bh-body bh-body-highlight ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: "0.38s" }}
            >
              In the digital world, visibility is more than just being seen —
              it's about being felt, understood, and remembered.
            </p>

            <p
              className={`bh-body ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: "0.48s" }}
            >
              When your audience connects with your brand on an emotional and
              experiential level, awareness becomes affinity — and affinity
              becomes loyalty.
            </p>

            <p
              className={`bh-body ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: "0.56s" }}
            >
              At WebAce, we help brands move beyond noise. We craft moments of
              connection, shape powerful first impressions, and build lasting
              engagement across every digital touchpoint.
            </p>

            <p
              className={`bh-body ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: "0.63s" }}
            >
              This page introduces everything your brand needs to build
              awareness, spark engagement, and establish an unforgettable
              presence online.
            </p>

            {/* stats */}
            <div className={`bh-stats ${isVisible ? "vis" : ""}`}>
              <div className="bh-stat">
                <span className="bh-stat-num">3<span>×</span></span>
                <span className="bh-stat-label">More brand recall</span>
              </div>
              <div className="bh-stat-sep" />
              <div className="bh-stat">
                <span className="bh-stat-num">5<span>×</span></span>
                <span className="bh-stat-label">Higher engagement</span>
              </div>
              <div className="bh-stat-sep" />
              <div className="bh-stat">
                <span className="bh-stat-num">10<span>+</span></span>
                <span className="bh-stat-label">Platforms covered</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT (image untouched) ── */}
          <div className={`bh-right ${isVisible ? "vis" : ""}`}>
            <div className="bh-img-wrap">
              <Image
                src="/images/b1.jpg"
                alt="Team collaborating to build brand awareness and customer engagement"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
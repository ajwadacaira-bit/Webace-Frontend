"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  "Your brand deserves leads that convert.",
  "Your business deserves a pipeline that grows every month.",
  "Your team deserves predictable opportunities.",
];

const buttons = [
  "Request Your Lead Generation Strategy",
  "Get A Custom Lead Pipeline Plan",
  "Speak With a Lead Growth Specialist",
];

export default function FinalCTA() {
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

        .fcta-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 130px 24px 150px;
          text-align: center;
        }

        }

        /* deep glow */
        .fcta-section::before {
          content: '';
          position: absolute; top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 700px;
          background:
            radial-gradient(ellipse at 35% 40%, rgba(37,99,235,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 65% 60%, rgba(96,165,250,0.04) 0%, transparent 55%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.05); }
        }

        .fcta-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.6s ease; z-index: 0;
        }
        .fcta-orb.vis { opacity: 1; }
        .fcta-orb-1 {
          width: 500px; height: 500px; top: -160px; right: -140px;
          background: radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%);
          animation: floatOrb 13s ease-in-out infinite;
        }
        .fcta-orb-2 {
          width: 320px; height: 320px; bottom: 60px; left: -90px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 17s ease-in-out infinite reverse;
        }

        .fcta-inner {
          max-width: 860px; margin: 0 auto;
          position: relative; z-index: 1;
        }

        /* ── EYEBROW ── */
        .fcta-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 28px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fcta-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .fcta-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        /* ── TITLE ── */
        .fcta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(42px, 7vw, 80px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.06; letter-spacing: -0.03em;
          margin-bottom: 52px;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s;
        }
        .fcta-title.vis { opacity: 1; transform: translateY(0); }
        .fcta-title-accent { color: #2563eb; }

        /* ── LINES ── */
        .fcta-lines {
          display: flex; flex-direction: column; gap: 0;
          margin-bottom: 48px;
        }

        .fcta-line {
          font-size: clamp(16px, 2vw, 20px);
          color: #666;
          padding: 14px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.3s ease;
        }
        .fcta-line:first-child { border-top: 1px solid rgba(0,0,0,0.06); }
        .fcta-line.vis { opacity: 1; transform: translateY(0); }
        .fcta-line:hover { color: #111; }

        /* ── POWER STATEMENT ── */
        .fcta-statement {
          font-family: 'Syne', sans-serif;
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 700; color: #111;
          margin-bottom: 56px;
          padding: 28px 36px;
          border: 1px solid rgba(37,99,235,0.18);
          border-radius: 20px;
          background: rgba(37,99,235,0.06);
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fcta-statement.vis { opacity: 1; transform: translateY(0); }

        .fcta-statement::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg, #2563eb, #60a5fa);
          border-radius: 20px 0 0 20px;
        }

        /* ── BUTTONS ── */
        .fcta-buttons {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 14px;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fcta-buttons.vis { opacity: 1; transform: translateY(0); }

        .fcta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.04);
          color: #222;
          border: 1px solid rgba(0,0,0,0.12);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px;
          padding: 15px 26px 15px 30px;
          transition: transform 0.25s ease, box-shadow 0.3s ease,
            background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          white-space: nowrap;
        }
        .fcta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(37,99,235,0.45);
        }
        .fcta-btn-arrow {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; flex-shrink: 0;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .fcta-btn:hover .fcta-btn-arrow {
          transform: translateX(3px);
          background: rgba(255,255,255,0.25);
        }

        /* ── TRUST BAR ── */
        .fcta-trust {
          margin-top: 56px;
          display: flex; justify-content: center;
          align-items: center; gap: 28px; flex-wrap: wrap;
          opacity: 0; transition: opacity 0.8s ease 0.9s;
        }
        .fcta-trust.vis { opacity: 1; }
        .fcta-trust-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 12.5px; color: #999;
        }
        .fcta-trust-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: #2563eb; opacity: 0.6;
        }
      `}</style>

      <section className="fcta-section" ref={sectionRef}>
        <div className={`fcta-orb fcta-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`fcta-orb fcta-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="fcta-inner">

          {/* eyebrow */}
          <span className={`fcta-eyebrow ${isVisible ? "vis" : ""}`}>
            <span className="fcta-eyebrow-line" />
            Start Growing Today
            <span className="fcta-eyebrow-line" />
          </span>

          {/* title */}
          <h2 className={`fcta-title ${isVisible ? "vis" : ""}`}>
            Let Us Grow Your<br />
            <span className="fcta-title-accent">Leads</span> Together
          </h2>

          {/* supporting lines */}
          <div className="fcta-lines">
            {lines.map((line, i) => (
              <p
                key={i}
                className={`fcta-line ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* power statement */}
          <div
            className={`fcta-statement ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.62s" : "0s" }}
          >
            Let WebAce build the lead engine that powers your growth.
          </div>

          {/* buttons */}
          <div
            className={`fcta-buttons ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.74s" : "0s" }}
          >
            {buttons.map((btn) => (
              <button key={btn} className="fcta-btn">
                {btn}
                <span className="fcta-btn-arrow">→</span>
              </button>
            ))}
          </div>

          {/* trust bar */}
          <div className={`fcta-trust ${isVisible ? "vis" : ""}`}>
            {["No commitment required", "Free initial consultation", "Strategy tailored to your goals"].map((t) => (
              <span className="fcta-trust-item" key={t}>
                <span className="fcta-trust-dot" />
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
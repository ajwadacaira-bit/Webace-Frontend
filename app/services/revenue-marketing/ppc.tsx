"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  { label: "High intent users", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
  { label: "Fast conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { label: "Strong bottom funnel traffic", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> },
  { label: "Measurable results", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  { label: "Scalable revenue", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
];

export default function PPCSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.07 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .ppc-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .ppc-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 5% 30%, rgba(37,99,235,0.05) 0%, transparent 45%),
            radial-gradient(ellipse at 95% 70%, rgba(96,165,250,0.04) 0%, transparent 45%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-22px) scale(1.05); }
        }

        .ppc-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .ppc-orb.vis { opacity: 1; }
        .ppc-orb-1 {
          width: 420px; height: 420px; top: -140px; right: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .ppc-orb-2 {
          width: 260px; height: 260px; bottom: 60px; left: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .ppc-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .ppc-inner { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ─── LEFT ─── */
        .ppc-left { position: sticky; top: 100px; }

        .ppc-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ppc-num.vis { opacity: 1; transform: translateY(0); }
        .ppc-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .ppc-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .ppc-title.vis { opacity: 1; transform: translateY(0); }

        .ppc-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .ppc-tagline.vis { opacity: 1; transform: translateY(0); }

        .ppc-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }

        .ppc-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .ppc-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .ppc-body-line:hover { color: #111; }
        .ppc-body-line.vis { opacity: 1; transform: translateY(0); }

        .ppc-pre-cta {
          font-size: 15px; color: #444; font-weight: 500;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.58s, transform 0.7s ease 0.58s;
        }
        .ppc-pre-cta.vis { opacity: 1; transform: translateY(0); }

        .ppc-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05);
          color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s;
        }
        .ppc-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .ppc-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .ppc-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .ppc-cta-btn:hover .ppc-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .ppc-right { display: flex; flex-direction: column; gap: 24px; }

        .ppc-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px;
          padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .ppc-panel.vis { opacity: 1; transform: translateY(0); }
        .ppc-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .ppc-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .ppc-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .ppc-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .ppc-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .ppc-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .ppc-item-icon {
          width: 34px; height: 34px; flex-shrink: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .ppc-item:hover .ppc-item-icon { transform: scale(1.08); }
        .ppc-item-icon svg { width: 15px; height: 15px; color: #2563eb; }
        .ppc-item-text {
          font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3;
        }

        /* stat cards */
        .ppc-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease 0.65s, transform 0.75s ease 0.65s;
        }
        .ppc-stats.vis { opacity: 1; transform: translateY(0); }

        .ppc-stat {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 18px;
          padding: 24px 22px;
          text-align: center;
          position: relative; overflow: hidden;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .ppc-stat:hover {
          box-shadow: 0 14px 40px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
          transform: translateY(-3px);
        }
        .ppc-stat::before {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 0 0 18px 18px;
          transform: scaleX(0); transition: transform 0.4s ease;
        }
        .ppc-stat:hover::before { transform: scaleX(1); }
        .ppc-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 36px; font-weight: 800; color: #2563eb;
          line-height: 1; margin-bottom: 8px;
        }
        .ppc-stat-label {
          font-size: 12px; color: #888; line-height: 1.4;
        }
      `}</style>

      <section className="ppc-section" ref={sectionRef}>
        <div className={`ppc-orb ppc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`ppc-orb ppc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="ppc-inner">

          {/* ─── LEFT ─── */}
          <div className="ppc-left">
            <span className={`ppc-num ${isVisible ? "vis" : ""}`}>
              <span className="ppc-num-line" />
              Service 01
              <span className="ppc-num-line" />
            </span>

            <h2 className={`ppc-title ${isVisible ? "vis" : ""}`}>PPC Ads</h2>

            <p className={`ppc-tagline ${isVisible ? "vis" : ""}`}>
              Immediate high-intent conversions through search advertising
            </p>

            <div className="ppc-body">
              {[
                "PPC Ads help your brand appear on Google when users search for products or services with strong commercial intent.",
                "This is one of the fastest ways to drive revenue.",
                "We optimize campaigns to reduce cost per conversion and increase purchase or sign-up outcomes.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`ppc-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <p className={`ppc-pre-cta ${isVisible ? "vis" : ""}`}>
              Want higher conversions through PPC?
            </p>

            <button className={`ppc-cta-btn ${isVisible ? "vis" : ""}`}>
              Get Your PPC Strategy
              <span className="ppc-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="ppc-right">

            <div
              className={`ppc-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="ppc-panel-label">PPC delivers:</p>
              <div className="ppc-items-grid">
                {benefits.map((item, i) => (
                  <div key={i} className="ppc-item">
                    <div className="ppc-item-icon">{item.icon}</div>
                    <span className="ppc-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`ppc-stats ${isVisible ? "vis" : ""}`}
            >
              {[
                { num: "3×", label: "Average increase in conversion rate" },
                { num: "↓40%", label: "Reduction in cost per acquisition" },
                { num: "24h", label: "Traffic within hours of launch" },
                { num: "100%", label: "Fully trackable and measurable" },
              ].map((s, i) => (
                <div key={i} className="ppc-stat">
                  <p className="ppc-stat-num">{s.num}</p>
                  <p className="ppc-stat-label">{s.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
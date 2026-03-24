"use client";

import { useEffect, useRef, useState } from "react";

const strengths = [
  { label: "Deep industry experience", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Strong analytics knowledge", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  { label: "Conversion driven thinking", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { label: "High quality creative strategy", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { label: "Funnel and lifecycle expertise", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> },
  { label: "Consistent optimization", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> },
  { label: "Transparent reporting", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
];

const pillars = [
  { word: "A science.", accent: false },
  { word: "A strategy.", accent: false },
  { word: "Optimization.", accent: false },
  { word: "Understanding user behavior.", accent: true },
];

export default function WhyChooseRevenue() {
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

        .wcr-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .wcr-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(37,99,235,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .wcr-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .wcr-orb.vis { opacity: 1; }
        .wcr-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .wcr-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .wcr-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }
        @media (max-width: 860px) { .wcr-inner { grid-template-columns: 1fr; gap: 48px; } }

        /* ─── LEFT ─── */
        .wcr-left { position: sticky; top: 100px; }

        .wcr-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wcr-num.vis { opacity: 1; transform: translateY(0); }
        .wcr-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .wcr-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 32px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .wcr-title.vis { opacity: 1; transform: translateY(0); }
        .wcr-title-accent { color: #2563eb; }

        /* science pillars */
        .wcr-pillars { margin-bottom: 40px; }

        .wcr-pillar-intro {
          font-family: 'Syne', sans-serif;
          font-size: 15px; font-weight: 800; color: #111;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s;
        }
        .wcr-pillar-intro.vis { opacity: 1; transform: translateY(0); }

        .wcr-pillar-list { display: flex; flex-direction: column; gap: 0; }

        .wcr-pillar-row {
          display: flex; align-items: center; gap: 14px;
          padding: 11px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateX(-12px);
          transition: opacity 0.6s ease, transform 0.6s ease, background 0.25s ease;
          cursor: default;
        }
        .wcr-pillar-row:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .wcr-pillar-row:hover { background: rgba(37,99,235,0.02); border-radius: 8px; padding-left: 8px; }
        .wcr-pillar-row.vis { opacity: 1; transform: translateX(0); }

        .wcr-pillar-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(0,0,0,0.15); flex-shrink: 0;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .wcr-pillar-row:last-child .wcr-pillar-dot { background: #2563eb; }
        .wcr-pillar-row:hover .wcr-pillar-dot { background: #2563eb; transform: scale(1.4); }

        .wcr-pillar-text {
          font-size: 15px; color: #555; line-height: 1.5;
          transition: color 0.25s ease;
        }
        .wcr-pillar-row:last-child .wcr-pillar-text { color: #111; font-weight: 500; }
        .wcr-pillar-row:hover .wcr-pillar-text { color: #111; }

        /* statement card */
        .wcr-statement {
          background: #111;
          border-radius: 18px;
          padding: 28px 30px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s;
        }
        .wcr-statement.vis { opacity: 1; transform: translateY(0); }
        .wcr-statement::before {
          content: '';
          position: absolute; top: -60px; left: -30px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%);
          pointer-events: none;
        }
        .wcr-statement-label {
          font-size: 10px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 12px; position: relative;
        }
        .wcr-statement-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(16px, 1.8vw, 20px); font-weight: 800;
          color: #fff; line-height: 1.5; position: relative;
        }
        .wcr-statement-text span { color: #60a5fa; }

        /* ─── RIGHT ─── */
        .wcr-right { display: flex; flex-direction: column; gap: 24px; }

        .wcr-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .wcr-panel.vis { opacity: 1; transform: translateY(0); }
        .wcr-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .wcr-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .wcr-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .wcr-items-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        .wcr-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .wcr-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .wcr-item-icon {
          width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .wcr-item:hover .wcr-item-icon { transform: scale(1.08); }
        .wcr-item-icon svg { width: 15px; height: 15px; color: #2563eb; }
        .wcr-item-text { font-size: 13px; color: #333; font-weight: 400; line-height: 1.3; }

        /* closing dark card */
        .wcr-closing {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease 0.56s, transform 0.75s ease 0.56s,
            box-shadow 0.35s ease, border-color 0.35s ease;
          text-align: center;
        }
        .wcr-closing.vis { opacity: 1; transform: translateY(0); }
        .wcr-closing:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .wcr-closing::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }
        .wcr-closing-icon {
          width: 56px; height: 56px; border-radius: 18px;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 24px rgba(37,99,235,0.3);
        }
        .wcr-closing-icon svg { width: 24px; height: 24px; color: #fff; }
        .wcr-closing-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(16px, 1.8vw, 20px); font-weight: 800;
          color: #111; line-height: 1.5;
        }
        .wcr-closing-text span { color: #2563eb; }
      `}</style>

      <section className="wcr-section" ref={sectionRef}>
        <div className={`wcr-orb wcr-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wcr-orb wcr-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wcr-inner">

          {/* ─── LEFT ─── */}
          <div className="wcr-left">
            <span className={`wcr-num ${isVisible ? "vis" : ""}`}>
              <span className="wcr-num-line" />
              Our Difference
              <span className="wcr-num-line" />
            </span>

            <h2 className={`wcr-title ${isVisible ? "vis" : ""}`}>
              Why Choose <span className="wcr-title-accent">WebAce</span> for Revenue Marketing
            </h2>

            <div className="wcr-pillars">
              <p className={`wcr-pillar-intro ${isVisible ? "vis" : ""}`}>
                Revenue Marketing is not guesswork.
              </p>
              <div className="wcr-pillar-list">
                {pillars.map((p, i) => (
                  <div
                    key={i}
                    className={`wcr-pillar-row ${isVisible ? "vis" : ""}`}
                    style={{ transitionDelay: isVisible ? `${0.35 + i * 0.08}s` : "0s" }}
                  >
                    <span className="wcr-pillar-dot" />
                    <span className="wcr-pillar-text">{p.word}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`wcr-statement ${isVisible ? "vis" : ""}`}>
              <p className="wcr-statement-label">Our focus</p>
              <p className="wcr-statement-text">
                We focus on <span>real revenue outcomes,</span> not vanity numbers.
              </p>
            </div>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="wcr-right">

            <div
              className={`wcr-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="wcr-panel-label">WebAce brings:</p>
              <div className="wcr-items-grid">
                {strengths.map((item, i) => (
                  <div key={i} className="wcr-item">
                    <div className="wcr-item-icon">{item.icon}</div>
                    <span className="wcr-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`wcr-closing ${isVisible ? "vis" : ""}`}>
              <div className="wcr-closing-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <p className="wcr-closing-text">
                Every decision we make is driven by one goal — <span>growing your revenue.</span>
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
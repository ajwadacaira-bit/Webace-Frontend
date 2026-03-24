"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { label: "They get traffic", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "They get leads", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> },
  { label: "But they do not get enough revenue", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><line x1="4" y1="4" x2="20" y2="20"/></svg> },
];

const problems = [
  { label: "Campaigns are not optimized for conversion", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
  { label: "Landing journeys are broken", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Target audiences are not refined", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Messaging does not match intent", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/></svg> },
  { label: "Funnel stages are missing", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Retargeting is weak", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "User lifecycle is ignored", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
];

const solutions = [
  { label: "Increase conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { label: "Reduce cost per acquisition", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: "Improve customer value", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Grow sales consistently", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Strengthen ROI across channels", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  { label: "Create predictable revenue outcomes", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
];

export default function WhyRevenueMatters() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .wrm-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .wrm-section::before {
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
        .wrm-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .wrm-orb.vis { opacity: 1; }
        .wrm-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .wrm-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .wrm-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .wrm-header { text-align: center; margin-bottom: 72px; }

        .wrm-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wrm-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .wrm-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .wrm-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .wrm-title.vis { opacity: 1; transform: translateY(0); }
        .wrm-title-accent { color: #2563eb; }

        /* ── BLOCK HEADER ── */
        .wrm-block { margin-bottom: 72px; }

        .wrm-block-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #999;
          margin-bottom: 24px; padding-left: 2px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wrm-block-label.vis { opacity: 1; transform: translateY(0); }

        .wrm-block-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800; color: #111;
          margin-bottom: 28px;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .wrm-block-heading.vis { opacity: 1; transform: translateY(0); }
        .wrm-block-heading span { color: #2563eb; }

        /* ── STAGE CARDS (3-col) ── */
        .wrm-stages {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 72px;
        }
        @media (max-width: 720px) { .wrm-stages { grid-template-columns: 1fr; } }

        .wrm-stage-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px;
          padding: 36px 30px;
          position: relative; overflow: hidden;
          cursor: default;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease,
            box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .wrm-stage-card.vis { opacity: 1; transform: translateY(0); }
        .wrm-stage-card:nth-child(3) { border-color: rgba(239,68,68,0.15); background: #fffafa; }
        .wrm-stage-card:nth-child(3):hover { border-color: rgba(239,68,68,0.3); }

        .wrm-stage-card:not(:nth-child(3)):hover {
          box-shadow: 0 16px 44px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.2);
          transform: translateY(-4px) !important;
        }

        .wrm-stage-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          border-radius: 22px 22px 0 0;
        }
        .wrm-stage-card:not(:nth-child(3))::before {
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s ease;
        }
        .wrm-stage-card:not(:nth-child(3)):hover::before { transform: scaleX(1); }
        .wrm-stage-card:nth-child(3)::before {
          background: linear-gradient(90deg, #ef4444, #f87171);
        }

        .wrm-stage-num {
          font-family: 'Syne', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
          color: #2563eb; margin-bottom: 20px;
        }
        .wrm-stage-card:nth-child(3) .wrm-stage-num { color: #ef4444; }

        .wrm-stage-icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .wrm-stage-card:nth-child(3) .wrm-stage-icon { background: linear-gradient(135deg, #fff1f2, #fee2e2); }
        .wrm-stage-card:hover .wrm-stage-icon { transform: scale(1.08); }
        .wrm-stage-icon svg { width: 22px; height: 22px; color: #2563eb; }
        .wrm-stage-card:nth-child(3) .wrm-stage-icon svg { color: #ef4444; }

        .wrm-stage-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; color: #111; line-height: 1.35;
        }
        .wrm-stage-card:nth-child(3) .wrm-stage-title { color: #ef4444; }

        /* ── PROBLEM GRID ── */
        .wrm-prob-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 860px) { .wrm-prob-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .wrm-prob-grid { grid-template-columns: 1fr; } }

        .wrm-prob-card {
          background: #fafafa;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px;
          padding: 20px 18px;
          display: flex; align-items: center; gap: 14px;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.65s ease, transform 0.65s ease,
            background 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }
        .wrm-prob-card.vis { opacity: 1; transform: translateY(0); }
        .wrm-prob-card:hover {
          background: #fff0f0;
          border-color: rgba(239,68,68,0.2);
          transform: translateX(3px) !important;
        }
        .wrm-prob-icon {
          width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px;
          background: #fff0f0;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .wrm-prob-card:hover .wrm-prob-icon { transform: scale(1.08); }
        .wrm-prob-icon svg { width: 16px; height: 16px; color: #ef4444; }
        .wrm-prob-text { font-size: 13.5px; color: #444; line-height: 1.5; }

        /* ── SOLUTION GRID ── */
        .wrm-sol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 860px) { .wrm-sol-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .wrm-sol-grid { grid-template-columns: 1fr; } }

        .wrm-sol-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 18px;
          padding: 24px 22px;
          display: flex; align-items: center; gap: 14px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.65s ease, transform 0.65s ease,
            box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .wrm-sol-card.vis { opacity: 1; transform: translateY(0); }
        .wrm-sol-card:hover {
          box-shadow: 0 14px 40px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.2);
          transform: translateY(-3px) !important;
        }
        .wrm-sol-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
          border-radius: 18px 18px 0 0;
        }
        .wrm-sol-card:hover::before { transform: scaleX(1); }
        .wrm-sol-icon {
          width: 40px; height: 40px; flex-shrink: 0; border-radius: 12px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .wrm-sol-card:hover .wrm-sol-icon { transform: scale(1.08); }
        .wrm-sol-icon svg { width: 17px; height: 17px; color: #2563eb; }
        .wrm-sol-text {
          font-family: 'Syne', sans-serif;
          font-size: 14px; font-weight: 700; color: #111; line-height: 1.4;
          transition: color 0.3s ease;
        }
        .wrm-sol-card:hover .wrm-sol-text { color: #2563eb; }

        /* ── CLOSING ── */
        .wrm-closing {
          background: #111;
          border-radius: 24px;
          padding: 56px 64px;
          text-align: center;
          position: relative; overflow: hidden;
          margin-top: 72px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .wrm-closing.vis { opacity: 1; transform: translateY(0); }
        .wrm-closing::before {
          content: '';
          position: absolute; top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .wrm-closing-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 16px; position: relative;
        }
        .wrm-closing-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 3vw, 30px); font-weight: 800;
          color: #fff; margin-bottom: 10px; position: relative;
        }
        .wrm-closing-sub {
          font-size: 16px; color: rgba(255,255,255,0.45);
          margin-bottom: 36px; position: relative;
        }
        .wrm-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 15px 26px 15px 30px;
          transition: transform 0.25s ease, box-shadow 0.3s ease,
            background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          position: relative;
        }
        .wrm-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.45);
        }
        .wrm-cta-arrow {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .wrm-cta-btn:hover .wrm-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        @media (max-width: 560px) { .wrm-closing { padding: 44px 28px; } }
      `}</style>

      <section className="wrm-section" ref={sectionRef}>
        <div className={`wrm-orb wrm-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wrm-orb wrm-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wrm-inner">

          {/* ── HEADER ── */}
          <div className="wrm-header">
            <span className={`wrm-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wrm-eyebrow-line" />
              The Foundation
              <span className="wrm-eyebrow-line" />
            </span>
            <h2 className={`wrm-title ${isVisible ? "vis" : ""}`}>
              Why <span className="wrm-title-accent">Revenue Marketing</span> Matters
            </h2>
          </div>

          {/* ── STAGES ── */}
          <div className="wrm-stages">
            {stages.map((s, i) => (
              <div
                key={i}
                className={`wrm-stage-card ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.3 + i * 0.12}s` : "0s" }}
              >
                <p className="wrm-stage-num">0{i + 1}</p>
                <div className="wrm-stage-icon">{s.icon}</div>
                <p className="wrm-stage-title">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── PROBLEMS ── */}
          <div className="wrm-block">
            <p
              className={`wrm-block-label ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: "0.55s" }}
            >
              This happens because:
            </p>
            <div className="wrm-prob-grid">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className={`wrm-prob-card ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.6 + i * 0.07}s` : "0s" }}
                >
                  <div className="wrm-prob-icon">{p.icon}</div>
                  <span className="wrm-prob-text">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── SOLUTIONS ── */}
          <div className="wrm-block">
            <p
              className={`wrm-block-heading ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: "1.1s" }}
            >
              Revenue Marketing <span>fixes all of this.</span>
            </p>
            <p
              className={`wrm-block-label ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: "1.18s" }}
            >
              It helps your brand:
            </p>
            <div className="wrm-sol-grid">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className={`wrm-sol-card ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${1.22 + i * 0.08}s` : "0s" }}
                >
                  <div className="wrm-sol-icon">{s.icon}</div>
                  <span className="wrm-sol-text">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CLOSING ── */}
          <div
            className={`wrm-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.7s" : "0s" }}
          >
            <p className="wrm-closing-label">The Bottom Line</p>
            <h3 className="wrm-closing-headline">
              Revenue Marketing transforms your digital presence into a profit engine.
            </h3>
            <p className="wrm-closing-sub">Want predictable monthly revenue?</p>
            <button className="wrm-cta-btn">
              Request a Free Revenue Audit
              <span className="wrm-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
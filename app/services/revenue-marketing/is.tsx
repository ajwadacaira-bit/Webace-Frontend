"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  { label: "More sales", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: "Better conversion rates", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { label: "Stronger customer journeys", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg> },
  { label: "Lower acquisition costs", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg> },
  { label: "Higher order value", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
  { label: "Repeat revenue", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> },
  { label: "Scalable digital growth", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
];

export default function IsRevenueRight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .irr-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .irr-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 20%, rgba(37,99,235,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .irr-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .irr-orb.vis { opacity: 1; }
        .irr-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .irr-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .irr-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .irr-header { text-align: center; margin-bottom: 72px; }

        .irr-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .irr-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .irr-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .irr-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .irr-title.vis { opacity: 1; transform: translateY(0); }
        .irr-title-accent { color: #2563eb; }

        .irr-sub {
          font-size: 16px; color: #555; line-height: 1.8;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .irr-sub.vis { opacity: 1; transform: translateY(0); }

        /* ── GRID ── */
        .irr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 64px;
        }
        @media (max-width: 860px) { .irr-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) {
          .irr-grid { grid-template-columns: 1fr; }
          .irr-card-wide { grid-column: span 1 !important; }
        }
        .irr-card-wide { grid-column: span 3; }
        @media (max-width: 860px) { .irr-card-wide { grid-column: span 2; } }

        /* ── CARD ── */
        .irr-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 22px;
          padding: 32px 28px;
          position: relative; overflow: hidden;
          cursor: default;
          opacity: 0; transform: translateY(32px);
          transition:
            opacity 0.7s ease, transform 0.7s ease,
            box-shadow 0.35s ease, border-color 0.35s ease,
            background 0.35s ease;
        }
        .irr-card.vis { opacity: 1; transform: translateY(0); }

        .irr-card:hover {
          background: #0f0f0f;
          border-color: #0f0f0f;
          box-shadow: 0 24px 64px rgba(0,0,0,0.2);
          transform: translateY(-5px) !important;
        }

        .irr-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s ease;
          border-radius: 22px 22px 0 0;
        }
        .irr-card:hover::before { transform: scaleX(1); }

        .irr-card-glow {
          position: absolute; top: -50px; right: -50px;
          width: 160px; height: 160px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%);
          opacity: 0; transition: opacity 0.4s ease; pointer-events: none;
        }
        .irr-card:hover .irr-card-glow { opacity: 1; }

        .irr-card-num {
          position: absolute; bottom: 16px; right: 22px;
          font-family: 'Syne', sans-serif;
          font-size: 48px; font-weight: 800;
          color: rgba(0,0,0,0.04); line-height: 1;
          user-select: none; pointer-events: none;
          transition: color 0.35s ease;
        }
        .irr-card:hover .irr-card-num { color: rgba(255,255,255,0.04); }

        .irr-icon-wrap {
          width: 48px; height: 48px; border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          transition: transform 0.3s ease, background 0.35s ease;
        }
        .irr-card:hover .irr-icon-wrap {
          background: rgba(255,255,255,0.1);
          transform: scale(1.08);
        }
        .irr-icon-wrap svg { width: 21px; height: 21px; color: #2563eb; transition: color 0.35s ease; }
        .irr-card:hover .irr-icon-wrap svg { color: #60a5fa; }

        .irr-card-label {
          font-family: 'Syne', sans-serif;
          font-size: 16px; font-weight: 800; color: #111;
          line-height: 1.35; transition: color 0.35s ease;
        }
        .irr-card:hover .irr-card-label { color: #fff; }

        /* ── CLOSING ── */
        .irr-closing {
          background: #111;
          border-radius: 24px;
          padding: 48px 56px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 40px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .irr-closing.vis { opacity: 1; transform: translateY(0); }
        .irr-closing::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.16), transparent 70%);
          pointer-events: none;
        }
        @media (max-width: 640px) {
          .irr-closing { flex-direction: column; text-align: center; padding: 40px 28px; }
        }
        .irr-closing-left { position: relative; }
        .irr-closing-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 10px;
        }
        .irr-closing-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(15px, 1.8vw, 20px); font-weight: 700;
          color: rgba(255,255,255,0.7); line-height: 1.5;
        }
        .irr-cta-btn {
          flex-shrink: 0;
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 15px 26px 15px 30px;
          transition: transform 0.25s ease, box-shadow 0.3s ease,
            background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          position: relative; white-space: nowrap;
        }
        .irr-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.45);
        }
        .irr-cta-arrow {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .irr-cta-btn:hover .irr-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }
      `}</style>

      <section className="irr-section" ref={sectionRef}>
        <div className={`irr-orb irr-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`irr-orb irr-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="irr-inner">

          {/* ── HEADER ── */}
          <div className="irr-header">
            <span className={`irr-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="irr-eyebrow-line" />
              Is This Right For You?
              <span className="irr-eyebrow-line" />
            </span>
            <h2 className={`irr-title ${isVisible ? "vis" : ""}`}>
              Is This Category{" "}
              <span className="irr-title-accent">Right For You</span>
            </h2>
            <p className={`irr-sub ${isVisible ? "vis" : ""}`}>
              Choose Revenue Marketing if you want:
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="irr-grid">
            {points.map((pt, i) => (
              <div
                key={i}
                className={`irr-card ${i === points.length - 1 ? "irr-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.09}s` : "0s" }}
              >
                <div className="irr-card-glow" />
                <span className="irr-card-num">0{i + 1}</span>
                <div className="irr-icon-wrap">{pt.icon}</div>
                <p className="irr-card-label">{pt.label}</p>
              </div>
            ))}
          </div>

          {/* ── CLOSING ── */}
          <div
            className={`irr-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.05s" : "0s" }}
          >
            <div className="irr-closing-left">
              <p className="irr-closing-label">Ready to grow?</p>
              <p className="irr-closing-text">Not sure where your revenue is stuck?</p>
            </div>
            <button className="irr-cta-btn">
              Get a Free Audit
              <span className="irr-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
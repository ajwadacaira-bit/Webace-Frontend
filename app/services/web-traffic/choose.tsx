"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  { label: "Data driven decisions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  { label: "Real time optimization", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { label: "Strong audience intelligence", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: "Cross platform expertise", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: "Clean funnel design", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> },
  { label: "Experienced execution", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Transparent reporting", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
];

export default function WhyChooseWebAce() {
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

        .wcw-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .wcw-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 20%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .wcw-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .wcw-orb.vis { opacity: 1; }
        .wcw-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .wcw-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .wcw-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .wcw-header { text-align: center; margin-bottom: 72px; }

        .wcw-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wcw-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .wcw-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .wcw-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 28px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .wcw-title.vis { opacity: 1; transform: translateY(0); }
        .wcw-title-accent { color: #2563eb; }

        .wcw-lines {
          display: flex; flex-direction: column;
          max-width: 520px; margin: 0 auto;
        }

        .wcw-line {
          font-size: 16px; color: #666;
          padding: 11px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .wcw-line:first-child { border-top: 1px solid rgba(0,0,0,0.06); }
        .wcw-line:hover { color: #111; }
        .wcw-line.vis { opacity: 1; transform: translateY(0); }

        /* ── GRID ── */
        .wcw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 64px;
        }
        @media (max-width: 860px) { .wcw-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) {
          .wcw-grid { grid-template-columns: 1fr; }
          .wcw-card-wide { grid-column: span 1 !important; }
        }
        .wcw-card-wide { grid-column: span 3; }
        @media (max-width: 860px) { .wcw-card-wide { grid-column: span 2; } }

        /* ── CARD ── */
        .wcw-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 22px;
          padding: 32px 28px;
          position: relative; overflow: hidden;
          cursor: default;
          opacity: 0; transform: translateY(32px);
          transition:
            opacity 0.7s ease, transform 0.7s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .wcw-card.vis { opacity: 1; transform: translateY(0); }
        .wcw-card:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.22);
          transform: translateY(-5px) !important;
        }

        .wcw-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s ease;
          border-radius: 22px 22px 0 0;
        }
        .wcw-card:hover::before { transform: scaleX(1); }

        .wcw-card-glow {
          position: absolute; top: -50px; right: -50px;
          width: 150px; height: 150px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          opacity: 0; transition: opacity 0.4s ease; pointer-events: none;
        }
        .wcw-card:hover .wcw-card-glow { opacity: 1; }

        .wcw-card-num {
          position: absolute; bottom: 16px; right: 22px;
          font-family: 'Syne', sans-serif;
          font-size: 48px; font-weight: 800;
          color: rgba(0,0,0,0.04); line-height: 1;
          user-select: none; pointer-events: none;
        }

        .wcw-icon-wrap {
          width: 48px; height: 48px; border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .wcw-card:hover .wcw-icon-wrap {
          transform: scale(1.08);
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        }
        .wcw-icon-wrap svg { width: 21px; height: 21px; color: #2563eb; }

        .wcw-card-label {
          font-family: 'Syne', sans-serif;
          font-size: 16px; font-weight: 800; color: #111;
          line-height: 1.35;
          transition: color 0.3s ease;
        }
        .wcw-card:hover .wcw-card-label { color: #2563eb; }

        /* ── CLOSING ── */
        .wcw-closing {
          background: #111;
          border-radius: 24px;
          padding: 56px 64px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease, transform 0.85s ease;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .wcw-closing.vis { opacity: 1; transform: translateY(0); }

        .wcw-closing::before {
          content: '';
          position: absolute; top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 65%);
          pointer-events: none;
        }

        @media (max-width: 700px) {
          .wcw-closing { grid-template-columns: 1fr; padding: 44px 28px; gap: 28px; }
        }

        .wcw-closing-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 16px;
          position: relative;
        }

        .wcw-closing-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(18px, 2.2vw, 24px); font-weight: 800;
          color: #fff; line-height: 1.5; position: relative;
        }
        .wcw-closing-text + .wcw-closing-text { margin-top: 16px; }
        .wcw-closing-text span { color: #60a5fa; }

        .wcw-closing-right {
          position: relative;
          display: flex; flex-direction: column; gap: 14px;
        }

        .wcw-closing-stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 18px 22px;
          display: flex; align-items: center; gap: 14px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .wcw-closing-stat:hover {
          background: rgba(37,99,235,0.12);
          border-color: rgba(37,99,235,0.3);
        }
        .wcw-closing-stat-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #2563eb; flex-shrink: 0;
        }
        .wcw-closing-stat-text {
          font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.4;
        }
      `}</style>

      <section className="wcw-section" ref={sectionRef}>
        <div className={`wcw-orb wcw-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wcw-orb wcw-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wcw-inner">

          {/* ── HEADER ── */}
          <div className="wcw-header">
            <span className={`wcw-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wcw-eyebrow-line" />
              Our Difference
              <span className="wcw-eyebrow-line" />
            </span>

            <h2 className={`wcw-title ${isVisible ? "vis" : ""}`}>
              Why Choose{" "}
              <span className="wcw-title-accent">WebAce</span>{" "}
              for Web Traffic
            </h2>

            <div className="wcw-lines">
              {[
                "Your brand does not need random traffic.",
                "Your brand needs the right traffic.",
                "Traffic that engages, explores and converts.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`wcw-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* ── GRID ── */}
          <div className="wcw-grid">
            {points.map((pt, i) => (
              <div
                key={i}
                className={`wcw-card ${i === points.length - 1 ? "wcw-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.42 + i * 0.09}s` : "0s" }}
              >
                <div className="wcw-card-glow" />
                <span className="wcw-card-num">0{i + 1}</span>
                <div className="wcw-icon-wrap">{pt.icon}</div>
                <p className="wcw-card-label">{pt.label}</p>
              </div>
            ))}
          </div>

          {/* ── CLOSING ── */}
          <div
            className={`wcw-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.05s" : "0s" }}
          >
            <div>
              <p className="wcw-closing-label">Our Philosophy</p>
              <p className="wcw-closing-text">
                We do not believe in traffic <span>for the sake of traffic.</span>
              </p>
              <p className="wcw-closing-text" style={{ marginTop: 16 }}>
                We believe in <span>meaningful visits</span> that lead to real business results.
              </p>
            </div>

            <div className="wcw-closing-right">
              {[
                "Quality over quantity — always",
                "Every visit should have a purpose",
                "Traffic that converts, not just counts",
              ].map((t, i) => (
                <div key={i} className="wcw-closing-stat">
                  <span className="wcw-closing-stat-dot" />
                  <span className="wcw-closing-stat-text">{t}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
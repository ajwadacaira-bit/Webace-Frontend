"use client";

import { useEffect, useRef, useState } from "react";

const pageQualities = [
  { label: "Communicate value quickly", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { label: "Reduce friction", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { label: "Increase sign ups or purchases", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> },
  { label: "Improve conversion rate", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Increase revenue per session", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
];

const notFor = [
  { label: "Not for awareness", cross: true },
  { label: "Not for traffic", cross: true },
  { label: "Built for revenue", cross: false },
];

export default function LeadMagnetSection() {
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

        .lmp-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .lmp-section::before {
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
        .lmp-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .lmp-orb.vis { opacity: 1; }
        .lmp-orb-1 {
          width: 420px; height: 420px; top: -140px; left: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .lmp-orb-2 {
          width: 260px; height: 260px; bottom: 60px; right: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .lmp-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }
        @media (max-width: 860px) { .lmp-inner { grid-template-columns: 1fr; gap: 48px; } }

        /* ─── LEFT ─── */
        .lmp-left { position: sticky; top: 100px; }

        .lmp-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .lmp-num.vis { opacity: 1; transform: translateY(0); }
        .lmp-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .lmp-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .lmp-title.vis { opacity: 1; transform: translateY(0); }

        .lmp-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .lmp-tagline.vis { opacity: 1; transform: translateY(0); }

        .lmp-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 28px; }

        .lmp-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .lmp-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .lmp-body-line:hover { color: #111; }
        .lmp-body-line.vis { opacity: 1; transform: translateY(0); }

        /* purpose trio */
        .lmp-purpose {
          display: flex; flex-direction: column; gap: 10px;
          margin-bottom: 36px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
        }
        .lmp-purpose.vis { opacity: 1; transform: translateY(0); }

        .lmp-purpose-row {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .lmp-purpose-row.cross {
          background: #fafafa;
        }
        .lmp-purpose-row.win {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
        }

        .lmp-purpose-icon {
          width: 28px; height: 28px; flex-shrink: 0; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700;
        }
        .lmp-purpose-row.cross .lmp-purpose-icon {
          background: #fff0f0; color: #ef4444;
        }
        .lmp-purpose-row.win .lmp-purpose-icon {
          background: linear-gradient(135deg, #2563eb, #3b82f6); color: #fff;
        }

        .lmp-purpose-text {
          font-family: 'Syne', sans-serif;
          font-size: 14px; font-weight: 700; line-height: 1.3;
        }
        .lmp-purpose-row.cross .lmp-purpose-text { color: #aaa; text-decoration: line-through; }
        .lmp-purpose-row.win .lmp-purpose-text { color: #2563eb; }

        .lmp-bottom-note {
          font-size: 14px; color: #777; line-height: 1.7;
          padding: 18px 22px;
          background: #f8f9fc;
          border-radius: 12px;
          margin-bottom: 36px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s;
        }
        .lmp-bottom-note.vis { opacity: 1; transform: translateY(0); }

        .lmp-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05); color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.68s, transform 0.7s ease 0.68s;
        }
        .lmp-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .lmp-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .lmp-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .lmp-cta-btn:hover .lmp-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .lmp-right { display: flex; flex-direction: column; gap: 24px; }

        .lmp-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .lmp-panel.vis { opacity: 1; transform: translateY(0); }
        .lmp-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .lmp-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .lmp-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .lmp-items-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        .lmp-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .lmp-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .lmp-item-icon {
          width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .lmp-item:hover .lmp-item-icon { transform: scale(1.08); }
        .lmp-item-icon svg { width: 15px; height: 15px; color: #2563eb; }
        .lmp-item-text { font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3; }

        /* stat card */
        .lmp-stat-card {
          background: #111;
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease 0.56s, transform 0.75s ease 0.56s;
          text-align: center;
        }
        .lmp-stat-card.vis { opacity: 1; transform: translateY(0); }
        .lmp-stat-card::before {
          content: '';
          position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%);
          pointer-events: none;
        }
        .lmp-stat-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 16px; position: relative;
        }
        .lmp-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 72px; font-weight: 800; color: #fff;
          line-height: 1; margin-bottom: 8px; position: relative;
        }
        .lmp-stat-sub {
          font-size: 15px; color: rgba(255,255,255,0.45); position: relative;
        }
      `}</style>

      <section className="lmp-section" ref={sectionRef}>
        <div className={`lmp-orb lmp-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`lmp-orb lmp-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="lmp-inner">

          {/* ─── LEFT ─── */}
          <div className="lmp-left">
            <span className={`lmp-num ${isVisible ? "vis" : ""}`}>
              <span className="lmp-num-line" />
              Service 04
              <span className="lmp-num-line" />
            </span>

            <h2 className={`lmp-title ${isVisible ? "vis" : ""}`}>
              Lead Magnet<br />Pages
            </h2>

            <p className={`lmp-tagline ${isVisible ? "vis" : ""}`}>
              Turn intent into action with high-converting landing experiences
            </p>

            <div className="lmp-body">
              {[
                "A strong landing page can double your conversions.",
                "Lead Magnet Pages are built specifically for conversion.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`lmp-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className={`lmp-purpose ${isVisible ? "vis" : ""}`}>
              {[
                { label: "Not for awareness", cross: true },
                { label: "Not for traffic", cross: true },
                { label: "Built for revenue", cross: false },
              ].map((row, i) => (
                <div key={i} className={`lmp-purpose-row ${row.cross ? "cross" : "win"}`}>
                  <div className="lmp-purpose-icon">
                    {row.cross ? "✕" : "→"}
                  </div>
                  <span className="lmp-purpose-text">{row.label}</span>
                </div>
              ))}
            </div>

            <p className={`lmp-bottom-note ${isVisible ? "vis" : ""}`}>
              Landing pages are one of the most important elements of revenue marketing.
            </p>

            <button className={`lmp-cta-btn ${isVisible ? "vis" : ""}`}>
              Build My Lead Magnet Page
              <span className="lmp-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="lmp-right">

            <div
              className={`lmp-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="lmp-panel-label">These pages:</p>
              <div className="lmp-items-grid">
                {pageQualities.map((item, i) => (
                  <div key={i} className="lmp-item">
                    <div className="lmp-item-icon">{item.icon}</div>
                    <span className="lmp-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`lmp-stat-card ${isVisible ? "vis" : ""}`}>
              <p className="lmp-stat-label">Average impact</p>
              <p className="lmp-stat-num">2×</p>
              <p className="lmp-stat-sub">Conversion rate with an optimised landing page</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
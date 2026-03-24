"use client";

import { useEffect, useRef, useState } from "react";

const frictions = [
  { label: "Confusing layouts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
  { label: "Slow checkout", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Poor product pages", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Weak call to action", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="5"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Low trust signals", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
];

const improvements = [
  { label: "Add to cart rate", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
  { label: "Conversion rate", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { label: "Checkout rate", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
  { label: "Repeat purchase rate", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> },
  { label: "Overall revenue", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
];

export default function EcommerceFunnelSection() {
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

        .ecf-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .ecf-section::before {
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
        .ecf-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .ecf-orb.vis { opacity: 1; }
        .ecf-orb-1 {
          width: 420px; height: 420px; top: -140px; left: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .ecf-orb-2 {
          width: 260px; height: 260px; bottom: 60px; right: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .ecf-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }
        @media (max-width: 860px) { .ecf-inner { grid-template-columns: 1fr; gap: 48px; } }

        /* ─── LEFT ─── */
        .ecf-left { position: sticky; top: 100px; }

        .ecf-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ecf-num.vis { opacity: 1; transform: translateY(0); }
        .ecf-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .ecf-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .ecf-title.vis { opacity: 1; transform: translateY(0); }

        .ecf-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .ecf-tagline.vis { opacity: 1; transform: translateY(0); }

        .ecf-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 28px; }

        .ecf-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .ecf-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .ecf-body-line:hover { color: #111; }
        .ecf-body-line.vis { opacity: 1; transform: translateY(0); }

        .ecf-friction-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.16em;
          text-transform: uppercase; color: #ef4444;
          margin-bottom: 14px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.46s, transform 0.7s ease 0.46s;
        }
        .ecf-friction-label.vis { opacity: 1; transform: translateY(0); }

        .ecf-frictions {
          display: flex; flex-direction: column; gap: 8px;
          margin-bottom: 32px;
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.75s ease 0.52s, transform 0.75s ease 0.52s;
        }
        .ecf-frictions.vis { opacity: 1; transform: translateY(0); }

        .ecf-friction-row {
          display: flex; align-items: center; gap: 12px;
          padding: 11px 16px; border-radius: 11px;
          background: #fff8f8;
          border: 1px solid rgba(239,68,68,0.1);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .ecf-friction-row:hover {
          background: #fff0f0;
          border-color: rgba(239,68,68,0.22);
          transform: translateX(3px);
        }
        .ecf-friction-icon {
          width: 32px; height: 32px; flex-shrink: 0; border-radius: 9px;
          background: #fff0f0;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .ecf-friction-row:hover .ecf-friction-icon { transform: scale(1.08); }
        .ecf-friction-icon svg { width: 14px; height: 14px; color: #ef4444; }
        .ecf-friction-text { font-size: 13.5px; color: #555; line-height: 1.3; }

        .ecf-conclusion {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; color: #111;
          padding: 22px 26px;
          border: 1px solid rgba(37,99,235,0.15);
          border-left: 3px solid #2563eb;
          border-radius: 14px;
          background: rgba(37,99,235,0.03);
          margin-bottom: 36px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.72s, transform 0.8s ease 0.72s;
        }
        .ecf-conclusion.vis { opacity: 1; transform: translateY(0); }

        .ecf-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05); color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s;
        }
        .ecf-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .ecf-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .ecf-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .ecf-cta-btn:hover .ecf-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .ecf-right { display: flex; flex-direction: column; gap: 24px; }

        .ecf-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .ecf-panel.vis { opacity: 1; transform: translateY(0); }
        .ecf-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .ecf-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .ecf-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .ecf-items-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        .ecf-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .ecf-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .ecf-item-icon {
          width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .ecf-item:hover .ecf-item-icon { transform: scale(1.08); }
        .ecf-item-icon svg { width: 15px; height: 15px; color: #2563eb; }
        .ecf-item-text { font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3; }
      `}</style>

      <section className="ecf-section" ref={sectionRef}>
        <div className={`ecf-orb ecf-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`ecf-orb ecf-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="ecf-inner">

          {/* ─── LEFT ─── */}
          <div className="ecf-left">
            <span className={`ecf-num ${isVisible ? "vis" : ""}`}>
              <span className="ecf-num-line" />
              Service 06
              <span className="ecf-num-line" />
            </span>

            <h2 className={`ecf-title ${isVisible ? "vis" : ""}`}>
              Ecommerce Funnel<br />Optimization
            </h2>

            <p className={`ecf-tagline ${isVisible ? "vis" : ""}`}>
              Fix the steps that users follow before making a purchase
            </p>

            <div className="ecf-body">
              <p
                className={`ecf-body-line ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? "0.32s" : "0s" }}
              >
                Most revenue is lost inside the funnel — not because of bad traffic, but because of friction that stops users from completing their purchase.
              </p>
            </div>

            <p className={`ecf-friction-label ${isVisible ? "vis" : ""}`}>
              Common friction points:
            </p>

            <div className={`ecf-frictions ${isVisible ? "vis" : ""}`}>
              {frictions.map((item, i) => (
                <div key={i} className="ecf-friction-row">
                  <div className="ecf-friction-icon">{item.icon}</div>
                  <span className="ecf-friction-text">{item.label}</span>
                </div>
              ))}
            </div>

            <div className={`ecf-conclusion ${isVisible ? "vis" : ""}`}>
              This is a direct revenue booster.
            </div>

            <button className={`ecf-cta-btn ${isVisible ? "vis" : ""}`}>
              Optimise My Funnel
              <span className="ecf-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="ecf-right">
            <div
              className={`ecf-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="ecf-panel-label">We improve:</p>
              <div className="ecf-items-grid">
                {improvements.map((item, i) => (
                  <div key={i} className="ecf-item">
                    <div className="ecf-item-icon">{item.icon}</div>
                    <span className="ecf-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

const influences = [
  { label: "Sales", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: "Credibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { label: "Customer trust", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Hiring quality", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: "Market position", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Online conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
];

const helps = [
  { label: "Build trust", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Mitigate negativity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> },
  { label: "Improve ratings", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Strengthen public perception", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Control online narratives", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { label: "Increase conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
];

const behaviours = [
  "Your potential customers search before they buy.",
  "They evaluate reviews before they trust.",
  "They observe comments before they engage.",
];

export default function WhyItMatters() {
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

        .wim-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .wim-section::before {
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
        .wim-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .wim-orb.vis { opacity: 1; }
        .wim-orb-1 {
          width: 420px; height: 420px; top: -140px; right: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .wim-orb-2 {
          width: 280px; height: 280px; bottom: 60px; left: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .wim-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
        }

        /* ── HEADER ── */
        .wim-header {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: end;
          margin-bottom: 72px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        @media (max-width: 720px) { .wim-header { grid-template-columns: 1fr; gap: 24px; } }

        .wim-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 18px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wim-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .wim-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .wim-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .wim-title.vis { opacity: 1; transform: translateY(0); }
        .wim-title-accent { color: #2563eb; }

        /* behaviour lines */
        .wim-behaviours { display: flex; flex-direction: column; gap: 0; }

        .wim-behaviour {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 13px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .wim-behaviour:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .wim-behaviour:hover { color: #111; }
        .wim-behaviour.vis { opacity: 1; transform: translateY(0); }

        /* ── BODY ── */
        .wim-body {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 64px;
        }
        @media (max-width: 720px) { .wim-body { grid-template-columns: 1fr; } }

        /* ── PANEL ── */
        .wim-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .wim-panel.vis { opacity: 1; transform: translateY(0); }
        .wim-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .wim-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .wim-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .wim-items { display: flex; flex-direction: column; gap: 10px; }

        .wim-item {
          display: flex; align-items: center; gap: 14px;
          padding: 12px 16px; border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .wim-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(4px);
        }
        .wim-item-icon {
          width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .wim-item:hover .wim-item-icon { transform: scale(1.08); }
        .wim-item-icon svg { width: 16px; height: 16px; color: #2563eb; }
        .wim-item-text {
          font-size: 14px; color: #333; font-weight: 400; line-height: 1.3;
          transition: color 0.25s ease;
        }
        .wim-item:hover .wim-item-text { color: #111; }

        /* ── CLOSING ── */
        .wim-closing {
          background: #111;
          border-radius: 24px;
          padding: 48px 56px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 40px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .wim-closing.vis { opacity: 1; transform: translateY(0); }
        .wim-closing::before {
          content: '';
          position: absolute; top: -80px; right: -60px;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%);
          pointer-events: none;
        }
        @media (max-width: 640px) {
          .wim-closing { flex-direction: column; text-align: center; padding: 40px 28px; }
        }
        .wim-closing-left { position: relative; }
        .wim-closing-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 10px;
        }
        .wim-closing-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(15px, 1.8vw, 20px); font-weight: 700;
          color: rgba(255,255,255,0.7); line-height: 1.5;
        }
        .wim-cta-btn {
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
        .wim-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.45);
        }
        .wim-cta-arrow {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .wim-cta-btn:hover .wim-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }
      `}</style>

      <section className="wim-section" ref={sectionRef}>
        <div className={`wim-orb wim-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wim-orb wim-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wim-inner">

          {/* ── HEADER ── */}
          <div className="wim-header">
            <div>
              <span className={`wim-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="wim-eyebrow-line" />
                The Foundation
                <span className="wim-eyebrow-line" />
              </span>
              <h2 className={`wim-title ${isVisible ? "vis" : ""}`}>
                Why <span className="wim-title-accent">ORM</span><br />Matters Today
              </h2>
            </div>

            <div className="wim-behaviours">
              {behaviours.map((b, i) => (
                <p
                  key={i}
                  className={`wim-behaviour ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.28 + i * 0.1}s` : "0s" }}
                >
                  {b}
                </p>
              ))}
            </div>
          </div>

          {/* ── BODY ── */}
          <div className="wim-body">

            <div
              className={`wim-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.52s" : "0s" }}
            >
              <p className="wim-panel-label">Your digital perception influences:</p>
              <div className="wim-items">
                {influences.map((item, i) => (
                  <div key={i} className="wim-item">
                    <div className="wim-item-icon">{item.icon}</div>
                    <span className="wim-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`wim-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.64s" : "0s" }}
            >
              <p className="wim-panel-label">ORM helps your brand:</p>
              <div className="wim-items">
                {helps.map((item, i) => (
                  <div key={i} className="wim-item">
                    <div className="wim-item-icon">{item.icon}</div>
                    <span className="wim-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── CLOSING ── */}
          <div
            className={`wim-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.84s" : "0s" }}
          >
            <div className="wim-closing-left">
              <p className="wim-closing-label">Take control</p>
              <p className="wim-closing-text">Need to improve brand perception?</p>
            </div>
            <button className="wim-cta-btn">
              Request a Free ORM Audit
              <span className="wim-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
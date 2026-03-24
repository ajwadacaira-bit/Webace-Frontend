"use client";

import { useEffect, useRef, useState } from "react";

const differentiators = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    text: "Belief-driven marketing aligned with your brand values",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    text: "Creative storytelling that sparks emotional connection",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    text: "Cross-platform consistency for stronger recall",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    text: "Data-driven insights to maximize performance",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    text: "Human-first communication that builds relationships, not noise",
    wide: true,
  },
];

export default function WhatMakesWebAceDifferent() {
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

        .wd-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        /* ambient bg */
        .wd-section::before {
          content: '';
          position: absolute;
          top: -160px; left: 50%;
          transform: translateX(-50%);
          width: 1000px; height: 700px;
          background:
            radial-gradient(ellipse at 25% 40%, rgba(37,99,235,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 60%, rgba(96,165,250,0.05) 0%, transparent 55%);
          pointer-events: none;
        }

        /* floating orbs */
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-22px) scale(1.04); }
        }

        .wd-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.4s ease;
        }
        .wd-orb.vis { opacity: 1; }

        .wd-orb-1 {
          width: 360px; height: 360px;
          top: -100px; right: -80px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 10s ease-in-out infinite;
        }
        .wd-orb-2 {
          width: 240px; height: 240px;
          bottom: 60px; left: -60px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 14s ease-in-out infinite reverse;
        }

        .wd-inner {
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
        }

        /* ── HEADER ── */
        .wd-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .wd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 22px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wd-eyebrow.vis { opacity: 1; transform: translateY(0); }

        .wd-eyebrow-line {
          display: block;
          width: 28px; height: 1px;
          background: #2563eb;
          opacity: 0.45;
        }

        .wd-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5.5vw, 62px);
          font-weight: 800;
          color: #0f0f0f;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .wd-title.vis { opacity: 1; transform: translateY(0); }

        .wd-title-accent { color: #2563eb; }

        .wd-tagline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 700;
          color: #111;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 0.28s, transform 0.8s ease 0.28s;
        }
        .wd-tagline.vis { opacity: 1; transform: translateY(0); }

        .wd-sub {
          font-size: 16px;
          color: #555;
          line-height: 1.85;
          max-width: 580px;
          margin: 0 auto 10px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.8s ease 0.38s, transform 0.8s ease 0.38s;
        }
        .wd-sub.vis { opacity: 1; transform: translateY(0); }

        /* ── DIVIDER ── */
        .wd-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          max-width: 320px;
          margin: 32px auto 0;
          opacity: 0;
          transition: opacity 0.8s ease 0.5s;
        }
        .wd-divider.vis { opacity: 1; }
        .wd-div-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(37,99,235,0.2));
        }
        .wd-div-line:last-child {
          background: linear-gradient(90deg, rgba(37,99,235,0.2), transparent);
        }
        .wd-div-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #2563eb;
          opacity: 0.4;
        }

        /* ── GRID ── */
        .wd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 60px;
        }

        @media (max-width: 640px) {
          .wd-grid { grid-template-columns: 1fr; }
          .wd-card-wide { grid-column: span 1 !important; }
        }

        .wd-card-wide { grid-column: span 2; }

        /* ── CARD ── */
        .wd-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 20px;
          padding: 32px 30px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.75s ease,
            transform 0.75s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }
        .wd-card.vis { opacity: 1; transform: translateY(0); }

        .wd-card:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.2);
          transform: translateY(-4px) !important;
        }

        /* slide-in top bar */
        .wd-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s ease;
          border-radius: 20px 20px 0 0;
        }
        .wd-card:hover::before { transform: scaleX(1); }

        /* corner glow */
        .wd-card::after {
          content: '';
          position: absolute;
          top: -50px; right: -50px;
          width: 150px; height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .wd-card:hover::after { opacity: 1; }

        .wd-card-icon {
          width: 44px; height: 44px;
          flex-shrink: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s ease;
        }
        .wd-card:hover .wd-card-icon { transform: scale(1.08); }

        .wd-card-icon svg {
          width: 20px; height: 20px;
          color: #2563eb;
        }

        .wd-card-text {
          font-size: 15px;
          color: #333;
          line-height: 1.7;
          padding-top: 10px;
          font-weight: 400;
        }

        /* ── CLOSING BANNER ── */
        .wd-closing {
          background: #111;
          border-radius: 24px;
          padding: 56px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s ease 0.85s, transform 0.85s ease 0.85s;
        }
        .wd-closing.vis { opacity: 1; transform: translateY(0); }

        .wd-closing::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 500px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .wd-closing::after {
          content: '';
          position: absolute;
          bottom: -60px; right: 60px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(96,165,250,0.07), transparent 70%);
          pointer-events: none;
        }

        .wd-closing-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 16px;
          position: relative;
        }

        .wd-closing-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 700;
          color: #fff;
          line-height: 1.5;
          max-width: 720px;
          margin: 0 auto;
          position: relative;
        }

        .wd-closing-text span { color: #60a5fa; }
      `}</style>

      <section className="wd-section" ref={sectionRef}>
        <div className={`wd-orb wd-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wd-orb wd-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wd-inner">

          {/* ── HEADER ── */}
          <div className="wd-header">
            <span className={`wd-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wd-eyebrow-line" />
              Our Difference
              <span className="wd-eyebrow-line" />
            </span>

            <h2 className={`wd-title ${isVisible ? "vis" : ""}`}>
              What Makes <span className="wd-title-accent">WebAce</span> Different?
            </h2>

            <p className={`wd-tagline ${isVisible ? "vis" : ""}`}>
              We don't build campaigns. We build connections.
            </p>

            <p className={`wd-sub ${isVisible ? "vis" : ""}`}>
              Most agencies talk about reach and impressions.
              We talk about impact, emotion, and brand identity.
            </p>

            <p className={`wd-sub ${isVisible ? "vis" : ""}`} style={{ transitionDelay: "0.44s" }}>
              At WebAce, brand awareness is not a checkbox — it's a carefully crafted journey.
            </p>

            <div className={`wd-divider ${isVisible ? "vis" : ""}`}>
              <span className="wd-div-line" />
              <span className="wd-div-dot" />
              <span className="wd-div-dot" style={{ opacity: 0.2 }} />
              <span className="wd-div-dot" />
              <span className="wd-div-line" />
            </div>
          </div>

          {/* ── GRID ── */}
          <div className="wd-grid">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className={`wd-card ${d.wide ? "wd-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.45 + i * 0.12}s` : "0s" }}
              >
                <div className="wd-card-icon">{d.icon}</div>
                <p className="wd-card-text">{d.text}</p>
              </div>
            ))}
          </div>

          {/* ── CLOSING ── */}
          <div className={`wd-closing ${isVisible ? "vis" : ""}`}>
            <p className="wd-closing-label">Our Promise</p>
            <p className="wd-closing-text">
              We combine <span>creativity</span>, <span>strategy</span>, and{" "}
              <span>advanced technology</span> to ensure your brand grows with
              intention and stands out with purpose.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
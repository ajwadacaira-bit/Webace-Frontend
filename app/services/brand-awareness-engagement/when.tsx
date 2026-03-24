"use client";

import { useEffect, useRef, useState } from "react";

const conditions = [
  {
    text: "Your audience doesn't know your brand well",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    text: "Your brand needs stronger visibility",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    text: "You want people to remember your name",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="12" r="10"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    text: "Your competitors dominate the market",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    text: "Your engagement is low on digital channels",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    text: "You want to create an emotional connection with your audience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    text: "You are launching a new brand or rebranding",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    wide: true,
  },
];

function ConditionCard({ item, index, parentVisible }: { item: typeof conditions[0]; index: number; parentVisible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`wtc-card ${item.wide ? "wtc-card-wide" : ""} ${parentVisible ? "vis" : ""}`}
      style={{ transitionDelay: parentVisible ? `${0.4 + index * 0.1}s` : "0s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="wtc-card-glow" />

      {/* check badge */}
      <div className="wtc-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <div className="wtc-card-body">
        <div className="wtc-icon-wrap">{item.icon}</div>
        <p className="wtc-card-text">{item.text}</p>
      </div>
    </div>
  );
}

export default function WhenToChooseBrandAwareness() {
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

        .wtc-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        /* mesh bg */
        .wtc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 15% 30%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 70%, rgba(96,165,250,0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-20px) scale(1.05); }
        }

        .wtc-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.4s ease;
        }
        .wtc-orb.vis { opacity: 1; }
        .wtc-orb-1 {
          width: 380px; height: 380px;
          top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .wtc-orb-2 {
          width: 260px; height: 260px;
          bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .wtc-inner {
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
        }

        /* ── HEADER ── */
        .wtc-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .wtc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wtc-eyebrow.vis { opacity: 1; transform: translateY(0); }

        .wtc-eyebrow-line {
          display: block;
          width: 28px; height: 1px;
          background: #2563eb;
          opacity: 0.4;
        }

        .wtc-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 800;
          color: #0f0f0f;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .wtc-title.vis { opacity: 1; transform: translateY(0); }
        .wtc-title-accent { color: #2563eb; }

        .wtc-sub {
          font-size: 17px;
          color: #555;
          line-height: 1.8;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .wtc-sub.vis { opacity: 1; transform: translateY(0); }

        /* ── GRID ── */
        .wtc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 64px;
        }

        @media (max-width: 640px) {
          .wtc-grid { grid-template-columns: 1fr; }
          .wtc-card-wide { grid-column: span 1 !important; }
        }

        .wtc-card-wide { grid-column: span 2; }

        /* ── CARD ── */
        .wtc-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 20px;
          padding: 28px 28px 28px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.75s ease,
            transform 0.75s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }
        .wtc-card.vis { opacity: 1; transform: translateY(0); }

        .wtc-card:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.22);
          transform: translateY(-4px) !important;
        }

        .wtc-card::before {
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
        .wtc-card:hover::before { transform: scaleX(1); }

        .wtc-card-glow {
          position: absolute;
          top: -50px; right: -50px;
          width: 160px; height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .wtc-card:hover .wtc-card-glow { opacity: 1; }

        /* blue check badge */
        .wtc-check {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          display: flex; align-items: center; justify-content: center;
          margin-top: 2px;
          box-shadow: 0 4px 14px rgba(37,99,235,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .wtc-card:hover .wtc-check {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37,99,235,0.4);
        }
        .wtc-check svg {
          width: 14px; height: 14px;
          color: #fff;
        }

        .wtc-card-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .wtc-icon-wrap {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s ease;
        }
        .wtc-card:hover .wtc-icon-wrap { transform: scale(1.08); }

        .wtc-icon-wrap svg {
          width: 17px; height: 17px;
          color: #2563eb;
        }

        .wtc-card-text {
          font-size: 15px;
          color: #333;
          line-height: 1.65;
          font-weight: 400;
        }

        /* ── CLOSING BANNER ── */
        .wtc-closing {
          background: #111;
          border-radius: 24px;
          padding: 60px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s ease 1s, transform 0.85s ease 1s;
        }
        .wtc-closing.vis { opacity: 1; transform: translateY(0); }

        .wtc-closing::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 65%);
          pointer-events: none;
        }

        .wtc-closing::after {
          content: '';
          position: absolute;
          bottom: -60px; right: 80px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(96,165,250,0.07), transparent 70%);
          pointer-events: none;
        }

        .wtc-closing-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 18px;
          position: relative;
        }

        .wtc-closing-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 700;
          color: #fff;
          line-height: 1.55;
          max-width: 680px;
          margin: 0 auto;
          position: relative;
        }

        .wtc-closing-headline span { color: #60a5fa; }
      `}</style>

      <section className="wtc-section" ref={sectionRef}>
        <div className={`wtc-orb wtc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wtc-orb wtc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wtc-inner">

          {/* ── HEADER ── */}
          <div className="wtc-header">
            <span className={`wtc-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wtc-eyebrow-line" />
              Is This Right For You?
              <span className="wtc-eyebrow-line" />
            </span>

            <h2 className={`wtc-title ${isVisible ? "vis" : ""}`}>
              When to Choose{" "}
              <span className="wtc-title-accent">Brand Awareness</span>
              <br />&amp; Engagement Services
            </h2>

            <p className={`wtc-sub ${isVisible ? "vis" : ""}`}>
              This service suite is perfect for you if:
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="wtc-grid">
            {conditions.map((item, i) => (
              <ConditionCard key={i} item={item} index={i} parentVisible={isVisible} />
            ))}
          </div>

          {/* ── CLOSING ── */}
          <div className={`wtc-closing ${isVisible ? "vis" : ""}`}>
            <p className="wtc-closing-label">Your Starting Point</p>
            <p className="wtc-closing-headline">
              Whether you're starting from <span>zero</span> or looking to
              strengthen your digital presence —{" "}
              <span>this is where your journey begins.</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
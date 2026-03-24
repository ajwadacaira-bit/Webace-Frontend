"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  {
    text: "Increase monthly inquiries",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-6M22 20V8"/></svg>,
  },
  {
    text: "Reduce cost per lead",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    text: "Build predictable conversions",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    text: "Strengthen your sales pipeline",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18l-7 7v7l-4-2v-5z"/></svg>,
  },
  {
    text: "Reach high intent customers",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  },
  {
    text: "Scale your business with real opportunities",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    text: "Run campaigns that deliver measurable ROI",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  },
];

export default function IsThisRight() {
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

        .itr-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .itr-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 25%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 75%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .itr-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .itr-orb.vis { opacity: 1; }
        .itr-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .itr-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .itr-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .itr-header { text-align: center; margin-bottom: 72px; }

        .itr-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .itr-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .itr-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .itr-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .itr-title.vis { opacity: 1; transform: translateY(0); }
        .itr-title-accent { color: #2563eb; }

        .itr-sub {
          font-size: 16px; color: #555; line-height: 1.8; max-width: 560px; margin: 0 auto;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .itr-sub.vis { opacity: 1; transform: translateY(0); }

        /* ── GRID ── */
        .itr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 0;
        }
        @media (max-width: 860px) { .itr-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) {
          .itr-grid { grid-template-columns: 1fr; }
          .itr-card-wide { grid-column: span 1 !important; }
        }

        .itr-card-wide { grid-column: span 3; }
        @media (max-width: 860px) { .itr-card-wide { grid-column: span 2; } }

        /* ── CARD ── */
        .itr-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 22px;
          padding: 36px 30px;
          position: relative; overflow: hidden;
          cursor: default;
          opacity: 0; transform: translateY(32px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }
        .itr-card.vis { opacity: 1; transform: translateY(0); }

        .itr-card:hover {
          background: #0f0f0f;
          border-color: #0f0f0f;
          box-shadow: 0 24px 64px rgba(0,0,0,0.2);
          transform: translateY(-5px) !important;
        }

        /* blue top bar */
        .itr-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s ease;
          border-radius: 22px 22px 0 0;
        }
        .itr-card:hover::before { transform: scaleX(1); }

        /* corner glow */
        .itr-card-glow {
          position: absolute; top: -50px; right: -50px;
          width: 160px; height: 160px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%);
          opacity: 0; transition: opacity 0.4s ease; pointer-events: none;
        }
        .itr-card:hover .itr-card-glow { opacity: 1; }

        /* faded bg number */
        .itr-card-num {
          position: absolute; bottom: 16px; right: 24px;
          font-family: 'Syne', sans-serif;
          font-size: 56px; font-weight: 800;
          color: rgba(0,0,0,0.04);
          line-height: 1; user-select: none; pointer-events: none;
          transition: color 0.35s ease;
        }
        .itr-card:hover .itr-card-num { color: rgba(255,255,255,0.04); }

        .itr-icon-wrap {
          width: 52px; height: 52px; border-radius: 16px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: background 0.35s ease, transform 0.3s ease;
        }
        .itr-card:hover .itr-icon-wrap {
          background: rgba(255,255,255,0.1);
          transform: scale(1.08);
        }
        .itr-icon-wrap svg {
          width: 22px; height: 22px; color: #2563eb;
          transition: color 0.35s ease;
        }
        .itr-card:hover .itr-icon-wrap svg { color: #60a5fa; }

        .itr-card-text {
          font-family: 'Syne', sans-serif;
          font-size: 16px; font-weight: 700; color: #111; line-height: 1.4;
          transition: color 0.35s ease;
        }
        .itr-card:hover .itr-card-text { color: #fff; }
      `}</style>

      <section className="itr-section" ref={sectionRef}>
        <div className={`itr-orb itr-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`itr-orb itr-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="itr-inner">

          {/* ── HEADER ── */}
          <div className="itr-header">
            <span className={`itr-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="itr-eyebrow-line" />
              Is This Right For You?
              <span className="itr-eyebrow-line" />
            </span>

            <h2 className={`itr-title ${isVisible ? "vis" : ""}`}>
              Choose <span className="itr-title-accent">Digital Leads</span> if<br />you want to:
            </h2>

            <p className={`itr-sub ${isVisible ? "vis" : ""}`}>
              If any of these sound like your goals, you're in the right place.
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="itr-grid">
            {points.map((item, i) => (
              <div
                key={i}
                className={`itr-card ${i === points.length - 1 ? "itr-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.35 + i * 0.09}s` : "0s" }}
              >
                <div className="itr-card-glow" />
                <span className="itr-card-num">0{i + 1}</span>
                <div className="itr-icon-wrap">{item.icon}</div>
                <p className="itr-card-text">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
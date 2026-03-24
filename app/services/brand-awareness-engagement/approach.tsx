"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    num: "01",
    title: "Belief-driven storytelling",
    body: "We uncover what your brand stands for and translate it into stories people care about, remember, and believe in.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Creative-led content & campaigns",
    body: "From visuals to messaging, every creative decision is designed to spark attention and emotional connection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI-powered audience targeting",
    body: "We leverage data, AI, and audience intelligence to reach the right people at the right moment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Data-driven optimization",
    body: "Performance insights guide every refinement, ensuring campaigns evolve and improve continuously.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Platform-specific strategies",
    body: "We don't copy-paste content. Each platform gets a strategy tailored to how its audience actually behaves.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];

export default function BrandAwarenessApproach() {
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

        .baa-section {
          font-family: 'Kanit', sans-serif;
          background: #fafaf8;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 120px;
        }

        /* ── mesh bg ── */
        .baa-section::before {
          content: '';
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 600px;
          background: radial-gradient(ellipse at 30% 40%, rgba(37,99,235,0.07) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 60%, rgba(96,165,250,0.05) 0%, transparent 55%);
          pointer-events: none;
        }

        .baa-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        /* ── HEADER ── */
        .baa-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .baa-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .baa-eyebrow.visible { opacity: 1; transform: translateY(0); }

        .baa-eyebrow-line {
          display: block;
          width: 28px; height: 1px;
          background: #2563eb;
          opacity: 0.5;
        }

        .baa-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5.5vw, 62px);
          font-weight: 700;
          color: #111;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .baa-title.visible { opacity: 1; transform: translateY(0); }

        .baa-title-accent {
          position: relative;
          display: inline-block;
          color: #2563eb;
        }

        .baa-sub {
          font-size: 16px;
          color: #555;
          line-height: 1.85;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .baa-sub.visible { opacity: 1; transform: translateY(0); }

        /* ── GRID ── */
        .baa-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }

        @media (max-width: 900px) {
          .baa-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .baa-grid { grid-template-columns: 1fr; }
        }

        /* last row: 2 cards centred */
        .baa-grid-row2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 380px));
          gap: 20px;
          justify-content: center;
          margin-bottom: 64px;
        }

        @media (max-width: 580px) {
          .baa-grid-row2 { grid-template-columns: 1fr; }
        }

        /* ── CARD ── */
        .baa-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.75s ease,
            transform 0.75s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .baa-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .baa-card:hover {
          box-shadow: 0 24px 64px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.22);
          transform: translateY(-5px) !important;
        }

        /* top slide bar */
        .baa-card::before {
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
        .baa-card:hover::before { transform: scaleX(1); }

        /* inner glow */
        .baa-card-glow {
          position: absolute;
          top: -50px; right: -50px;
          width: 160px; height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .baa-card:hover .baa-card-glow { opacity: 1; }

        .baa-card-num {
          position: absolute;
          top: 24px; right: 28px;
          font-family: 'Syne', sans-serif;
          font-size: 52px;
          font-weight: 700;
          color: rgba(0,0,0,0.04);
          line-height: 1;
          user-select: none;
        }

        .baa-card-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .baa-card:hover .baa-card-icon-wrap {
          transform: scale(1.08);
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        }

        .baa-card-icon-wrap svg {
          width: 20px; height: 20px;
          color: #2563eb;
        }

        .baa-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .baa-card-body {
          font-size: 14px;
          color: #555;
          line-height: 1.75;
        }

        /* ── CLOSING ── */
        .baa-closing {
          background: #111;
          border-radius: 24px;
          padding: 56px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s ease 0.9s, transform 0.85s ease 0.9s;
        }

        .baa-closing.visible { opacity: 1; transform: translateY(0); }

        .baa-closing::before {
          content: '';
          position: absolute;
          top: -100px; right: -80px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%);
          pointer-events: none;
        }

        .baa-closing::after {
          content: '';
          position: absolute;
          bottom: -80px; left: 80px;
          width: 240px; height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(96,165,250,0.08), transparent 70%);
          pointer-events: none;
        }

        .baa-closing-text { max-width: 600px; position: relative; z-index: 1; }

        .baa-closing-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 14px;
        }

        .baa-closing-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 14px;
        }

        .baa-closing-body {
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          line-height: 1.8;
        }

        /* ── ORBS ── */
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .baa-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.4s ease;
        }
        .baa-orb.visible { opacity: 1; }

        .baa-orb-1 {
          width: 340px; height: 340px;
          top: -100px; right: -80px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 10s ease-in-out infinite;
        }
        .baa-orb-2 {
          width: 220px; height: 220px;
          bottom: 80px; left: -60px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 13s ease-in-out infinite reverse;
        }

        @media (max-width: 700px) {
          .baa-closing { flex-direction: column; padding: 40px 32px; }
        }
      `}</style>

      <section className="baa-section" ref={sectionRef}>
        <div className={`baa-orb baa-orb-1 ${isVisible ? "visible" : ""}`} />
        <div className={`baa-orb baa-orb-2 ${isVisible ? "visible" : ""}`} />

        <div className="baa-inner">

          {/* ── HEADER ── */}
          <div className="baa-header">
            <span className={`baa-eyebrow ${isVisible ? "visible" : ""}`}>
              <span className="baa-eyebrow-line" />
              Our Approach to Brand Awareness &amp; Engagement
              <span className="baa-eyebrow-line" />
            </span>

            <h2 className={`baa-title ${isVisible ? "visible" : ""}`}>
              Where <span className="baa-title-accent">Strategy</span> Meets Creativity.
              <br />
              Where <span className="baa-title-accent">Technology</span> Meets Emotion.
            </h2>

            <p className={`baa-sub ${isVisible ? "visible" : ""}`}>
              Brand awareness is not achieved with a single campaign — it's built
              through consistent, strategic, and meaningful communication across channels.
            </p>
          </div>

          {/* ── GRID ROW 1 (3 cards) ── */}
          <div className="baa-grid">
            {cards.slice(0, 3).map((card, i) => (
              <div
                key={card.num}
                className={`baa-card ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.4 + i * 0.13}s` : "0s" }}
              >
                <div className="baa-card-glow" />
                <span className="baa-card-num">{card.num}</span>
                <div className="baa-card-icon-wrap">{card.icon}</div>
                <div className="baa-card-title">{card.title}</div>
                <p className="baa-card-body">{card.body}</p>
              </div>
            ))}
          </div>

          {/* ── GRID ROW 2 (2 cards centred) ── */}
          <div className="baa-grid-row2">
            {cards.slice(3).map((card, i) => (
              <div
                key={card.num}
                className={`baa-card ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.79 + i * 0.13}s` : "0s" }}
              >
                <div className="baa-card-glow" />
                <span className="baa-card-num">{card.num}</span>
                <div className="baa-card-icon-wrap">{card.icon}</div>
                <div className="baa-card-title">{card.title}</div>
                <p className="baa-card-body">{card.body}</p>
              </div>
            ))}
          </div>

          {/* ── CLOSING ── */}
          <div className={`baa-closing ${isVisible ? "visible" : ""}`}>
            <div className="baa-closing-text">
              <p className="baa-closing-label">Our Purpose</p>
              <h3 className="baa-closing-headline">
                We design every campaign with one purpose:
              </h3>
              <p className="baa-closing-body">
                To help your brand become a familiar, trusted, and influential voice in your industry.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
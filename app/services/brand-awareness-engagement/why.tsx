"use client";

import { useEffect, useRef, useState } from "react";

export default function BrandAwareness() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<null | "awareness" | "engagement">(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .ba-section {
          font-family: 'Kanit', sans-serif;
          background: #fafaf8;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 120px;
        }

        .ba-section::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .ba-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent);
        }

        .ba-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        /* ── HEADER ── */
        .ba-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .ba-eyebrow {
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

        .ba-eyebrow.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ba-eyebrow-line {
          display: block;
          width: 32px;
          height: 1px;
          background: #2563eb;
          opacity: 0.6;
        }

        .ba-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s;
        }

        .ba-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ba-sub {
          font-size: 16px;
          color: #555;
          line-height: 1.8;
          max-width: 640px;
          margin: 0 auto 10px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }

        .ba-sub.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ba-tagline {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-style: normal;
          color: #2563eb;
          margin-top: 16px;
          opacity: 0;
          transition: opacity 0.8s ease 0.45s;
        }

        .ba-tagline.visible {
          opacity: 1;
        }

        /* ── DIVIDER ── */
        .ba-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 0 auto 56px;
          max-width: 360px;
          opacity: 0;
          transition: opacity 0.8s ease 0.5s;
        }

        .ba-divider.visible { opacity: 1; }

        .ba-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.12));
        }

        .ba-divider-line:last-child {
          background: linear-gradient(90deg, rgba(0,0,0,0.12), transparent);
        }

        .ba-divider-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2563eb;
          opacity: 0.5;
        }

        /* ── CARDS ── */
        .ba-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 64px;
        }

        @media (max-width: 680px) {
          .ba-cards { grid-template-columns: 1fr; }
        }

        .ba-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
          will-change: transform;
        }

        .ba-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ba-card:first-child { transition-delay: 0.55s; }
        .ba-card:last-child  { transition-delay: 0.7s; }

        .ba-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.09);
          border-color: rgba(37,99,235,0.25);
          transform: translateY(-4px) !important;
        }

        .ba-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
          border-radius: 20px 20px 0 0;
        }

        .ba-card:hover::before { transform: scaleX(1); }

        .ba-card-glow {
          position: absolute;
          top: -60px; right: -60px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          pointer-events: none;
          transition: opacity 0.4s ease;
          opacity: 0;
        }

        .ba-card:hover .ba-card-glow { opacity: 1; }

        .ba-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ba-card-icon {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .ba-card-icon svg {
          width: 14px; height: 14px;
          stroke: #2563eb;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .ba-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          font-size: 14.5px;
          color: #444;
          line-height: 1.6;
        }

        .ba-item:last-child { border-bottom: none; }

        .ba-item-bullet {
          width: 18px; height: 18px;
          border-radius: 50%;
          border: 1.5px solid rgba(37,99,235,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .ba-card:hover .ba-item-bullet {
          background: rgba(37,99,235,0.08);
          border-color: rgba(37,99,235,0.6);
        }

        .ba-item-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #2563eb;
          opacity: 0.6;
        }

        /* ── FOOTER CALLOUT ── */
        .ba-callout {
          background: #1a1a1a;
          border-radius: 20px;
          padding: 48px 52px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease 0.85s, transform 0.8s ease 0.85s;
        }

        .ba-callout.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ba-callout::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%);
          pointer-events: none;
        }

        .ba-callout::after {
          content: '';
          position: absolute;
          bottom: -60px; left: 40px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%);
          pointer-events: none;
        }

        .ba-callout-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 12px;
        }

        .ba-callout-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }

        .ba-callout-body {
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 680px;
        }

        .ba-callout-body strong {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }

        /* ── FLOATING ORBS ── */
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }

        .ba-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.2s ease;
        }

        .ba-orb.visible { opacity: 1; }

        .ba-orb-1 {
          width: 300px; height: 300px;
          top: -80px; right: -60px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 9s ease-in-out infinite;
        }

        .ba-orb-2 {
          width: 200px; height: 200px;
          bottom: 60px; left: -40px;
          background: radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite reverse;
        }

        /* ── COUNTER BADGE ── */
        .ba-number-badge {
          position: absolute;
          top: 36px; right: 36px;
          font-family: 'Syne', sans-serif;
          font-size: 64px;
          font-weight: 700;
          color: rgba(0,0,0,0.04);
          line-height: 1;
          user-select: none;
          pointer-events: none;
        }
      `}</style>

      <section className="ba-section" ref={sectionRef}>
        {/* floating background orbs */}
        <div className={`ba-orb ba-orb-1 ${isVisible ? "visible" : ""}`} />
        <div className={`ba-orb ba-orb-2 ${isVisible ? "visible" : ""}`} />

        <div className="ba-inner">

          {/* ── HEADER ── */}
          <div className="ba-header">
            <span className={`ba-eyebrow ${isVisible ? "visible" : ""}`}>
              <span className="ba-eyebrow-line" />
              Brand Strategy
              <span className="ba-eyebrow-line" />
            </span>

            <h2 className={`ba-title ${isVisible ? "visible" : ""}`}>
              Why Brand Awareness &amp; Engagement Matters
            </h2>

            <p className={`ba-sub ${isVisible ? "visible" : ""}`}>
              In a marketplace overflowing with competitors, it's not the loudest brand that wins.
              It's the one with the clearest identity and the strongest connection with its audience.
            </p>

            <p className={`ba-tagline ${isVisible ? "visible" : ""}`}>
              Brand awareness ensures you're remembered. Brand engagement ensures you're chosen.
            </p>
          </div>

          {/* ── DIVIDER ── */}
          <div className={`ba-divider ${isVisible ? "visible" : ""}`}>
            <span className="ba-divider-line" />
            <span className="ba-divider-dot" />
            <span className="ba-divider-dot" style={{ opacity: 0.3 }} />
            <span className="ba-divider-dot" />
            <span className="ba-divider-line" />
          </div>

          {/* ── CARDS ── */}
          <div className="ba-cards">

            {/* Awareness Card */}
            <div
              className={`ba-card ${isVisible ? "visible" : ""}`}
              onMouseEnter={() => setHoveredCard("awareness")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="ba-card-glow" />
              <span className="ba-number-badge">01</span>

              <div className="ba-card-title">
                <span className="ba-card-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /></svg>
                </span>
                Brand Awareness ensures:
              </div>

              {[
                "Your audience knows you exist",
                "They recognize your name, visuals, tone, and values",
                "They associate your brand with trust and credibility",
              ].map((text) => (
                <div className="ba-item" key={text}>
                  <span className="ba-item-bullet"><span className="ba-item-dot" /></span>
                  {text}
                </div>
              ))}
            </div>

            {/* Engagement Card */}
            <div
              className={`ba-card ${isVisible ? "visible" : ""}`}
              onMouseEnter={() => setHoveredCard("engagement")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="ba-card-glow" />
              <span className="ba-number-badge">02</span>

              <div className="ba-card-title">
                <span className="ba-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </span>
                Brand Engagement ensures:
              </div>

              {[
                "Your audience interacts with your content",
                "They spend more time with your brand",
                "They begin forming a relationship that leads to long-term loyalty",
              ].map((text) => (
                <div className="ba-item" key={text}>
                  <span className="ba-item-bullet"><span className="ba-item-dot" /></span>
                  {text}
                </div>
              ))}
            </div>

          </div>

          {/* ── FOOTER CALLOUT ── */}
          <div className={`ba-callout ${isVisible ? "visible" : ""}`}>
            <p className="ba-callout-label">Our Approach</p>
            <h3 className="ba-callout-headline">At WebAce, we don't chase superficial metrics.</h3>
            <p className="ba-callout-body">
              We build <strong>real awareness</strong>, <strong>authentic interactions</strong>, and{" "}
              <strong>meaningful engagement</strong> — driven by storytelling, creativity, and data-backed execution.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
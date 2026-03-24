"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────── DATA ─────────────────────────── */
const services = [
  {
    num: "01",
    title: "Social Media Marketing for Awareness & Engagement",
    tagline: "Social Media is the heartbeat of digital brand building.",
    leftLabel: "What you gain:",
    leftItems: [
      "Increase your organic visibility",
      "Improve recall with consistent branding",
      "Build an engaged community",
      "Inspire meaningful interactions",
      "Establish your brand personality",
      "Increase reach through content storytelling",
    ],
    rightLabel: "Our team creates:",
    rightItems: [
      "Brand-led content calendars",
      "Visually engaging creatives",
      "Reels, shorts & motion graphics",
      "Engagement-optimized posts",
      "Community management",
      "Awareness-focused content strategies",
    ],
    cta: "Get Your Social Media Growth Plan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Display Ads for High-Impact Visibility",
    tagline: "Make every impression count with creatives built to stop the scroll.",
    leftLabel: "What you gain:",
    leftItems: [
      "Amplify brand visibility",
      "Strengthen recall with visuals",
      "Build large-scale reach",
      "Increase top-of-funnel traffic",
      "Establish credibility",
    ],
    rightLabel: "We design display campaigns that are:",
    rightItems: [
      "Visually striking",
      "Audience-targeted",
      "Optimized for recall",
      "High-quality placements",
      "Insight-tracked",
    ],
    cta: "Request Your Display Ads Strategy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "YouTube Ads for Attention & Emotion",
    tagline: "Video is the most powerful medium for brand storytelling.",
    leftLabel: "What you gain:",
    leftItems: [
      "Deliver high-impact messaging",
      "Reach audiences visually",
      "Create emotional connections",
      "Increase recall",
      "Introduce your brand to millions",
    ],
    rightLabel: "We create and manage:",
    rightItems: [
      "Awareness-based campaigns",
      "Skippable & non-skippable ads",
      "Bumper ads",
      "Discovery ads",
      "Creative production",
    ],
    cta: "Get Your YouTube Awareness Campaign Plan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Email Marketing for Engagement & Relationship Building",
    tagline: "Your most direct line to your audience's inbox — and mind.",
    leftLabel: "What you gain:",
    leftItems: [
      "Tell your brand story",
      "Educate your audience",
      "Build trust",
      "Maintain engagement",
    ],
    rightLabel: "We build:",
    rightItems: [
      "Brand newsletters",
      "Welcome journeys",
      "Engagement sequences",
      "Brand story campaigns",
    ],
    cta: "Start Your Email Engagement Strategy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Paid Social Campaigns for Massive Reach",
    tagline: "Scale your brand's voice across every major social platform.",
    leftLabel: "What you gain:",
    leftItems: [
      "Reach wide audiences",
      "Drive engagement",
      "Strengthen recall",
      "Increase impressions",
    ],
    rightLabel: "We deliver:",
    rightItems: [
      "AI-driven targeting",
      "Creative-led formats",
      "Multivariate testing",
      "Performance optimization",
    ],
    cta: "Get Your Paid Social Strategy Blueprint",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

/* ─────────────────────────── CARD ─────────────────────────── */
function ServiceBlock({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="svc-block"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${index * 0.08}s, transform 0.8s ease ${index * 0.08}s`,
      }}
    >
      {/* number strip */}
      <div className="svc-num-strip">
        <span className="svc-num">{svc.num}</span>
        <span className="svc-num-line" />
      </div>

      <div className="svc-inner">
        {/* LEFT */}
        <div className="svc-left">
          <div className="svc-icon-wrap">{svc.icon}</div>
          <h3 className="svc-title">{svc.title}</h3>
          {svc.tagline && <p className="svc-tagline">{svc.tagline}</p>}
          <p className="svc-label">{svc.leftLabel}</p>
          <ul className="svc-list">
            {svc.leftItems.map((item) => (
              <li key={item} className="svc-item">
                <span className="svc-bullet" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="svc-right">
          <div className="svc-right-glow" />
          <p className="svc-label">{svc.rightLabel}</p>
          <ul className="svc-list svc-list-right">
            {svc.rightItems.map((item) => (
              <li key={item} className="svc-item">
                <span className="svc-bullet svc-bullet-solid" />
                {item}
              </li>
            ))}
          </ul>
          <button className="svc-cta">
            <span>{svc.cta}</span>
            <span className="svc-cta-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function BrandAwarenessServices() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVis, setHeaderVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVis(true); }, { threshold: 0.2 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .bas-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          padding: 100px 24px 140px;
          position: relative;
          overflow: hidden;
        }

        /* background gradient mesh */
        .bas-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(37,99,235,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        .bas-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        /* ── HEADER ── */
        .bas-header {
          text-align: center;
          margin-bottom: 96px;
        }

        .bas-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 20px;
        }

        .bas-eyebrow-line {
          display: block;
          width: 28px; height: 1px;
          background: #2563eb;
          opacity: 0.45;
        }

        .bas-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
        }

        .bas-sub {
          font-size: 16px;
          color: #555;
          line-height: 1.85;
          max-width: 640px;
          margin: 0 auto 8px;
        }

        /* ── SERVICE BLOCK ── */
        .svc-block {
          margin-bottom: 56px;
          border-radius: 28px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .svc-block:hover {
          box-shadow: 0 20px 64px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }

        /* number strip */
        .svc-num-strip {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 36px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          background: linear-gradient(90deg, rgba(37,99,235,0.04), transparent);
        }

        .svc-num {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: 0.08em;
        }

        .svc-num-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(37,99,235,0.15), transparent);
        }

        /* inner two-col layout */
        .svc-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        @media (max-width: 720px) {
          .svc-inner { grid-template-columns: 1fr; }
          .svc-right { border-left: none !important; border-top: 1px solid rgba(0,0,0,0.06); }
        }

        .svc-left {
          padding: 40px 40px 48px;
        }

        .svc-right {
          padding: 40px 40px 48px;
          border-left: 1px solid rgba(0,0,0,0.06);
          position: relative;
          overflow: hidden;
          background: rgba(248,250,255,0.6);
        }

        .svc-right-glow {
          position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .svc-block:hover .svc-right-glow { opacity: 1; }

        /* icon */
        .svc-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .svc-block:hover .svc-icon-wrap { transform: scale(1.08); }

        .svc-icon-wrap svg {
          width: 22px; height: 22px;
          color: #2563eb;
        }

        .svc-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 2.4vw, 28px);
          font-weight: 700;
          color: #111;
          line-height: 1.25;
          margin-bottom: 10px;
        }

        .svc-tagline {
          font-size: 14px;
          color: #2563eb;
          font-weight: 500;
          margin-bottom: 22px;
          opacity: 0.85;
        }

        .svc-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 16px;
        }

        .svc-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .svc-item {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 14.5px;
          color: #444;
          line-height: 1.55;
          padding: 8px 10px;
          border-radius: 10px;
          transition: background 0.2s ease;
        }

        .svc-item:hover { background: rgba(37,99,235,0.04); }

        .svc-bullet {
          width: 18px; height: 18px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(37,99,235,0.3);
          display: flex; align-items: center; justify-content: center;
        }

        .svc-bullet::after {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #2563eb;
          opacity: 0.5;
        }

        .svc-bullet-solid {
          border-color: rgba(37,99,235,0.5);
          background: rgba(37,99,235,0.06);
        }

        .svc-bullet-solid::after { opacity: 1; }

        /* CTA */
        .svc-cta {
          margin-top: 32px;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: #1a1a1a;
          color: #fff;
          border: none;
          cursor: pointer;
          padding: 14px 22px 14px 26px;
          border-radius: 100px;
          font-family: 'Kanit', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;
        }

        .svc-cta:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(37,99,235,0.28);
        }

        .svc-cta-arrow {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .svc-cta:hover .svc-cta-arrow {
          background: rgba(255,255,255,0.25);
          transform: translateX(3px);
        }

        /* ── TIMELINE CONNECTOR ── */
        .svc-connector {
          display: flex;
          justify-content: center;
          margin: -12px 0;
          position: relative;
          z-index: 2;
        }

        .svc-connector-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: #2563eb;
          opacity: 0.25;
          box-shadow: 0 0 0 4px rgba(37,99,235,0.08);
        }
      `}</style>

      <section className="bas-section">
        <div className="bas-inner">

          {/* ── HEADER ── */}
          <div
            className="bas-header"
            ref={headerRef}
            style={{
              opacity: headerVis ? 1 : 0,
              transform: headerVis ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.85s ease, transform 0.85s ease",
            }}
          >
            <span className="bas-eyebrow">
              <span className="bas-eyebrow-line" />
              What We Offer
              <span className="bas-eyebrow-line" />
            </span>

            <h2 className="bas-title">
              Services Under Brand Awareness<br />& Engagement
            </h2>

            <p className="bas-sub">
              These services can serve multiple objectives, but on this page, we present them purely for Brand Awareness & Engagement purposes.
            </p>
            <p className="bas-sub">
              Each service helps strengthen your brand's identity, expand your reach, and build engagement across your relevant audience segments.
            </p>
          </div>

          {/* ── SERVICES ── */}
          {services.map((svc, i) => (
            <div key={svc.num}>
              <ServiceBlock svc={svc} index={i} />
              {i < services.length - 1 && (
                <div className="svc-connector">
                  <span className="svc-connector-dot" />
                </div>
              )}
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
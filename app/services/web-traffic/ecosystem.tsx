"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "SEO",
    desc: "Brings long-term organic traffic.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    title: "SEM",
    desc: "Delivers instant, high-intent traffic.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    title: "Meta Ads",
    desc: "Creates exploration and engagement traffic.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    title: "Publishers & Networks",
    desc: "Expands visibility through premium platforms.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    title: "Cross Channel",
    desc: "Combines everything for maximum exposure.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>,
  },
  {
    title: "Affiliate Marketing",
    desc: "Adds trust-driven referral traffic.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
];

export default function TrafficEcosystem() {
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

        .te-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .te-section::before {
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

        .te-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .te-orb.vis { opacity: 1; }
        .te-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .te-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .te-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .te-header { text-align: center; margin-bottom: 72px; }

        .te-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .te-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .te-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .te-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .te-title.vis { opacity: 1; transform: translateY(0); }
        .te-title-accent { color: #2563eb; }

        .te-sub {
          font-size: 16px; color: #555; line-height: 1.8;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .te-sub.vis { opacity: 1; transform: translateY(0); }

        /* ── GRID ── */
        .te-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }
        @media (max-width: 860px) { .te-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .te-grid { grid-template-columns: 1fr; } }

        /* ── CARD ── */
        .te-card {
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
        .te-card.vis { opacity: 1; transform: translateY(0); }
        .te-card:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.22);
          transform: translateY(-5px) !important;
        }

        /* top bar */
        .te-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s ease;
          border-radius: 22px 22px 0 0;
        }
        .te-card:hover::before { transform: scaleX(1); }

        /* corner glow */
        .te-card-glow {
          position: absolute; top: -50px; right: -50px;
          width: 150px; height: 150px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          opacity: 0; transition: opacity 0.4s ease; pointer-events: none;
        }
        .te-card:hover .te-card-glow { opacity: 1; }

        /* watermark num */
        .te-card-num {
          position: absolute; bottom: 16px; right: 22px;
          font-family: 'Syne', sans-serif;
          font-size: 48px; font-weight: 800;
          color: rgba(0,0,0,0.04); line-height: 1;
          user-select: none; pointer-events: none;
        }

        .te-icon-wrap {
          width: 48px; height: 48px; border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .te-card:hover .te-icon-wrap {
          transform: scale(1.08);
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        }
        .te-icon-wrap svg { width: 22px; height: 22px; color: #2563eb; }

        .te-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; color: #111;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }
        .te-card:hover .te-card-title { color: #2563eb; }

        .te-card-desc {
          font-size: 13.5px; color: #666; line-height: 1.65;
        }

        /* ── CLOSING ── */
        .te-closing {
          background: #111;
          border-radius: 24px;
          padding: 56px 64px;
          text-align: center;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .te-closing.vis { opacity: 1; transform: translateY(0); }

        .te-closing::before {
          content: '';
          position: absolute; top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 65%);
          pointer-events: none;
        }

        .te-closing-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 16px;
          position: relative;
        }

        .te-closing-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 3vw, 30px); font-weight: 800;
          color: #fff; line-height: 1.4; position: relative;
        }
        .te-closing-text span { color: #60a5fa; }

        @media (max-width: 560px) { .te-closing { padding: 44px 28px; } }
      `}</style>

      <section className="te-section" ref={sectionRef}>
        <div className={`te-orb te-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`te-orb te-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="te-inner">

          {/* ── HEADER ── */}
          <div className="te-header">
            <span className={`te-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="te-eyebrow-line" />
              The Full Picture
              <span className="te-eyebrow-line" />
            </span>

            <h2 className={`te-title ${isVisible ? "vis" : ""}`}>
              How These Services{" "}
              <span className="te-title-accent">Work Together</span>
            </h2>

            <p className={`te-sub ${isVisible ? "vis" : ""}`}>
              A strong Web Traffic strategy uses multiple channels that support each other.
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="te-grid">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`te-card ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.1}s` : "0s" }}
              >
                <div className="te-card-glow" />
                <span className="te-card-num">0{i + 1}</span>
                <div className="te-icon-wrap">{svc.icon}</div>
                <h3 className="te-card-title">{svc.title}</h3>
                <p className="te-card-desc">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* ── CLOSING BANNER ── */}
          <div
            className={`te-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1s" : "0s" }}
          >
            <p className="te-closing-label">The Result</p>
            <p className="te-closing-text">
              Together, they create a <span>traffic ecosystem</span> that grows{" "}
              <span>consistently</span> every month.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
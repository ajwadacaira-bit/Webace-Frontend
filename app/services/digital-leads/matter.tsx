"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  { text: "Get discovered by potential customers", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { text: "Attract high intent users", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { text: "Increase inquiries and sign ups", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { text: "Improve cost per lead", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { text: "Build a predictable lead pipeline", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  { text: "Strengthen your growth foundation", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { text: "Reduce dependency on offline sales methods", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, wide: true },
];

function BenefitCard({ item, index, parentVisible }: { item: typeof benefits[0]; index: number; parentVisible: boolean }) {
  return (
    <div
      className={`wlm-card ${item.wide ? "wlm-card-wide" : ""} ${parentVisible ? "vis" : ""}`}
      style={{ transitionDelay: parentVisible ? `${0.35 + index * 0.09}s` : "0s" }}
    >
      <div className="wlm-card-glow" />
      <span className="wlm-card-num">0{index + 1}</span>
      <div className="wlm-icon-wrap">{item.icon}</div>
      <p className="wlm-card-text">{item.text}</p>
    </div>
  );
}

export default function WhyLeadsMatter() {
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

        .wlm-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .wlm-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 15% 25%, rgba(37,99,235,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 75%, rgba(96,165,250,0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .wlm-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .wlm-orb.vis { opacity: 1; }
        .wlm-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .wlm-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .wlm-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
        }

        /* ── HEADER ── */
        .wlm-header { text-align: center; margin-bottom: 72px; }

        .wlm-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wlm-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .wlm-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .wlm-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 24px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .wlm-title.vis { opacity: 1; transform: translateY(0); }
        .wlm-title-accent { color: #2563eb; }

        .wlm-intro {
          font-size: 16px; color: #555; line-height: 1.85;
          max-width: 640px; margin: 0 auto 0;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .wlm-intro.vis { opacity: 1; transform: translateY(0); }

        .wlm-sub-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 700; color: #111;
          margin-top: 40px;
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.8s ease 0.42s, transform 0.8s ease 0.42s;
        }
        .wlm-sub-title.vis { opacity: 1; transform: translateY(0); }

        /* ── GRID ── */
        .wlm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 64px;
        }

        @media (max-width: 900px) { .wlm-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) {
          .wlm-grid { grid-template-columns: 1fr; }
          .wlm-card-wide { grid-column: span 1 !important; }
        }

        .wlm-card-wide { grid-column: span 3; }
        @media (max-width: 900px) { .wlm-card-wide { grid-column: span 2; } }

        /* ── CARD ── */
        .wlm-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 20px;
          padding: 32px 28px;
          position: relative; overflow: hidden;
          cursor: default;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .wlm-card.vis { opacity: 1; transform: translateY(0); }

        .wlm-card:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.22);
          transform: translateY(-5px) !important;
        }

        .wlm-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s ease;
          border-radius: 20px 20px 0 0;
        }
        .wlm-card:hover::before { transform: scaleX(1); }

        .wlm-card-glow {
          position: absolute; top: -50px; right: -50px;
          width: 160px; height: 160px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          opacity: 0; transition: opacity 0.4s ease; pointer-events: none;
        }
        .wlm-card:hover .wlm-card-glow { opacity: 1; }

        .wlm-card-num {
          position: absolute; top: 20px; right: 24px;
          font-family: 'Syne', sans-serif;
          font-size: 48px; font-weight: 800;
          color: rgba(0,0,0,0.04); line-height: 1;
          user-select: none; pointer-events: none;
        }

        .wlm-icon-wrap {
          width: 48px; height: 48px; border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .wlm-card:hover .wlm-icon-wrap { transform: scale(1.08); }
        .wlm-icon-wrap svg { width: 22px; height: 22px; color: #2563eb; }

        .wlm-card-text {
          font-size: 15px; color: #333; line-height: 1.65; font-weight: 400;
        }

        /* ── CLOSING ── */
        .wlm-closing {
          background: #111;
          border-radius: 24px;
          padding: 60px 64px;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 48px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.9s, transform 0.85s ease 0.9s;
        }
        .wlm-closing.vis { opacity: 1; transform: translateY(0); }

        .wlm-closing::before {
          content: ''; position: absolute; top: -80px; right: -80px;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 680px) {
          .wlm-closing { flex-direction: column; padding: 40px 32px; text-align: center; }
        }

        .wlm-closing-text { position: relative; }

        .wlm-closing-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 12px;
        }

        .wlm-closing-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800; color: #fff; margin-bottom: 10px; line-height: 1.2;
        }

        .wlm-closing-body {
          font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.8;
          max-width: 520px;
        }

        .wlm-cta-btn {
          flex-shrink: 0;
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.07);
          color: #fff; border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          transition: transform 0.25s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
          white-space: nowrap; position: relative;
        }
        .wlm-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.45);
        }
        .wlm-cta-arrow {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; transition: transform 0.3s ease;
        }
        .wlm-cta-btn:hover .wlm-cta-arrow { transform: translateX(3px); }
      `}</style>

      <section className="wlm-section" ref={sectionRef}>
        <div className={`wlm-orb wlm-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wlm-orb wlm-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wlm-inner">

          {/* ── HEADER ── */}
          <div className="wlm-header">
            <span className={`wlm-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wlm-eyebrow-line" />
              Lead Generation
              <span className="wlm-eyebrow-line" />
            </span>

            <h2 className={`wlm-title ${isVisible ? "vis" : ""}`}>
              Why <span className="wlm-title-accent">Digital Leads</span> Matter<br />for Every Business
            </h2>

            <p className={`wlm-intro ${isVisible ? "vis" : ""}`}>
              Today's customers explore everything online before taking action.
              They search, compare, read reviews, browse content and evaluate options.
              Your brand must appear at every step of their decision journey.
            </p>

            <p className={`wlm-sub-title ${isVisible ? "vis" : ""}`}>
              Digital Leads helps your brand:
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="wlm-grid">
            {benefits.map((item, i) => (
              <BenefitCard key={i} item={item} index={i} parentVisible={isVisible} />
            ))}
          </div>

          {/* ── CLOSING ── */}
          <div className={`wlm-closing ${isVisible ? "vis" : ""}`}>
            <div className="wlm-closing-text">
              <p className="wlm-closing-label">The Truth About Leads</p>
              <h3 className="wlm-closing-headline">Leads are not luck.</h3>
              <p className="wlm-closing-body">
                They are the result of smart distribution, meaningful communication
                and consistent optimization.
              </p>
            </div>
            <a href="/contact" style={{ textDecoration: "none" }}>
              <button className="wlm-cta-btn">
                Request a Free Lead Audit
                <span className="wlm-cta-arrow">→</span>
              </button>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
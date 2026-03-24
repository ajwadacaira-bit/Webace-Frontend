"use client";

import { useEffect, useRef, useState } from "react";

const noTraffic = [
  { text: "No leads", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="1" x2="17" y2="7"/><line x1="17" y1="1" x2="23" y2="7"/></svg> },
  { text: "No conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> },
  { text: "No engagement", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/></svg> },
  { text: "No visibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg> },
  { text: "No growth", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="1" y1="1" x2="23" y2="23"/></svg> },
];

const benefits = [
  { text: "Attract people actively searching for your service", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { text: "Engage users who are interested in your brand", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { text: "Build awareness through repeated visits", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { text: "Improve SEO performance", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { text: "Increase conversions on landing pages", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { text: "Strengthen remarketing audiences", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { text: "Build a predictable flow of visitors", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
];

export default function WhyTrafficMatters() {
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

        .wtm-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .wtm-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 20%, rgba(37,99,235,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .wtm-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .wtm-orb.vis { opacity: 1; }
        .wtm-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .wtm-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .wtm-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .wtm-header { text-align: center; margin-bottom: 80px; }

        .wtm-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wtm-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .wtm-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .wtm-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 24px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .wtm-title.vis { opacity: 1; transform: translateY(0); }
        .wtm-title-accent { color: #2563eb; }

        .wtm-sub {
          font-size: 16px; color: #555; line-height: 1.85;
          max-width: 600px; margin: 0 auto;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .wtm-sub.vis { opacity: 1; transform: translateY(0); }

        /* ── SECTION BLOCK ── */
        .wtm-block {
          margin-bottom: 72px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .wtm-block.vis { opacity: 1; transform: translateY(0); }

        .wtm-block-label {
          font-family: 'Syne', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: #999;
          margin-bottom: 20px; padding-left: 4px;
        }

        /* ── NO-TRAFFIC GRID ── */
        .wtm-no-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }
        @media (max-width: 900px) { .wtm-no-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 540px) { .wtm-no-grid { grid-template-columns: repeat(2, 1fr); } }

        .wtm-no-card {
          background: #fafafa;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 18px;
          padding: 24px 20px;
          display: flex; flex-direction: column;
          align-items: center; gap: 12px; text-align: center;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.65s ease, transform 0.65s ease,
            box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .wtm-no-card.vis { opacity: 1; transform: translateY(0); }

        .wtm-no-card:hover {
          box-shadow: 0 12px 36px rgba(0,0,0,0.08);
          border-color: rgba(0,0,0,0.12);
          transform: translateY(-4px) !important;
        }

        .wtm-no-icon {
          width: 40px; height: 40px; border-radius: 12px;
          background: #fff0f0;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s ease;
        }
        .wtm-no-card:hover .wtm-no-icon { transform: scale(1.08); }
        .wtm-no-icon svg { width: 18px; height: 18px; color: #ef4444; }

        .wtm-no-text {
          font-family: 'Syne', sans-serif;
          font-size: 13px; font-weight: 700; color: #333;
        }

        /* ── BENEFITS GRID ── */
        .wtm-ben-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 640px) { .wtm-ben-grid { grid-template-columns: 1fr; } }

        .wtm-ben-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 18px;
          padding: 24px 24px;
          display: flex; align-items: center; gap: 16px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.65s ease, transform 0.65s ease,
            box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .wtm-ben-card.vis { opacity: 1; transform: translateY(0); }

        .wtm-ben-card:hover {
          box-shadow: 0 16px 44px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.2);
          transform: translateY(-4px) !important;
        }

        .wtm-ben-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
          border-radius: 18px 18px 0 0;
        }
        .wtm-ben-card:hover::before { transform: scaleX(1); }

        .wtm-ben-icon {
          width: 44px; height: 44px; flex-shrink: 0;
          border-radius: 13px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s ease;
        }
        .wtm-ben-card:hover .wtm-ben-icon { transform: scale(1.08); }
        .wtm-ben-icon svg { width: 19px; height: 19px; color: #2563eb; }

        .wtm-ben-text {
          font-size: 14.5px; color: #333; line-height: 1.6; font-weight: 400;
        }

        /* ── CLOSING ── */
        .wtm-closing {
          background: #111;
          border-radius: 24px;
          padding: 56px 64px;
          text-align: center;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .wtm-closing.vis { opacity: 1; transform: translateY(0); }

        .wtm-closing::before {
          content: '';
          position: absolute; top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 65%);
          pointer-events: none;
        }

        .wtm-closing-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 16px;
          position: relative;
        }

        .wtm-closing-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 3vw, 30px); font-weight: 800;
          color: #fff; margin-bottom: 8px; position: relative;
        }

        .wtm-closing-sub {
          font-size: 16px; color: rgba(255,255,255,0.5);
          margin-bottom: 36px; position: relative;
        }

        .wtm-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 15px 26px 15px 30px;
          transition: transform 0.25s ease, box-shadow 0.3s ease,
            background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          position: relative;
        }
        .wtm-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.45);
        }
        .wtm-cta-arrow {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .wtm-cta-btn:hover .wtm-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }
      `}</style>

      <section className="wtm-section" ref={sectionRef}>
        <div className={`wtm-orb wtm-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wtm-orb wtm-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wtm-inner">

          {/* ── HEADER ── */}
          <div className="wtm-header">
            <span className={`wtm-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wtm-eyebrow-line" />
              The Foundation of Growth
              <span className="wtm-eyebrow-line" />
            </span>

            <h2 className={`wtm-title ${isVisible ? "vis" : ""}`}>
              Why <span className="wtm-title-accent">Web Traffic</span> Matters
            </h2>

            <p className={`wtm-sub ${isVisible ? "vis" : ""}`}>
              Your website is your digital headquarters. It is where people discover your story,
              understand your services, explore your solutions and decide whether to work with you.
            </p>
          </div>

          {/* ── WITHOUT TRAFFIC ── */}
          <div className={`wtm-block ${isVisible ? "vis" : ""}`} style={{ transitionDelay: "0.35s" }}>
            <p className="wtm-block-label">Without traffic:</p>
            <div className="wtm-no-grid">
              {noTraffic.map((item, i) => (
                <div
                  key={i}
                  className={`wtm-no-card ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.42 + i * 0.08}s` : "0s" }}
                >
                  <div className="wtm-no-icon">{item.icon}</div>
                  <span className="wtm-no-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── BENEFITS ── */}
          <div className={`wtm-block ${isVisible ? "vis" : ""}`} style={{ transitionDelay: "0.55s" }}>
            <p className="wtm-block-label">Web Traffic helps you:</p>
            <div className="wtm-ben-grid">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className={`wtm-ben-card ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.6 + i * 0.08}s` : "0s" }}
                >
                  <div className="wtm-ben-icon">{item.icon}</div>
                  <p className="wtm-ben-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CLOSING ── */}
          <div
            className={`wtm-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.1s" : "0s" }}
          >
            <p className="wtm-closing-label">The Bottom Line</p>
            <h3 className="wtm-closing-headline">Traffic is the start of every digital success story.</h3>
            <p className="wtm-closing-sub">Want consistent daily website visitors?</p>
            <button className="wtm-cta-btn">
              Request a Free Traffic Audit
              <span className="wtm-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
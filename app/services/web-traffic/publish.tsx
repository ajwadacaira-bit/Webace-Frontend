"use client";

import { useEffect, useRef, useState } from "react";

const trafficProvides = [
  { label: "Awareness", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Broad visibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: "High reach", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: "Professional credibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { label: "Affordable clicks", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
];

const platformCriteria = [
  { label: "Industry relevance", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { label: "Audience behavior", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { label: "Placement quality", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Traffic safety", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Negative filters", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> },
];

export default function PublishersService() {
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

        .pub-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .pub-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 5% 30%, rgba(37,99,235,0.05) 0%, transparent 45%),
            radial-gradient(ellipse at 95% 70%, rgba(96,165,250,0.04) 0%, transparent 45%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-22px) scale(1.05); }
        }

        .pub-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .pub-orb.vis { opacity: 1; }
        .pub-orb-1 {
          width: 420px; height: 420px; top: -140px; left: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .pub-orb-2 {
          width: 260px; height: 260px; bottom: 60px; right: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .pub-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .pub-inner { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ─── LEFT ─── */
        .pub-left { position: sticky; top: 100px; }

        .pub-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .pub-num.vis { opacity: 1; transform: translateY(0); }
        .pub-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .pub-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .pub-title.vis { opacity: 1; transform: translateY(0); }

        .pub-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .pub-tagline.vis { opacity: 1; transform: translateY(0); }

        .pub-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }

        .pub-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .pub-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .pub-body-line:hover { color: #111; }
        .pub-body-line.vis { opacity: 1; transform: translateY(0); }

        .pub-conclusion {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; color: #111;
          padding: 22px 26px;
          border: 1px solid rgba(37,99,235,0.15);
          border-left: 3px solid #2563eb;
          border-radius: 14px;
          background: rgba(37,99,235,0.03);
          margin-bottom: 36px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s;
        }
        .pub-conclusion.vis { opacity: 1; transform: translateY(0); }

        .pub-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05);
          color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s;
        }
        .pub-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .pub-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .pub-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .pub-cta-btn:hover .pub-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .pub-right { display: flex; flex-direction: column; gap: 24px; }

        .pub-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px;
          padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .pub-panel.vis { opacity: 1; transform: translateY(0); }
        .pub-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .pub-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .pub-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .pub-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .pub-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .pub-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .pub-item-icon {
          width: 34px; height: 34px; flex-shrink: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .pub-item:hover .pub-item-icon { transform: scale(1.08); }
        .pub-item-icon svg { width: 15px; height: 15px; color: #2563eb; }

        .pub-item-text {
          font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3;
        }
      `}</style>

      <section className="pub-section" ref={sectionRef}>
        <div className={`pub-orb pub-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`pub-orb pub-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="pub-inner">

          {/* ─── LEFT ─── */}
          <div className="pub-left">
            <span className={`pub-num ${isVisible ? "vis" : ""}`}>
              <span className="pub-num-line" />
              Service 04
              <span className="pub-num-line" />
            </span>

            <h2 className={`pub-title ${isVisible ? "vis" : ""}`}>
              Publishers &amp; Networks
            </h2>

            <p className={`pub-tagline ${isVisible ? "vis" : ""}`}>
              Traffic from premium websites and digital platforms
            </p>

            <div className="pub-body">
              {[
                "Publisher networks let your brand appear on top websites, blogs, apps and media channels.",
                "This is perfect for expanding your reach and driving large traffic volumes.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`pub-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className={`pub-conclusion ${isVisible ? "vis" : ""}`}>
              Your brand appears across the digital ecosystem with controlled, targeted delivery.
            </div>

            <button className={`pub-cta-btn ${isVisible ? "vis" : ""}`}>
              Explore Publisher Networks
              <span className="pub-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="pub-right">

            <div
              className={`pub-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="pub-panel-label">Publisher traffic provides:</p>
              <div className="pub-items-grid">
                {trafficProvides.map((item, i) => (
                  <div key={i} className="pub-item">
                    <div className="pub-item-icon">{item.icon}</div>
                    <span className="pub-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`pub-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.56s" : "0s" }}
            >
              <p className="pub-panel-label">We choose platforms based on:</p>
              <div className="pub-items-grid">
                {platformCriteria.map((item, i) => (
                  <div key={i} className="pub-item">
                    <div className="pub-item-icon">{item.icon}</div>
                    <span className="pub-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
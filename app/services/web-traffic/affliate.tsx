"use client";

import { useEffect, useRef, useState } from "react";

const trafficOffers = [
  { label: "Low cost acquisition", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: "High trust", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "High relevance", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { label: "Scalable reach", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Multi channel exposure", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
];

const managed = [
  { label: "Affiliate Onboarding", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> },
  { label: "Tracking Systems", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { label: "Custom Landing Pages", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { label: "Commission Structures", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { label: "Performance Monitoring", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
];

export default function AffiliateService() {
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

        .aff-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .aff-section::before {
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

        .aff-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .aff-orb.vis { opacity: 1; }
        .aff-orb-1 {
          width: 420px; height: 420px; top: -140px; left: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .aff-orb-2 {
          width: 260px; height: 260px; bottom: 60px; right: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .aff-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .aff-inner { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ─── LEFT ─── */
        .aff-left { position: sticky; top: 100px; }

        .aff-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .aff-num.vis { opacity: 1; transform: translateY(0); }
        .aff-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .aff-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .aff-title.vis { opacity: 1; transform: translateY(0); }

        .aff-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .aff-tagline.vis { opacity: 1; transform: translateY(0); }

        .aff-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }

        .aff-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .aff-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .aff-body-line:hover { color: #111; }
        .aff-body-line.vis { opacity: 1; transform: translateY(0); }

        .aff-conclusion {
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
        .aff-conclusion.vis { opacity: 1; transform: translateY(0); }

        .aff-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05);
          color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.63s, transform 0.7s ease 0.63s;
        }
        .aff-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .aff-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .aff-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .aff-cta-btn:hover .aff-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .aff-right { display: flex; flex-direction: column; gap: 24px; }

        .aff-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px;
          padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .aff-panel.vis { opacity: 1; transform: translateY(0); }
        .aff-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .aff-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .aff-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .aff-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .aff-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .aff-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .aff-item-icon {
          width: 34px; height: 34px; flex-shrink: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .aff-item:hover .aff-item-icon { transform: scale(1.08); }
        .aff-item-icon svg { width: 15px; height: 15px; color: #2563eb; }

        .aff-item-text {
          font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3;
        }
      `}</style>

      <section className="aff-section" ref={sectionRef}>
        <div className={`aff-orb aff-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`aff-orb aff-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="aff-inner">

          {/* ─── LEFT ─── */}
          <div className="aff-left">
            <span className={`aff-num ${isVisible ? "vis" : ""}`}>
              <span className="aff-num-line" />
              Service 06
              <span className="aff-num-line" />
            </span>

            <h2 className={`aff-title ${isVisible ? "vis" : ""}`}>
              Affiliate<br />Marketing
            </h2>

            <p className={`aff-tagline ${isVisible ? "vis" : ""}`}>
              Traffic from trusted external promoters and partners
            </p>

            <div className="aff-body">
              {[
                "Affiliates drive traffic from blogs, emails, content sites and niche communities.",
                "This traffic is influenced, warm and conversion friendly.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`aff-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className={`aff-conclusion ${isVisible ? "vis" : ""}`}>
              Affiliate marketing brings traffic that is pre-warmed and recommendation driven.
            </div>

            <button className={`aff-cta-btn ${isVisible ? "vis" : ""}`}>
              Start Your Affiliate Programme
              <span className="aff-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="aff-right">

            <div
              className={`aff-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="aff-panel-label">Affiliate traffic offers:</p>
              <div className="aff-items-grid">
                {trafficOffers.map((item, i) => (
                  <div key={i} className="aff-item">
                    <div className="aff-item-icon">{item.icon}</div>
                    <span className="aff-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`aff-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.56s" : "0s" }}
            >
              <p className="aff-panel-label">We manage:</p>
              <div className="aff-items-grid">
                {managed.map((item, i) => (
                  <div key={i} className="aff-item">
                    <div className="aff-item-icon">{item.icon}</div>
                    <span className="aff-item-text">{item.label}</span>
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
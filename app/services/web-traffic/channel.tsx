"use client";

import { useEffect, useRef, useState } from "react";

const channels = [
  { label: "Search", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { label: "Social", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "Video", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { label: "Email", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { label: "Display Networks", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { label: "Retargeting", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> },
];

const trafficQualities = [
  { label: "Diverse", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: "Reinforced", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { label: "High in recall", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Strong for funnel", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> },
  { label: "Great for amplification", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> },
];

export default function CrossChannelService() {
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

        .ccs-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .ccs-section::before {
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

        .ccs-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .ccs-orb.vis { opacity: 1; }
        .ccs-orb-1 {
          width: 420px; height: 420px; top: -140px; right: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .ccs-orb-2 {
          width: 260px; height: 260px; bottom: 60px; left: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .ccs-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .ccs-inner { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ─── LEFT ─── */
        .ccs-left { position: sticky; top: 100px; }

        .ccs-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ccs-num.vis { opacity: 1; transform: translateY(0); }
        .ccs-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .ccs-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .ccs-title.vis { opacity: 1; transform: translateY(0); }

        .ccs-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .ccs-tagline.vis { opacity: 1; transform: translateY(0); }

        .ccs-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }

        .ccs-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .ccs-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .ccs-body-line:hover { color: #111; }
        .ccs-body-line.vis { opacity: 1; transform: translateY(0); }

        .ccs-conclusion {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; color: #111;
          padding: 22px 26px;
          border: 1px solid rgba(37,99,235,0.15);
          border-left: 3px solid #2563eb;
          border-radius: 14px;
          background: rgba(37,99,235,0.03);
          margin-bottom: 32px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.48s, transform 0.8s ease 0.48s;
        }
        .ccs-conclusion.vis { opacity: 1; transform: translateY(0); }

        .ccs-pre-cta {
          font-size: 15px; color: #444; font-weight: 500;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.56s, transform 0.7s ease 0.56s;
        }
        .ccs-pre-cta.vis { opacity: 1; transform: translateY(0); }

        .ccs-cta-btn {
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
        .ccs-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .ccs-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .ccs-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .ccs-cta-btn:hover .ccs-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .ccs-right { display: flex; flex-direction: column; gap: 24px; }

        .ccs-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px;
          padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .ccs-panel.vis { opacity: 1; transform: translateY(0); }
        .ccs-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .ccs-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .ccs-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .ccs-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .ccs-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .ccs-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .ccs-item-icon {
          width: 34px; height: 34px; flex-shrink: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .ccs-item:hover .ccs-item-icon { transform: scale(1.08); }
        .ccs-item-icon svg { width: 15px; height: 15px; color: #2563eb; }

        .ccs-item-text {
          font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3;
        }
      `}</style>

      <section className="ccs-section" ref={sectionRef}>
        <div className={`ccs-orb ccs-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`ccs-orb ccs-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="ccs-inner">

          {/* ─── LEFT ─── */}
          <div className="ccs-left">
            <span className={`ccs-num ${isVisible ? "vis" : ""}`}>
              <span className="ccs-num-line" />
              Service 05
              <span className="ccs-num-line" />
            </span>

            <h2 className={`ccs-title ${isVisible ? "vis" : ""}`}>
              Cross Channel<br />Promotions
            </h2>

            <p className={`ccs-tagline ${isVisible ? "vis" : ""}`}>
              Traffic from multiple coordinated platforms working together
            </p>

            <div className="ccs-body">
              {[
                "Cross channel promotions combine several channels to drive traffic from different touchpoints at the same time.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`ccs-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className={`ccs-conclusion ${isVisible ? "vis" : ""}`}>
              When users see your brand repeatedly across platforms, they are more likely to visit your website.
            </div>

            <p className={`ccs-pre-cta ${isVisible ? "vis" : ""}`}>
              Want to appear everywhere your audience goes?
            </p>

            <button className={`ccs-cta-btn ${isVisible ? "vis" : ""}`}>
              Request a Cross Channel Strategy
              <span className="ccs-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="ccs-right">

            <div
              className={`ccs-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.38s" : "0s" }}
            >
              <p className="ccs-panel-label">This includes:</p>
              <div className="ccs-items-grid">
                {channels.map((item, i) => (
                  <div key={i} className="ccs-item">
                    <div className="ccs-item-icon">{item.icon}</div>
                    <span className="ccs-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`ccs-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.52s" : "0s" }}
            >
              <p className="ccs-panel-label">Cross channel traffic is:</p>
              <div className="ccs-items-grid">
                {trafficQualities.map((item, i) => (
                  <div key={i} className="ccs-item">
                    <div className="ccs-item-icon">{item.icon}</div>
                    <span className="ccs-item-text">{item.label}</span>
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
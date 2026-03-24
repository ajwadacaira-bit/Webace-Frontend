"use client";

import { useEffect, useRef, useState } from "react";

const trafficQualities = [
  { label: "Visual", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
  { label: "Engagement driven", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Large scale", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: "Creative friendly", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { label: "Ideal for remarketing", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> },
];

const campaigns = [
  { label: "Traffic Campaigns", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Landing Page Views", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { label: "Engagement & Clicks", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { label: "Story & Reel Placements", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { label: "Retargeting Flows", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

export default function MetaService() {
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

        .meta-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .meta-section::before {
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

        .meta-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .meta-orb.vis { opacity: 1; }
        .meta-orb-1 {
          width: 420px; height: 420px; top: -140px; right: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .meta-orb-2 {
          width: 260px; height: 260px; bottom: 60px; left: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .meta-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .meta-inner { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ─── LEFT ─── */
        .meta-left { position: sticky; top: 100px; }

        .meta-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .meta-num.vis { opacity: 1; transform: translateY(0); }
        .meta-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .meta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .meta-title.vis { opacity: 1; transform: translateY(0); }

        .meta-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .meta-tagline.vis { opacity: 1; transform: translateY(0); }

        .meta-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }

        .meta-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .meta-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .meta-body-line:hover { color: #111; }
        .meta-body-line.vis { opacity: 1; transform: translateY(0); }

        .meta-conclusion {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; color: #111;
          padding: 22px 26px;
          border: 1px solid rgba(37,99,235,0.15);
          border-left: 3px solid #2563eb;
          border-radius: 14px;
          background: rgba(37,99,235,0.03);
          margin-bottom: 32px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s;
        }
        .meta-conclusion.vis { opacity: 1; transform: translateY(0); }

        .meta-pre-cta {
          font-size: 15px; color: #444; font-weight: 500;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.63s, transform 0.7s ease 0.63s;
        }
        .meta-pre-cta.vis { opacity: 1; transform: translateY(0); }

        .meta-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05);
          color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s;
        }
        .meta-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .meta-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .meta-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .meta-cta-btn:hover .meta-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .meta-right { display: flex; flex-direction: column; gap: 24px; }

        .meta-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px;
          padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .meta-panel.vis { opacity: 1; transform: translateY(0); }
        .meta-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .meta-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .meta-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .meta-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .meta-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .meta-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .meta-item-icon {
          width: 34px; height: 34px; flex-shrink: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .meta-item:hover .meta-item-icon { transform: scale(1.08); }
        .meta-item-icon svg { width: 15px; height: 15px; color: #2563eb; }

        .meta-item-text {
          font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3;
        }
      `}</style>

      <section className="meta-section" ref={sectionRef}>
        <div className={`meta-orb meta-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`meta-orb meta-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="meta-inner">

          {/* ─── LEFT ─── */}
          <div className="meta-left">
            <span className={`meta-num ${isVisible ? "vis" : ""}`}>
              <span className="meta-num-line" />
              Service 03
              <span className="meta-num-line" />
            </span>

            <h2 className={`meta-title ${isVisible ? "vis" : ""}`}>Meta Ads</h2>

            <p className={`meta-tagline ${isVisible ? "vis" : ""}`}>
              Reach audiences where they spend most of their time
            </p>

            <div className="meta-body">
              {[
                "Meta Ads deliver traffic from Facebook and Instagram.",
                "These platforms let you reach people based on interests, behaviors, demographics and online activity.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`meta-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className={`meta-conclusion ${isVisible ? "vis" : ""}`}>
              Meta Ads bring curious, engaged users who explore your website.
            </div>

            <p className={`meta-pre-cta ${isVisible ? "vis" : ""}`}>
              Need more website visitors from social media?
            </p>

            <button className={`meta-cta-btn ${isVisible ? "vis" : ""}`}>
              Talk to a Meta Expert
              <span className="meta-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="meta-right">

            <div
              className={`meta-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="meta-panel-label">Meta traffic is:</p>
              <div className="meta-items-grid">
                {trafficQualities.map((item, i) => (
                  <div key={i} className="meta-item">
                    <div className="meta-item-icon">{item.icon}</div>
                    <span className="meta-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`meta-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.56s" : "0s" }}
            >
              <p className="meta-panel-label">We run:</p>
              <div className="meta-items-grid">
                {campaigns.map((item, i) => (
                  <div key={i} className="meta-item">
                    <div className="meta-item-icon">{item.icon}</div>
                    <span className="meta-item-text">{item.label}</span>
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
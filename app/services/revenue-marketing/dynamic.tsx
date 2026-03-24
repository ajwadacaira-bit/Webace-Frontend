"use client";

import { useEffect, useRef, useState } from "react";

const showsAudience = [
  { label: "Products they viewed", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Services they interacted with", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { label: "Pages they visited", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { label: "Categories they're interested in", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
];

const increases = [
  { label: "Click through rates", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg> },
  { label: "Add to carts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
  { label: "Leads", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> },
  { label: "Conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { label: "Revenue outcomes", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
];

export default function DynamicSocialSection() {
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

        .dsa-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .dsa-section::before {
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
        .dsa-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .dsa-orb.vis { opacity: 1; }
        .dsa-orb-1 {
          width: 420px; height: 420px; top: -140px; right: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .dsa-orb-2 {
          width: 260px; height: 260px; bottom: 60px; left: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .dsa-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }
        @media (max-width: 860px) { .dsa-inner { grid-template-columns: 1fr; gap: 48px; } }

        /* ─── LEFT ─── */
        .dsa-left { position: sticky; top: 100px; }

        .dsa-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .dsa-num.vis { opacity: 1; transform: translateY(0); }
        .dsa-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .dsa-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .dsa-title.vis { opacity: 1; transform: translateY(0); }

        .dsa-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .dsa-tagline.vis { opacity: 1; transform: translateY(0); }

        .dsa-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }

        .dsa-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .dsa-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .dsa-body-line:hover { color: #111; }
        .dsa-body-line.vis { opacity: 1; transform: translateY(0); }

        .dsa-conclusion {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; color: #111;
          padding: 22px 26px;
          border: 1px solid rgba(37,99,235,0.15);
          border-left: 3px solid #2563eb;
          border-radius: 14px;
          background: rgba(37,99,235,0.03);
          margin-bottom: 36px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
        }
        .dsa-conclusion.vis { opacity: 1; transform: translateY(0); }

        .dsa-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05); color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.58s, transform 0.7s ease 0.58s;
        }
        .dsa-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .dsa-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .dsa-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .dsa-cta-btn:hover .dsa-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .dsa-right { display: flex; flex-direction: column; gap: 24px; }

        .dsa-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .dsa-panel.vis { opacity: 1; transform: translateY(0); }
        .dsa-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .dsa-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .dsa-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .dsa-items-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        .dsa-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .dsa-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .dsa-item-icon {
          width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .dsa-item:hover .dsa-item-icon { transform: scale(1.08); }
        .dsa-item-icon svg { width: 15px; height: 15px; color: #2563eb; }
        .dsa-item-text { font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3; }
      `}</style>

      <section className="dsa-section" ref={sectionRef}>
        <div className={`dsa-orb dsa-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`dsa-orb dsa-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="dsa-inner">

          {/* ─── LEFT ─── */}
          <div className="dsa-left">
            <span className={`dsa-num ${isVisible ? "vis" : ""}`}>
              <span className="dsa-num-line" />
              Service 05
              <span className="dsa-num-line" />
            </span>

            <h2 className={`dsa-title ${isVisible ? "vis" : ""}`}>
              Dynamic<br />Social Ads
            </h2>

            <p className={`dsa-tagline ${isVisible ? "vis" : ""}`}>
              Deliver personalized ads based on user behavior and preferences
            </p>

            <div className="dsa-body">
              {[
                "Dynamic Social Ads show each user exactly what they already showed interest in.",
                "This personalized approach dramatically increases every metric in your funnel.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`dsa-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className={`dsa-conclusion ${isVisible ? "vis" : ""}`}>
              These ads adapt automatically to user behavior.
            </div>

            <button className={`dsa-cta-btn ${isVisible ? "vis" : ""}`}>
              Launch Dynamic Social Ads
              <span className="dsa-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="dsa-right">

            <div
              className={`dsa-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="dsa-panel-label">We show your audience:</p>
              <div className="dsa-items-grid">
                {showsAudience.map((item, i) => (
                  <div key={i} className="dsa-item">
                    <div className="dsa-item-icon">{item.icon}</div>
                    <span className="dsa-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`dsa-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.56s" : "0s" }}
            >
              <p className="dsa-panel-label">This increases:</p>
              <div className="dsa-items-grid">
                {increases.map((item, i) => (
                  <div key={i} className="dsa-item">
                    <div className="dsa-item-icon">{item.icon}</div>
                    <span className="dsa-item-text">{item.label}</span>
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
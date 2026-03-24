"use client";

import { useEffect, useRef, useState } from "react";

const includes = [
  { label: "Email flows", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { label: "Retention campaigns", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Post purchase journeys", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/><polyline points="9 11 12 14 16 9"/></svg> },
  { label: "Win back flows", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> },
  { label: "Loyalty journeys", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
];

const increases = [
  { label: "Repeat customers", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: "Customer lifetime value", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Subscription revenue", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: "Organic sales growth", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
];

export default function LifecycleSection() {
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

        .lc-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .lc-section::before {
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
        .lc-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .lc-orb.vis { opacity: 1; }
        .lc-orb-1 {
          width: 420px; height: 420px; top: -140px; right: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .lc-orb-2 {
          width: 260px; height: 260px; bottom: 60px; left: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .lc-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }
        @media (max-width: 860px) { .lc-inner { grid-template-columns: 1fr; gap: 48px; } }

        /* ─── LEFT ─── */
        .lc-left { position: sticky; top: 100px; }

        .lc-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .lc-num.vis { opacity: 1; transform: translateY(0); }
        .lc-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .lc-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .lc-title.vis { opacity: 1; transform: translateY(0); }

        .lc-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .lc-tagline.vis { opacity: 1; transform: translateY(0); }

        .lc-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }

        .lc-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .lc-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .lc-body-line:hover { color: #111; }
        .lc-body-line.vis { opacity: 1; transform: translateY(0); }

        .lc-conclusion {
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
        .lc-conclusion.vis { opacity: 1; transform: translateY(0); }

        .lc-pre-cta {
          font-size: 15px; color: #444; font-weight: 500;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.63s, transform 0.7s ease 0.63s;
        }
        .lc-pre-cta.vis { opacity: 1; transform: translateY(0); }

        .lc-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05); color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s;
        }
        .lc-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .lc-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .lc-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .lc-cta-btn:hover .lc-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .lc-right { display: flex; flex-direction: column; gap: 24px; }

        .lc-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .lc-panel.vis { opacity: 1; transform: translateY(0); }
        .lc-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .lc-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .lc-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .lc-items-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        .lc-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .lc-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .lc-item-icon {
          width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .lc-item:hover .lc-item-icon { transform: scale(1.08); }
        .lc-item-icon svg { width: 15px; height: 15px; color: #2563eb; }
        .lc-item-text { font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3; }

        /* ─── CLV STAT ─── */
        .lc-clv {
          background: #111;
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease 0.56s, transform 0.75s ease 0.56s;
        }
        .lc-clv.vis { opacity: 1; transform: translateY(0); }
        .lc-clv::before {
          content: '';
          position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%);
          pointer-events: none;
        }

        .lc-clv-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa;
          margin-bottom: 20px; position: relative;
        }

        .lc-clv-rows { display: flex; flex-direction: column; gap: 12px; position: relative; }

        .lc-clv-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .lc-clv-row:hover {
          background: rgba(37,99,235,0.15);
          border-color: rgba(37,99,235,0.3);
        }
        .lc-clv-row-label {
          font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.3;
        }
        .lc-clv-row-val {
          font-family: 'Syne', sans-serif;
          font-size: 18px; font-weight: 800; color: #60a5fa;
          flex-shrink: 0;
        }
      `}</style>

      <section className="lc-section" ref={sectionRef}>
        <div className={`lc-orb lc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`lc-orb lc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="lc-inner">

          {/* ─── LEFT ─── */}
          <div className="lc-left">
            <span className={`lc-num ${isVisible ? "vis" : ""}`}>
              <span className="lc-num-line" />
              Service 07
              <span className="lc-num-line" />
            </span>

            <h2 className={`lc-title ${isVisible ? "vis" : ""}`}>
              Lifecycle<br />Marketing
            </h2>

            <p className={`lc-tagline ${isVisible ? "vis" : ""}`}>
              Increase customer lifetime value through consistent engagement
            </p>

            <div className="lc-body">
              {[
                "Acquiring a customer is expensive.",
                "Keeping them engaged is profitable.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`lc-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className={`lc-conclusion ${isVisible ? "vis" : ""}`}>
              Lifecycle marketing ensures revenue continues long after the first purchase.
            </div>

            <p className={`lc-pre-cta ${isVisible ? "vis" : ""}`}>
              Want higher repeat revenue?
            </p>

            <button className={`lc-cta-btn ${isVisible ? "vis" : ""}`}>
              Get Your Lifecycle Strategy
              <span className="lc-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="lc-right">

            <div
              className={`lc-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="lc-panel-label">Lifecycle Marketing includes:</p>
              <div className="lc-items-grid">
                {includes.map((item, i) => (
                  <div key={i} className="lc-item">
                    <div className="lc-item-icon">{item.icon}</div>
                    <span className="lc-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`lc-clv ${isVisible ? "vis" : ""}`}>
              <p className="lc-clv-label">This increases:</p>
              <div className="lc-clv-rows">
                {increases.map((item, i) => (
                  <div key={i} className="lc-clv-row">
                    <span className="lc-clv-row-label">{item.label}</span>
                    <span className="lc-clv-row-val">↑</span>
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
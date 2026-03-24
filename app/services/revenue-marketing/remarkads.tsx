"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  { label: "Increase conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { label: "Reduce lost customers", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg> },
  { label: "Strengthen user recall", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Improve ROI of all campaigns", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Lower acquisition cost", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
];

const howItWorks = [
  { label: "User visits your site", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { label: "Leaves without converting", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg> },
  { label: "We retarget with ads", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> },
  { label: "User returns and converts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
];

export default function RemarketingSection() {
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

        .rem-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .rem-section::before {
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
        .rem-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0; transition: opacity 1.4s ease;
        }
        .rem-orb.vis { opacity: 1; }
        .rem-orb-1 {
          width: 420px; height: 420px; top: -140px; right: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .rem-orb-2 {
          width: 260px; height: 260px; bottom: 60px; left: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .rem-inner {
          max-width: 1100px; margin: 0 auto; position: relative;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }
        @media (max-width: 860px) { .rem-inner { grid-template-columns: 1fr; gap: 48px; } }

        /* ─── LEFT ─── */
        .rem-left { position: sticky; top: 100px; }

        .rem-num {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .rem-num.vis { opacity: 1; transform: translateY(0); }
        .rem-num-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .rem-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
        }
        .rem-title.vis { opacity: 1; transform: translateY(0); }

        .rem-tagline {
          font-size: 16px; color: #2563eb; font-weight: 500;
          margin-bottom: 28px; line-height: 1.5;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.22s, transform 0.8s ease 0.22s;
        }
        .rem-tagline.vis { opacity: 1; transform: translateY(0); }

        .rem-body { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }

        .rem-body-line {
          font-size: 15px; color: #555; line-height: 1.85;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease, color 0.25s ease;
        }
        .rem-body-line:first-child { border-top: 1px solid rgba(0,0,0,0.05); }
        .rem-body-line:hover { color: #111; }
        .rem-body-line.vis { opacity: 1; transform: translateY(0); }

        .rem-conclusion {
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
        .rem-conclusion.vis { opacity: 1; transform: translateY(0); }

        .rem-pre-cta {
          font-size: 15px; color: #444; font-weight: 500;
          margin-bottom: 16px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.56s, transform 0.7s ease 0.56s;
        }
        .rem-pre-cta.vis { opacity: 1; transform: translateY(0); }

        .rem-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.05); color: #111;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 14px; font-weight: 500;
          border-radius: 100px; padding: 14px 24px 14px 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.7s ease 0.63s, transform 0.7s ease 0.63s;
        }
        .rem-cta-btn.vis { opacity: 1; transform: translateY(0); }
        .rem-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(37,99,235,0.4);
        }
        .rem-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .rem-cta-btn:hover .rem-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

        /* ─── RIGHT ─── */
        .rem-right { display: flex; flex-direction: column; gap: 24px; }

        .rem-panel {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .rem-panel.vis { opacity: 1; transform: translateY(0); }
        .rem-panel:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .rem-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .rem-panel-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .rem-items-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        .rem-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .rem-item:hover {
          background: rgba(37,99,235,0.04);
          border-color: rgba(37,99,235,0.15);
          transform: translateX(3px);
        }
        .rem-item-icon {
          width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .rem-item:hover .rem-item-icon { transform: scale(1.08); }
        .rem-item-icon svg { width: 15px; height: 15px; color: #2563eb; }
        .rem-item-text { font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.3; }

        /* ─── HOW IT WORKS FLOW ─── */
        .rem-flow {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 22px; padding: 36px 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease 0.58s, transform 0.75s ease 0.58s,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .rem-flow.vis { opacity: 1; transform: translateY(0); }
        .rem-flow:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.09);
          border-color: rgba(37,99,235,0.18);
        }
        .rem-flow::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 22px 22px 0 0;
        }

        .rem-flow-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 24px;
        }

        .rem-flow-steps { display: flex; flex-direction: column; gap: 0; }

        .rem-flow-step {
          display: flex; align-items: center; gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: background 0.25s ease;
          cursor: default;
        }
        .rem-flow-step:last-child { border-bottom: none; }
        .rem-flow-step:hover { background: rgba(37,99,235,0.02); border-radius: 10px; padding-left: 8px; }

        .rem-flow-icon {
          width: 38px; height: 38px; flex-shrink: 0; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .rem-flow-step:nth-child(1) .rem-flow-icon { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
        .rem-flow-step:nth-child(2) .rem-flow-icon { background: linear-gradient(135deg, #fff1f2, #fee2e2); }
        .rem-flow-step:nth-child(3) .rem-flow-icon { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
        .rem-flow-step:nth-child(4) .rem-flow-icon { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
        .rem-flow-step:hover .rem-flow-icon { transform: scale(1.08); }
        .rem-flow-step:nth-child(1) .rem-flow-icon svg { color: #2563eb; }
        .rem-flow-step:nth-child(2) .rem-flow-icon svg { color: #ef4444; }
        .rem-flow-step:nth-child(3) .rem-flow-icon svg { color: #2563eb; }
        .rem-flow-step:nth-child(4) .rem-flow-icon svg { color: #16a34a; }
        .rem-flow-icon svg { width: 16px; height: 16px; }

        .rem-flow-step-num {
          font-family: 'Syne', sans-serif;
          font-size: 11px; font-weight: 700; color: rgba(0,0,0,0.15);
          min-width: 20px;
        }
        .rem-flow-step-text {
          font-size: 13.5px; color: #333; font-weight: 400; line-height: 1.4;
        }
      `}</style>

      <section className="rem-section" ref={sectionRef}>
        <div className={`rem-orb rem-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`rem-orb rem-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="rem-inner">

          {/* ─── LEFT ─── */}
          <div className="rem-left">
            <span className={`rem-num ${isVisible ? "vis" : ""}`}>
              <span className="rem-num-line" />
              Service 03
              <span className="rem-num-line" />
            </span>

            <h2 className={`rem-title ${isVisible ? "vis" : ""}`}>Remarketing Ads</h2>

            <p className={`rem-tagline ${isVisible ? "vis" : ""}`}>
              Bring back interested users and convert them into customers
            </p>

            <div className="rem-body">
              {[
                "Most users do not convert the first time they visit.",
                "Remarketing ensures they return.",
              ].map((line, i) => (
                <p
                  key={i}
                  className={`rem-body-line ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.32 + i * 0.1}s` : "0s" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className={`rem-conclusion ${isVisible ? "vis" : ""}`}>
              This is a critical element of revenue growth.
            </div>

            <p className={`rem-pre-cta ${isVisible ? "vis" : ""}`}>
              Need stronger remarketing performance?
            </p>

            <button className={`rem-cta-btn ${isVisible ? "vis" : ""}`}>
              Talk to a Specialist
              <span className="rem-cta-arrow">→</span>
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="rem-right">

            <div
              className={`rem-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="rem-panel-label">Remarketing Ads:</p>
              <div className="rem-items-grid">
                {benefits.map((item, i) => (
                  <div key={i} className="rem-item">
                    <div className="rem-item-icon">{item.icon}</div>
                    <span className="rem-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rem-flow ${isVisible ? "vis" : ""}`}>
              <p className="rem-flow-label">How it works:</p>
              <div className="rem-flow-steps">
                {howItWorks.map((step, i) => (
                  <div key={i} className="rem-flow-step">
                    <span className="rem-flow-step-num">0{i + 1}</span>
                    <div className="rem-flow-icon">{step.icon}</div>
                    <span className="rem-flow-step-text">{step.label}</span>
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
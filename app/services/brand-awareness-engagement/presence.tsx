"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { label: "Awareness", sub: "leads to" },
  { label: "Engagement", sub: "leads to" },
  { label: "Trust", sub: "leads to" },
  { label: "Loyalty", sub: "leads to" },
  { label: "Growth", sub: "" },
];

const ctaButtons = [
  {
    text: "Get Your Customized Brand Visibility Plan",
    primary: true,
  },
  {
    text: "Request a Free Consultation",
    primary: false,
  },
  {
    text: "Speak to Our Strategy Team",
    primary: false,
  },
];

export default function BuildYourBrandPresence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .bbp-section {
          font-family: 'Kanit', sans-serif;
          background: #0f0f0f;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 140px;
        }

        /* deep bg glow */
        .bbp-section::before {
          content: '';
          position: absolute;
          top: -160px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 700px;
          background:
            radial-gradient(ellipse at 30% 40%, rgba(37,99,235,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 60%, rgba(96,165,250,0.1) 0%, transparent 55%);
          pointer-events: none;
        }

        /* grid texture overlay */
        .bbp-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-24px) scale(1.06); }
        }

        .bbp-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.6s ease;
          z-index: 0;
        }
        .bbp-orb.vis { opacity: 1; }
        .bbp-orb-1 {
          width: 480px; height: 480px;
          top: -160px; right: -120px;
          background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%);
          animation: floatOrb 12s ease-in-out infinite;
        }
        .bbp-orb-2 {
          width: 300px; height: 300px;
          bottom: 60px; left: -80px;
          background: radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%);
          animation: floatOrb 16s ease-in-out infinite reverse;
        }

        .bbp-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        /* ── EYEBROW ── */
        .bbp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .bbp-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .bbp-eyebrow-line {
          display: block; width: 28px; height: 1px;
          background: #60a5fa; opacity: 0.4;
        }

        /* ── TITLE ── */
        .bbp-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(38px, 6vw, 70px);
          font-weight: 800;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s;
        }
        .bbp-title.vis { opacity: 1; transform: translateY(0); }
        .bbp-title-accent { color: #2563eb; }

        /* ── STEPS CHAIN ── */
        .bbp-chain {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0;
          margin-bottom: 60px;
          opacity: 0;
          transition: opacity 0.8s ease 0.35s;
        }
        .bbp-chain.vis { opacity: 1; }

        .bbp-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .bbp-step-pill {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 10px 22px;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          cursor: default;
          white-space: nowrap;
        }

        .bbp-step-pill:hover {
          background: rgba(37,99,235,0.2);
          border-color: rgba(37,99,235,0.5);
          transform: translateY(-3px);
        }

        .bbp-step-pill.last {
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          border-color: transparent;
          box-shadow: 0 8px 28px rgba(37,99,235,0.4);
        }

        .bbp-step-pill.last:hover {
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          transform: translateY(-3px);
        }

        .bbp-step-sub {
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .bbp-chain-arrow {
          color: rgba(255,255,255,0.2);
          font-size: 20px;
          padding: 0 8px;
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        /* ── TAGLINE ── */
        .bbp-tagline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
        }
        .bbp-tagline.vis { opacity: 1; transform: translateY(0); }

        .bbp-cta-intro {
          font-size: 16px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 48px;
          opacity: 0;
          transition: opacity 0.8s ease 0.62s;
        }
        .bbp-cta-intro.vis { opacity: 1; }

        /* ── BUTTONS ── */
        .bbp-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.72s, transform 0.8s ease 0.72s;
        }
        .bbp-buttons.vis { opacity: 1; transform: translateY(0); }

        .bbp-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: none;
          cursor: pointer;
          font-family: 'Kanit', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border-radius: 100px;
          padding: 14px 24px 14px 28px;
          transition: transform 0.25s ease, box-shadow 0.3s ease, background 0.3s ease;
          white-space: nowrap;
        }

        .bbp-btn-primary {
          background: rgba(255,255,255,0.08);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .bbp-btn-primary:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent;
          box-shadow: 0 14px 40px rgba(37,99,235,0.45);
        }

        .bbp-btn-secondary {
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .bbp-btn-secondary:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 14px 40px rgba(37,99,235,0.45);
        }

        .bbp-btn-arrow {
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .bbp-btn-primary .bbp-btn-arrow {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }
        .bbp-btn-secondary .bbp-btn-arrow {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
        }
        .bbp-btn:hover .bbp-btn-arrow { transform: translateX(3px); }

        /* ── BOTTOM TRUST BAR ── */
        .bbp-trust {
          margin-top: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
          opacity: 0;
          transition: opacity 0.8s ease 0.9s;
        }
        .bbp-trust.vis { opacity: 1; }

        .bbp-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
        }

        .bbp-trust-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #2563eb;
          opacity: 0.6;
        }
      `}</style>

      <section className="bbp-section" ref={sectionRef}>
        <div className={`bbp-orb bbp-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`bbp-orb bbp-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="bbp-inner">

          {/* eyebrow */}
          <span className={`bbp-eyebrow ${isVisible ? "vis" : ""}`}>
            <span className="bbp-eyebrow-line" />
            Start Your Journey
            <span className="bbp-eyebrow-line" />
          </span>

          {/* title */}
          <h2 className={`bbp-title ${isVisible ? "vis" : ""}`}>
            Let's Build Your<br />
            <span className="bbp-title-accent">Brand's Presence</span>
          </h2>

          {/* steps chain */}
          <div className={`bbp-chain ${isVisible ? "vis" : ""}`}>
            {steps.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
                <div className="bbp-step">
                  <div className={`bbp-step-pill ${i === steps.length - 1 ? "last" : ""}`}>
                    {step.label}
                  </div>
                  {step.sub && <span className="bbp-step-sub">{step.sub}</span>}
                </div>
                {i < steps.length - 1 && (
                  <span className="bbp-chain-arrow">→</span>
                )}
              </div>
            ))}
          </div>

          {/* tagline */}
          <p className={`bbp-tagline ${isVisible ? "vis" : ""}`}>
            Your brand deserves to be seen and remembered.
          </p>

          <p className={`bbp-cta-intro ${isVisible ? "vis" : ""}`}>
            Ready to start your Brand Awareness & Engagement journey?
          </p>

          {/* CTA buttons */}
          <div className={`bbp-buttons ${isVisible ? "vis" : ""}`}>
            {ctaButtons.map((btn, i) => (
              <button
                key={btn.text}
                className={`bbp-btn ${btn.primary ? "bbp-btn-primary" : "bbp-btn-secondary"}`}
              >
                {btn.text}
                <span className="bbp-btn-arrow">→</span>
              </button>
            ))}
          </div>

          {/* trust bar */}
          <div className={`bbp-trust ${isVisible ? "vis" : ""}`}>
            {["No commitment required", "Free initial consultation", "Strategy tailored to your brand"].map((t) => (
              <span className="bbp-trust-item" key={t}>
                <span className="bbp-trust-dot" />
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
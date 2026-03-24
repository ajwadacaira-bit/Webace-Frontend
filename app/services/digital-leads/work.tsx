"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Google Ads",
    text: "Captures high intent leads instantly.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    title: "Meta Ads",
    text: "Reaches audiences who are likely to respond to your offer.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    title: "SEO",
    text: "Builds organic traffic and steady inbound leads.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    title: "Lead Magnet Pages",
    text: "Convert traffic into real leads.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    title: "Affiliate Marketing",
    text: "Adds new lead sources without direct ad spending.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "Google My Business",
    text: "Brings local leads quickly and consistently.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
];

export default function HowLeadsWork() {
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

        .hlw-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .hlw-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .hlw-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .hlw-orb.vis { opacity: 1; }
        .hlw-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .hlw-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .hlw-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .hlw-header { text-align: center; margin-bottom: 80px; }

        .hlw-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .hlw-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .hlw-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .hlw-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .hlw-title.vis { opacity: 1; transform: translateY(0); }
        .hlw-title-accent { color: #2563eb; }

        .hlw-sub {
          font-size: 16px; color: #555; line-height: 1.8;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .hlw-sub.vis { opacity: 1; transform: translateY(0); }

        /* ── TWO COL ── */
        .hlw-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 820px) {
          .hlw-body { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ── LEFT ── */
        .hlw-left {
          position: sticky;
          top: 100px;
        }

        .hlw-left-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.38s, transform 0.8s ease 0.38s;
        }
        .hlw-left-label.vis { opacity: 1; transform: translateY(0); }

        .hlw-left-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 800; color: #111; line-height: 1.2;
          margin-bottom: 24px;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.85s ease 0.45s, transform 0.85s ease 0.45s;
        }
        .hlw-left-heading.vis { opacity: 1; transform: translateY(0); }

        .hlw-left-body {
          font-size: 15.5px; color: #555; line-height: 1.85;
          margin-bottom: 32px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.52s, transform 0.8s ease 0.52s;
        }
        .hlw-left-body.vis { opacity: 1; transform: translateY(0); }

        .hlw-left-conclusion {
          font-family: 'Syne', sans-serif;
          font-size: 18px; font-weight: 700; color: #111; line-height: 1.5;
          padding: 24px 28px;
          background: #fff;
          border: 1px solid rgba(37,99,235,0.15);
          border-left: 3px solid #2563eb;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(37,99,235,0.07);
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
        }
        .hlw-left-conclusion.vis { opacity: 1; transform: translateY(0); }

        /* ── PIPELINE ── */
        .hlw-pipeline {
          position: relative;
          padding-left: 56px;
        }

        /* vertical line */
        .hlw-pipeline::before {
          content: '';
          position: absolute;
          left: 19px; top: 24px; bottom: 24px;
          width: 2px;
          background: linear-gradient(180deg,
            rgba(37,99,235,0.15) 0%,
            rgba(37,99,235,0.4) 40%,
            rgba(37,99,235,0.15) 100%
          );
          border-radius: 2px;
        }

        @keyframes pipelinePulse {
          0%   { top: 0; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .hlw-pipeline-pulse {
          position: absolute;
          left: 19px; top: 24px;
          width: 2px; height: 60px;
          background: linear-gradient(180deg, transparent, #2563eb, transparent);
          border-radius: 2px;
          animation: pipelinePulse 2.8s ease-in-out infinite;
          pointer-events: none;
        }

        .hlw-steps { display: flex; flex-direction: column; gap: 20px; }

        /* ── STEP CARD ── */
        .hlw-step {
          position: relative;
          opacity: 0; transform: translateX(20px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .hlw-step.vis { opacity: 1; transform: translateX(0); }

        .hlw-step-dot {
          position: absolute;
          left: -46px; top: 20px;
          width: 14px; height: 14px; border-radius: 50%;
          background: #fff;
          border: 2px solid rgba(37,99,235,0.3);
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
          z-index: 1;
        }

        .hlw-step:hover .hlw-step-dot {
          background: #2563eb;
          border-color: #2563eb;
          transform: scale(1.3);
          box-shadow: 0 0 0 4px rgba(37,99,235,0.15);
        }

        .hlw-step-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 18px;
          padding: 22px 24px;
          display: flex; align-items: center; gap: 18px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          cursor: default;
          position: relative; overflow: hidden;
        }

        .hlw-step-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
          border-radius: 18px 18px 0 0;
        }

        .hlw-step:hover .hlw-step-card {
          box-shadow: 0 12px 40px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.2);
          transform: translateX(4px);
        }
        .hlw-step:hover .hlw-step-card::before { transform: scaleX(1); }

        .hlw-step-num {
          font-family: 'Syne', sans-serif;
          font-size: 11px; font-weight: 700;
          color: #2563eb; letter-spacing: 0.08em;
          flex-shrink: 0; min-width: 24px;
        }

        .hlw-step-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s ease;
        }
        .hlw-step:hover .hlw-step-icon { transform: scale(1.08); }
        .hlw-step-icon svg { width: 18px; height: 18px; color: #2563eb; }

        .hlw-step-content { flex: 1; }

        .hlw-step-title {
          font-family: 'Syne', sans-serif;
          font-size: 15px; font-weight: 700; color: #111;
          margin-bottom: 3px;
        }

        .hlw-step-text {
          font-size: 13.5px; color: #666; line-height: 1.55;
        }
      `}</style>

      <section className="hlw-section" ref={sectionRef}>
        <div className={`hlw-orb hlw-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`hlw-orb hlw-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="hlw-inner">

          {/* ── HEADER ── */}
          <div className="hlw-header">
            <span className={`hlw-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="hlw-eyebrow-line" />
              The Full Picture
              <span className="hlw-eyebrow-line" />
            </span>

            <h2 className={`hlw-title ${isVisible ? "vis" : ""}`}>
              How <span className="hlw-title-accent">Digital Leads</span><br />Work Together
            </h2>

            <p className={`hlw-sub ${isVisible ? "vis" : ""}`}>
              Each service contributes to a different part of the funnel.
            </p>
          </div>

          {/* ── BODY ── */}
          <div className="hlw-body">

            {/* LEFT */}
            <div className="hlw-left">
              <p className={`hlw-left-label ${isVisible ? "vis" : ""}`}>Why it matters</p>

              <h3 className={`hlw-left-heading ${isVisible ? "vis" : ""}`}>
                Every service plays a unique role in your growth
              </h3>

              <p className={`hlw-left-body ${isVisible ? "vis" : ""}`}>
                Each service plays a unique role in your digital growth journey.
                Some capture high intent traffic instantly, others build long-term
                visibility, while others convert and optimize performance.
              </p>

              <div className={`hlw-left-conclusion ${isVisible ? "vis" : ""}`}>
                Together, they create a strong pipeline that grows month after month.
              </div>
            </div>

            {/* RIGHT — PIPELINE */}
            <div className="hlw-pipeline">
              <div className="hlw-pipeline-pulse" />

              <div className="hlw-steps">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`hlw-step ${isVisible ? "vis" : ""}`}
                    style={{ transitionDelay: isVisible ? `${0.4 + i * 0.1}s` : "0s" }}
                  >
                    <div className="hlw-step-dot" />
                    <div className="hlw-step-card">
                      <span className="hlw-step-num">0{i + 1}</span>
                      <div className="hlw-step-icon">{step.icon}</div>
                      <div className="hlw-step-content">
                        <p className="hlw-step-title">{step.title}</p>
                        <p className="hlw-step-text">{step.text}</p>
                      </div>
                    </div>
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
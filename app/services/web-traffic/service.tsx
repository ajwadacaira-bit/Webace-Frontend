"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    name: "SEO Service",
    desc: "Rank higher organically and drive consistent long-term traffic to your site.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    name: "SEM Ads",
    desc: "Capture high-intent search traffic instantly through paid search campaigns.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    name: "Meta Ads",
    desc: "Reach targeted audiences on Facebook and Instagram to drive quality visits.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    name: "Publishers & Networks",
    desc: "Expand reach through premium publisher placements and display networks.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    name: "Cross Channel Promotions",
    desc: "Coordinate campaigns across multiple channels for amplified traffic impact.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>,
  },
  {
    name: "Affiliate Marketing",
    desc: "Leverage partner networks to generate traffic without increasing ad spend.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
];

export default function ServicesUnderTraffic() {
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

        .sut-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .sut-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 20%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .sut-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .sut-orb.vis { opacity: 1; }
        .sut-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .sut-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .sut-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .sut-header { text-align: center; margin-bottom: 72px; }

        .sut-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .sut-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .sut-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .sut-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 22px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .sut-title.vis { opacity: 1; transform: translateY(0); }
        .sut-title-accent { color: #2563eb; }

        .sut-sub {
          font-size: 16px; color: #555; line-height: 1.85;
          max-width: 580px; margin: 0 auto 8px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .sut-sub.vis { opacity: 1; transform: translateY(0); }

        /* ── GRID ── */
        .sut-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }
        @media (max-width: 900px) { .sut-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .sut-grid { grid-template-columns: 1fr; } }

        /* ── CARD ── */
        .sut-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 22px;
          padding: 36px 30px 32px;
          position: relative; overflow: hidden;
          cursor: default;
          opacity: 0; transform: translateY(32px);
          transition:
            opacity 0.7s ease, transform 0.7s ease,
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .sut-card.vis { opacity: 1; transform: translateY(0); }

        .sut-card:hover {
          box-shadow: 0 20px 56px rgba(37,99,235,0.1);
          border-color: rgba(37,99,235,0.22);
          transform: translateY(-5px) !important;
        }

        /* top bar */
        .sut-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s ease;
          border-radius: 22px 22px 0 0;
        }
        .sut-card:hover::before { transform: scaleX(1); }

        /* corner glow */
        .sut-card-glow {
          position: absolute; top: -50px; right: -50px;
          width: 160px; height: 160px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%);
          opacity: 0; transition: opacity 0.4s ease; pointer-events: none;
        }
        .sut-card:hover .sut-card-glow { opacity: 1; }

        /* watermark num */
        .sut-card-num {
          position: absolute; bottom: 18px; right: 24px;
          font-family: 'Syne', sans-serif;
          font-size: 52px; font-weight: 800;
          color: rgba(0,0,0,0.04); line-height: 1;
          user-select: none; pointer-events: none;
        }

        .sut-icon-wrap {
          width: 50px; height: 50px; border-radius: 15px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .sut-card:hover .sut-icon-wrap {
          transform: scale(1.08);
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        }
        .sut-icon-wrap svg { width: 22px; height: 22px; color: #2563eb; }

        .sut-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; color: #111;
          margin-bottom: 10px; line-height: 1.3;
          transition: color 0.3s ease;
        }
        .sut-card:hover .sut-card-title { color: #2563eb; }

        .sut-card-desc {
          font-size: 13.5px; color: #666; line-height: 1.7;
        }

        /* ── FOOTER ── */
        .sut-footer {
          background: #111;
          border-radius: 20px;
          padding: 40px 52px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.85s ease 0.9s, transform 0.85s ease 0.9s;
        }
        .sut-footer.vis { opacity: 1; transform: translateY(0); }

        .sut-footer::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 240px; height: 240px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.16), transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .sut-footer { flex-direction: column; text-align: center; padding: 36px 28px; }
        }

        .sut-footer-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(16px, 2vw, 20px); font-weight: 700;
          color: #fff; line-height: 1.5;
          position: relative;
        }
        .sut-footer-text span { color: #60a5fa; }

        .sut-footer-arrow {
          flex-shrink: 0;
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6); font-size: 20px;
          transition: background 0.3s ease, transform 0.3s ease;
          position: relative;
        }
        .sut-footer:hover .sut-footer-arrow {
          background: #2563eb;
          transform: translateX(4px);
          color: #fff;
        }
      `}</style>

      <section className="sut-section" ref={sectionRef}>
        <div className={`sut-orb sut-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`sut-orb sut-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="sut-inner">

          {/* ── HEADER ── */}
          <div className="sut-header">
            <span className={`sut-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="sut-eyebrow-line" />
              Traffic Services
              <span className="sut-eyebrow-line" />
            </span>

            <h2 className={`sut-title ${isVisible ? "vis" : ""}`}>
              Services Under{" "}
              <span className="sut-title-accent">Web Traffic</span>
            </h2>

            <p className={`sut-sub ${isVisible ? "vis" : ""}`}>
              This category includes six core services that drive relevant traffic
              to your website from multiple channels.
            </p>
            <p className={`sut-sub ${isVisible ? "vis" : ""}`} style={{ transitionDelay: "0.36s" }}>
              Each service plays a unique role in your acquisition strategy.
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="sut-grid">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`sut-card ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.4 + i * 0.1}s` : "0s" }}
              >
                <div className="sut-card-glow" />
                <span className="sut-card-num">0{i + 1}</span>
                <div className="sut-icon-wrap">{svc.icon}</div>
                <h3 className="sut-card-title">{svc.name}</h3>
                <p className="sut-card-desc">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* ── FOOTER ── */}
          <div className={`sut-footer ${isVisible ? "vis" : ""}`}>
            <p className="sut-footer-text">
              Let's break down what <span>each one does</span> and how it
              contributes to <span>traffic growth</span>.
            </p>
            {/* <div className="sut-footer-arrow">→</div> */}
          </div>

        </div>
      </section>
    </>
  );
}
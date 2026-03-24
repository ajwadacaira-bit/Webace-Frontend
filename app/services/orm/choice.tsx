"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  { label: "Higher ratings", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Stronger brand credibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Reduced negativity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> },
  { label: "Increased trust", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Better public perception", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Safer Google results", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { label: "Strong personal branding", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg> },
  { label: "A complete reputation protection system", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
];

export default function WhenOrmRightChoice() {
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

        .wor-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .wor-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 20%, rgba(37,99,235,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        @keyframes floatOrb {
          0%,100%{transform:translateY(0) scale(1);}
          50%{transform:translateY(-20px) scale(1.05);}
        }
        .wor-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .wor-orb.vis{opacity:1;}
        .wor-orb-1{
          width:400px;height:400px;top:-120px;right:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 11s ease-in-out infinite;
        }
        .wor-orb-2{
          width:260px;height:260px;bottom:80px;left:-70px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 15s ease-in-out infinite reverse;
        }

        .wor-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .wor-header{text-align:center;margin-bottom:72px;}

        .wor-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wor-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wor-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .wor-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:20px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .wor-title.vis{opacity:1;transform:translateY(0);}
        .wor-title-accent{color:#2563eb;}

        .wor-sub{
          font-size:16px;color:#555;line-height:1.8;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.3s,transform 0.8s ease 0.3s;
        }
        .wor-sub.vis{opacity:1;transform:translateY(0);}

        /* GRID */
        .wor-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:16px;
          margin-bottom:64px;
        }
        @media(max-width:1000px){.wor-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){
          .wor-grid{grid-template-columns:1fr;}
          .wor-card-wide{grid-column:span 1!important;}
        }
        .wor-card-wide{grid-column:span 4;}
        @media(max-width:1000px){.wor-card-wide{grid-column:span 2;}}

        /* CARD */
        .wor-card{
          background:#fff;
          border:1px solid rgba(0,0,0,0.06);
          border-radius:22px;padding:34px 26px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(32px);
          transition:
            opacity 0.7s ease,transform 0.7s ease,
            box-shadow 0.35s ease,border-color 0.35s ease,
            background 0.35s ease;
        }
        .wor-card.vis{opacity:1;transform:translateY(0);}
        .wor-card:hover{
          background:#0f0f0f;
          border-color:#0f0f0f;
          box-shadow:0 24px 64px rgba(0,0,0,0.2);
          transform:translateY(-5px)!important;
        }
        .wor-card::before{
          content:'';
          position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.45s ease;
          border-radius:22px 22px 0 0;
        }
        .wor-card:hover::before{transform:scaleX(1);}

        .wor-card-glow{
          position:absolute;top:-50px;right:-50px;
          width:160px;height:160px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .wor-card:hover .wor-card-glow{opacity:1;}

        .wor-card-num{
          position:absolute;bottom:16px;right:22px;
          font-family:'Syne',sans-serif;
          font-size:48px;font-weight:800;
          color:rgba(0,0,0,0.04);line-height:1;
          user-select:none;pointer-events:none;
          transition:color 0.35s ease;
        }
        .wor-card:hover .wor-card-num{color:rgba(255,255,255,0.04);}

        .wor-icon-wrap{
          width:48px;height:48px;border-radius:14px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:18px;
          transition:transform 0.3s ease,background 0.35s ease;
        }
        .wor-card:hover .wor-icon-wrap{
          background:rgba(255,255,255,0.1);
          transform:scale(1.08);
        }
        .wor-icon-wrap svg{width:21px;height:21px;color:#2563eb;transition:color 0.35s ease;}
        .wor-card:hover .wor-icon-wrap svg{color:#60a5fa;}

        .wor-card-label{
          font-family:'Syne',sans-serif;
          font-size:15px;font-weight:800;color:#111;
          line-height:1.35;transition:color 0.35s ease;
        }
        .wor-card:hover .wor-card-label{color:#fff;}

        /* CLOSING */
        .wor-closing{
          background:#111;border-radius:24px;
          padding:48px 56px;
          display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .wor-closing.vis{opacity:1;transform:translateY(0);}
        .wor-closing::before{
          content:'';position:absolute;top:-60px;right:-60px;
          width:280px;height:280px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.16),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:640px){
          .wor-closing{flex-direction:column;text-align:center;padding:40px 28px;}
        }
        .wor-closing-left{position:relative;}
        .wor-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;
        }
        .wor-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;
        }
        .wor-cta-btn{
          flex-shrink:0;
          display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);
          color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;
          border-radius:100px;padding:15px 26px 15px 30px;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
          white-space:nowrap;
        }
        .wor-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .wor-cta-arrow{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .wor-cta-btn:hover .wor-cta-arrow{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="wor-section" ref={sectionRef}>
        <div className={`wor-orb wor-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wor-orb wor-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wor-inner">

          {/* HEADER */}
          <div className="wor-header">
            <span className={`wor-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wor-eyebrow-line" />
              Is This Right For You?
              <span className="wor-eyebrow-line" />
            </span>
            <h2 className={`wor-title ${isVisible ? "vis" : ""}`}>
              When ORM Is the{" "}
              <span className="wor-title-accent">Right Choice</span>
            </h2>
            <p className={`wor-sub ${isVisible ? "vis" : ""}`}>
              Choose this service if you want:
            </p>
          </div>

          {/* GRID */}
          <div className="wor-grid">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={`wor-card ${i === benefits.length - 1 ? "wor-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.08}s` : "0s" }}
              >
                <div className="wor-card-glow" />
                <span className="wor-card-num">0{i + 1}</span>
                <div className="wor-icon-wrap">{item.icon}</div>
                <p className="wor-card-label">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div
            className={`wor-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.05s" : "0s" }}
          >
            <div className="wor-closing-left">
              <p className="wor-closing-label">Ready to begin?</p>
              <p className="wor-closing-text">Unsure about your reputation health?</p>
            </div>
            <button className="wor-cta-btn">
              Get a Free Reputation Assessment
              <span className="wor-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
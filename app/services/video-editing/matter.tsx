"use client";

import { useEffect, useRef, useState } from "react";

const mustItems = [
  { label: "Capture interest instantly", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { label: "Deliver the message with clarity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { label: "Keep viewers engaged", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Align with your brand personality", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Maintain high production value", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { label: "Influence viewers to take action", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 12 12 5 19 12"/><polyline points="5 19 12 12 19 19"/></svg> },
];

const helpItems = [
  { label: "Improve ad performance", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Build brand trust", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Increase social engagement", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Communicate complex ideas simply", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
  { label: "Strengthen brand recall", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> },
  { label: "Enhance storytelling", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { label: "Boost conversions on digital platforms", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
];

export default function WhyVideoMatters() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .wvm-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .wvm-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(37,99,235,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        @keyframes floatOrb {
          0%,100%{transform:translateY(0) scale(1);}
          50%{transform:translateY(-20px) scale(1.05);}
        }
        .wvm-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .wvm-orb.vis{opacity:1;}
        .wvm-orb-1{
          width:420px;height:420px;top:-140px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .wvm-orb-2{
          width:260px;height:260px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .wvm-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .wvm-header{
          display:grid;grid-template-columns:1fr 1fr;
          gap:56px;align-items:end;
          margin-bottom:72px;padding-bottom:48px;
          border-bottom:1px solid rgba(0,0,0,0.07);
        }
        @media(max-width:720px){.wvm-header{grid-template-columns:1fr;gap:24px;}}

        .wvm-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:18px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wvm-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wvm-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#2563eb;flex-shrink:0;}

        .wvm-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.05;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .wvm-title.vis{opacity:1;transform:translateY(0);}
        .wvm-title-accent{color:#2563eb;}

        .wvm-header-right{
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .wvm-header-right.vis{opacity:1;transform:translateY(0);}
        .wvm-header-sub{font-size:15px;color:#555;line-height:1.8;margin-bottom:14px;}

        /* statement pills */
        .wvm-stmts{display:flex;flex-direction:column;gap:10px;}
        .wvm-stmt{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:700;color:#111;
          padding:14px 18px;border-radius:12px;
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          cursor:default;
          transition:background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .wvm-stmt:hover{
          background:rgba(37,99,235,0.05);
          border-color:rgba(37,99,235,0.2);
          color:#2563eb;
        }

        /* BLOCK LABELS */
        .wvm-block{margin-bottom:56px;}
        .wvm-block-header{
          display:flex;align-items:center;gap:16px;
          margin-bottom:28px;
          opacity:0;transform:translateY(12px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wvm-block-header.vis{opacity:1;transform:translateY(0);}
        .wvm-block-tag{
          font-size:11px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;padding:6px 14px;border-radius:100px;
        }
        .wvm-block-tag-dark{
          background:#111;color:#fff;
        }
        .wvm-block-tag-blue{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          color:#fff;
        }
        .wvm-block-line{flex:1;height:1px;background:rgba(0,0,0,0.07);}

        /* GRID */
        .wvm-grid{
          display:grid;grid-template-columns:repeat(3,1fr);gap:16px;
        }
        @media(max-width:860px){.wvm-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){.wvm-grid{grid-template-columns:1fr;}}

        /* CARD base */
        .wvm-card{
          border-radius:20px;padding:28px 24px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.65s ease,transform 0.65s ease,
            box-shadow 0.3s ease,border-color 0.3s ease;
        }
        .wvm-card.vis{opacity:1;transform:translateY(0);}

        /* DARK card (your video must) */
        .wvm-card-dark{
          background:#111;border:1px solid rgba(255,255,255,0.05);
        }
        .wvm-card-dark:hover{
          box-shadow:0 18px 48px rgba(0,0,0,0.25);
          border-color:rgba(37,99,235,0.3);
          transform:translateY(-4px)!important;
        }
        .wvm-card-dark::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:20px 20px 0 0;
        }

        /* LIGHT card (helps) */
        .wvm-card-light{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
        }
        .wvm-card-light:hover{
          box-shadow:0 18px 48px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.22);
          transform:translateY(-4px)!important;
        }
        .wvm-card-light::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.4s ease;border-radius:20px 20px 0 0;
        }
        .wvm-card-light:hover::before{transform:scaleX(1);}

        /* glow for light */
        .wvm-glow{
          position:absolute;top:-50px;right:-50px;
          width:150px;height:150px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.07),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .wvm-card-light:hover .wvm-glow{opacity:1;}

        /* watermark */
        .wvm-wm{
          position:absolute;bottom:12px;right:18px;
          font-family:'Syne',sans-serif;font-size:52px;font-weight:800;
          line-height:1;user-select:none;pointer-events:none;
        }
        .wvm-card-dark .wvm-wm{color:rgba(255,255,255,0.03);}
        .wvm-card-light .wvm-wm{color:rgba(0,0,0,0.03);}

        /* icon */
        .wvm-icon{
          width:44px;height:44px;border-radius:13px;
          display:flex;align-items:center;justify-content:center;
          margin-bottom:18px;transition:transform 0.3s ease;
        }
        .wvm-card:hover .wvm-icon{transform:scale(1.08);}
        .wvm-card-dark .wvm-icon{background:rgba(37,99,235,0.2);}
        .wvm-card-light .wvm-icon{background:linear-gradient(135deg,#eff6ff,#dbeafe);}
        .wvm-icon svg{width:20px;height:20px;}
        .wvm-card-dark .wvm-icon svg{color:#60a5fa;}
        .wvm-card-light .wvm-icon svg{color:#2563eb;}

        /* title */
        .wvm-card-title{
          font-family:'Syne',sans-serif;
          font-size:15px;font-weight:800;line-height:1.35;
          transition:color 0.3s ease;
        }
        .wvm-card-dark .wvm-card-title{color:#fff;}
        .wvm-card-light .wvm-card-title{color:#111;}
        .wvm-card-light:hover .wvm-card-title{color:#2563eb;}

        /* CLOSING */
        .wvm-closing{
          background:#111;border-radius:24px;
          padding:48px 56px;
          display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .wvm-closing.vis{opacity:1;transform:translateY(0);}
        .wvm-closing::before{
          content:'';position:absolute;top:-80px;right:-60px;
          width:300px;height:300px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:600px){.wvm-closing{flex-direction:column;text-align:center;padding:40px 28px;}}
        .wvm-closing-left{position:relative;}
        .wvm-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;
        }
        .wvm-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;
        }
        .wvm-cta-btn{
          flex-shrink:0;display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:15px 26px 15px 30px;white-space:nowrap;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .wvm-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .wvm-arr{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .wvm-cta-btn:hover .wvm-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="wvm-section" ref={sectionRef}>
        <div className={`wvm-orb wvm-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wvm-orb wvm-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wvm-inner">

          {/* HEADER */}
          <div className="wvm-header">
            <div>
              <div className={`wvm-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="wvm-eyebrow-dot" />
                The Foundation
              </div>
              <h2 className={`wvm-title ${isVisible ? "vis" : ""}`}>
                Why <span className="wvm-title-accent">Professional</span><br />
                Video Editing Matters
              </h2>
            </div>
            <div className={`wvm-header-right ${isVisible ? "vis" : ""}`}>
              <p className="wvm-header-sub">
                Your audience scrolls quickly and attention spans are short.
              </p>
              <div className="wvm-stmts">
                <div className="wvm-stmt">Even great footage can feel flat without professional editing.</div>
                <div className="wvm-stmt">Even simple footage can feel premium when edited well.</div>
              </div>
            </div>
          </div>

          {/* MUST BLOCK — dark cards */}
          <div className="wvm-block">
            <div
              className={`wvm-block-header ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.35s" : "0s" }}
            >
              <span className="wvm-block-tag wvm-block-tag-dark">Your video must:</span>
              <div className="wvm-block-line" />
            </div>
            <div className="wvm-grid">
              {mustItems.map((item, i) => (
                <div
                  key={i}
                  className={`wvm-card wvm-card-dark ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.42 + i * 0.07}s` : "0s" }}
                >
                  <span className="wvm-wm">0{i + 1}</span>
                  <div className="wvm-icon">{item.icon}</div>
                  <p className="wvm-card-title">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HELPS BLOCK — light cards */}
          <div className="wvm-block">
            <div
              className={`wvm-block-header ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.86s" : "0s" }}
            >
              <span className="wvm-block-tag wvm-block-tag-blue">Strong editing also helps:</span>
              <div className="wvm-block-line" />
            </div>
            <div className="wvm-grid">
              {helpItems.map((item, i) => (
                <div
                  key={i}
                  className={`wvm-card wvm-card-light ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.92 + i * 0.07}s` : "0s" }}
                >
                  <div className="wvm-glow" />
                  <span className="wvm-wm">0{i + 1}</span>
                  <div className="wvm-icon">{item.icon}</div>
                  <p className="wvm-card-title">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CLOSING */}
          <div
            className={`wvm-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.4s" : "0s" }}
          >
            <div className="wvm-closing-left">
              <p className="wvm-closing-label">Take the next step</p>
              <p className="wvm-closing-text">Want video that actually performs?</p>
            </div>
            <button className="wvm-cta-btn">
              Request a Free Video Audit
              <span className="wvm-arr">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
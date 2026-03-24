"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  { label: "Not sure which channels to focus on", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { label: "Low conversions despite good traffic", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg> },
  { label: "Weak brand visibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg> },
  { label: "Poor social media performance", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Unclear digital strategy", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> },
  { label: "Ineffective SEO efforts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Misaligned communication", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/></svg> },
  { label: "No proper customer funnel", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Budget wastage on wrong activities", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
  { label: "Difficulty scaling or generating revenue", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
];

const clarity = [
  { label: "What to do", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
  { label: "Why to do it", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { label: "How to do it", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41"/><path d="M4.93 4.93l1.41 1.41"/><path d="M19.07 19.07l-1.41-1.41"/><path d="M4.93 19.07l1.41-1.41"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg> },
  { label: "When to do it", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
];

export default function WhyDigitalConsultation() {
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

        .wdc-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .wdc-section::before {
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
        .wdc-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .wdc-orb.vis{opacity:1;}
        .wdc-orb-1{
          width:420px;height:420px;top:-140px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .wdc-orb-2{
          width:260px;height:260px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .wdc-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .wdc-header{
          display:grid;grid-template-columns:1fr 1fr;
          gap:56px;align-items:end;
          margin-bottom:72px;padding-bottom:48px;
          border-bottom:1px solid rgba(0,0,0,0.07);
        }
        @media(max-width:720px){.wdc-header{grid-template-columns:1fr;gap:24px;}}

        .wdc-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:18px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wdc-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wdc-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#2563eb;flex-shrink:0;}

        .wdc-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.05;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .wdc-title.vis{opacity:1;transform:translateY(0);}
        .wdc-title-accent{color:#2563eb;}

        .wdc-header-right{
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .wdc-header-right.vis{opacity:1;transform:translateY(0);}
        .wdc-header-sub{font-size:15px;color:#555;line-height:1.8;margin-bottom:14px;}
        .wdc-header-note{
          font-size:13.5px;color:#888;line-height:1.7;
          padding:16px 20px;background:#fff;border-radius:12px;
          border-left:3px solid rgba(37,99,235,0.2);
        }

        /* PROBLEMS BLOCK */
        .wdc-block{margin-bottom:72px;}

        .wdc-block-header{
          display:flex;align-items:center;gap:16px;
          margin-bottom:28px;
          opacity:0;transform:translateY(12px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wdc-block-header.vis{opacity:1;transform:translateY(0);}

        .wdc-block-tag{
          font-size:11px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;padding:6px 14px;border-radius:100px;
          white-space:nowrap;
        }
        .wdc-block-tag-red{background:#111;color:#fff;}
        .wdc-block-tag-blue{background:linear-gradient(135deg,#2563eb,#3b82f6);color:#fff;}
        .wdc-block-line{flex:1;height:1px;background:rgba(0,0,0,0.07);}

        /* PROBLEM GRID */
        .wdc-prob-grid{
          display:grid;grid-template-columns:repeat(3,1fr);gap:12px;
        }
        @media(max-width:860px){.wdc-prob-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){.wdc-prob-grid{grid-template-columns:1fr;}}

        .wdc-prob-card{
          background:#fff;border:1px solid rgba(239,68,68,0.08);
          border-radius:16px;padding:18px 16px;
          display:flex;align-items:center;gap:12px;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.65s ease,transform 0.65s ease,
            background 0.25s ease,border-color 0.25s ease;
          cursor:default;
        }
        .wdc-prob-card.vis{opacity:1;transform:translateY(0);}
        .wdc-prob-card:hover{
          background:#fff8f8;
          border-color:rgba(239,68,68,0.22);
          transform:translateX(3px)!important;
        }
        .wdc-prob-icon{
          width:34px;height:34px;flex-shrink:0;border-radius:10px;
          background:rgba(239,68,68,0.08);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease;
        }
        .wdc-prob-card:hover .wdc-prob-icon{transform:scale(1.08);}
        .wdc-prob-icon svg{width:15px;height:15px;color:#ef4444;}
        .wdc-prob-text{font-size:13px;color:#555;line-height:1.3;}

        /* EXPLANATION */
        .wdc-explanation{
          margin-bottom:56px;
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-left:3px solid #2563eb;
          border-radius:16px;padding:28px 32px;
          font-size:15.5px;color:#444;line-height:1.8;
          opacity:0;transform:translateY(16px);
          transition:opacity 0.8s ease,transform 0.8s ease;
        }
        .wdc-explanation.vis{opacity:1;transform:translateY(0);}
        .wdc-explanation strong{font-family:'Syne',sans-serif;font-weight:800;color:#111;}

        /* CLARITY GRID */
        .wdc-clarity-grid{
          display:grid;grid-template-columns:repeat(4,1fr);gap:14px;
          margin-bottom:56px;
        }
        @media(max-width:760px){.wdc-clarity-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:440px){.wdc-clarity-grid{grid-template-columns:1fr;}}

        .wdc-clarity-card{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:18px;padding:28px 20px;text-align:center;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.65s ease,transform 0.65s ease,
            box-shadow 0.3s ease,border-color 0.3s ease;
        }
        .wdc-clarity-card.vis{opacity:1;transform:translateY(0);}
        .wdc-clarity-card:hover{
          box-shadow:0 16px 44px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.22);
          transform:translateY(-4px)!important;
        }
        .wdc-clarity-card::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.4s ease;border-radius:18px 18px 0 0;
        }
        .wdc-clarity-card:hover::before{transform:scaleX(1);}

        .wdc-clarity-icon{
          width:52px;height:52px;border-radius:15px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          margin:0 auto 14px;
          transition:transform 0.3s ease,background 0.3s ease;
        }
        .wdc-clarity-card:hover .wdc-clarity-icon{
          transform:scale(1.08);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .wdc-clarity-icon svg{width:22px;height:22px;color:#2563eb;}

        .wdc-clarity-num{
          font-family:'Syne',sans-serif;
          font-size:28px;font-weight:800;color:#2563eb;
          line-height:1;margin-bottom:8px;
        }
        .wdc-clarity-label{
          font-family:'Syne',sans-serif;
          font-size:15px;font-weight:700;color:#111;
          transition:color 0.3s ease;
        }
        .wdc-clarity-card:hover .wdc-clarity-label{color:#2563eb;}

        /* CLOSING */
        .wdc-closing{
          background:#111;border-radius:24px;
          padding:48px 56px;
          display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .wdc-closing.vis{opacity:1;transform:translateY(0);}
        .wdc-closing::before{
          content:'';position:absolute;top:-80px;right:-60px;
          width:300px;height:300px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:640px){.wdc-closing{flex-direction:column;text-align:center;padding:40px 28px;}}
        .wdc-closing-left{position:relative;}
        .wdc-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;
        }
        .wdc-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;
        }
        .wdc-closing-text span{color:#60a5fa;}
        .wdc-cta-btn{
          flex-shrink:0;display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:15px 26px 15px 30px;white-space:nowrap;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .wdc-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .wdc-arr{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .wdc-cta-btn:hover .wdc-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="wdc-section" ref={sectionRef}>
        <div className={`wdc-orb wdc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wdc-orb wdc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wdc-inner">

          {/* HEADER */}
          <div className="wdc-header">
            <div>
              <div className={`wdc-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="wdc-eyebrow-dot" />
                The Foundation
              </div>
              <h2 className={`wdc-title ${isVisible ? "vis" : ""}`}>
                Why <span className="wdc-title-accent">Digital Consultation</span><br />Is Important
              </h2>
            </div>
            <div className={`wdc-header-right ${isVisible ? "vis" : ""}`}>
              <p className="wdc-header-sub">Many businesses waste time and budget because they lack a clear digital direction.</p>
              <p className="wdc-header-note">Digital Consultation replaces confusion with direction — giving you clarity on what to do, why to do it, how to do it and when to do it.</p>
            </div>
          </div>

          {/* PROBLEMS */}
          <div className="wdc-block">
            <div
              className={`wdc-block-header ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.35s" : "0s" }}
            >
              <span className="wdc-block-tag wdc-block-tag-red">Many businesses face:</span>
              <div className="wdc-block-line" />
            </div>
            <div className="wdc-prob-grid">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className={`wdc-prob-card ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${0.42 + i * 0.06}s` : "0s" }}
                >
                  <div className="wdc-prob-icon">{p.icon}</div>
                  <span className="wdc-prob-text">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EXPLANATION */}
          <div
            className={`wdc-explanation ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.05s" : "0s" }}
          >
            Digital Consultation helps you identify the root cause and create a <strong>solution-driven digital plan</strong> that removes confusion and replaces it with direction and confidence. <strong>Your growth becomes structured and achievable.</strong>
          </div>

          {/* CLARITY */}
          <div className="wdc-block">
            <div
              className={`wdc-block-header ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "1.12s" : "0s" }}
            >
              <span className="wdc-block-tag wdc-block-tag-blue">You get clarity on:</span>
              <div className="wdc-block-line" />
            </div>
            <div className="wdc-clarity-grid">
              {clarity.map((item, i) => (
                <div
                  key={i}
                  className={`wdc-clarity-card ${isVisible ? "vis" : ""}`}
                  style={{ transitionDelay: isVisible ? `${1.18 + i * 0.1}s` : "0s" }}
                >
                  <div className="wdc-clarity-icon">{item.icon}</div>
                  <p className="wdc-clarity-num">0{i + 1}</p>
                  <p className="wdc-clarity-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CLOSING */}
          <div
            className={`wdc-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.58s" : "0s" }}
          >
            <div className="wdc-closing-left">
              <p className="wdc-closing-label">Take control</p>
              <p className="wdc-closing-text">
                Ready for a <span>clear digital direction?</span>
              </p>
            </div>
            <button className="wdc-cta-btn">
              Request a Free Digital Review
              <span className="wdc-arr">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
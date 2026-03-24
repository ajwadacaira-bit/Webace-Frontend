"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  { label: "You feel stuck in your digital growth", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> },
  { label: "You are not sure which channels to focus on", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { label: "You want to scale but need direction", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "You want to reduce wasted effort and cost", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: "You want a clear and actionable digital plan", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
  { label: "You want to understand why your digital activities are not working", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { label: "You want a partner who guides you with clarity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

export default function ConsultationRightChoice() {
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

        .crc-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 72px 24px 80px;
        }
        .crc-section::before {
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
        .crc-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .crc-orb.vis{opacity:1;}
        .crc-orb-1{
          width:400px;height:400px;top:-120px;right:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 11s ease-in-out infinite;
        }
        .crc-orb-2{
          width:240px;height:240px;bottom:60px;left:-70px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 15s ease-in-out infinite reverse;
        }

        .crc-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .crc-header{text-align:center;margin-bottom:48px;}

        .crc-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:18px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .crc-eyebrow.vis{opacity:1;transform:translateY(0);}
        .crc-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .crc-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(30px,4.5vw,52px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:14px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .crc-title.vis{opacity:1;transform:translateY(0);}
        .crc-title-accent{color:#2563eb;}

        .crc-sub{
          font-size:15px;color:#666;line-height:1.75;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .crc-sub.vis{opacity:1;transform:translateY(0);}

        /* GRID */
        .crc-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:14px;
          margin-bottom:48px;
        }
        @media(max-width:860px){.crc-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){
          .crc-grid{grid-template-columns:1fr;}
          .crc-card-wide{grid-column:span 1!important;}
        }
        .crc-card-wide{grid-column:span 3;}
        @media(max-width:860px){.crc-card-wide{grid-column:span 2;}}

        /* CARD */
        .crc-card{
          background:#fff;
          border:1px solid rgba(0,0,0,0.06);
          border-radius:20px;padding:30px 24px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(28px);
          transition:
            opacity 0.7s ease,transform 0.7s ease,
            background 0.35s ease,border-color 0.35s ease,
            box-shadow 0.35s ease;
        }
        .crc-card.vis{opacity:1;transform:translateY(0);}
        .crc-card:hover{
          background:#0f0f0f;
          border-color:#0f0f0f;
          box-shadow:0 20px 56px rgba(0,0,0,0.2);
          transform:translateY(-5px)!important;
        }
        .crc-card::before{
          content:'';
          position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.45s ease;border-radius:20px 20px 0 0;
        }
        .crc-card:hover::before{transform:scaleX(1);}

        .crc-glow{
          position:absolute;top:-50px;right:-50px;
          width:150px;height:150px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .crc-card:hover .crc-glow{opacity:1;}

        .crc-wm{
          position:absolute;bottom:12px;right:16px;
          font-family:'Syne',sans-serif;font-size:44px;font-weight:800;
          color:rgba(0,0,0,0.04);line-height:1;
          user-select:none;pointer-events:none;
          transition:color 0.35s ease;
        }
        .crc-card:hover .crc-wm{color:rgba(255,255,255,0.04);}

        .crc-icon{
          width:44px;height:44px;border-radius:13px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:16px;
          transition:transform 0.3s ease,background 0.35s ease;
        }
        .crc-card:hover .crc-icon{
          background:rgba(255,255,255,0.1);
          transform:scale(1.08);
        }
        .crc-icon svg{width:20px;height:20px;color:#2563eb;transition:color 0.35s ease;}
        .crc-card:hover .crc-icon svg{color:#60a5fa;}

        .crc-label{
          font-family:'Syne',sans-serif;
          font-size:15px;font-weight:800;color:#111;
          line-height:1.35;transition:color 0.35s ease;
        }
        .crc-card:hover .crc-label{color:#fff;}

        /* CLOSING */
        .crc-closing{
          background:#111;border-radius:22px;
          padding:40px 48px;
          display:flex;align-items:center;
          justify-content:space-between;gap:32px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .crc-closing.vis{opacity:1;transform:translateY(0);}
        .crc-closing::before{
          content:'';position:absolute;top:-60px;right:-50px;
          width:260px;height:260px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:600px){.crc-closing{flex-direction:column;text-align:center;padding:36px 24px;}}
        .crc-closing-left{position:relative;}
        .crc-closing-lbl{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:8px;
        }
        .crc-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,19px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;
        }
        .crc-cta-btn{
          flex-shrink:0;display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:13px 22px 13px 26px;white-space:nowrap;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .crc-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(37,99,235,0.4);
        }
        .crc-arr{
          width:28px;height:28px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:13px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .crc-cta-btn:hover .crc-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="crc-section" ref={sectionRef}>
        <div className={`crc-orb crc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`crc-orb crc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="crc-inner">

          {/* HEADER */}
          <div className="crc-header">
            <span className={`crc-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="crc-eyebrow-line" />
              Is This Right For You?
              <span className="crc-eyebrow-line" />
            </span>
            <h2 className={`crc-title ${isVisible ? "vis" : ""}`}>
              When <span className="crc-title-accent">Digital Consultation</span><br />Is the Right Choice
            </h2>
            <p className={`crc-sub ${isVisible ? "vis" : ""}`}>Choose this service if:</p>
          </div>

          {/* GRID */}
          <div className="crc-grid">
            {points.map((pt, i) => (
              <div
                key={i}
                className={`crc-card ${i === points.length - 1 ? "crc-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.35 + i * 0.08}s` : "0s" }}
              >
                <div className="crc-glow" />
                <span className="crc-wm">0{i + 1}</span>
                <div className="crc-icon">{pt.icon}</div>
                <p className="crc-label">{pt.label}</p>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div
            className={`crc-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.98s" : "0s" }}
          >
            <div className="crc-closing-left">
              <p className="crc-closing-lbl">Ready to begin?</p>
              <p className="crc-closing-text">Ready to move from confusion to clarity?</p>
            </div>
            <button className="crc-cta-btn">
              Book Your Digital Consultation
              <span className="crc-arr">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
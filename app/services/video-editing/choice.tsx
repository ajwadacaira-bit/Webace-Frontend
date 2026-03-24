"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Better storytelling", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { label: "Strong brand visuals", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "High performing ads", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Engaging reels and shorts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
  { label: "Clear product videos", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
  { label: "Polished corporate content", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { label: "Increased trust and conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
];

export default function VideoRightChoice() {
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

        .vrc-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .vrc-section::before {
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
        .vrc-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .vrc-orb.vis{opacity:1;}
        .vrc-orb-1{
          width:400px;height:400px;top:-120px;right:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 11s ease-in-out infinite;
        }
        .vrc-orb-2{
          width:260px;height:260px;bottom:80px;left:-70px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 15s ease-in-out infinite reverse;
        }

        .vrc-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .vrc-header{text-align:center;margin-bottom:72px;}

        .vrc-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .vrc-eyebrow.vis{opacity:1;transform:translateY(0);}
        .vrc-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .vrc-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:20px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .vrc-title.vis{opacity:1;transform:translateY(0);}
        .vrc-title-accent{color:#2563eb;}

        .vrc-sub{
          font-size:16px;color:#555;line-height:1.8;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.3s,transform 0.8s ease 0.3s;
        }
        .vrc-sub.vis{opacity:1;transform:translateY(0);}

        /* GRID */
        .vrc-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
          margin-bottom:64px;
        }
        @media(max-width:860px){.vrc-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){
          .vrc-grid{grid-template-columns:1fr;}
          .vrc-card-wide{grid-column:span 1!important;}
        }
        .vrc-card-wide{grid-column:span 3;}
        @media(max-width:860px){.vrc-card-wide{grid-column:span 2;}}

        /* CARD */
        .vrc-card{
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
        .vrc-card.vis{opacity:1;transform:translateY(0);}
        .vrc-card:hover{
          background:#0f0f0f;
          border-color:#0f0f0f;
          box-shadow:0 24px 64px rgba(0,0,0,0.2);
          transform:translateY(-5px)!important;
        }
        .vrc-card::before{
          content:'';
          position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.45s ease;
          border-radius:22px 22px 0 0;
        }
        .vrc-card:hover::before{transform:scaleX(1);}

        .vrc-glow{
          position:absolute;top:-50px;right:-50px;
          width:160px;height:160px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .vrc-card:hover .vrc-glow{opacity:1;}

        .vrc-num{
          position:absolute;bottom:16px;right:22px;
          font-family:'Syne',sans-serif;font-size:48px;font-weight:800;
          color:rgba(0,0,0,0.04);line-height:1;
          user-select:none;pointer-events:none;
          transition:color 0.35s ease;
        }
        .vrc-card:hover .vrc-num{color:rgba(255,255,255,0.04);}

        .vrc-icon-wrap{
          width:48px;height:48px;border-radius:14px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:18px;
          transition:transform 0.3s ease,background 0.35s ease;
        }
        .vrc-card:hover .vrc-icon-wrap{
          background:rgba(255,255,255,0.1);
          transform:scale(1.08);
        }
        .vrc-icon-wrap svg{width:21px;height:21px;color:#2563eb;transition:color 0.35s ease;}
        .vrc-card:hover .vrc-icon-wrap svg{color:#60a5fa;}

        .vrc-label{
          font-family:'Syne',sans-serif;
          font-size:16px;font-weight:800;color:#111;
          line-height:1.35;transition:color 0.35s ease;
        }
        .vrc-card:hover .vrc-label{color:#fff;}

        /* CLOSING */
        .vrc-closing{
          background:#111;border-radius:24px;
          padding:48px 56px;
          display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .vrc-closing.vis{opacity:1;transform:translateY(0);}
        .vrc-closing::before{
          content:'';position:absolute;top:-60px;right:-60px;
          width:280px;height:280px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.16),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:640px){
          .vrc-closing{flex-direction:column;text-align:center;padding:40px 28px;}
        }
        .vrc-closing-left{position:relative;}
        .vrc-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;
        }
        .vrc-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;
        }
        .vrc-cta-btn{
          flex-shrink:0;
          display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:15px 26px 15px 30px;white-space:nowrap;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .vrc-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .vrc-cta-arrow{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .vrc-cta-btn:hover .vrc-cta-arrow{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="vrc-section" ref={sectionRef}>
        <div className={`vrc-orb vrc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`vrc-orb vrc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="vrc-inner">

          {/* HEADER */}
          <div className="vrc-header">
            <span className={`vrc-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="vrc-eyebrow-line" />
              Is This Right For You?
              <span className="vrc-eyebrow-line" />
            </span>
            <h2 className={`vrc-title ${isVisible ? "vis" : ""}`}>
              When Video Editing Is{" "}
              <span className="vrc-title-accent">the Right Choice</span>
            </h2>
            <p className={`vrc-sub ${isVisible ? "vis" : ""}`}>
              Choose this service if you want:
            </p>
          </div>

          {/* GRID */}
          <div className="vrc-grid">
            {items.map((item, i) => (
              <div
                key={i}
                className={`vrc-card ${i === items.length - 1 ? "vrc-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.08}s` : "0s" }}
              >
                <div className="vrc-glow" />
                <span className="vrc-num">0{i + 1}</span>
                <div className="vrc-icon-wrap">{item.icon}</div>
                <p className="vrc-label">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div
            className={`vrc-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.0s" : "0s" }}
          >
            <div className="vrc-closing-left">
              <p className="vrc-closing-label">Ready to begin?</p>
              <p className="vrc-closing-text">Let's turn your footage into something powerful.</p>
            </div>
            <button className="vrc-cta-btn">
              Get Your Free Consultation
              <span className="vrc-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
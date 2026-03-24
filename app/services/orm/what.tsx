"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  { label: "Social media reputation management", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "Google review improvement", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Advanced reputation monitoring", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "SERP management and cleanup", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { label: "Personal branding for leadership", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg> },
  { label: "Reputation building content", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { label: "Crisis communication support", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { label: "Monthly sentiment and ORM reports", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { label: "360° brand protection", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
];

export default function WhatYouGetOrm() {
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

        .wyg-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .wyg-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 20%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        @keyframes floatOrb {
          0%,100%{transform:translateY(0) scale(1);}
          50%{transform:translateY(-20px) scale(1.05);}
        }
        .wyg-orb {
          position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;
        }
        .wyg-orb.vis{opacity:1;}
        .wyg-orb-1{
          width:400px;height:400px;top:-120px;right:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 70%);
          animation:floatOrb 11s ease-in-out infinite;
        }
        .wyg-orb-2{
          width:260px;height:260px;bottom:80px;left:-70px;
          background:radial-gradient(circle,rgba(96,165,250,0.05) 0%,transparent 70%);
          animation:floatOrb 15s ease-in-out infinite reverse;
        }

        .wyg-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .wyg-header{text-align:center;margin-bottom:72px;}

        .wyg-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wyg-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wyg-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .wyg-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:20px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .wyg-title.vis{opacity:1;transform:translateY(0);}
        .wyg-title-accent{color:#2563eb;}

        .wyg-sub{
          font-size:16px;color:#555;line-height:1.8;max-width:580px;margin:0 auto;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.3s,transform 0.8s ease 0.3s;
        }
        .wyg-sub.vis{opacity:1;transform:translateY(0);}

        /* GRID */
        .wyg-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
          margin-bottom:64px;
        }
        @media(max-width:860px){.wyg-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){
          .wyg-grid{grid-template-columns:1fr;}
          .wyg-card-wide{grid-column:span 1!important;}
        }
        .wyg-card-wide{grid-column:span 3;}
        @media(max-width:860px){.wyg-card-wide{grid-column:span 2;}}

        /* CARD */
        .wyg-card{
          background:#fff;
          border:1px solid rgba(0,0,0,0.06);
          border-radius:20px;padding:28px 24px;
          display:flex;align-items:center;gap:16px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(28px);
          transition:
            opacity 0.65s ease,transform 0.65s ease,
            box-shadow 0.3s ease,border-color 0.3s ease;
        }
        .wyg-card.vis{opacity:1;transform:translateY(0);}
        .wyg-card:hover{
          box-shadow:0 18px 48px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.2);
          transform:translateY(-4px)!important;
        }
        .wyg-card::before{
          content:'';position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.4s ease;border-radius:20px 20px 0 0;
        }
        .wyg-card:hover::before{transform:scaleX(1);}

        .wyg-card-icon{
          width:42px;height:42px;flex-shrink:0;border-radius:12px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.3s ease,background 0.3s ease;
        }
        .wyg-card:hover .wyg-card-icon{
          transform:scale(1.1);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .wyg-card-icon svg{width:18px;height:18px;color:#2563eb;}

        .wyg-card-text{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:700;color:#111;
          line-height:1.4;transition:color 0.3s ease;
        }
        .wyg-card:hover .wyg-card-text{color:#2563eb;}

        /* CLOSING */
        .wyg-closing{
          background:#111;border-radius:24px;
          padding:56px 64px;
          text-align:center;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .wyg-closing.vis{opacity:1;transform:translateY(0);}
        .wyg-closing::before{
          content:'';position:absolute;top:-100px;left:50%;
          transform:translateX(-50%);
          width:600px;height:400px;border-radius:50%;
          background:radial-gradient(ellipse,rgba(37,99,235,0.18) 0%,transparent 65%);
          pointer-events:none;
        }
        .wyg-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:16px;position:relative;
        }
        .wyg-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(20px,3vw,32px);font-weight:800;
          color:#fff;line-height:1.3;position:relative;
        }
        .wyg-closing-text span{color:#60a5fa;}

        @media(max-width:560px){.wyg-closing{padding:44px 28px;}}
      `}</style>

      <section className="wyg-section" ref={sectionRef}>
        <div className={`wyg-orb wyg-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wyg-orb wyg-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wyg-inner">

          {/* HEADER */}
          <div className="wyg-header">
            <span className={`wyg-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wyg-eyebrow-line" />
              What You Get
              <span className="wyg-eyebrow-line" />
            </span>
            <h2 className={`wyg-title ${isVisible ? "vis" : ""}`}>
              What You Get With{" "}
              <span className="wyg-title-accent">WebAce ORM</span>
            </h2>
            <p className={`wyg-sub ${isVisible ? "vis" : ""}`}>
              A complete, structured and strategic reputation system designed to protect, repair and elevate your digital presence.
            </p>
          </div>

          {/* GRID */}
          <div className="wyg-grid">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={`wyg-card ${i === benefits.length - 1 ? "wyg-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.07}s` : "0s" }}
              >
                <div className="wyg-card-icon">{item.icon}</div>
                <p className="wyg-card-text">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div
            className={`wyg-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.05s" : "0s" }}
          >
            <p className="wyg-closing-label">Your Competitive Edge</p>
            <p className="wyg-closing-text">
              Your digital trust becomes your{" "}
              <span>strongest competitive edge.</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
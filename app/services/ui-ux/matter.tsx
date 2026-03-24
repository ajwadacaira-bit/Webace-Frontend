"use client";

import { useEffect, useRef, useState } from "react";

const strong = [
  { label: "Higher trust", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Better engagement", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Stronger brand recall", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Improved readability", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
  { label: "Higher conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
  { label: "Better user satisfaction", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
  { label: "Increased time on site", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { label: "Lower bounce rates", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg> },
];

const weak = [
  { label: "Confusion", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { label: "Drop offs", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><line x1="17" y1="18" x2="23" y2="18"/><line x1="23" y1="12" x2="23" y2="18"/></svg> },
  { label: "Trust issues", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg> },
  { label: "Poor impression", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
  { label: "Low conversions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> },
  { label: "Weak brand perception", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg> },
];

export default function WhyUiUxMatters() {
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

        .wux-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .wux-section::before {
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
        .wux-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .wux-orb.vis{opacity:1;}
        .wux-orb-1{
          width:420px;height:420px;top:-140px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .wux-orb-2{
          width:260px;height:260px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .wux-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .wux-header {
          display:grid;grid-template-columns:1fr 1fr;
          gap:56px;align-items:end;
          margin-bottom:72px;padding-bottom:48px;
          border-bottom:1px solid rgba(0,0,0,0.07);
        }
        @media(max-width:720px){.wux-header{grid-template-columns:1fr;gap:24px;}}

        .wux-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:18px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wux-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wux-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#2563eb;flex-shrink:0;}

        .wux-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.05;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .wux-title.vis{opacity:1;transform:translateY(0);}
        .wux-title-accent{color:#2563eb;}

        .wux-header-right{
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .wux-header-right.vis{opacity:1;transform:translateY(0);}
        .wux-header-sub{font-size:15px;color:#666;line-height:1.8;margin-bottom:14px;}

        /* statement pills */
        .wux-pills{display:flex;flex-direction:column;gap:10px;}
        .wux-pill{
          font-family:'Syne',sans-serif;
          font-size:16px;font-weight:800;color:#111;
          padding:14px 20px;
          border-radius:12px;
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          transition:background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
          cursor:default;
        }
        .wux-pill:hover{
          background:rgba(37,99,235,0.05);
          border-color:rgba(37,99,235,0.2);
          color:#2563eb;
        }

        /* BODY */
        .wux-body{
          display:grid;grid-template-columns:1fr 1fr;
          gap:24px;margin-bottom:64px;
        }
        @media(max-width:760px){.wux-body{grid-template-columns:1fr;}}

        /* PANEL BASE */
        .wux-panel{
          border-radius:22px;padding:36px 32px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.75s ease,transform 0.75s ease,
            box-shadow 0.35s ease,border-color 0.35s ease;
        }
        .wux-panel.vis{opacity:1;transform:translateY(0);}

        /* GREEN panel */
        .wux-green{
          background:#fff;
          border:1px solid rgba(34,197,94,0.15);
        }
        .wux-green:hover{
          box-shadow:0 20px 56px rgba(34,197,94,0.1);
          border-color:rgba(34,197,94,0.3);
        }
        .wux-green::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#22c55e,#86efac);
          border-radius:22px 22px 0 0;
        }

        /* RED panel */
        .wux-red{
          background:#fff;
          border:1px solid rgba(239,68,68,0.12);
        }
        .wux-red:hover{
          box-shadow:0 20px 56px rgba(239,68,68,0.08);
          border-color:rgba(239,68,68,0.25);
        }
        .wux-red::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#ef4444,#fca5a5);
          border-radius:22px 22px 0 0;
        }

        .wux-panel-label{
          font-size:11px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;margin-bottom:24px;
        }
        .wux-green .wux-panel-label{color:#16a34a;}
        .wux-red .wux-panel-label{color:#ef4444;}

        .wux-items{display:flex;flex-direction:column;gap:10px;}

        /* GREEN items */
        .wux-item-g{
          display:flex;align-items:center;gap:14px;
          padding:11px 14px;border-radius:11px;
          border:1px solid rgba(34,197,94,0.08);
          background:rgba(34,197,94,0.02);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .wux-item-g:hover{
          background:rgba(34,197,94,0.06);
          border-color:rgba(34,197,94,0.2);
          transform:translateX(4px);
        }
        .wux-icon-g{
          width:34px;height:34px;flex-shrink:0;border-radius:10px;
          background:rgba(34,197,94,0.1);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease,background 0.25s ease;
        }
        .wux-item-g:hover .wux-icon-g{
          transform:scale(1.08);
          background:rgba(34,197,94,0.18);
        }
        .wux-icon-g svg{width:15px;height:15px;color:#16a34a;}
        .wux-text-g{
          font-size:13.5px;color:#333;font-weight:400;line-height:1.3;
          transition:color 0.25s ease;
        }
        .wux-item-g:hover .wux-text-g{color:#16a34a;}

        /* RED items */
        .wux-item-r{
          display:flex;align-items:center;gap:14px;
          padding:11px 14px;border-radius:11px;
          border:1px solid rgba(239,68,68,0.07);
          background:rgba(239,68,68,0.02);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .wux-item-r:hover{
          background:rgba(239,68,68,0.05);
          border-color:rgba(239,68,68,0.18);
          transform:translateX(4px);
        }
        .wux-icon-r{
          width:34px;height:34px;flex-shrink:0;border-radius:10px;
          background:rgba(239,68,68,0.08);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease,background 0.25s ease;
        }
        .wux-item-r:hover .wux-icon-r{
          transform:scale(1.08);
          background:rgba(239,68,68,0.15);
        }
        .wux-icon-r svg{width:15px;height:15px;color:#ef4444;}
        .wux-text-r{
          font-size:13.5px;color:#333;font-weight:400;line-height:1.3;
          transition:color 0.25s ease;
        }
        .wux-item-r:hover .wux-text-r{color:#ef4444;}

        /* CLOSING */
        .wux-closing{
          background:#111;border-radius:24px;
          padding:48px 56px;
          display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .wux-closing.vis{opacity:1;transform:translateY(0);}
        .wux-closing::before{
          content:'';position:absolute;top:-80px;right:-60px;
          width:300px;height:300px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:640px){
          .wux-closing{flex-direction:column;text-align:center;padding:40px 28px;}
        }
        .wux-closing-left{position:relative;}
        .wux-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;
        }
        .wux-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(16px,2vw,22px);font-weight:800;
          color:#fff;line-height:1.4;
        }
        .wux-closing-text span{color:#60a5fa;}
        .wux-cta-btn{
          flex-shrink:0;
          display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;
          border-radius:100px;padding:15px 26px 15px 30px;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
          white-space:nowrap;
        }
        .wux-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .wux-cta-arrow{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .wux-cta-btn:hover .wux-cta-arrow{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="wux-section" ref={sectionRef}>
        <div className={`wux-orb wux-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wux-orb wux-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wux-inner">

          {/* HEADER */}
          <div className="wux-header">
            <div>
              <div className={`wux-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="wux-eyebrow-dot" />
                The Foundation
              </div>
              <h2 className={`wux-title ${isVisible ? "vis" : ""}`}>
                Why <span className="wux-title-accent">UI UX</span><br />Matters for Your Brand
              </h2>
            </div>
            <div className={`wux-header-right ${isVisible ? "vis" : ""}`}>
              <p className="wux-header-sub">UI UX shapes your business performance.</p>
              <div className="wux-pills">
                <div className="wux-pill">Design is not decoration.</div>
                <div className="wux-pill">Design is the experience.</div>
              </div>
            </div>
          </div>

          {/* TWO PANELS */}
          <div className="wux-body">

            {/* GREEN */}
            <div
              className={`wux-panel wux-green ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.38s" : "0s" }}
            >
              <p className="wux-panel-label">Strong UI UX brings:</p>
              <div className="wux-items">
                {strong.map((item, i) => (
                  <div key={i} className="wux-item-g">
                    <div className="wux-icon-g">{item.icon}</div>
                    <span className="wux-text-g">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RED */}
            <div
              className={`wux-panel wux-red ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.52s" : "0s" }}
            >
              <p className="wux-panel-label">Weak UI UX causes:</p>
              <div className="wux-items">
                {weak.map((item, i) => (
                  <div key={i} className="wux-item-r">
                    <div className="wux-icon-r">{item.icon}</div>
                    <span className="wux-text-r">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CLOSING */}
          <div
            className={`wux-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.82s" : "0s" }}
          >
            <div className="wux-closing-left">
              <p className="wux-closing-label">Take action</p>
              <p className="wux-closing-text">
                Want a design that <span>converts visitors</span> into customers?
              </p>
            </div>
            <button className="wux-cta-btn">
              Request a Free Design Audit
              <span className="wux-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
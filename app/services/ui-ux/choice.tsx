"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { label: "A modern identity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Consistent brand visibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: "Smooth user experience", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: "Higher conversion rate", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Strong social presence", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "Better mobile performance", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
  { label: "High performing ecommerce", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
  { label: "A unified digital brand system", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><line x1="12" y1="10" x2="5" y2="8"/><line x1="12" y1="10" x2="19" y2="8"/><line x1="12" y1="14" x2="5" y2="16"/><line x1="12" y1="14" x2="19" y2="16"/></svg> },
];

export default function UiUxRightChoice() {
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

        .uxr-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .uxr-section::before {
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
        .uxr-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .uxr-orb.vis{opacity:1;}
        .uxr-orb-1{
          width:400px;height:400px;top:-120px;right:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 11s ease-in-out infinite;
        }
        .uxr-orb-2{
          width:260px;height:260px;bottom:80px;left:-70px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 15s ease-in-out infinite reverse;
        }

        .uxr-inner{max-width:1100px;margin:0 auto;position:relative;}

        .uxr-header{text-align:center;margin-bottom:72px;}

        .uxr-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .uxr-eyebrow.vis{opacity:1;transform:translateY(0);}
        .uxr-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .uxr-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:20px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .uxr-title.vis{opacity:1;transform:translateY(0);}
        .uxr-title-accent{color:#2563eb;}

        .uxr-sub{
          font-size:16px;color:#555;line-height:1.8;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.3s,transform 0.8s ease 0.3s;
        }
        .uxr-sub.vis{opacity:1;transform:translateY(0);}

        .uxr-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:16px;
          margin-bottom:64px;
        }
        @media(max-width:1000px){.uxr-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){.uxr-grid{grid-template-columns:1fr;}}

        .uxr-card{
          background:#fff;
          border:1px solid rgba(0,0,0,0.06);
          border-radius:22px;padding:32px 24px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(32px);
          transition:
            opacity 0.7s ease,transform 0.7s ease,
            box-shadow 0.35s ease,border-color 0.35s ease,
            background 0.35s ease;
        }
        .uxr-card.vis{opacity:1;transform:translateY(0);}
        .uxr-card:hover{
          background:#0f0f0f;
          border-color:#0f0f0f;
          box-shadow:0 24px 64px rgba(0,0,0,0.2);
          transform:translateY(-5px)!important;
        }
        .uxr-card::before{
          content:'';
          position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.45s ease;
          border-radius:22px 22px 0 0;
        }
        .uxr-card:hover::before{transform:scaleX(1);}

        .uxr-glow{
          position:absolute;top:-50px;right:-50px;
          width:150px;height:150px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .uxr-card:hover .uxr-glow{opacity:1;}

        .uxr-card-num{
          position:absolute;bottom:14px;right:18px;
          font-family:'Syne',sans-serif;font-size:44px;font-weight:800;
          color:rgba(0,0,0,0.04);line-height:1;
          user-select:none;pointer-events:none;
          transition:color 0.35s ease;
        }
        .uxr-card:hover .uxr-card-num{color:rgba(255,255,255,0.04);}

        .uxr-icon-wrap{
          width:46px;height:46px;border-radius:13px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:16px;
          transition:transform 0.3s ease,background 0.35s ease;
        }
        .uxr-card:hover .uxr-icon-wrap{
          background:rgba(255,255,255,0.1);
          transform:scale(1.08);
        }
        .uxr-icon-wrap svg{width:20px;height:20px;color:#2563eb;transition:color 0.35s ease;}
        .uxr-card:hover .uxr-icon-wrap svg{color:#60a5fa;}

        .uxr-card-label{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:800;color:#111;
          line-height:1.35;transition:color 0.35s ease;
        }
        .uxr-card:hover .uxr-card-label{color:#fff;}

        .uxr-closing{
          background:#111;border-radius:24px;
          padding:48px 56px;
          display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .uxr-closing.vis{opacity:1;transform:translateY(0);}
        .uxr-closing::before{
          content:'';position:absolute;top:-60px;right:-60px;
          width:280px;height:280px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.16),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:640px){
          .uxr-closing{flex-direction:column;text-align:center;padding:40px 28px;}
        }
        .uxr-closing-left{position:relative;}
        .uxr-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;
        }
        .uxr-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;
        }
        .uxr-cta-btn{
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
        .uxr-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .uxr-cta-arrow{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .uxr-cta-btn:hover .uxr-cta-arrow{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="uxr-section" ref={sectionRef}>
        <div className={`uxr-orb uxr-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`uxr-orb uxr-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="uxr-inner">

          <div className="uxr-header">
            <span className={`uxr-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="uxr-eyebrow-line" />
              Is This Right For You?
              <span className="uxr-eyebrow-line" />
            </span>
            <h2 className={`uxr-title ${isVisible ? "vis" : ""}`}>
              When <span className="uxr-title-accent">UI UX</span> Is Right for You
            </h2>
            <p className={`uxr-sub ${isVisible ? "vis" : ""}`}>
              Choose this category if you want:
            </p>
          </div>

          <div className="uxr-grid">
            {items.map((item, i) => (
              <div
                key={i}
                className={`uxr-card ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.35 + i * 0.08}s` : "0s" }}
              >
                <div className="uxr-glow" />
                <span className="uxr-card-num">0{i + 1}</span>
                <div className="uxr-icon-wrap">{item.icon}</div>
                <p className="uxr-card-label">{item.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`uxr-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.0s" : "0s" }}
          >
            <div className="uxr-closing-left">
              <p className="uxr-closing-label">Ready to begin?</p>
              <p className="uxr-closing-text">Want a design that looks great and converts?</p>
            </div>
            <button className="uxr-cta-btn">
              Get a Free Consultation
              <span className="uxr-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
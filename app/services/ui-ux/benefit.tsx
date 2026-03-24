"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  { label: "A premium brand identity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Strong multi platform brand visibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: "Smooth and intuitive UX", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg> },
  { label: "High quality social creatives", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
  { label: "Fully responsive web design", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
  { label: "Conversion ready landing pages", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="5"/><circle cx="17" cy="12" r="3"/></svg> },
  { label: "High performance ecommerce stores", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
  { label: "Strategic design systems", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><line x1="12" y1="10" x2="5" y2="8"/><line x1="12" y1="10" x2="19" y2="8"/><line x1="12" y1="14" x2="5" y2="16"/><line x1="12" y1="14" x2="19" y2="16"/></svg> },
  { label: "Minimal AI enhanced insight", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { label: "A complete digital design ecosystem", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
];

export default function UiUxBenefits() {
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

        .uub-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .uub-section::before {
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
        .uub-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .uub-orb.vis{opacity:1;}
        .uub-orb-1{
          width:400px;height:400px;top:-120px;right:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 11s ease-in-out infinite;
        }
        .uub-orb-2{
          width:260px;height:260px;bottom:80px;left:-70px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 15s ease-in-out infinite reverse;
        }

        .uub-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .uub-header{text-align:center;margin-bottom:72px;}

        .uub-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .uub-eyebrow.vis{opacity:1;transform:translateY(0);}
        .uub-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .uub-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .uub-title.vis{opacity:1;transform:translateY(0);}
        .uub-title-accent{color:#2563eb;}

        /* GRID */
        .uub-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
          margin-bottom:64px;
        }
        @media(max-width:860px){.uub-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){
          .uub-grid{grid-template-columns:1fr;}
          .uub-card-wide{grid-column:span 1!important;}
        }
        .uub-card-wide{grid-column:span 3;}
        @media(max-width:860px){.uub-card-wide{grid-column:span 2;}}

        /* CARD */
        .uub-card{
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
        .uub-card.vis{opacity:1;transform:translateY(0);}
        .uub-card:hover{
          background:#0f0f0f;
          border-color:#0f0f0f;
          box-shadow:0 24px 64px rgba(0,0,0,0.2);
          transform:translateY(-5px)!important;
        }
        .uub-card::before{
          content:'';
          position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.45s ease;
          border-radius:22px 22px 0 0;
        }
        .uub-card:hover::before{transform:scaleX(1);}

        .uub-card-glow{
          position:absolute;top:-50px;right:-50px;
          width:160px;height:160px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .uub-card:hover .uub-card-glow{opacity:1;}

        .uub-card-num{
          position:absolute;bottom:16px;right:22px;
          font-family:'Syne',sans-serif;font-size:48px;font-weight:800;
          color:rgba(0,0,0,0.04);line-height:1;
          user-select:none;pointer-events:none;
          transition:color 0.35s ease;
        }
        .uub-card:hover .uub-card-num{color:rgba(255,255,255,0.04);}

        .uub-icon-wrap{
          width:48px;height:48px;border-radius:14px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:18px;
          transition:transform 0.3s ease,background 0.35s ease;
        }
        .uub-card:hover .uub-icon-wrap{
          background:rgba(255,255,255,0.1);
          transform:scale(1.08);
        }
        .uub-icon-wrap svg{width:21px;height:21px;color:#2563eb;transition:color 0.35s ease;}
        .uub-card:hover .uub-icon-wrap svg{color:#60a5fa;}

        .uub-card-label{
          font-family:'Syne',sans-serif;
          font-size:15px;font-weight:800;color:#111;
          line-height:1.35;transition:color 0.35s ease;
        }
        .uub-card:hover .uub-card-label{color:#fff;}

        /* CLOSING */
        .uub-closing{
          background:#111;border-radius:24px;
          padding:56px 64px;text-align:center;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .uub-closing.vis{opacity:1;transform:translateY(0);}
        .uub-closing::before{
          content:'';position:absolute;top:-100px;left:50%;
          transform:translateX(-50%);
          width:600px;height:400px;border-radius:50%;
          background:radial-gradient(ellipse,rgba(37,99,235,0.18) 0%,transparent 65%);
          pointer-events:none;
        }
        .uub-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:16px;position:relative;
        }
        .uub-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(20px,3vw,32px);font-weight:800;
          color:#fff;line-height:1.3;position:relative;
        }
        .uub-closing-text span{color:#60a5fa;}
        @media(max-width:560px){.uub-closing{padding:44px 28px;}}
      `}</style>

      <section className="uub-section" ref={sectionRef}>
        <div className={`uub-orb uub-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`uub-orb uub-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="uub-inner">

          {/* HEADER */}
          <div className="uub-header">
            <span className={`uub-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="uub-eyebrow-line" />
              What You Get
              <span className="uub-eyebrow-line" />
            </span>
            <h2 className={`uub-title ${isVisible ? "vis" : ""}`}>
              What You Get With{" "}
              <span className="uub-title-accent">WebAce UI UX</span>
            </h2>
          </div>

          {/* GRID */}
          <div className="uub-grid">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={`uub-card ${i === benefits.length - 1 ? "uub-card-wide" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.07}s` : "0s" }}
              >
                <div className="uub-card-glow" />
                <span className="uub-card-num">0{i + 1}</span>
                <div className="uub-icon-wrap">{item.icon}</div>
                <p className="uub-card-label">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div
            className={`uub-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.08s" : "0s" }}
          >
            <p className="uub-closing-label">Your Competitive Edge</p>
            <p className="uub-closing-text">
              Your digital experience becomes your{" "}
              <span>strongest competitive edge.</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
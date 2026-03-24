"use client";

import { useEffect, useRef, useState } from "react";

const ormRequires = [
  { label: "Sensitivity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Professionalism", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { label: "Psychological understanding", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { label: "Expert response management", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { label: "Clear communication", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
  { label: "SEO knowledge", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { label: "PR strategy", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> },
];

const webAceOffers = [
  { label: "Strategic response systems", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Proactive reputation enhancement", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Safety first communication", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { label: "Transparent reporting", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { label: "Human led personalisation", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

export default function WhyChooseWebAceOrm() {
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

        .wco-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .wco-section::before {
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
        .wco-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .wco-orb.vis{opacity:1;}
        .wco-orb-1{
          width:420px;height:420px;top:-140px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .wco-orb-2{
          width:260px;height:260px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .wco-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .wco-header{text-align:center;margin-bottom:72px;}

        .wco-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wco-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wco-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .wco-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .wco-title.vis{opacity:1;transform:translateY(0);}
        .wco-title-accent{color:#2563eb;}

        /* BODY */
        .wco-body{
          display:grid;grid-template-columns:1fr 1fr;
          gap:24px;margin-bottom:64px;
        }
        @media(max-width:760px){.wco-body{grid-template-columns:1fr;}}

        /* PANEL */
        .wco-panel{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:22px;padding:36px 32px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.75s ease,transform 0.75s ease,
            box-shadow 0.35s ease,border-color 0.35s ease;
        }
        .wco-panel.vis{opacity:1;transform:translateY(0);}
        .wco-panel:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.09);
          border-color:rgba(37,99,235,0.18);
        }
        .wco-panel::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }

        .wco-panel-label{
          font-size:11px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;color:#2563eb;margin-bottom:24px;
        }

        .wco-items{display:flex;flex-direction:column;gap:10px;}

        /* light items */
        .wco-item-light{
          display:flex;align-items:center;gap:14px;
          padding:12px 16px;border-radius:12px;
          border:1px solid rgba(0,0,0,0.05);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .wco-item-light:hover{
          background:rgba(37,99,235,0.04);
          border-color:rgba(37,99,235,0.15);
          transform:translateX(4px);
        }
        .wco-icon-light{
          width:36px;height:36px;flex-shrink:0;border-radius:10px;
          background:#f4f5f7;
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease,background 0.25s ease;
        }
        .wco-item-light:hover .wco-icon-light{
          transform:scale(1.08);
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
        }
        .wco-icon-light svg{width:15px;height:15px;color:#999;transition:color 0.25s ease;}
        .wco-item-light:hover .wco-icon-light svg{color:#2563eb;}
        .wco-text-light{
          font-size:14px;color:#555;font-weight:400;line-height:1.3;
          transition:color 0.25s ease;
        }
        .wco-item-light:hover .wco-text-light{color:#111;}

        /* blue items */
        .wco-item-blue{
          display:flex;align-items:center;gap:14px;
          padding:12px 16px;border-radius:12px;
          border:1px solid rgba(0,0,0,0.05);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .wco-item-blue:hover{
          background:rgba(37,99,235,0.04);
          border-color:rgba(37,99,235,0.15);
          transform:translateX(4px);
        }
        .wco-icon-blue{
          width:36px;height:36px;flex-shrink:0;border-radius:10px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease,background 0.25s ease;
        }
        .wco-item-blue:hover .wco-icon-blue{
          transform:scale(1.08);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .wco-icon-blue svg{width:15px;height:15px;color:#2563eb;}
        .wco-text-blue{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:700;color:#111;line-height:1.3;
          transition:color 0.25s ease;
        }
        .wco-item-blue:hover .wco-text-blue{color:#2563eb;}

        /* bridge text */
        .wco-bridge{
          font-size:14.5px;color:#555;line-height:1.75;
          padding:20px 0 24px;
          border-top:1px solid rgba(0,0,0,0.06);
          border-bottom:1px solid rgba(0,0,0,0.06);
          margin-bottom:24px;
        }

        /* CLOSING */
        .wco-closing{
          background:#111;border-radius:24px;
          padding:56px 64px;text-align:center;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .wco-closing.vis{opacity:1;transform:translateY(0);}
        .wco-closing::before{
          content:'';position:absolute;top:-100px;left:50%;
          transform:translateX(-50%);
          width:600px;height:400px;border-radius:50%;
          background:radial-gradient(ellipse,rgba(37,99,235,0.18) 0%,transparent 65%);
          pointer-events:none;
        }
        .wco-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:16px;position:relative;
        }
        .wco-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(20px,3vw,32px);font-weight:800;
          color:#fff;line-height:1.3;position:relative;
        }
        .wco-closing-text span{color:#60a5fa;}

        @media(max-width:560px){.wco-closing{padding:44px 28px;}}
      `}</style>

      <section className="wco-section" ref={sectionRef}>
        <div className={`wco-orb wco-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wco-orb wco-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wco-inner">

          {/* HEADER */}
          <div className="wco-header">
            <span className={`wco-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wco-eyebrow-line" />
              Our Difference
              <span className="wco-eyebrow-line" />
            </span>
            <h2 className={`wco-title ${isVisible ? "vis" : ""}`}>
              Why Choose <span className="wco-title-accent">WebAce</span> for ORM
            </h2>
          </div>

          {/* TWO PANELS */}
          <div className="wco-body">

            {/* LEFT — ORM requires */}
            <div
              className={`wco-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.38s" : "0s" }}
            >
              <p className="wco-panel-label">ORM requires:</p>
              <div className="wco-items">
                {ormRequires.map((item, i) => (
                  <div key={i} className="wco-item-light">
                    <div className="wco-icon-light">{item.icon}</div>
                    <span className="wco-text-light">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — We offer */}
            <div
              className={`wco-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.52s" : "0s" }}
            >
              <p className="wco-panel-label">WebAce offers:</p>

              <p className="wco-bridge">
                WebAce brings all of this together into a structured ORM system.
              </p>

              <div className="wco-items">
                {webAceOffers.map((item, i) => (
                  <div key={i} className="wco-item-blue">
                    <div className="wco-icon-blue">{item.icon}</div>
                    <span className="wco-text-blue">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CLOSING */}
          <div
            className={`wco-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.82s" : "0s" }}
          >
            <p className="wco-closing-label">Our Promise</p>
            <p className="wco-closing-text">
              We protect your brand{" "}
              <span>as if it were our own.</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
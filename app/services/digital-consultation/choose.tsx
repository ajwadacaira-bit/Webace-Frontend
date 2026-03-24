"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  { label: "Simple, actionable insights", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { label: "Friendly yet professional style", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Complete understanding of your challenges", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { label: "Real solutions that actually work", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "A roadmap you can follow confidently", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><polyline points="8 7 3 12 8 17"/><polyline points="16 7 21 12 16 17"/></svg> },
  { label: "Guidance that matches your budget and stage", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
];

export default function WhyChooseWebAceConsultation() {
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

        .wcc-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 72px 24px 80px;
        }
        .wcc-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 5% 30%, rgba(37,99,235,0.05) 0%, transparent 45%),
            radial-gradient(ellipse at 95% 70%, rgba(96,165,250,0.04) 0%, transparent 45%);
          pointer-events: none;
        }
        @keyframes floatOrb {
          0%,100%{transform:translateY(0) scale(1);}
          50%{transform:translateY(-22px) scale(1.05);}
        }
        .wcc-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .wcc-orb.vis{opacity:1;}
        .wcc-orb-1{
          width:380px;height:380px;top:-120px;left:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .wcc-orb-2{
          width:240px;height:240px;bottom:40px;right:-60px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .wcc-inner{
          max-width:1100px;margin:0 auto;position:relative;
          display:grid;grid-template-columns:1fr 1fr;
          gap:56px;align-items:start;
        }
        @media(max-width:860px){.wcc-inner{grid-template-columns:1fr;gap:36px;}}

        /* LEFT */
        .wcc-left{position:sticky;top:90px;}

        .wcc-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:18px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wcc-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wcc-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .wcc-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(30px,4vw,48px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:18px;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease 0.12s,transform 0.85s ease 0.12s;
        }
        .wcc-title.vis{opacity:1;transform:translateY(0);}
        .wcc-title-accent{color:#2563eb;}

        .wcc-body{
          display:flex;flex-direction:column;gap:0;
          margin-bottom:28px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.22s,transform 0.8s ease 0.22s;
        }
        .wcc-body.vis{opacity:1;transform:translateY(0);}
        .wcc-body-line{
          font-size:14px;color:#666;line-height:1.8;
          padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);
        }
        .wcc-body-line:first-child{border-top:1px solid rgba(0,0,0,0.06);}

        /* thought partner card */
        .wcc-partner{
          background:#111;border-radius:18px;
          padding:26px 28px;position:relative;overflow:hidden;
          margin-bottom:28px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.36s,transform 0.8s ease 0.36s;
        }
        .wcc-partner.vis{opacity:1;transform:translateY(0);}
        .wcc-partner::before{
          content:'';position:absolute;top:-60px;right:-40px;
          width:180px;height:180px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.22),transparent 70%);
          pointer-events:none;
        }
        .wcc-partner-lbl{
          font-size:10px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;
          margin-bottom:10px;position:relative;
        }
        .wcc-partner-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.6vw,18px);font-weight:800;
          color:#fff;line-height:1.5;position:relative;
        }
        .wcc-partner-text span{color:#60a5fa;}

        /* cta */
        .wcc-cta-btn{
          display:inline-flex;align-items:center;gap:12px;
          background:rgba(37,99,235,0.07);color:#2563eb;
          border:1px solid rgba(37,99,235,0.18);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:13px 22px 13px 26px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.5s,transform 0.8s ease 0.5s,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease,
            box-shadow 0.3s ease,transform 0.25s ease;
        }
        .wcc-cta-btn.vis{opacity:1;transform:translateY(0);}
        .wcc-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          box-shadow:0 10px 32px rgba(37,99,235,0.3);
          transform:translateY(-2px)!important;
        }
        .wcc-cta-arr{
          width:28px;height:28px;border-radius:50%;
          background:rgba(37,99,235,0.1);
          display:flex;align-items:center;justify-content:center;
          font-size:13px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .wcc-cta-btn:hover .wcc-cta-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}

        /* RIGHT */
        .wcc-right{display:flex;flex-direction:column;gap:10px;}

        .wcc-card{
          background:#fff;border:1px solid rgba(0,0,0,0.06);
          border-radius:16px;padding:20px 22px;
          display:flex;align-items:center;gap:16px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.65s ease,transform 0.65s ease,
            box-shadow 0.3s ease,border-color 0.3s ease;
        }
        .wcc-card.vis{opacity:1;transform:translateY(0);}
        .wcc-card:hover{
          box-shadow:0 12px 36px rgba(37,99,235,0.09);
          border-color:rgba(37,99,235,0.2);
          transform:translateX(4px)!important;
        }
        .wcc-card::before{
          content:'';position:absolute;left:0;top:0;bottom:0;width:2px;
          background:linear-gradient(180deg,#2563eb,#60a5fa);
          transform:scaleY(0);transform-origin:top;
          transition:transform 0.35s ease;
          border-radius:16px 0 0 16px;
        }
        .wcc-card:hover::before{transform:scaleY(1);}

        .wcc-card-icon{
          width:42px;height:42px;flex-shrink:0;border-radius:12px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.3s ease,background 0.3s ease;
        }
        .wcc-card:hover .wcc-card-icon{
          transform:scale(1.08);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .wcc-card-icon svg{width:18px;height:18px;color:#2563eb;}

        .wcc-card-text{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:700;color:#111;
          line-height:1.35;transition:color 0.3s ease;
        }
        .wcc-card:hover .wcc-card-text{color:#2563eb;}
      `}</style>

      <section className="wcc-section" ref={sectionRef}>
        <div className={`wcc-orb wcc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wcc-orb wcc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wcc-inner">

          {/* LEFT */}
          <div className="wcc-left">
            <span className={`wcc-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wcc-eyebrow-line" />
              Our Difference
              <span className="wcc-eyebrow-line" />
            </span>

            <h2 className={`wcc-title ${isVisible ? "vis" : ""}`}>
              Why Choose <span className="wcc-title-accent">WebAce</span> for Digital Consultation
            </h2>

            <div className={`wcc-body ${isVisible ? "vis" : ""}`}>
              <p className="wcc-body-line">WebAce is not only guiding you based on knowledge.</p>
              <p className="wcc-body-line">We guide you based on experience, practicality and clarity.</p>
            </div>

            <div className={`wcc-partner ${isVisible ? "vis" : ""}`}>
              <p className="wcc-partner-lbl">Our philosophy</p>
              <p className="wcc-partner-text">
                We become your <span>thought partner</span> in digital growth — not just an advisor.
              </p>
            </div>

            <button className={`wcc-cta-btn ${isVisible ? "vis" : ""}`}>
              Get a Free Consultation Overview
              <span className="wcc-cta-arr">→</span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="wcc-right">
            {points.map((pt, i) => (
              <div
                key={i}
                className={`wcc-card ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.08}s` : "0s" }}
              >
                <div className="wcc-card-icon">{pt.icon}</div>
                <span className="wcc-card-text">{pt.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
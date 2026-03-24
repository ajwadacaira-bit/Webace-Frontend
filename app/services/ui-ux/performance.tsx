"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    num: "01",
    title: "Higher Engagement",
    desc: "Users stay longer when design feels intuitive.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    stat: "↑3×",
    statLabel: "Time on site",
  },
  {
    num: "02",
    title: "Better Trust",
    desc: "Premium visuals increase confidence.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
    stat: "94%",
    statLabel: "First impressions are design-led",
  },
  {
    num: "03",
    title: "Higher Conversions",
    desc: "Optimized UI UX leads to more inquiries and sales.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    stat: "↑200%",
    statLabel: "Conversion lift from good UX",
  },
  {
    num: "04",
    title: "Stronger Brand Recognition",
    desc: "Consistency builds recall.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    stat: "3.5×",
    statLabel: "Brand recall with visual consistency",
  },
  {
    num: "05",
    title: "Improved Customer Experience",
    desc: "Smooth experiences create loyalty.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    stat: "↑67%",
    statLabel: "Repeat purchases with better UX",
  },
  {
    num: "06",
    title: "Higher ROI for Ads",
    desc: "Better UX multiplies the performance of all marketing campaigns.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    stat: "↑38%",
    statLabel: "Ad ROI with optimised landing pages",
  },
];

export default function UiUxPerformance() {
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

        .uup-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .uup-section::before {
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
        .uup-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .uup-orb.vis{opacity:1;}
        .uup-orb-1{
          width:400px;height:400px;top:-120px;right:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 70%);
          animation:floatOrb 11s ease-in-out infinite;
        }
        .uup-orb-2{
          width:260px;height:260px;bottom:80px;left:-70px;
          background:radial-gradient(circle,rgba(96,165,250,0.05) 0%,transparent 70%);
          animation:floatOrb 15s ease-in-out infinite reverse;
        }

        .uup-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .uup-header{text-align:center;margin-bottom:72px;}

        .uup-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .uup-eyebrow.vis{opacity:1;transform:translateY(0);}
        .uup-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .uup-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .uup-title.vis{opacity:1;transform:translateY(0);}
        .uup-title-accent{color:#2563eb;}

        /* GRID */
        .uup-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:18px;
        }
        @media(max-width:860px){.uup-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){.uup-grid{grid-template-columns:1fr;}}

        /* CARD */
        .uup-card{
          background:#fff;
          border:1px solid rgba(0,0,0,0.07);
          border-radius:22px;
          padding:32px 28px 28px;
          position:relative;overflow:hidden;cursor:default;
          display:flex;flex-direction:column;
          opacity:0;transform:translateY(32px);
          transition:
            opacity 0.7s ease,transform 0.7s ease,
            box-shadow 0.35s ease,border-color 0.35s ease;
        }
        .uup-card.vis{opacity:1;transform:translateY(0);}
        .uup-card:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.22);
          transform:translateY(-5px)!important;
        }

        /* top bar */
        .uup-card::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.45s ease;
          border-radius:22px 22px 0 0;
        }
        .uup-card:hover::before{transform:scaleX(1);}

        /* corner glow */
        .uup-glow{
          position:absolute;top:-50px;right:-50px;
          width:160px;height:160px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.07),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .uup-card:hover .uup-glow{opacity:1;}

        .uup-card-top{
          display:flex;align-items:center;justify-content:space-between;
          margin-bottom:20px;
        }

        .uup-icon{
          width:48px;height:48px;border-radius:14px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.3s ease,background 0.3s ease;
        }
        .uup-card:hover .uup-icon{
          transform:scale(1.08);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .uup-icon svg{width:22px;height:22px;color:#2563eb;}

        .uup-num{
          font-family:'Syne',sans-serif;
          font-size:12px;font-weight:700;letter-spacing:0.1em;
          color:rgba(0,0,0,0.15);transition:color 0.3s ease;
        }
        .uup-card:hover .uup-num{color:#2563eb;}

        .uup-card-title{
          font-family:'Syne',sans-serif;
          font-size:18px;font-weight:800;color:#111;
          margin-bottom:10px;line-height:1.3;
          transition:color 0.3s ease;
        }
        .uup-card:hover .uup-card-title{color:#2563eb;}

        .uup-card-desc{
          font-size:14px;color:#777;line-height:1.7;
          flex:1;
        }

        /* stat block at bottom */
        .uup-stat{
          margin-top:24px;padding-top:18px;
          border-top:1px solid rgba(0,0,0,0.06);
          display:flex;align-items:baseline;gap:10px;
        }
        .uup-stat-num{
          font-family:'Syne',sans-serif;
          font-size:26px;font-weight:800;color:#2563eb;
          line-height:1;
        }
        .uup-stat-label{font-size:12px;color:#aaa;line-height:1.4;}
      `}</style>

      <section className="uup-section" ref={sectionRef}>
        <div className={`uup-orb uup-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`uup-orb uup-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="uup-inner">

          {/* HEADER */}
          <div className="uup-header">
            <span className={`uup-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="uup-eyebrow-line" />
              The Business Case
              <span className="uup-eyebrow-line" />
            </span>
            <h2 className={`uup-title ${isVisible ? "vis" : ""}`}>
              How <span className="uup-title-accent">UI UX</span> Improves<br />Business Performance
            </h2>
          </div>

          {/* GRID */}
          <div className="uup-grid">
            {items.map((item, i) => (
              <div
                key={i}
                className={`uup-card ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.35 + i * 0.1}s` : "0s" }}
              >
                <div className="uup-glow" />

                <div className="uup-card-top">
                  <div className="uup-icon">{item.icon}</div>
                  <span className="uup-num">{item.num}</span>
                </div>

                <h3 className="uup-card-title">{item.title}</h3>
                <p className="uup-card-desc">{item.desc}</p>

                <div className="uup-stat">
                  <span className="uup-stat-num">{item.stat}</span>
                  <span className="uup-stat-label">{item.statLabel}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
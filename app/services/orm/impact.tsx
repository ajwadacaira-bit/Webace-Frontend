"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  { label: "Higher conversion rates", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "More website trust", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Better lead quality", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> },
  { label: "Stronger brand preference", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Higher purchase intent", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
  { label: "Better employee confidence", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: "Stronger customer loyalty", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
];

export default function OrmRevenueImpact() {
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

        .ori-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .ori-section::before {
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
        .ori-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .ori-orb.vis{opacity:1;}
        .ori-orb-1{
          width:420px;height:420px;top:-140px;left:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .ori-orb-2{
          width:260px;height:260px;bottom:60px;right:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .ori-inner{
          max-width:1100px;margin:0 auto;position:relative;
          display:grid;grid-template-columns:1fr 1fr;
          gap:72px;align-items:start;
        }
        @media(max-width:860px){.ori-inner{grid-template-columns:1fr;gap:48px;}}

        /* LEFT */
        .ori-left{position:sticky;top:100px;}

        .ori-num{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .ori-num.vis{opacity:1;transform:translateY(0);}
        .ori-num-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .ori-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(30px,4vw,48px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:20px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.12s,transform 0.85s ease 0.12s;
        }
        .ori-title.vis{opacity:1;transform:translateY(0);}
        .ori-title-accent{color:#2563eb;}

        .ori-tagline{
          font-size:16px;color:#2563eb;font-weight:500;
          margin-bottom:32px;line-height:1.5;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.22s,transform 0.8s ease 0.22s;
        }
        .ori-tagline.vis{opacity:1;transform:translateY(0);}

        /* stat cards */
        .ori-stats{
          display:grid;grid-template-columns:1fr 1fr;gap:14px;
          margin-bottom:36px;
          opacity:0;transform:translateY(16px);
          transition:opacity 0.8s ease 0.38s,transform 0.8s ease 0.38s;
        }
        .ori-stats.vis{opacity:1;transform:translateY(0);}

        .ori-stat{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:16px;padding:20px 18px;
          text-align:center;position:relative;overflow:hidden;
          transition:box-shadow 0.3s ease,border-color 0.3s ease,transform 0.3s ease;
        }
        .ori-stat:hover{
          box-shadow:0 12px 36px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.2);
          transform:translateY(-3px);
        }
        .ori-stat::after{
          content:'';position:absolute;bottom:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:0 0 16px 16px;
          transform:scaleX(0);transition:transform 0.4s ease;
        }
        .ori-stat:hover::after{transform:scaleX(1);}
        .ori-stat-num{
          font-family:'Syne',sans-serif;
          font-size:30px;font-weight:800;color:#2563eb;
          line-height:1;margin-bottom:6px;
        }
        .ori-stat-label{font-size:11.5px;color:#888;line-height:1.4;}

        .ori-conclusion{
          font-family:'Syne',sans-serif;
          font-size:17px;font-weight:800;color:#111;
          padding:22px 26px;
          border:1px solid rgba(37,99,235,0.15);
          border-left:3px solid #2563eb;
          border-radius:14px;background:rgba(37,99,235,0.03);
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.52s,transform 0.8s ease 0.52s;
        }
        .ori-conclusion.vis{opacity:1;transform:translateY(0);}

        /* RIGHT */
        .ori-right{display:flex;flex-direction:column;gap:24px;}

        .ori-panel{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:22px;padding:36px 32px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.75s ease,transform 0.75s ease,
            box-shadow 0.35s ease,border-color 0.35s ease;
        }
        .ori-panel.vis{opacity:1;transform:translateY(0);}
        .ori-panel:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.09);
          border-color:rgba(37,99,235,0.18);
        }
        .ori-panel::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }

        .ori-panel-label{
          font-size:11px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;color:#2563eb;margin-bottom:24px;
        }

        .ori-items{display:flex;flex-direction:column;gap:10px;}

        .ori-item{
          display:flex;align-items:center;gap:14px;
          padding:12px 16px;border-radius:12px;
          border:1px solid rgba(0,0,0,0.05);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .ori-item:hover{
          background:rgba(37,99,235,0.04);
          border-color:rgba(37,99,235,0.15);
          transform:translateX(4px);
        }
        .ori-item-icon{
          width:36px;height:36px;flex-shrink:0;border-radius:10px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease,background 0.25s ease;
        }
        .ori-item:hover .ori-item-icon{
          transform:scale(1.08);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .ori-item-icon svg{width:16px;height:16px;color:#2563eb;}
        .ori-item-text{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:700;color:#111;line-height:1.3;
          transition:color 0.25s ease;
        }
        .ori-item:hover .ori-item-text{color:#2563eb;}
      `}</style>

      <section className="ori-section" ref={sectionRef}>
        <div className={`ori-orb ori-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`ori-orb ori-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="ori-inner">

          {/* LEFT */}
          <div className="ori-left">
            <span className={`ori-num ${isVisible ? "vis" : ""}`}>
              <span className="ori-num-line" />
              Revenue Impact
              <span className="ori-num-line" />
            </span>

            <h2 className={`ori-title ${isVisible ? "vis" : ""}`}>
              How ORM Builds <span className="ori-title-accent">Trust</span> and Drives <span className="ori-title-accent">Revenue</span>
            </h2>

            <p className={`ori-tagline ${isVisible ? "vis" : ""}`}>
              Reputation is an indirect but powerful revenue driver.
            </p>

            <div className={`ori-stats ${isVisible ? "vis" : ""}`}>
              {[
                { num: "94%", label: "of consumers avoid brands with bad reviews" },
                { num: "3.3×", label: "more revenue from a strong reputation" },
                { num: "86%", label: "read reviews before contacting a business" },
                { num: "↑49%", label: "sales lift with active ORM strategy" },
              ].map((s, i) => (
                <div key={i} className="ori-stat">
                  <p className="ori-stat-num">{s.num}</p>
                  <p className="ori-stat-label">{s.label}</p>
                </div>
              ))}
            </div>

            <div className={`ori-conclusion ${isVisible ? "vis" : ""}`}>
              Reputation influences every stage of the customer decision cycle.
            </div>
          </div>

          {/* RIGHT */}
          <div className="ori-right">
            <div
              className={`ori-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="ori-panel-label">ORM directly delivers:</p>
              <div className="ori-items">
                {benefits.map((item, i) => (
                  <div key={i} className="ori-item">
                    <div className="ori-item-icon">{item.icon}</div>
                    <span className="ori-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
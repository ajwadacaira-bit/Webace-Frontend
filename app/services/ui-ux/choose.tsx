"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  { label: "Creative direction", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { label: "Conversion psychology", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { label: "Strong branding logic", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "High design standards", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { label: "Usability principles", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
];

export default function WhyChooseWebAceUIUX() {
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

        .wcw-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .wcw-section::before {
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
        .wcw-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .wcw-orb.vis{opacity:1;}
        .wcw-orb-1{
          width:420px;height:420px;top:-140px;left:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .wcw-orb-2{
          width:260px;height:260px;bottom:60px;right:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .wcw-inner{
          max-width:1100px;margin:0 auto;position:relative;
          display:grid;grid-template-columns:1fr 1fr;
          gap:72px;align-items:start;
        }
        @media(max-width:860px){.wcw-inner{grid-template-columns:1fr;gap:48px;}}

        /* LEFT */
        .wcw-left{position:sticky;top:100px;}

        .wcw-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wcw-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wcw-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .wcw-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,4.5vw,52px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:20px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.12s,transform 0.85s ease 0.12s;
        }
        .wcw-title.vis{opacity:1;transform:translateY(0);}
        .wcw-title-accent{color:#2563eb;}

        .wcw-tagline{
          font-size:16px;color:#555;line-height:1.8;
          margin-bottom:36px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.22s,transform 0.8s ease 0.22s;
        }
        .wcw-tagline.vis{opacity:1;transform:translateY(0);}

        /* promise card */
        .wcw-promise{
          background:#111;border-radius:18px;
          padding:28px 30px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.4s,transform 0.8s ease 0.4s;
        }
        .wcw-promise.vis{opacity:1;transform:translateY(0);}
        .wcw-promise::before{
          content:'';position:absolute;top:-60px;right:-40px;
          width:200px;height:200px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.2),transparent 70%);
          pointer-events:none;
        }
        .wcw-promise-label{
          font-size:10px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;
          margin-bottom:12px;position:relative;
        }
        .wcw-promise-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(16px,1.8vw,20px);font-weight:800;
          color:#fff;line-height:1.5;position:relative;
        }
        .wcw-promise-text span{color:#60a5fa;}

        /* RIGHT */
        .wcw-right{display:flex;flex-direction:column;gap:24px;}

        .wcw-panel{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:22px;padding:36px 32px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.75s ease,transform 0.75s ease,
            box-shadow 0.35s ease,border-color 0.35s ease;
        }
        .wcw-panel.vis{opacity:1;transform:translateY(0);}
        .wcw-panel:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.09);
          border-color:rgba(37,99,235,0.18);
        }
        .wcw-panel::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }

        .wcw-panel-label{
          font-size:11px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;color:#2563eb;margin-bottom:24px;
        }

        .wcw-items{display:flex;flex-direction:column;gap:12px;}

        .wcw-item{
          display:flex;align-items:center;gap:14px;
          padding:14px 18px;border-radius:13px;
          border:1px solid rgba(0,0,0,0.05);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .wcw-item:hover{
          background:rgba(37,99,235,0.04);
          border-color:rgba(37,99,235,0.15);
          transform:translateX(4px);
        }
        .wcw-icon{
          width:40px;height:40px;flex-shrink:0;border-radius:12px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease,background 0.25s ease;
        }
        .wcw-item:hover .wcw-icon{
          transform:scale(1.08);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .wcw-icon svg{width:18px;height:18px;color:#2563eb;}
        .wcw-item-text{
          font-family:'Syne',sans-serif;
          font-size:15px;font-weight:800;color:#111;
          line-height:1.3;transition:color 0.25s ease;
        }
        .wcw-item:hover .wcw-item-text{color:#2563eb;}

        /* closing stat card */
        .wcw-stat-card{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:22px;padding:36px 32px;
          position:relative;overflow:hidden;
          display:grid;grid-template-columns:1fr 1fr;gap:16px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.75s ease 0.58s,transform 0.75s ease 0.58s,
            box-shadow 0.35s ease,border-color 0.35s ease;
        }
        .wcw-stat-card.vis{opacity:1;transform:translateY(0);}
        .wcw-stat-card:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.09);
          border-color:rgba(37,99,235,0.18);
        }
        .wcw-stat-card::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }

        .wcw-stat{
          text-align:center;padding:18px 12px;
          border-radius:14px;border:1px solid rgba(0,0,0,0.05);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
        }
        .wcw-stat:hover{
          background:rgba(37,99,235,0.04);
          border-color:rgba(37,99,235,0.15);
          transform:translateY(-3px);
        }
        .wcw-stat-num{
          font-family:'Syne',sans-serif;
          font-size:28px;font-weight:800;color:#2563eb;
          line-height:1;margin-bottom:6px;
        }
        .wcw-stat-label{font-size:11.5px;color:#888;line-height:1.4;}
      `}</style>

      <section className="wcw-section" ref={sectionRef}>
        <div className={`wcw-orb wcw-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wcw-orb wcw-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wcw-inner">

          {/* LEFT */}
          <div className="wcw-left">
            <span className={`wcw-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wcw-eyebrow-line" />
              Our Difference
              <span className="wcw-eyebrow-line" />
            </span>

            <h2 className={`wcw-title ${isVisible ? "vis" : ""}`}>
              Why Choose <span className="wcw-title-accent">WebAce</span> for UI UX
            </h2>

            <p className={`wcw-tagline ${isVisible ? "vis" : ""}`}>
              We design experiences that help your brand grow faster and feel premium.
            </p>

            <div className={`wcw-promise ${isVisible ? "vis" : ""}`}>
              <p className="wcw-promise-label">Our philosophy</p>
              <p className="wcw-promise-text">
                Design is not just how it looks —<br />
                it's how it <span>performs.</span>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="wcw-right">

            <div
              className={`wcw-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="wcw-panel-label">We blend:</p>
              <div className="wcw-items">
                {points.map((pt, i) => (
                  <div key={i} className="wcw-item">
                    <div className="wcw-icon">{pt.icon}</div>
                    <span className="wcw-item-text">{pt.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`wcw-stat-card ${isVisible ? "vis" : ""}`}>
              {[
                { num: "↑200%", label: "Average conversion improvement" },
                { num: "94%", label: "Of first impressions are visual" },
                { num: "3.5×", label: "Brand recall with consistency" },
                { num: "↑38%", label: "Ad ROI with optimised UX" },
              ].map((s, i) => (
                <div key={i} className="wcw-stat">
                  <p className="wcw-stat-num">{s.num}</p>
                  <p className="wcw-stat-label">{s.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
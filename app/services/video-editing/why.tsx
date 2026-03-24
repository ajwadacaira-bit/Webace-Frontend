"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  { label: "Clean, modern editing style", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { label: "Deep understanding of audience behavior", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: "Premium storytelling and visual clarity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { label: "Conversion oriented creative structure", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { label: "Consistent brand alignment", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: "Fast turnaround with high precision", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
];

export default function WhyChooseWebAceVideo() {
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

        .wcv-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .wcv-section::before {
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
        .wcv-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .wcv-orb.vis{opacity:1;}
        .wcv-orb-1{
          width:420px;height:420px;top:-140px;left:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .wcv-orb-2{
          width:260px;height:260px;bottom:60px;right:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .wcv-inner{
          max-width:1100px;margin:0 auto;position:relative;
          display:grid;grid-template-columns:1fr 1fr;
          gap:72px;align-items:start;
        }
        @media(max-width:860px){.wcv-inner{grid-template-columns:1fr;gap:48px;}}

        /* LEFT */
        .wcv-left{position:sticky;top:100px;}

        .wcv-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .wcv-eyebrow.vis{opacity:1;transform:translateY(0);}
        .wcv-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .wcv-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,4.5vw,52px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:20px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.12s,transform 0.85s ease 0.12s;
        }
        .wcv-title.vis{opacity:1;transform:translateY(0);}
        .wcv-title-accent{color:#2563eb;}

        .wcv-tagline{
          font-size:15px;color:#555;line-height:1.8;
          margin-bottom:36px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.22s,transform 0.8s ease 0.22s;
        }
        .wcv-tagline.vis{opacity:1;transform:translateY(0);}

        /* stat grid */
        .wcv-stats{
          display:grid;grid-template-columns:1fr 1fr;gap:14px;
          opacity:0;transform:translateY(16px);
          transition:opacity 0.8s ease 0.38s,transform 0.8s ease 0.38s;
        }
        .wcv-stats.vis{opacity:1;transform:translateY(0);}

        .wcv-stat{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:16px;padding:20px 18px;
          text-align:center;position:relative;overflow:hidden;
          transition:box-shadow 0.3s ease,border-color 0.3s ease,transform 0.3s ease;
        }
        .wcv-stat:hover{
          box-shadow:0 12px 36px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.2);
          transform:translateY(-3px);
        }
        .wcv-stat::after{
          content:'';position:absolute;bottom:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:0 0 16px 16px;
          transform:scaleX(0);transition:transform 0.4s ease;
        }
        .wcv-stat:hover::after{transform:scaleX(1);}
        .wcv-stat-num{
          font-family:'Syne',sans-serif;
          font-size:30px;font-weight:800;color:#2563eb;
          line-height:1;margin-bottom:6px;
        }
        .wcv-stat-label{font-size:11.5px;color:#888;line-height:1.4;}

        /* RIGHT */
        .wcv-right{display:flex;flex-direction:column;gap:24px;}

        .wcv-panel{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:22px;padding:36px 32px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.75s ease,transform 0.75s ease,
            box-shadow 0.35s ease,border-color 0.35s ease;
        }
        .wcv-panel.vis{opacity:1;transform:translateY(0);}
        .wcv-panel:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.09);
          border-color:rgba(37,99,235,0.18);
        }
        .wcv-panel::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }

        .wcv-panel-label{
          font-size:11px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;color:#2563eb;margin-bottom:24px;
        }

        .wcv-items{display:flex;flex-direction:column;gap:12px;}

        .wcv-item{
          display:flex;align-items:center;gap:14px;
          padding:14px 18px;border-radius:13px;
          border:1px solid rgba(0,0,0,0.05);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .wcv-item:hover{
          background:rgba(37,99,235,0.04);
          border-color:rgba(37,99,235,0.15);
          transform:translateX(4px);
        }
        .wcv-icon{
          width:40px;height:40px;flex-shrink:0;border-radius:12px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease,background 0.25s ease;
        }
        .wcv-item:hover .wcv-icon{
          transform:scale(1.08);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .wcv-icon svg{width:18px;height:18px;color:#2563eb;}
        .wcv-item-text{
          font-family:'Syne',sans-serif;
          font-size:14.5px;font-weight:800;color:#111;
          line-height:1.3;transition:color 0.25s ease;
        }
        .wcv-item:hover .wcv-item-text{color:#2563eb;}

        /* promise */
        .wcv-promise{
          background:#111;border-radius:18px;
          padding:28px 30px;position:relative;overflow:hidden;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.75s ease 0.58s,transform 0.75s ease 0.58s;
        }
        .wcv-promise.vis{opacity:1;transform:translateY(0);}
        .wcv-promise::before{
          content:'';position:absolute;top:-60px;right:-40px;
          width:200px;height:200px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.2),transparent 70%);
          pointer-events:none;
        }
        .wcv-promise-label{
          font-size:10px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;
          margin-bottom:12px;position:relative;
        }
        .wcv-promise-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(16px,1.8vw,20px);font-weight:800;
          color:#fff;line-height:1.5;position:relative;
        }
        .wcv-promise-text span{color:#60a5fa;}
      `}</style>

      <section className="wcv-section" ref={sectionRef}>
        <div className={`wcv-orb wcv-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`wcv-orb wcv-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="wcv-inner">

          {/* LEFT */}
          <div className="wcv-left">
            <span className={`wcv-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="wcv-eyebrow-line" />
              Our Difference
              <span className="wcv-eyebrow-line" />
            </span>

            <h2 className={`wcv-title ${isVisible ? "vis" : ""}`}>
              Why Choose <span className="wcv-title-accent">WebAce</span> for Video Editing
            </h2>

            <p className={`wcv-tagline ${isVisible ? "vis" : ""}`}>
              We turn complex footage into clear, compelling and polished videos that elevate your brand identity.
            </p>

            <div className={`wcv-stats ${isVisible ? "vis" : ""}`}>
              {[
                { num: "16+", label: "Video service types offered" },
                { num: "↑80%", label: "Higher engagement with professional edits" },
                { num: "2×", label: "Faster delivery than industry average" },
                { num: "100%", label: "Brand-aligned output every time" },
              ].map((s, i) => (
                <div key={i} className="wcv-stat">
                  <p className="wcv-stat-num">{s.num}</p>
                  <p className="wcv-stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="wcv-right">

            <div
              className={`wcv-panel ${isVisible ? "vis" : ""}`}
              style={{ transitionDelay: isVisible ? "0.42s" : "0s" }}
            >
              <p className="wcv-panel-label">We bring:</p>
              <div className="wcv-items">
                {points.map((pt, i) => (
                  <div key={i} className="wcv-item">
                    <div className="wcv-icon">{pt.icon}</div>
                    <span className="wcv-item-text">{pt.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`wcv-promise ${isVisible ? "vis" : ""}`}>
              <p className="wcv-promise-label">Our guarantee</p>
              <p className="wcv-promise-text">
                Every video we edit is crafted to <span>perform,</span> not just to look good.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
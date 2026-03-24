"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Reputation Monitoring Across All Platforms",
    desc: "We watch every space where your brand appears — social, search, forums, news and review sites — in real time.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    num: "02",
    title: "SERP Cleanup and Improvement",
    desc: "We suppress negative links and promote positive assets on page one of Google.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    num: "03",
    title: "Review and Rating Upgrades",
    desc: "We build trust by improving your ratings where customers notice most.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    num: "04",
    title: "Social Reputation Handling",
    desc: "We manage conversations, comments and customer interactions across all platforms.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    num: "05",
    title: "Content Driven Reputation Enhancement",
    desc: "We build articles, profiles, posts and PR that strengthen your narrative.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  },
  {
    num: "06",
    title: "Personal Branding for Key Individuals",
    desc: "We position founders and leaders as credible, knowledgeable and trustworthy.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>,
  },
  {
    num: "07",
    title: "Crisis Management",
    desc: "We create structured responses and action plans for high risk situations.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  },
  {
    num: "08",
    title: "AI-Assisted Insight",
    desc: "Used only for sentiment detection and review pattern analysis.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    num: "09",
    title: "Transparent Reporting",
    desc: "You receive clear monthly updates on reputation progress.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
];

export default function OrmApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .oa2-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .oa2-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 10%, rgba(37,99,235,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 90%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        @keyframes floatOrb {
          0%,100%{transform:translateY(0) scale(1);}
          50%{transform:translateY(-22px) scale(1.05);}
        }
        .oa2-orb {
          position:absolute;border-radius:50%;
          pointer-events:none;opacity:0;transition:opacity 1.4s ease;
        }
        .oa2-orb.vis{opacity:1;}
        .oa2-orb-1{
          width:500px;height:500px;top:-160px;right:-140px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 13s ease-in-out infinite;
        }
        .oa2-orb-2{
          width:300px;height:300px;bottom:80px;left:-90px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 17s ease-in-out infinite reverse;
        }

        .oa2-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .oa2-header {
          display:grid; grid-template-columns:1fr 1fr;
          gap:56px; align-items:end;
          margin-bottom:72px; padding-bottom:48px;
          border-bottom:1px solid rgba(0,0,0,0.07);
        }
        @media(max-width:720px){.oa2-header{grid-template-columns:1fr;gap:24px;}}

        .oa2-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:18px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .oa2-eyebrow.vis{opacity:1;transform:translateY(0);}
        .oa2-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#2563eb;flex-shrink:0;}

        .oa2-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.05;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .oa2-title.vis{opacity:1;transform:translateY(0);}
        .oa2-title-accent{color:#2563eb;}

        .oa2-header-right{
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .oa2-header-right.vis{opacity:1;transform:translateY(0);}
        .oa2-header-desc{font-size:15px;color:#555;line-height:1.8;margin-bottom:12px;}
        .oa2-header-note{
          font-size:13.5px;color:#888;line-height:1.7;
          padding:16px 20px;
          background:#f8f9fc;border-radius:12px;
          border-left:3px solid rgba(37,99,235,0.2);
        }

        /* BENTO */
        .oa2-bento{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
          margin-bottom:64px;
        }
        @media(max-width:860px){
          .oa2-bento{grid-template-columns:repeat(2,1fr);}
          .oa2-c-large,.oa2-c-full{grid-column:span 2;}
        }
        @media(max-width:540px){
          .oa2-bento{grid-template-columns:1fr;}
          .oa2-c-large,.oa2-c-full{grid-column:span 1;}
        }

        .oa2-c-large{grid-column:span 2;}
        .oa2-c-full{
          grid-column:span 3;
          display:flex;align-items:center;gap:40px;
        }
        @media(max-width:860px){.oa2-c-full{flex-direction:column;gap:20px;}}

        /* BASE */
        .oa2-card{
          border-radius:22px;padding:32px 28px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.65s ease,transform 0.65s ease,
            box-shadow 0.3s ease,border-color 0.3s ease;
        }
        .oa2-card.vis{opacity:1;transform:translateY(0);}

        /* LIGHT */
        .oa2-light{background:#fff;border:1px solid rgba(0,0,0,0.07);}
        .oa2-light:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.22);
          transform:translateY(-4px)!important;
        }
        .oa2-light::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.4s ease;border-radius:22px 22px 0 0;
        }
        .oa2-light:hover::before{transform:scaleX(1);}
        .oa2-glow{
          position:absolute;top:-50px;right:-50px;
          width:160px;height:160px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.07),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .oa2-light:hover .oa2-glow{opacity:1;}

        /* DARK */
        .oa2-dark{background:#111;border:1px solid rgba(255,255,255,0.05);}
        .oa2-dark:hover{
          box-shadow:0 20px 56px rgba(0,0,0,0.25);
          border-color:rgba(37,99,235,0.3);
          transform:translateY(-4px)!important;
        }
        .oa2-dark::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }

        /* FULL DARK */
        .oa2-full-dark{
          background:#111;border:1px solid rgba(255,255,255,0.05);
        }
        .oa2-full-dark::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }
        .oa2-full-dark:hover{
          box-shadow:0 20px 56px rgba(0,0,0,0.25);
          border-color:rgba(37,99,235,0.3);
          transform:translateY(-4px)!important;
        }

        /* watermark */
        .oa2-wm{
          position:absolute;bottom:12px;right:20px;
          font-family:'Syne',sans-serif;font-size:64px;font-weight:800;
          line-height:1;user-select:none;pointer-events:none;
        }
        .oa2-light .oa2-wm{color:rgba(0,0,0,0.03);}
        .oa2-dark .oa2-wm,.oa2-full-dark .oa2-wm{color:rgba(255,255,255,0.03);}

        /* icon */
        .oa2-icon{
          width:50px;height:50px;flex-shrink:0;border-radius:14px;
          display:flex;align-items:center;justify-content:center;
          margin-bottom:20px;transition:transform 0.3s ease;
        }
        .oa2-light .oa2-icon{background:linear-gradient(135deg,#eff6ff,#dbeafe);}
        .oa2-dark .oa2-icon,.oa2-full-dark .oa2-icon{background:rgba(37,99,235,0.2);}
        .oa2-card:hover .oa2-icon{transform:scale(1.08);}
        .oa2-icon svg{width:22px;height:22px;}
        .oa2-light .oa2-icon svg{color:#2563eb;}
        .oa2-dark .oa2-icon svg,.oa2-full-dark .oa2-icon svg{color:#60a5fa;}

        /* full dark big icon */
        .oa2-big-icon{
          width:72px;height:72px;flex-shrink:0;border-radius:20px;
          background:rgba(37,99,235,0.15);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.3s ease;
        }
        .oa2-card:hover .oa2-big-icon{transform:scale(1.05);}
        .oa2-big-icon svg{width:32px;height:32px;color:#60a5fa;}

        /* step label */
        .oa2-lbl{
          font-size:10px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;margin-bottom:8px;
        }
        .oa2-light .oa2-lbl{color:#2563eb;}
        .oa2-dark .oa2-lbl,.oa2-full-dark .oa2-lbl{color:#60a5fa;}

        /* title */
        .oa2-ctitle{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.6vw,18px);font-weight:800;
          line-height:1.3;margin-bottom:10px;transition:color 0.3s ease;
        }
        .oa2-light .oa2-ctitle{color:#111;}
        .oa2-light:hover .oa2-ctitle{color:#2563eb;}
        .oa2-dark .oa2-ctitle,.oa2-full-dark .oa2-ctitle{color:#fff;}

        .oa2-fdesc{font-size:13.5px;line-height:1.65;}
        .oa2-light .oa2-fdesc{color:#777;}
        .oa2-dark .oa2-fdesc,.oa2-full-dark .oa2-fdesc{color:rgba(255,255,255,0.45);}

        /* full dark text side */
        .oa2-full-body{flex:1;position:relative;}
        .oa2-full-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(18px,2.2vw,26px);font-weight:800;
          color:#fff;margin-bottom:10px;line-height:1.2;
        }
        .oa2-full-desc{font-size:15px;color:rgba(255,255,255,0.45);line-height:1.7;}

        /* CTA */
        .oa2-cta{
          background:#111;border-radius:24px;
          padding:48px 56px;display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .oa2-cta.vis{opacity:1;transform:translateY(0);}
        .oa2-cta::before{
          content:'';position:absolute;top:-80px;right:-60px;
          width:300px;height:300px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:600px){.oa2-cta{flex-direction:column;text-align:center;padding:40px 28px;}}
        .oa2-cta-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;position:relative;
        }
        .oa2-cta-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;position:relative;
        }
        .oa2-btn{
          flex-shrink:0;display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:15px 26px 15px 30px;white-space:nowrap;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .oa2-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .oa2-arr{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .oa2-btn:hover .oa2-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="oa2-section" ref={sectionRef}>
        <div className={`oa2-orb oa2-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`oa2-orb oa2-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="oa2-inner">

          {/* HEADER */}
          <div className="oa2-header">
            <div>
              <div className={`oa2-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="oa2-eyebrow-dot" />
                How We Work
              </div>
              <h2 className={`oa2-title ${isVisible ? "vis" : ""}`}>
                Our <span className="oa2-title-accent">ORM</span><br />Approach
              </h2>
            </div>
            <div className={`oa2-header-right ${isVisible ? "vis" : ""}`}>
              <p className="oa2-header-desc">Monitor, protect, repair and elevate your brand reputation across all digital channels.</p>
              <p className="oa2-header-note">ORM is a proactive and reactive process that requires strategy, communication, monitoring and brand sensitivity.</p>
            </div>
          </div>

          {/* BENTO */}
          <div className="oa2-bento">

            {/* Row 1: large light + dark */}
            <div className={`oa2-card oa2-light oa2-c-large ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.35s" : "0s" }}>
              <div className="oa2-glow" /><span className="oa2-wm">01</span>
              <div className="oa2-icon">{steps[0].icon}</div>
              <p className="oa2-lbl">Step 01</p>
              <p className="oa2-ctitle">{steps[0].title}</p>
              <p className="oa2-fdesc">{steps[0].desc}</p>
            </div>
            <div className={`oa2-card oa2-dark ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.43s" : "0s" }}>
              <span className="oa2-wm">02</span>
              <div className="oa2-icon">{steps[1].icon}</div>
              <p className="oa2-lbl">Step 02</p>
              <p className="oa2-ctitle">{steps[1].title}</p>
              <p className="oa2-fdesc">{steps[1].desc}</p>
            </div>

            {/* Row 2: 3 light */}
            {[steps[2], steps[3], steps[4]].map((s, i) => (
              <div key={i} className={`oa2-card oa2-light ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? `${0.51 + i * 0.08}s` : "0s" }}>
                <div className="oa2-glow" /><span className="oa2-wm">0{i + 3}</span>
                <div className="oa2-icon">{s.icon}</div>
                <p className="oa2-lbl">Step 0{i + 3}</p>
                <p className="oa2-ctitle">{s.title}</p>
                <p className="oa2-fdesc">{s.desc}</p>
              </div>
            ))}

            {/* Row 3: dark + 2 light */}
            <div className={`oa2-card oa2-dark ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.75s" : "0s" }}>
              <span className="oa2-wm">06</span>
              <div className="oa2-icon">{steps[5].icon}</div>
              <p className="oa2-lbl">Step 06</p>
              <p className="oa2-ctitle">{steps[5].title}</p>
              <p className="oa2-fdesc">{steps[5].desc}</p>
            </div>
            {[steps[6], steps[7]].map((s, i) => (
              <div key={i} className={`oa2-card oa2-light ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? `${0.83 + i * 0.08}s` : "0s" }}>
                <div className="oa2-glow" /><span className="oa2-wm">0{i + 7}</span>
                <div className="oa2-icon">{s.icon}</div>
                <p className="oa2-lbl">Step 0{i + 7}</p>
                <p className="oa2-ctitle">{s.title}</p>
                <p className="oa2-fdesc">{s.desc}</p>
              </div>
            ))}

            {/* Row 4: full-width dark */}
            <div className={`oa2-card oa2-full-dark oa2-c-full ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.99s" : "0s" }}>
              <span className="oa2-wm">09</span>
              <div className="oa2-big-icon">{steps[8].icon}</div>
              <div className="oa2-full-body">
                <p className="oa2-lbl">Step 09</p>
                <p className="oa2-full-title">{steps[8].title}</p>
                <p className="oa2-full-desc">{steps[8].desc}</p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className={`oa2-cta ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "1.1s" : "0s" }}>
            <div>
              <p className="oa2-cta-label">Take the next step</p>
              <p className="oa2-cta-text">Want to track your reputation health?</p>
            </div>
            <button className="oa2-btn">
              Get Your ORM Report
              <span className="oa2-arr">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
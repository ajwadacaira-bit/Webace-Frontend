"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "User Understanding",
    desc: "Design begins with empathy. We study your users before touching a single pixel.",
    bullets: ["User motivations", "Behaviour patterns", "Drop off points", "Interaction flow"],
    conclusion: "Design begins with empathy.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    size: "large",
  },
  {
    num: "02",
    title: "Story Driven Visual Identity",
    desc: "We turn your brand story into a visual system that feels premium and consistent.",
    bullets: [],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    size: "dark",
  },
  {
    num: "03",
    title: "Wireframes for Functional Flow",
    desc: "Every structure is mapped before color and design are added.",
    bullets: [],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    size: "normal",
  },
  {
    num: "04",
    title: "Conversion Led Thinking",
    desc: "UI UX is crafted to influence action, trust, clarity and ease.",
    bullets: ["Action", "Trust", "Clarity", "Ease"],
    conclusion: "Great design increases business results.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    size: "normal",
  },
  {
    num: "05",
    title: "Mobile First Execution",
    desc: "Modern users browse predominantly on mobile. We design for them first.",
    bullets: [],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    size: "dark",
  },
  {
    num: "06",
    title: "Multi Platform Visual Consistency",
    desc: "Your brand must feel the same everywhere — web, mobile, social and print.",
    bullets: [],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    size: "normal",
  },
  {
    num: "07",
    title: "Minimal AI Insights for Improvement",
    desc: "Light use of AI for heatmap prediction, behaviour analysis and layout suggestions. All decisions remain human led.",
    bullets: ["Heatmap prediction", "Behaviour analysis", "Layout suggestion"],
    conclusion: "All decisions remain human led.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    size: "normal",
  },
  {
    num: "08",
    title: "Testing and Iteration",
    desc: "Continuous refinement improves conversions and user happiness.",
    bullets: [],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>,
    size: "large-dark",
  },
];

export default function UiUxApproach() {
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

        .uua-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .uua-section::before {
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
        .uua-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .uua-orb.vis{opacity:1;}
        .uua-orb-1{
          width:500px;height:500px;top:-160px;right:-140px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 13s ease-in-out infinite;
        }
        .uua-orb-2{
          width:300px;height:300px;bottom:80px;left:-90px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 17s ease-in-out infinite reverse;
        }

        .uua-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .uua-header{
          display:grid;grid-template-columns:1fr 1fr;
          gap:56px;align-items:end;
          margin-bottom:72px;padding-bottom:48px;
          border-bottom:1px solid rgba(0,0,0,0.07);
        }
        @media(max-width:720px){.uua-header{grid-template-columns:1fr;gap:24px;}}

        .uua-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:18px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .uua-eyebrow.vis{opacity:1;transform:translateY(0);}
        .uua-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#2563eb;flex-shrink:0;}

        .uua-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.05;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .uua-title.vis{opacity:1;transform:translateY(0);}
        .uua-title-accent{color:#2563eb;}

        .uua-header-right{
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .uua-header-right.vis{opacity:1;transform:translateY(0);}
        .uua-header-sub{font-size:15px;color:#555;line-height:1.8;margin-bottom:12px;}
        .uua-header-note{
          font-size:13.5px;color:#888;line-height:1.7;
          padding:16px 20px;background:#fff;border-radius:12px;
          border-left:3px solid rgba(37,99,235,0.2);
        }

        /* BENTO */
        .uua-bento{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
          margin-bottom:64px;
        }
        @media(max-width:860px){
          .uua-bento{grid-template-columns:repeat(2,1fr);}
          .uua-c-large,.uua-c-full{grid-column:span 2;}
        }
        @media(max-width:540px){
          .uua-bento{grid-template-columns:1fr;}
          .uua-c-large,.uua-c-full{grid-column:span 1;}
        }

        .uua-c-large{grid-column:span 2;}
        .uua-c-full{
          grid-column:span 3;
          display:flex;align-items:center;gap:40px;
        }
        @media(max-width:860px){.uua-c-full{flex-direction:column;gap:20px;}}

        /* BASE CARD */
        .uua-card{
          border-radius:22px;padding:32px 28px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.65s ease,transform 0.65s ease,
            box-shadow 0.3s ease,border-color 0.3s ease;
        }
        .uua-card.vis{opacity:1;transform:translateY(0);}

        /* LIGHT */
        .uua-light{background:#fff;border:1px solid rgba(0,0,0,0.07);}
        .uua-light:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.22);
          transform:translateY(-4px)!important;
        }
        .uua-light::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.4s ease;border-radius:22px 22px 0 0;
        }
        .uua-light:hover::before{transform:scaleX(1);}
        .uua-glow{
          position:absolute;top:-50px;right:-50px;
          width:160px;height:160px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.07),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .uua-light:hover .uua-glow{opacity:1;}

        /* DARK */
        .uua-dark{background:#111;border:1px solid rgba(255,255,255,0.05);}
        .uua-dark:hover{
          box-shadow:0 20px 56px rgba(0,0,0,0.25);
          border-color:rgba(37,99,235,0.3);
          transform:translateY(-4px)!important;
        }
        .uua-dark::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }

        /* FULL DARK */
        .uua-full-dark{
          background:#111;border:1px solid rgba(255,255,255,0.05);
        }
        .uua-full-dark::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }
        .uua-full-dark:hover{
          box-shadow:0 20px 56px rgba(0,0,0,0.25);
          border-color:rgba(37,99,235,0.3);
          transform:translateY(-4px)!important;
        }

        /* watermark */
        .uua-wm{
          position:absolute;bottom:12px;right:20px;
          font-family:'Syne',sans-serif;font-size:64px;font-weight:800;
          line-height:1;user-select:none;pointer-events:none;
        }
        .uua-light .uua-wm{color:rgba(0,0,0,0.03);}
        .uua-dark .uua-wm,.uua-full-dark .uua-wm{color:rgba(255,255,255,0.03);}

        /* icon */
        .uua-icon{
          width:50px;height:50px;flex-shrink:0;border-radius:14px;
          display:flex;align-items:center;justify-content:center;
          margin-bottom:20px;transition:transform 0.3s ease;
        }
        .uua-light .uua-icon{background:linear-gradient(135deg,#eff6ff,#dbeafe);}
        .uua-dark .uua-icon,.uua-full-dark .uua-icon{background:rgba(37,99,235,0.2);}
        .uua-card:hover .uua-icon{transform:scale(1.08);}
        .uua-icon svg{width:22px;height:22px;}
        .uua-light .uua-icon svg{color:#2563eb;}
        .uua-dark .uua-icon svg,.uua-full-dark .uua-icon svg{color:#60a5fa;}

        /* full dark big icon */
        .uua-big-icon{
          width:72px;height:72px;flex-shrink:0;border-radius:20px;
          background:rgba(37,99,235,0.15);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.3s ease;
        }
        .uua-card:hover .uua-big-icon{transform:scale(1.05);}
        .uua-big-icon svg{width:32px;height:32px;color:#60a5fa;}

        /* step label */
        .uua-lbl{
          font-size:10px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;margin-bottom:8px;
        }
        .uua-light .uua-lbl{color:#2563eb;}
        .uua-dark .uua-lbl,.uua-full-dark .uua-lbl{color:#60a5fa;}

        /* title */
        .uua-ctitle{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.6vw,18px);font-weight:800;
          line-height:1.3;margin-bottom:10px;transition:color 0.3s ease;
        }
        .uua-light .uua-ctitle{color:#111;}
        .uua-light:hover .uua-ctitle{color:#2563eb;}
        .uua-dark .uua-ctitle,.uua-full-dark .uua-ctitle{color:#fff;}

        /* desc */
        .uua-desc{font-size:13.5px;line-height:1.65;margin-bottom:14px;}
        .uua-light .uua-desc{color:#777;}
        .uua-dark .uua-desc,.uua-full-dark .uua-desc{color:rgba(255,255,255,0.45);}

        /* inline bullets */
        .uua-pills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;}
        .uua-pill-item{
          font-size:12px;font-weight:500;
          padding:5px 12px;border-radius:100px;
        }
        .uua-light .uua-pill-item{
          background:rgba(37,99,235,0.07);color:#2563eb;
          border:1px solid rgba(37,99,235,0.15);
        }
        .uua-dark .uua-pill-item,.uua-full-dark .uua-pill-item{
          background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);
          border:1px solid rgba(255,255,255,0.1);
        }

        /* conclusion */
        .uua-conclusion{
          font-family:'Syne',sans-serif;
          font-size:12px;font-weight:700;
        }
        .uua-light .uua-conclusion{color:#2563eb;}
        .uua-dark .uua-conclusion,.uua-full-dark .uua-conclusion{color:#60a5fa;}

        /* full dark text */
        .uua-full-body{flex:1;position:relative;}
        .uua-full-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(18px,2.2vw,26px);font-weight:800;
          color:#fff;margin-bottom:10px;line-height:1.2;
        }
        .uua-full-desc{font-size:15px;color:rgba(255,255,255,0.45);line-height:1.7;}

        /* CTA */
        .uua-cta{
          background:#111;border-radius:24px;
          padding:48px 56px;display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .uua-cta.vis{opacity:1;transform:translateY(0);}
        .uua-cta::before{
          content:'';position:absolute;top:-80px;right:-60px;
          width:300px;height:300px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:600px){.uua-cta{flex-direction:column;text-align:center;padding:40px 28px;}}
        .uua-cta-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;position:relative;
        }
        .uua-cta-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;position:relative;
        }
        .uua-cta-text span{color:#60a5fa;}
        .uua-btn{
          flex-shrink:0;display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:15px 26px 15px 30px;white-space:nowrap;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .uua-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .uua-arr{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .uua-btn:hover .uua-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="uua-section" ref={sectionRef}>
        <div className={`uua-orb uua-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`uua-orb uua-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="uua-inner">

          {/* HEADER */}
          <div className="uua-header">
            <div>
              <div className={`uua-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="uua-eyebrow-dot" />
                How We Work
              </div>
              <h2 className={`uua-title ${isVisible ? "vis" : ""}`}>
                Our <span className="uua-title-accent">UI UX</span><br />Approach
              </h2>
            </div>
            <div className={`uua-header-right ${isVisible ? "vis" : ""}`}>
              <p className="uua-header-sub">A fusion of strategy, creativity, psychology and performance.</p>
              <p className="uua-header-note">We design experiences that feel human, intentional and conversion ready.</p>
            </div>
          </div>

          {/* BENTO */}
          <div className="uua-bento">

            {/* 01 large light */}
            <div className={`uua-card uua-light uua-c-large ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.35s" : "0s" }}>
              <div className="uua-glow" /><span className="uua-wm">01</span>
              <div className="uua-icon">{steps[0].icon}</div>
              <p className="uua-lbl">Step 01</p>
              <p className="uua-ctitle">{steps[0].title}</p>
              <p className="uua-desc">{steps[0].desc}</p>
              <div className="uua-pills">
                {steps[0].bullets.map((b, i) => <span key={i} className="uua-pill-item">{b}</span>)}
              </div>
              <p className="uua-conclusion">{steps[0].conclusion}</p>
            </div>

            {/* 02 dark */}
            <div className={`uua-card uua-dark ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.43s" : "0s" }}>
              <span className="uua-wm">02</span>
              <div className="uua-icon">{steps[1].icon}</div>
              <p className="uua-lbl">Step 02</p>
              <p className="uua-ctitle">{steps[1].title}</p>
              <p className="uua-desc">{steps[1].desc}</p>
            </div>

            {/* 03 04 light */}
            {[steps[2], steps[3]].map((s, i) => (
              <div key={i} className={`uua-card uua-light ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? `${0.51 + i * 0.08}s` : "0s" }}>
                <div className="uua-glow" /><span className="uua-wm">0{i + 3}</span>
                <div className="uua-icon">{s.icon}</div>
                <p className="uua-lbl">Step 0{i + 3}</p>
                <p className="uua-ctitle">{s.title}</p>
                <p className="uua-desc">{s.desc}</p>
                {s.bullets.length > 0 && (
                  <div className="uua-pills">
                    {s.bullets.map((b, j) => <span key={j} className="uua-pill-item">{b}</span>)}
                  </div>
                )}
                {s.conclusion && <p className="uua-conclusion">{s.conclusion}</p>}
              </div>
            ))}

            {/* 05 dark */}
            <div className={`uua-card uua-dark ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.67s" : "0s" }}>
              <span className="uua-wm">05</span>
              <div className="uua-icon">{steps[4].icon}</div>
              <p className="uua-lbl">Step 05</p>
              <p className="uua-ctitle">{steps[4].title}</p>
              <p className="uua-desc">{steps[4].desc}</p>
            </div>

            {/* 06 07 light */}
            {[steps[5], steps[6]].map((s, i) => (
              <div key={i} className={`uua-card uua-light ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? `${0.75 + i * 0.08}s` : "0s" }}>
                <div className="uua-glow" /><span className="uua-wm">0{i + 6}</span>
                <div className="uua-icon">{s.icon}</div>
                <p className="uua-lbl">Step 0{i + 6}</p>
                <p className="uua-ctitle">{s.title}</p>
                <p className="uua-desc">{s.desc}</p>
                {s.bullets.length > 0 && (
                  <div className="uua-pills">
                    {s.bullets.map((b, j) => <span key={j} className="uua-pill-item">{b}</span>)}
                  </div>
                )}
                {s.conclusion && <p className="uua-conclusion">{s.conclusion}</p>}
              </div>
            ))}

            {/* 08 full-width dark */}
            <div className={`uua-card uua-full-dark uua-c-full ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.91s" : "0s" }}>
              <span className="uua-wm">08</span>
              <div className="uua-big-icon">{steps[7].icon}</div>
              <div className="uua-full-body">
                <p className="uua-lbl">Step 08</p>
                <p className="uua-full-title">{steps[7].title}</p>
                <p className="uua-full-desc">{steps[7].desc}</p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className={`uua-cta ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "1.05s" : "0s" }}>
            <div>
              <p className="uua-cta-label">Let's build together</p>
              <p className="uua-cta-text">Want a design that <span>converts and delights?</span></p>
            </div>
            <button className="uua-btn">
              Request a Free Design Audit
              <span className="uua-arr">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
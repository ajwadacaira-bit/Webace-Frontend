"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Understanding Your Video Objective",
    intro: "Every project begins with understanding your goal:",
    pills: ["Awareness", "Engagement", "Education", "Conversion", "Social growth", "Product promotion"],
    conclusion: "Your objective shapes the editing style, pacing and visual communication.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    size: "large",
  },
  {
    num: "02",
    title: "Story Structuring and Scripting Support",
    intro: "We create a strong hook, clear narrative path and engaging pacing.",
    pills: ["Strong hook", "Clear narrative", "Clean transitions", "Logical flow"],
    conclusion: "A well structured video improves retention.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    size: "dark",
  },
  {
    num: "03",
    title: "Visual Flow and Smooth Editing",
    intro: "Crisp cuts, smooth transitions, intentional rhythm and balanced pacing.",
    pills: ["Crisp cuts", "Smooth transitions", "Clean flow"],
    conclusion: "The video feels natural and easy to watch.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    size: "normal",
  },
  {
    num: "04",
    title: "Brand Aligned Visual Style",
    intro: "Your brand's identity appears through colors, fonts, overlays and graphic elements.",
    pills: ["Colors", "Fonts", "Overlays", "Lower thirds", "Transitions"],
    conclusion: "Consistency builds recognition and trust.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    size: "normal",
  },
  {
    num: "05",
    title: "Motion Graphics and Animated Elements",
    intro: "Title animations, text overlays, kinetic typography and logo animations.",
    pills: ["Title animations", "Text overlays", "Kinetic type", "Logo anims"],
    conclusion: "These improve engagement and message clarity.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
    size: "dark",
  },
  {
    num: "06",
    title: "Sound Design and Audio Enhancement",
    intro: "Noise removal, sound mixing, volume balancing, music alignment and emotional audio cues.",
    pills: ["Noise removal", "Sound mixing", "Music align"],
    conclusion: "Audio elevates the emotional experience.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>,
    size: "normal",
  },
  {
    num: "07",
    title: "Optimized Versions for Every Platform",
    intro: "Different platforms require different edits.",
    pills: ["16:9 wide", "9:16 vertical", "4:5 feed", "1:1 square", "Short cuts", "Thumbnails"],
    conclusion: "Maximum reach and performance across every channel.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    size: "normal",
  },
  {
    num: "08",
    title: "Minimal AI Support for Efficiency",
    intro: "AI is used lightly. Editors refine everything to keep human creativity intact.",
    pills: ["Auto captions", "Cut suggestions", "Audio enhance", "Color tones"],
    conclusion: "All decisions remain human led.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    size: "large-dark",
  },
];

export default function VideoProcess() {
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

        .vp-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .vp-section::before {
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
        .vp-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .vp-orb.vis{opacity:1;}
        .vp-orb-1{
          width:500px;height:500px;top:-160px;right:-140px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 13s ease-in-out infinite;
        }
        .vp-orb-2{
          width:300px;height:300px;bottom:80px;left:-90px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 17s ease-in-out infinite reverse;
        }

        .vp-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .vp-header{
          display:grid;grid-template-columns:1fr 1fr;
          gap:56px;align-items:end;
          margin-bottom:72px;padding-bottom:48px;
          border-bottom:1px solid rgba(0,0,0,0.07);
        }
        @media(max-width:720px){.vp-header{grid-template-columns:1fr;gap:24px;}}

        .vp-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:18px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .vp-eyebrow.vis{opacity:1;transform:translateY(0);}
        .vp-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#2563eb;flex-shrink:0;}

        .vp-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.05;letter-spacing:-0.02em;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .vp-title.vis{opacity:1;transform:translateY(0);}
        .vp-title-accent{color:#2563eb;}

        .vp-header-right{
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .vp-header-right.vis{opacity:1;transform:translateY(0);}
        .vp-header-sub{font-size:15px;color:#555;line-height:1.8;margin-bottom:14px;}
        .vp-header-note{
          font-size:13.5px;color:#888;line-height:1.7;
          padding:16px 20px;background:#fff;border-radius:12px;
          border-left:3px solid rgba(37,99,235,0.2);
        }

        /* BENTO */
        .vp-bento{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
          margin-bottom:64px;
        }
        @media(max-width:860px){
          .vp-bento{grid-template-columns:repeat(2,1fr);}
          .vp-c-large,.vp-c-full{grid-column:span 2;}
        }
        @media(max-width:540px){
          .vp-bento{grid-template-columns:1fr;}
          .vp-c-large,.vp-c-full{grid-column:span 1;}
        }

        .vp-c-large{grid-column:span 2;}
        .vp-c-full{
          grid-column:span 3;
          display:flex;align-items:center;gap:40px;
        }
        @media(max-width:860px){.vp-c-full{flex-direction:column;gap:20px;}}

        /* BASE */
        .vp-card{
          border-radius:22px;padding:30px 26px;
          position:relative;overflow:hidden;cursor:default;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.65s ease,transform 0.65s ease,
            box-shadow 0.3s ease,border-color 0.3s ease;
        }
        .vp-card.vis{opacity:1;transform:translateY(0);}

        /* LIGHT */
        .vp-light{background:#fff;border:1px solid rgba(0,0,0,0.07);}
        .vp-light:hover{
          box-shadow:0 20px 56px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.22);
          transform:translateY(-4px)!important;
        }
        .vp-light::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.4s ease;border-radius:22px 22px 0 0;
        }
        .vp-light:hover::before{transform:scaleX(1);}
        .vp-glow{
          position:absolute;top:-50px;right:-50px;
          width:160px;height:160px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.07),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .vp-light:hover .vp-glow{opacity:1;}

        /* DARK */
        .vp-dark{background:#111;border:1px solid rgba(255,255,255,0.05);}
        .vp-dark:hover{
          box-shadow:0 20px 56px rgba(0,0,0,0.25);
          border-color:rgba(37,99,235,0.3);
          transform:translateY(-4px)!important;
        }
        .vp-dark::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }

        /* FULL DARK */
        .vp-full-dark{
          background:#111;border:1px solid rgba(255,255,255,0.05);
        }
        .vp-full-dark::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:22px 22px 0 0;
        }
        .vp-full-dark:hover{
          box-shadow:0 20px 56px rgba(0,0,0,0.25);
          border-color:rgba(37,99,235,0.3);
          transform:translateY(-4px)!important;
        }

        /* wm */
        .vp-wm{
          position:absolute;bottom:12px;right:18px;
          font-family:'Syne',sans-serif;font-size:60px;font-weight:800;
          line-height:1;user-select:none;pointer-events:none;
        }
        .vp-light .vp-wm{color:rgba(0,0,0,0.03);}
        .vp-dark .vp-wm,.vp-full-dark .vp-wm{color:rgba(255,255,255,0.03);}

        /* icon */
        .vp-icon{
          width:48px;height:48px;flex-shrink:0;border-radius:14px;
          display:flex;align-items:center;justify-content:center;
          margin-bottom:18px;transition:transform 0.3s ease;
        }
        .vp-light .vp-icon{background:linear-gradient(135deg,#eff6ff,#dbeafe);}
        .vp-dark .vp-icon,.vp-full-dark .vp-icon{background:rgba(37,99,235,0.2);}
        .vp-card:hover .vp-icon{transform:scale(1.08);}
        .vp-icon svg{width:22px;height:22px;}
        .vp-light .vp-icon svg{color:#2563eb;}
        .vp-dark .vp-icon svg,.vp-full-dark .vp-icon svg{color:#60a5fa;}

        /* big icon for full dark */
        .vp-big-icon{
          width:70px;height:70px;flex-shrink:0;border-radius:20px;
          background:rgba(37,99,235,0.15);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.3s ease;
        }
        .vp-card:hover .vp-big-icon{transform:scale(1.05);}
        .vp-big-icon svg{width:30px;height:30px;color:#60a5fa;}

        /* step lbl */
        .vp-lbl{
          font-size:10px;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;margin-bottom:7px;
        }
        .vp-light .vp-lbl{color:#2563eb;}
        .vp-dark .vp-lbl,.vp-full-dark .vp-lbl{color:#60a5fa;}

        /* title */
        .vp-ctitle{
          font-family:'Syne',sans-serif;
          font-size:clamp(14px,1.6vw,17px);font-weight:800;
          line-height:1.3;margin-bottom:10px;transition:color 0.3s ease;
        }
        .vp-light .vp-ctitle{color:#111;}
        .vp-light:hover .vp-ctitle{color:#2563eb;}
        .vp-dark .vp-ctitle,.vp-full-dark .vp-ctitle{color:#fff;}

        /* intro */
        .vp-intro{
          font-size:12.5px;line-height:1.65;margin-bottom:12px;
        }
        .vp-light .vp-intro{color:#888;}
        .vp-dark .vp-intro,.vp-full-dark .vp-intro{color:rgba(255,255,255,0.4);}

        /* pills */
        .vp-pills{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;}
        .vp-pill{
          font-size:11px;font-weight:500;
          padding:4px 10px;border-radius:100px;
        }
        .vp-light .vp-pill{
          background:rgba(37,99,235,0.07);color:#2563eb;
          border:1px solid rgba(37,99,235,0.12);
        }
        .vp-dark .vp-pill,.vp-full-dark .vp-pill{
          background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.55);
          border:1px solid rgba(255,255,255,0.1);
        }

        /* conclusion */
        .vp-conclusion{
          font-family:'Syne',sans-serif;
          font-size:11.5px;font-weight:700;
        }
        .vp-light .vp-conclusion{color:#2563eb;}
        .vp-dark .vp-conclusion,.vp-full-dark .vp-conclusion{color:#60a5fa;}

        /* full dark text */
        .vp-full-body{flex:1;position:relative;}
        .vp-full-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(18px,2.2vw,26px);font-weight:800;
          color:#fff;margin-bottom:10px;line-height:1.2;
        }
        .vp-full-desc{font-size:14px;color:rgba(255,255,255,0.45);line-height:1.7;margin-bottom:14px;}

        /* CTA */
        .vp-cta{
          background:#111;border-radius:24px;
          padding:48px 56px;display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .vp-cta.vis{opacity:1;transform:translateY(0);}
        .vp-cta::before{
          content:'';position:absolute;top:-80px;right:-60px;
          width:300px;height:300px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:600px){.vp-cta{flex-direction:column;text-align:center;padding:40px 28px;}}
        .vp-cta-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;position:relative;
        }
        .vp-cta-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;position:relative;
        }
        .vp-cta-text span{color:#60a5fa;}
        .vp-btn{
          flex-shrink:0;display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:15px 26px 15px 30px;white-space:nowrap;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .vp-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .vp-arr{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .vp-btn:hover .vp-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="vp-section" ref={sectionRef}>
        <div className={`vp-orb vp-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`vp-orb vp-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="vp-inner">

          {/* HEADER */}
          <div className="vp-header">
            <div>
              <div className={`vp-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="vp-eyebrow-dot" />
                How We Work
              </div>
              <h2 className={`vp-title ${isVisible ? "vis" : ""}`}>
                Our <span className="vp-title-accent">Video Editing</span><br />Approach
              </h2>
            </div>
            <div className={`vp-header-right ${isVisible ? "vis" : ""}`}>
              <p className="vp-header-sub">Story first, brand aligned and platform optimized.</p>
              <p className="vp-header-note">We do not simply cut videos. We craft stories designed to engage your audience and represent your brand strongly.</p>
            </div>
          </div>

          {/* BENTO */}
          <div className="vp-bento">

            {/* 01 large light */}
            <div className={`vp-card vp-light vp-c-large ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.35s" : "0s" }}>
              <div className="vp-glow" /><span className="vp-wm">01</span>
              <div className="vp-icon">{steps[0].icon}</div>
              <p className="vp-lbl">Step 01</p>
              <p className="vp-ctitle">{steps[0].title}</p>
              <p className="vp-intro">{steps[0].intro}</p>
              <div className="vp-pills">{steps[0].pills.map((p, i) => <span key={i} className="vp-pill">{p}</span>)}</div>
              <p className="vp-conclusion">{steps[0].conclusion}</p>
            </div>

            {/* 02 dark */}
            <div className={`vp-card vp-dark ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.43s" : "0s" }}>
              <span className="vp-wm">02</span>
              <div className="vp-icon">{steps[1].icon}</div>
              <p className="vp-lbl">Step 02</p>
              <p className="vp-ctitle">{steps[1].title}</p>
              <p className="vp-intro">{steps[1].intro}</p>
              <div className="vp-pills">{steps[1].pills.map((p, i) => <span key={i} className="vp-pill">{p}</span>)}</div>
              <p className="vp-conclusion">{steps[1].conclusion}</p>
            </div>

            {/* 03 04 light */}
            {[steps[2], steps[3]].map((s, i) => (
              <div key={i} className={`vp-card vp-light ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? `${0.51 + i * 0.08}s` : "0s" }}>
                <div className="vp-glow" /><span className="vp-wm">0{i + 3}</span>
                <div className="vp-icon">{s.icon}</div>
                <p className="vp-lbl">Step 0{i + 3}</p>
                <p className="vp-ctitle">{s.title}</p>
                <p className="vp-intro">{s.intro}</p>
                <div className="vp-pills">{s.pills.map((p, j) => <span key={j} className="vp-pill">{p}</span>)}</div>
                <p className="vp-conclusion">{s.conclusion}</p>
              </div>
            ))}

            {/* 05 dark */}
            <div className={`vp-card vp-dark ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.67s" : "0s" }}>
              <span className="vp-wm">05</span>
              <div className="vp-icon">{steps[4].icon}</div>
              <p className="vp-lbl">Step 05</p>
              <p className="vp-ctitle">{steps[4].title}</p>
              <p className="vp-intro">{steps[4].intro}</p>
              <div className="vp-pills">{steps[4].pills.map((p, i) => <span key={i} className="vp-pill">{p}</span>)}</div>
              <p className="vp-conclusion">{steps[4].conclusion}</p>
            </div>

            {/* 06 07 light */}
            {[steps[5], steps[6]].map((s, i) => (
              <div key={i} className={`vp-card vp-light ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? `${0.75 + i * 0.08}s` : "0s" }}>
                <div className="vp-glow" /><span className="vp-wm">0{i + 6}</span>
                <div className="vp-icon">{s.icon}</div>
                <p className="vp-lbl">Step 0{i + 6}</p>
                <p className="vp-ctitle">{s.title}</p>
                <p className="vp-intro">{s.intro}</p>
                <div className="vp-pills">{s.pills.map((p, j) => <span key={j} className="vp-pill">{p}</span>)}</div>
                <p className="vp-conclusion">{s.conclusion}</p>
              </div>
            ))}

            {/* 08 full-width dark */}
            <div className={`vp-card vp-full-dark vp-c-full ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "0.91s" : "0s" }}>
              <span className="vp-wm">08</span>
              <div className="vp-big-icon">{steps[7].icon}</div>
              <div className="vp-full-body">
                <p className="vp-lbl">Step 08</p>
                <p className="vp-full-title">{steps[7].title}</p>
                <p className="vp-full-desc">{steps[7].intro}</p>
                <div className="vp-pills">{steps[7].pills.map((p, i) => <span key={i} className="vp-pill">{p}</span>)}</div>
                <p className="vp-conclusion">{steps[7].conclusion}</p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className={`vp-cta ${isVisible ? "vis" : ""}`} style={{ transitionDelay: isVisible ? "1.05s" : "0s" }}>
            <div>
              <p className="vp-cta-label">Let's create together</p>
              <p className="vp-cta-text">Ready to craft a video that <span>performs and converts?</span></p>
            </div>
            <button className="vp-btn">
              Start Your Video Project
              <span className="vp-arr">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
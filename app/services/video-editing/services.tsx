"use client";

import { useEffect, useRef, useState } from "react";

const editingServices = [
  { num: "01", title: "Standard Editing", desc: "Clean, structured editing ideal for interviews, vlogs, updates and internal communication.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { num: "02", title: "Advance Editing", desc: "Complex multi-layer editing with advanced transitions, storytelling, pacing, overlays and dynamic scenes.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { num: "03", title: "Color Correction", desc: "We balance colors, fix tones, enhance brightness and create a polished look that matches your brand.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/></svg> },
  { num: "04", title: "Sound Editing and Mixing", desc: "We refine background noise, adjust volume levels, enhance vocals and sync music perfectly.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> },
  { num: "05", title: "Subtitle and Caption Creation", desc: "Accurate subtitles that increase retention, accessibility and performance for long and short form videos.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { num: "06", title: "Multi Camera Editing", desc: "For interviews, podcasts, panels and events. We switch angles smoothly for an engaging multi-perspective experience.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/><path d="M7 10h2"/></svg> },
  { num: "07", title: "Motion Graphics", desc: "Animated text, icons, kinetic typography, explainers and on-screen visuals that boost clarity and engagement.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg> },
  { num: "08", title: "Video Stabilization", desc: "Shaky footage is corrected to create a smooth, professional cinematic look.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
];

const creativeFormats = [
  { num: "09", title: "Slow Motion and Time Lapse", desc: "Cinematic visuals perfect for storytelling, product reveals, events and creative promotions.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { num: "10", title: "Explainer Videos", desc: "Clear, structured explainer videos that simplify complex ideas and make them easy to understand.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
  { num: "11", title: "Product Demo Videos", desc: "Highlight product features, benefits and usage with clean shots, graphics and clear on-screen messaging.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
  { num: "12", title: "Video Tutorials and How To", desc: "Educational videos designed for clarity, step-by-step understanding and strong retention.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { num: "13", title: "Corporate Videos", desc: "Professional videos that enhance brand credibility, internal communication and business storytelling.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { num: "14", title: "Reels and Shorts", desc: "Fast-paced, hook-driven, highly engaging short form content for Instagram, Facebook, YouTube and TikTok.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
  { num: "15", title: "Testimonial Videos", desc: "Authentic customer stories edited to build trust, highlight success and influence buying decisions.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { num: "16", title: "Summary Videos", desc: "Concise, high-energy highlight videos summarizing events, journeys, milestones or presentations.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
];

const tabs = [
  { key: "editing", label: "Editing & Post Production", count: "08", data: editingServices },
  { key: "creative", label: "Creative Formats", count: "08", data: creativeFormats },
];

export default function VideoServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("editing");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTab = (key: string) => {
    if (key === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(key);
      setAnimating(false);
    }, 200);
  };

  const active = tabs.find(t => t.key === activeTab)!;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .vs-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .vs-section::before {
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
        .vs-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .vs-orb.vis{opacity:1;}
        .vs-orb-1{
          width:420px;height:420px;top:-140px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .vs-orb-2{
          width:260px;height:260px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .vs-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .vs-header{text-align:center;margin-bottom:64px;}

        .vs-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .vs-eyebrow.vis{opacity:1;transform:translateY(0);}
        .vs-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .vs-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:18px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .vs-title.vis{opacity:1;transform:translateY(0);}
        .vs-title-accent{color:#2563eb;}

        .vs-sub{
          font-size:16px;color:#555;line-height:1.8;max-width:600px;margin:0 auto 6px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .vs-sub.vis{opacity:1;transform:translateY(0);}

        /* TABS */
        .vs-tabs-wrap{
          display:flex;justify-content:center;margin-bottom:56px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.38s,transform 0.8s ease 0.38s;
        }
        .vs-tabs-wrap.vis{opacity:1;transform:translateY(0);}

        .vs-tabs{
          background:#111;border-radius:100px;
          padding:6px;display:flex;gap:4px;
          box-shadow:0 8px 32px rgba(0,0,0,0.18);
        }

        .vs-tab{
          display:flex;align-items:center;gap:10px;
          padding:11px 24px;border-radius:100px;
          font-family:'Kanit',sans-serif;
          font-size:13.5px;font-weight:400;
          color:rgba(255,255,255,0.45);
          border:none;background:transparent;
          cursor:pointer;
          transition:color 0.25s ease,background 0.25s ease;
          white-space:nowrap;
        }
        .vs-tab.active{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          color:#fff;
          box-shadow:0 4px 16px rgba(37,99,235,0.4);
        }
        .vs-tab:hover:not(.active){color:rgba(255,255,255,0.75);}

        .vs-tab-count{
          font-family:'Syne',sans-serif;
          font-size:11px;font-weight:700;
          background:rgba(255,255,255,0.1);
          padding:2px 8px;border-radius:100px;
          transition:background 0.25s ease;
        }
        .vs-tab.active .vs-tab-count{background:rgba(255,255,255,0.2);}

        /* GRID */
        .vs-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:14px;
          transition:opacity 0.2s ease,transform 0.2s ease;
        }
        .vs-grid.fade{opacity:0;transform:translateY(8px);}
        @media(max-width:960px){.vs-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:540px){.vs-grid{grid-template-columns:1fr;}}

        /* SERVICE CARD */
        .vs-card{
          background:#fff;
          border:1px solid rgba(0,0,0,0.06);
          border-radius:20px;padding:26px 22px;
          position:relative;overflow:hidden;cursor:default;
          transition:box-shadow 0.3s ease,border-color 0.3s ease,transform 0.3s ease;
        }
        .vs-card:hover{
          box-shadow:0 16px 44px rgba(37,99,235,0.1);
          border-color:rgba(37,99,235,0.2);
          transform:translateY(-4px);
        }
        .vs-card::before{
          content:'';position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0);transform-origin:left;
          transition:transform 0.4s ease;border-radius:20px 20px 0 0;
        }
        .vs-card:hover::before{transform:scaleX(1);}

        .vs-card-glow{
          position:absolute;top:-40px;right:-40px;
          width:130px;height:130px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.07),transparent 70%);
          opacity:0;transition:opacity 0.4s ease;pointer-events:none;
        }
        .vs-card:hover .vs-card-glow{opacity:1;}

        .vs-card-num{
          position:absolute;bottom:12px;right:16px;
          font-family:'Syne',sans-serif;font-size:40px;font-weight:800;
          color:rgba(0,0,0,0.03);line-height:1;
          user-select:none;pointer-events:none;
        }

        .vs-card-icon{
          width:42px;height:42px;border-radius:12px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:16px;
          transition:transform 0.3s ease,background 0.3s ease;
        }
        .vs-card:hover .vs-card-icon{
          transform:scale(1.08);
          background:linear-gradient(135deg,#dbeafe,#bfdbfe);
        }
        .vs-card-icon svg{width:19px;height:19px;color:#2563eb;}

        .vs-card-title{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:800;color:#111;
          line-height:1.3;margin-bottom:8px;
          transition:color 0.3s ease;
        }
        .vs-card:hover .vs-card-title{color:#2563eb;}

        .vs-card-desc{
          font-size:12.5px;color:#888;line-height:1.65;
        }

        /* CLOSING */
        .vs-closing{
          margin-top:56px;
          background:#111;border-radius:24px;
          padding:48px 56px;
          display:flex;align-items:center;
          justify-content:space-between;gap:40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease,transform 0.85s ease;
        }
        .vs-closing.vis{opacity:1;transform:translateY(0);}
        .vs-closing::before{
          content:'';position:absolute;top:-80px;right:-60px;
          width:300px;height:300px;border-radius:50%;
          background:radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%);
          pointer-events:none;
        }
        @media(max-width:600px){.vs-closing{flex-direction:column;text-align:center;padding:40px 28px;}}
        .vs-closing-left{position:relative;}
        .vs-closing-label{
          font-size:11px;font-weight:500;letter-spacing:0.2em;
          text-transform:uppercase;color:#60a5fa;margin-bottom:10px;
        }
        .vs-closing-text{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,20px);font-weight:700;
          color:rgba(255,255,255,0.7);line-height:1.5;
        }
        .vs-cta-btn{
          flex-shrink:0;display:inline-flex;align-items:center;gap:12px;
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          border:1px solid rgba(255,255,255,0.12);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:15px 26px 15px 30px;white-space:nowrap;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .vs-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.45);
        }
        .vs-arr{
          width:32px;height:32px;border-radius:50%;
          background:rgba(255,255,255,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .vs-cta-btn:hover .vs-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="vs-section" ref={sectionRef}>
        <div className={`vs-orb vs-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`vs-orb vs-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="vs-inner">

          {/* HEADER */}
          <div className="vs-header">
            <span className={`vs-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="vs-eyebrow-line" />
              Full Service List
              <span className="vs-eyebrow-line" />
            </span>
            <h2 className={`vs-title ${isVisible ? "vis" : ""}`}>
              What You Get With{" "}
              <span className="vs-title-accent">WebAce</span> Video Editing
            </h2>
            <p className={`vs-sub ${isVisible ? "vis" : ""}`}>
              A complete editing ecosystem that covers every format, every style and every purpose.
            </p>
          </div>

          {/* TABS */}
          <div className={`vs-tabs-wrap ${isVisible ? "vis" : ""}`}>
            <div className="vs-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  className={`vs-tab ${activeTab === tab.key ? "active" : ""}`}
                  onClick={() => handleTab(tab.key)}
                >
                  {tab.label}
                  <span className="vs-tab-count">{tab.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* GRID */}
          <div className={`vs-grid ${animating ? "fade" : ""}`}>
            {active.data.map((svc, i) => (
              <div key={`${activeTab}-${i}`} className="vs-card">
                <div className="vs-card-glow" />
                <span className="vs-card-num">{svc.num}</span>
                <div className="vs-card-icon">{svc.icon}</div>
                <h3 className="vs-card-title">{svc.title}</h3>
                <p className="vs-card-desc">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div
            className={`vs-closing ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.9s" : "0s" }}
          >
            <div className="vs-closing-left">
              <p className="vs-closing-label">16 services total</p>
              <p className="vs-closing-text">Ready to elevate your video content?</p>
            </div>
            <button className="vs-cta-btn">
              Start Your Video Project
              <span className="vs-arr">→</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Deep Business Understanding",
    tagline: "We get clarity on your business before recommending anything.",
    body: "This foundation ensures our recommendations make practical sense for your specific situation.",
    label: "We get clarity on:",
    pills: ["What your business does", "Who your audience is", "Current challenges", "Your goals", "Competitor activity", "Internal capabilities", "Current digital activities"],
    conclusion: "This foundation ensures our recommendations make sense for you.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  },
  {
    num: "02",
    title: "Digital Diagnosis and Problem Identification",
    tagline: "We review every layer of your digital presence.",
    body: "We identify what is working, what is missing and what is creating the bottleneck for growth.",
    label: "We review your:",
    pills: ["Website", "Social media", "SEO health", "Content approach", "Ad performance", "Funnel flow", "Analytics", "Communication style", "Digital positioning"],
    conclusion: "We identify what is working, what is missing and what is creating the bottleneck for growth.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    num: "03",
    title: "Strategic Recommendations and Solutions",
    tagline: "Based on the diagnosis, we provide clear, actionable solutions.",
    body: "Our consultation is practical, realistic and easy to execute with or without our involvement.",
    label: "Solutions across:",
    pills: ["SEO", "Social media", "Paid marketing", "Brand communication", "Website UX", "Content planning", "Funnel optimisation", "Revenue strategy"],
    conclusion: "Our consultation is practical, realistic and easy to execute.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    num: "04",
    title: "Clear Roadmap and Action Plan",
    tagline: "You receive a step-by-step roadmap — your digital guide.",
    body: "This roadmap becomes your digital guide for the weeks and months ahead.",
    label: "Roadmap includes:",
    pills: ["Priorities", "Timelines", "Expected outcomes", "Activities to focus on", "Channel recommendations", "Growth opportunities"],
    conclusion: "This roadmap becomes your digital guide.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><polyline points="8 7 3 12 8 17"/><polyline points="16 7 21 12 16 17"/></svg>,
  },
  {
    num: "05",
    title: "Domain Based Consultation When Needed",
    tagline: "Focused consultation for specific challenges and areas.",
    body: "This helps you solve specific challenges with depth and clarity, without a full audit.",
    label: "Domain-focused options:",
    pills: ["Pure SEO consultation", "Pure social media strategy", "Pure revenue growth planning", "Pure digital strategy structuring"],
    conclusion: "This helps you solve specific challenges with depth and clarity.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
];

const INTERVAL = 4000;

export default function ConsultationProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(p => (p + 1) % steps.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const svc = steps[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .cp-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .cp-section::before {
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
        .cp-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .cp-orb.vis{opacity:1;}
        .cp-orb-1{
          width:420px;height:420px;top:-140px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .cp-orb-2{
          width:260px;height:260px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .cp-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .cp-header{text-align:center;margin-bottom:72px;}

        .cp-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .cp-eyebrow.vis{opacity:1;transform:translateY(0);}
        .cp-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .cp-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:18px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .cp-title.vis{opacity:1;transform:translateY(0);}
        .cp-title-accent{color:#2563eb;}

        .cp-sub{
          font-size:16px;color:#555;line-height:1.8;max-width:580px;margin:0 auto 6px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.28s,transform 0.8s ease 0.28s;
        }
        .cp-sub.vis{opacity:1;transform:translateY(0);}
        .cp-sub2{
          font-size:14px;color:#888;line-height:1.75;max-width:520px;margin:0 auto;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.36s,transform 0.8s ease 0.36s;
        }
        .cp-sub2.vis{opacity:1;transform:translateY(0);}

        /* LAYOUT */
        .cp-layout{
          display:grid;grid-template-columns:280px 1fr;
          gap:28px;align-items:start;
        }
        @media(max-width:860px){.cp-layout{grid-template-columns:1fr;}}

        /* NAV */
        .cp-nav{
          position:sticky;top:100px;
          display:flex;flex-direction:column;gap:4px;
          opacity:0;transform:translateX(-20px);
          transition:opacity 0.8s ease 0.4s,transform 0.8s ease 0.4s;
        }
        .cp-nav.vis{opacity:1;transform:translateX(0);}

        .cp-nav-item{
          display:flex;align-items:center;gap:14px;
          padding:14px 18px 20px;
          border-radius:14px;cursor:pointer;position:relative;
          transition:background 0.25s ease;
        }
        .cp-nav-item:hover{background:rgba(37,99,235,0.04);}
        .cp-nav-item.active{background:rgba(37,99,235,0.07);}

        .cp-nav-bar{
          position:absolute;left:0;top:8px;bottom:8px;
          width:3px;border-radius:3px;
          background:linear-gradient(180deg,#2563eb,#60a5fa);
          opacity:0;transform:scaleY(0);transform-origin:top;
          transition:opacity 0.25s ease,transform 0.3s ease;
        }
        .cp-nav-item.active .cp-nav-bar{opacity:1;transform:scaleY(1);}

        .cp-nav-num{
          font-family:'Syne',sans-serif;
          font-size:11px;font-weight:700;letter-spacing:0.1em;
          color:rgba(0,0,0,0.2);flex-shrink:0;
          transition:color 0.25s ease;
        }
        .cp-nav-item.active .cp-nav-num,
        .cp-nav-item:hover .cp-nav-num{color:#2563eb;}

        .cp-nav-label{
          font-family:'Syne',sans-serif;
          font-size:12.5px;font-weight:700;color:#666;line-height:1.3;
          flex:1;
          transition:color 0.25s ease;
        }
        .cp-nav-item.active .cp-nav-label,
        .cp-nav-item:hover .cp-nav-label{color:#111;}

        @keyframes cpProgress{from{width:0%}to{width:100%}}
        .cp-nav-progress{
          position:absolute;bottom:7px;left:18px;right:18px;
          height:2px;border-radius:2px;
          background:rgba(37,99,235,0.1);overflow:hidden;
          opacity:0;transition:opacity 0.3s ease;
        }
        .cp-nav-item.active .cp-nav-progress{opacity:1;}
        .cp-nav-progress-fill{
          height:100%;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:2px;width:0%;
        }
        .cp-nav-item.active .cp-nav-progress-fill{
          animation:cpProgress 4s linear forwards;
        }

        /* CONTENT PANEL */
        .cp-content{
          background:#fff;border:1px solid rgba(0,0,0,0.07);
          border-radius:24px;padding:44px 40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.8s ease 0.5s,transform 0.8s ease 0.5s,
            box-shadow 0.35s ease,border-color 0.35s ease;
        }
        .cp-content.vis{opacity:1;transform:translateY(0);}
        .cp-content:hover{
          box-shadow:0 24px 64px rgba(37,99,235,0.07);
          border-color:rgba(37,99,235,0.15);
        }
        .cp-content::before{
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:24px 24px 0 0;
        }

        @keyframes cpFade{
          from{opacity:0;transform:translateY(10px);}
          to{opacity:1;transform:translateY(0);}
        }
        .cp-inner-content{animation:cpFade 0.3s ease;}

        .cp-content-header{
          display:flex;align-items:center;gap:20px;margin-bottom:28px;
        }
        .cp-badge{
          width:52px;height:52px;border-radius:15px;flex-shrink:0;
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 6px 20px rgba(37,99,235,0.3);
        }
        .cp-badge span{
          font-family:'Syne',sans-serif;font-size:14px;font-weight:800;color:#fff;
        }
        .cp-ctitle{
          font-family:'Syne',sans-serif;
          font-size:clamp(20px,2.6vw,28px);font-weight:800;color:#0f0f0f;line-height:1.2;
        }

        .cp-body{display:flex;flex-direction:column;gap:0;margin-bottom:28px;}
        .cp-line{
          font-size:15px;color:#555;line-height:1.85;
          padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.05);
        }
        .cp-line:first-child{border-top:1px solid rgba(0,0,0,0.05);}

        .cp-pills-lbl{
          font-size:11px;font-weight:600;letter-spacing:0.16em;
          text-transform:uppercase;color:#2563eb;margin-bottom:14px;
        }

        .cp-pills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px;}
        .cp-pill{
          font-size:12.5px;font-weight:500;
          padding:6px 14px;border-radius:100px;
          background:rgba(37,99,235,0.06);
          border:1px solid rgba(37,99,235,0.12);
          color:#2563eb;cursor:default;
          transition:background 0.2s ease,transform 0.2s ease;
        }
        .cp-pill:hover{background:rgba(37,99,235,0.12);transform:translateY(-2px);}

        .cp-conclusion{
          font-family:'Syne',sans-serif;
          font-size:16px;font-weight:800;color:#111;
          padding:20px 24px;margin-bottom:32px;
          border:1px solid rgba(37,99,235,0.15);
          border-left:3px solid #2563eb;
          border-radius:13px;background:rgba(37,99,235,0.03);
        }

        .cp-cta-btn{
          display:inline-flex;align-items:center;gap:12px;
          background:rgba(0,0,0,0.04);color:#222;
          border:1px solid rgba(0,0,0,0.1);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;border-radius:100px;
          padding:13px 22px 13px 26px;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
        }
        .cp-cta-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(37,99,235,0.3);
        }
        .cp-cta-arr{
          width:28px;height:28px;border-radius:50%;
          background:rgba(0,0,0,0.06);
          display:flex;align-items:center;justify-content:center;
          font-size:13px;transition:transform 0.3s ease,background 0.3s ease;
        }
        .cp-cta-btn:hover .cp-cta-arr{transform:translateX(3px);background:rgba(255,255,255,0.2);}
      `}</style>

      <section className="cp-section" ref={sectionRef}>
        <div className={`cp-orb cp-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`cp-orb cp-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="cp-inner">

          {/* HEADER */}
          <div className="cp-header">
            <span className={`cp-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="cp-eyebrow-line" />
              How We Work
              <span className="cp-eyebrow-line" />
            </span>
            <h2 className={`cp-title ${isVisible ? "vis" : ""}`}>
              Our <span className="cp-title-accent">Consultation</span> Approach
            </h2>
            <p className={`cp-sub ${isVisible ? "vis" : ""}`}>Simple, structured and focused on solving your real challenges.</p>
            <p className={`cp-sub2 ${isVisible ? "vis" : ""}`}>We believe every business is unique. Your consultation begins with understanding you, not prescribing a generic solution.</p>
          </div>

          {/* LAYOUT */}
          <div className="cp-layout">

            {/* NAV */}
            <div
              className={`cp-nav ${isVisible ? "vis" : ""}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`cp-nav-item ${active === i ? "active" : ""}`}
                  onClick={() => { setActive(i); setPaused(false); }}
                >
                  <div className="cp-nav-bar" />
                  <span className="cp-nav-num">{s.num}</span>
                  <span className="cp-nav-label">{s.title}</span>
                  <div className="cp-nav-progress">
                    <div className="cp-nav-progress-fill" key={`${i}-${active}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* CONTENT */}
            <div className={`cp-content ${isVisible ? "vis" : ""}`}>
              <div className="cp-inner-content" key={active}>

                <div className="cp-content-header">
                  <div className="cp-badge"><span>{svc.num}</span></div>
                  <h3 className="cp-ctitle">{svc.title}</h3>
                </div>

                <div className="cp-body">
                  <p className="cp-line">{svc.tagline}</p>
                  <p className="cp-line">{svc.body}</p>
                </div>

                <p className="cp-pills-lbl">{svc.label}</p>
                <div className="cp-pills">
                  {svc.pills.map((p, i) => (
                    <span key={i} className="cp-pill">{p}</span>
                  ))}
                </div>

                <div className="cp-conclusion">{svc.conclusion}</div>

                <button className="cp-cta-btn">
                  Book a Consultation Call
                  <span className="cp-cta-arr">→</span>
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
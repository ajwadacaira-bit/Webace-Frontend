"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    num: "01",
    title: "SEO Consultancy",
    tagline: "Improve visibility, organic traffic and search performance with a clear SEO strategy.",
    body: "SEO is not about keywords alone. It is about understanding user intent, improving website structure, creating the right content and building strong authority.",
    color: "#2563eb",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    sections: [
      { label: "Helps you:", pills: ["Understand your SEO health", "Identify ranking gaps", "Fix technical SEO issues", "Improve on-page strategy", "Identify growth opportunities", "Build a practical SEO roadmap"] },
      { label: "We guide you on:", pills: ["What content to create", "What keywords to target", "How to structure pages", "How to optimise performance", "How to strengthen long-term search presence"] },
    ],
  },
  {
    num: "02",
    title: "Social Media Consultancy",
    tagline: "Build a stronger brand presence, increase engagement and make your social content work harder.",
    body: "Social media today requires clear messaging, correct content pillars, a defined brand voice, consistent visibility and the right creative direction.",
    color: "#7c3aed",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    sections: [
      { label: "Social media requires:", pills: ["Clear messaging", "Correct content pillars", "A defined brand voice", "Consistent visibility", "Right creative direction", "Platform-wise strategy"] },
      { label: "Our consultancy helps you:", pills: ["Understand why social isn't performing", "Fix your content approach", "Build a strong posting system", "Improve engagement", "Strengthen brand identity"] },
      { label: "You receive:", pills: ["A social media strategy", "Content direction", "Creative ideas", "Brand theme clarity", "Posting guidelines"] },
    ],
  },
  {
    num: "03",
    title: "Revenue Generation Consultancy",
    tagline: "Turn your digital ecosystem into a performance driven revenue engine.",
    body: "If you want more leads, more sales or more conversions, this consultation focuses on your entire funnel — from first touch to final conversion.",
    color: "#059669",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    sections: [
      { label: "We focus on your:", pills: ["Funnel structure", "Landing pages", "Ads", "Communication", "Offers", "User journey", "Conversions and drop-offs"] },
      { label: "We help you:", pills: ["Identify what is blocking revenue", "Improve your funnels", "Align product, pricing and communication", "Build multi-channel revenue flow", "Strengthen your conversion strategy"] },
    ],
  },
  {
    num: "04",
    title: "Digital Strategy Consultancy",
    tagline: "Build a long-term digital roadmap that aligns your brand, marketing and revenue objectives.",
    body: "Digital Strategy answers the most important business questions. It helps your business stay aligned, consistent and scalable.",
    color: "#d97706",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    sections: [
      { label: "Digital Strategy answers:", pills: ["What should you do?", "How much should you do?", "Which channels matter?", "What should priorities be?", "How should you communicate?", "What should you invest in?"] },
      { label: "Our strategy gives you:", pills: ["A complete digital direction", "Channel-wise guidance", "Communication clarity", "Growth pathways", "Brand and content blueprint", "Short and long-term planning"] },
    ],
  },
];

export default function ConsultationServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .csvc-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 72px 24px 80px;
        }
        .csvc-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(37,99,235,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(96,165,250,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .csvc-inner{max-width:1000px;margin:0 auto;position:relative;}

        /* HEADER */
        .csvc-header{
          display:grid;grid-template-columns:1fr auto;
          align-items:end;gap:32px;
          margin-bottom:48px;padding-bottom:32px;
          border-bottom:1px solid rgba(0,0,0,0.07);
        }
        @media(max-width:600px){.csvc-header{grid-template-columns:1fr;}}

        .csvc-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:14px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .csvc-eyebrow.vis{opacity:1;transform:translateY(0);}
        .csvc-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#2563eb;flex-shrink:0;}

        .csvc-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(28px,4vw,48px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;
          opacity:0;transform:translateY(24px);
          transition:opacity 0.85s ease 0.12s,transform 0.85s ease 0.12s;
        }
        .csvc-title.vis{opacity:1;transform:translateY(0);}
        .csvc-title-accent{color:#2563eb;}

        .csvc-count{
          font-family:'Syne',sans-serif;
          font-size:72px;font-weight:800;
          color:rgba(0,0,0,0.04);line-height:1;
          user-select:none;
          opacity:0;transition:opacity 0.8s ease 0.3s;
        }
        .csvc-count.vis{opacity:1;}

        /* ACCORDION LIST */
        .csvc-list{display:flex;flex-direction:column;gap:10px;}

        /* ACCORDION ITEM */
        .csvc-item{
          border-radius:18px;
          border:1px solid rgba(0,0,0,0.07);
          background:#fff;
          overflow:hidden;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.65s ease,transform 0.65s ease,
            border-color 0.3s ease,box-shadow 0.3s ease;
        }
        .csvc-item.vis{opacity:1;transform:translateY(0);}
        .csvc-item.open{
          border-color:rgba(37,99,235,0.2);
          box-shadow:0 12px 40px rgba(37,99,235,0.08);
        }

        /* TRIGGER ROW */
        .csvc-trigger{
          display:grid;
          grid-template-columns:56px 1fr auto 44px;
          align-items:center;
          gap:16px;
          padding:20px 24px;
          cursor:pointer;
          transition:background 0.2s ease;
          position:relative;
        }
        .csvc-trigger:hover{background:rgba(37,99,235,0.02);}
        .csvc-item.open .csvc-trigger{background:rgba(37,99,235,0.03);}

        /* color bar on left of open item */
        .csvc-item.open .csvc-trigger::before{
          content:'';
          position:absolute;left:0;top:0;bottom:0;width:3px;
          border-radius:18px 0 0 0;
          background:linear-gradient(180deg,#2563eb,#60a5fa);
        }

        .csvc-trigger-icon{
          width:44px;height:44px;border-radius:13px;
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
          transition:transform 0.3s ease;
        }
        .csvc-item.open .csvc-trigger-icon{transform:scale(1.05);}
        .csvc-trigger-icon svg{width:20px;height:20px;}

        .csvc-trigger-left{}
        .csvc-trigger-num{
          font-size:10px;font-weight:600;letter-spacing:0.16em;
          text-transform:uppercase;margin-bottom:4px;
        }
        .csvc-trigger-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.8vw,18px);font-weight:800;color:#111;
          line-height:1.2;transition:color 0.25s ease;
        }
        .csvc-item.open .csvc-trigger-title{color:#2563eb;}

        .csvc-trigger-tag{
          font-size:11px;font-weight:500;
          padding:4px 12px;border-radius:100px;
          background:rgba(37,99,235,0.06);color:#2563eb;
          border:1px solid rgba(37,99,235,0.12);
          white-space:nowrap;
          opacity:0;transition:opacity 0.25s ease;
        }
        .csvc-item.open .csvc-trigger-tag{opacity:1;}
        @media(max-width:560px){.csvc-trigger-tag{display:none;}}

        .csvc-chevron{
          width:32px;height:32px;border-radius:50%;
          background:rgba(0,0,0,0.04);
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
          transition:transform 0.35s ease,background 0.25s ease;
        }
        .csvc-item.open .csvc-chevron{
          transform:rotate(180deg);
          background:rgba(37,99,235,0.1);
        }
        .csvc-chevron svg{width:14px;height:14px;color:#666;transition:color 0.25s ease;}
        .csvc-item.open .csvc-chevron svg{color:#2563eb;}

        /* BODY */
        .csvc-body{
          max-height:0;overflow:hidden;
          transition:max-height 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .csvc-item.open .csvc-body{max-height:600px;}

        .csvc-body-inner{
          padding:0 24px 24px 84px;
          display:flex;flex-direction:column;gap:16px;
        }
        @media(max-width:560px){.csvc-body-inner{padding:0 18px 20px 18px;}}

        /* ruled lines */
        .csvc-lines{display:flex;flex-direction:column;margin-bottom:4px;}
        .csvc-line{
          font-size:13.5px;color:#666;line-height:1.75;
          padding:8px 0;
          border-bottom:1px solid rgba(0,0,0,0.05);
        }
        .csvc-line:first-child{border-top:1px solid rgba(0,0,0,0.05);}

        .csvc-sec-lbl{
          font-size:10px;font-weight:600;letter-spacing:0.16em;
          text-transform:uppercase;color:#2563eb;margin-bottom:8px;
        }
        .csvc-pills{display:flex;flex-wrap:wrap;gap:6px;}
        .csvc-pill{
          font-size:12px;font-weight:500;
          padding:4px 12px;border-radius:100px;
          background:rgba(37,99,235,0.05);
          border:1px solid rgba(37,99,235,0.11);
          color:#2563eb;cursor:default;
          transition:background 0.2s ease,transform 0.2s ease;
        }
        .csvc-pill:hover{background:rgba(37,99,235,0.11);transform:translateY(-1px);}
      `}</style>

      <section className="csvc-section" ref={sectionRef}>
        <div className="csvc-inner">

          {/* HEADER */}
          <div className="csvc-header">
            <div>
              <div className={`csvc-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="csvc-eyebrow-dot" />
                What We Offer
              </div>
              <h2 className={`csvc-title ${isVisible ? "vis" : ""}`}>
                Services Under{" "}
                <span className="csvc-title-accent">Digital Consultation</span>
              </h2>
            </div>
            <div className={`csvc-count ${isVisible ? "vis" : ""}`}>04</div>
          </div>

          {/* ACCORDION */}
          <div className="csvc-list">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`csvc-item ${open === i ? "open" : ""} ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.3 + i * 0.08}s` : "0s" }}
              >
                {/* TRIGGER */}
                <div
                  className="csvc-trigger"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <div
                    className="csvc-trigger-icon"
                    style={{ background: `${svc.color}14` }}
                  >
                    <svg style={{ color: svc.color, width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {svc.icon.props.children}
                    </svg>
                  </div>

                  <div className="csvc-trigger-left">
                    <p className="csvc-trigger-num" style={{ color: svc.color }}>Service {svc.num}</p>
                    <p className="csvc-trigger-title">{svc.title}</p>
                  </div>

                  <span className="csvc-trigger-tag">
                    {svc.sections.reduce((acc, s) => acc + s.pills.length, 0)} insights
                  </span>

                  <div className="csvc-chevron">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>

                {/* BODY */}
                <div className="csvc-body">
                  <div className="csvc-body-inner">
                    <div className="csvc-lines">
                      <p className="csvc-line">{svc.tagline}</p>
                      <p className="csvc-line">{svc.body}</p>
                    </div>
                    {svc.sections.map((sec, j) => (
                      <div key={j}>
                        <p className="csvc-sec-lbl">{sec.label}</p>
                        <div className="csvc-pills">
                          {sec.pills.map((p, k) => (
                            <span key={k} className="csvc-pill">{p}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
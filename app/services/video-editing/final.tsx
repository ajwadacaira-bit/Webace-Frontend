"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  "Your brand deserves videos that look premium, feel meaningful and perform powerfully.",
  "Let WebAce create videos that strengthen your message and elevate your digital presence.",
];

const buttons = [
  "Request Your Video Editing Plan",
  "Get a Custom Video Blueprint",
  "Speak With a Video Specialist",
];

export default function VideoFinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .vfc-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 130px 24px 150px;
          text-align: center;
        }
        .vfc-section::before {
          content: '';
          position: absolute; top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 700px;
          background:
            radial-gradient(ellipse at 35% 40%, rgba(37,99,235,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 65% 60%, rgba(96,165,250,0.04) 0%, transparent 55%);
          pointer-events: none;
        }
        @keyframes floatOrb {
          0%,100%{transform:translateY(0) scale(1);}
          50%{transform:translateY(-24px) scale(1.05);}
        }
        .vfc-orb{
          position:absolute;border-radius:50%;
          pointer-events:none;opacity:0;
          transition:opacity 1.6s ease;z-index:0;
        }
        .vfc-orb.vis{opacity:1;}
        .vfc-orb-1{
          width:440px;height:440px;top:-160px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 70%);
          animation:floatOrb 13s ease-in-out infinite;
        }
        .vfc-orb-2{
          width:300px;height:300px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 17s ease-in-out infinite reverse;
        }

        .vfc-inner{max-width:860px;margin:0 auto;position:relative;z-index:1;}

        .vfc-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:28px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .vfc-eyebrow.vis{opacity:1;transform:translateY(0);}
        .vfc-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .vfc-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(38px,6.5vw,72px);
          font-weight:800;color:#0f0f0f;
          line-height:1.06;letter-spacing:-0.03em;
          margin-bottom:48px;
          opacity:0;transform:translateY(32px);
          transition:opacity 0.9s ease 0.15s,transform 0.9s ease 0.15s;
        }
        .vfc-title.vis{opacity:1;transform:translateY(0);}
        .vfc-title-accent{color:#2563eb;}

        .vfc-lines{
          display:flex;flex-direction:column;
          max-width:560px;margin:0 auto 44px;
        }
        .vfc-line{
          font-size:clamp(15px,1.8vw,18px);color:#666;
          padding:13px 0;
          border-bottom:1px solid rgba(0,0,0,0.06);
          opacity:0;transform:translateY(12px);
          transition:opacity 0.7s ease,transform 0.7s ease,color 0.25s ease;
        }
        .vfc-line:first-child{border-top:1px solid rgba(0,0,0,0.06);}
        .vfc-line:hover{color:#111;}
        .vfc-line.vis{opacity:1;transform:translateY(0);}

        .vfc-statement{
          font-family:'Syne',sans-serif;
          font-size:clamp(16px,1.9vw,21px);
          font-weight:700;color:#111;
          margin-bottom:52px;
          padding:28px 36px;
          border:1px solid rgba(37,99,235,0.18);
          border-left:3px solid #2563eb;
          border-radius:18px;
          background:rgba(37,99,235,0.03);
          text-align:left;
          opacity:0;transform:translateY(16px);
          transition:opacity 0.8s ease,transform 0.8s ease;
        }
        .vfc-statement.vis{opacity:1;transform:translateY(0);}

        .vfc-buttons{
          display:flex;flex-wrap:wrap;
          justify-content:center;gap:14px;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.8s ease,transform 0.8s ease;
        }
        .vfc-buttons.vis{opacity:1;transform:translateY(0);}

        .vfc-btn{
          display:inline-flex;align-items:center;gap:12px;
          background:rgba(0,0,0,0.04);color:#222;
          border:1px solid rgba(0,0,0,0.1);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:14px;font-weight:500;
          border-radius:100px;padding:15px 26px 15px 30px;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
          white-space:nowrap;
        }
        .vfc-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 14px 40px rgba(37,99,235,0.35);
        }
        .vfc-btn-arrow{
          width:32px;height:32px;border-radius:50%;
          background:rgba(0,0,0,0.06);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;flex-shrink:0;
          transition:transform 0.3s ease,background 0.3s ease;
        }
        .vfc-btn:hover .vfc-btn-arrow{
          transform:translateX(3px);
          background:rgba(255,255,255,0.2);
        }

        .vfc-trust{
          margin-top:52px;
          display:flex;justify-content:center;
          align-items:center;gap:28px;flex-wrap:wrap;
          opacity:0;transition:opacity 0.8s ease 0.9s;
        }
        .vfc-trust.vis{opacity:1;}
        .vfc-trust-item{
          display:flex;align-items:center;gap:8px;
          font-size:12.5px;color:#aaa;
        }
        .vfc-trust-dot{
          width:4px;height:4px;border-radius:50%;
          background:#2563eb;opacity:0.5;
        }
      `}</style>

      <section className="vfc-section" ref={sectionRef}>
        <div className={`vfc-orb vfc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`vfc-orb vfc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="vfc-inner">

          <span className={`vfc-eyebrow ${isVisible ? "vis" : ""}`}>
            <span className="vfc-eyebrow-line" />
            Start Your Project
            <span className="vfc-eyebrow-line" />
          </span>

          <h2 className={`vfc-title ${isVisible ? "vis" : ""}`}>
            Turn Raw Footage Into Stories That{" "}
            <span className="vfc-title-accent">Inspire, Connect</span> and Convert
          </h2>

          <div className="vfc-lines">
            {lines.map((line, i) => (
              <p
                key={i}
                className={`vfc-line ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.12}s` : "0s" }}
              >
                {line}
              </p>
            ))}
          </div>

          <div
            className={`vfc-statement ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.62s" : "0s" }}
          >
            Let WebAce craft videos that strengthen your message and elevate your digital presence.
          </div>

          <div
            className={`vfc-buttons ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.72s" : "0s" }}
          >
            {buttons.map((btn) => (
              <button key={btn} className="vfc-btn">
                {btn}
                <span className="vfc-btn-arrow">→</span>
              </button>
            ))}
          </div>

          <div className={`vfc-trust ${isVisible ? "vis" : ""}`}>
            {["No commitment required", "Free initial consultation", "Strategy tailored to your brand"].map((t) => (
              <span className="vfc-trust-item" key={t}>
                <span className="vfc-trust-dot" />
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
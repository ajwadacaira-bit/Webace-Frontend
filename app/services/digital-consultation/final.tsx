"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  "Good decisions create growth.",
  "Great decisions create long-term brand success.",
  "Let WebAce guide your business with practical digital insights that lead to real results.",
];

const buttons = [
  "Request Your Digital Consultation Plan",
  "Get Your Digital Roadmap Blueprint",
  "Speak With a Digital Consultant Today",
];

export default function ConsultationFinalCTA() {
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

        .cfc-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 96px 24px 110px;
          text-align: center;
        }
        .cfc-section::before {
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
        .cfc-orb{
          position:absolute;border-radius:50%;
          pointer-events:none;opacity:0;
          transition:opacity 1.6s ease;z-index:0;
        }
        .cfc-orb.vis{opacity:1;}
        .cfc-orb-1{
          width:400px;height:400px;top:-130px;right:-100px;
          background:radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 70%);
          animation:floatOrb 13s ease-in-out infinite;
        }
        .cfc-orb-2{
          width:260px;height:260px;bottom:50px;left:-70px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 17s ease-in-out infinite reverse;
        }

        .cfc-inner{max-width:800px;margin:0 auto;position:relative;z-index:1;}

        .cfc-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:22px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .cfc-eyebrow.vis{opacity:1;transform:translateY(0);}
        .cfc-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .cfc-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5.5vw,64px);
          font-weight:800;color:#0f0f0f;
          line-height:1.07;letter-spacing:-0.03em;
          margin-bottom:40px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.9s ease 0.15s,transform 0.9s ease 0.15s;
        }
        .cfc-title.vis{opacity:1;transform:translateY(0);}
        .cfc-title-accent{color:#2563eb;}

        /* ruled lines */
        .cfc-lines{
          display:flex;flex-direction:column;
          max-width:500px;margin:0 auto 36px;
        }
        .cfc-line{
          font-size:clamp(14px,1.6vw,16px);color:#666;
          padding:11px 0;
          border-bottom:1px solid rgba(0,0,0,0.06);
          opacity:0;transform:translateY(12px);
          transition:opacity 0.7s ease,transform 0.7s ease,color 0.25s ease;
        }
        .cfc-line:first-child{border-top:1px solid rgba(0,0,0,0.06);}
        .cfc-line:hover{color:#111;}
        .cfc-line.vis{opacity:1;transform:translateY(0);}

        /* statement card */
        .cfc-statement{
          font-family:'Syne',sans-serif;
          font-size:clamp(15px,1.7vw,19px);
          font-weight:700;color:#111;
          margin-bottom:44px;
          padding:22px 30px;
          border:1px solid rgba(37,99,235,0.18);
          border-left:3px solid #2563eb;
          border-radius:16px;
          background:rgba(37,99,235,0.03);
          text-align:left;
          opacity:0;transform:translateY(16px);
          transition:opacity 0.8s ease,transform 0.8s ease;
        }
        .cfc-statement.vis{opacity:1;transform:translateY(0);}

        /* buttons */
        .cfc-buttons{
          display:flex;flex-wrap:wrap;
          justify-content:center;gap:12px;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.8s ease,transform 0.8s ease;
        }
        .cfc-buttons.vis{opacity:1;transform:translateY(0);}

        .cfc-btn{
          display:inline-flex;align-items:center;gap:10px;
          background:rgba(0,0,0,0.04);color:#222;
          border:1px solid rgba(0,0,0,0.1);
          cursor:pointer;font-family:'Kanit',sans-serif;
          font-size:13.5px;font-weight:500;
          border-radius:100px;padding:13px 22px 13px 26px;
          transition:transform 0.25s ease,box-shadow 0.3s ease,
            background 0.3s ease,border-color 0.3s ease,color 0.3s ease;
          white-space:nowrap;
        }
        .cfc-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(37,99,235,0.32);
        }
        .cfc-btn-arr{
          width:28px;height:28px;border-radius:50%;
          background:rgba(0,0,0,0.06);
          display:flex;align-items:center;justify-content:center;
          font-size:13px;flex-shrink:0;
          transition:transform 0.3s ease,background 0.3s ease;
        }
        .cfc-btn:hover .cfc-btn-arr{
          transform:translateX(3px);
          background:rgba(255,255,255,0.2);
        }

        /* trust bar */
        .cfc-trust{
          margin-top:40px;
          display:flex;justify-content:center;
          align-items:center;gap:24px;flex-wrap:wrap;
          opacity:0;transition:opacity 0.8s ease 0.9s;
        }
        .cfc-trust.vis{opacity:1;}
        .cfc-trust-item{
          display:flex;align-items:center;gap:8px;
          font-size:12px;color:#bbb;
        }
        .cfc-trust-dot{
          width:4px;height:4px;border-radius:50%;
          background:#2563eb;opacity:0.5;
        }
      `}</style>

      <section className="cfc-section" ref={sectionRef}>
        <div className={`cfc-orb cfc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`cfc-orb cfc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="cfc-inner">

          <span className={`cfc-eyebrow ${isVisible ? "vis" : ""}`}>
            <span className="cfc-eyebrow-line" />
            Start Today
            <span className="cfc-eyebrow-line" />
          </span>

          <h2 className={`cfc-title ${isVisible ? "vis" : ""}`}>
            Build a <span className="cfc-title-accent">Clear, Confident</span><br />Digital Roadmap
          </h2>

          <div className="cfc-lines">
            {lines.slice(0, 2).map((line, i) => (
              <p
                key={i}
                className={`cfc-line ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.36 + i * 0.12}s` : "0s" }}
              >
                {line}
              </p>
            ))}
          </div>

          <div
            className={`cfc-statement ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.60s" : "0s" }}
          >
            {lines[2]}
          </div>

          <div
            className={`cfc-buttons ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.70s" : "0s" }}
          >
            {buttons.map((btn) => (
              <button key={btn} className="cfc-btn">
                {btn}
                <span className="cfc-btn-arr">→</span>
              </button>
            ))}
          </div>

          <div className={`cfc-trust ${isVisible ? "vis" : ""}`}>
            {["No commitment required", "Free initial consultation", "Tailored to your business stage"].map((t) => (
              <span className="cfc-trust-item" key={t}>
                <span className="cfc-trust-dot" />
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
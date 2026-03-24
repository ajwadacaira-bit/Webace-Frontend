"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  "Your brand deserves trust.",
  "Your story deserves clarity.",
  "Your leadership deserves recognition.",
  "Your customers deserve confidence.",
];

const buttons = [
  "Request Your ORM Strategy",
  "Get Your Reputation Improvement Blueprint",
  "Speak With an ORM Specialist Today",
];

export default function OrmFinalCTA() {
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

        .ofc-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 130px 24px 150px;
          text-align: center;
        }
        .ofc-section::before {
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
        .ofc-orb{
          position:absolute;border-radius:50%;
          pointer-events:none;opacity:0;
          transition:opacity 1.6s ease;z-index:0;
        }
        .ofc-orb.vis{opacity:1;}
        .ofc-orb-1{
          width:440px;height:440px;top:-160px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 70%);
          animation:floatOrb 13s ease-in-out infinite;
        }
        .ofc-orb-2{
          width:300px;height:300px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 17s ease-in-out infinite reverse;
        }

        .ofc-inner{
          max-width:860px;margin:0 auto;
          position:relative;z-index:1;
        }

        /* EYEBROW */
        .ofc-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:28px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .ofc-eyebrow.vis{opacity:1;transform:translateY(0);}
        .ofc-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        /* TITLE */
        .ofc-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(38px,6.5vw,72px);
          font-weight:800;color:#0f0f0f;
          line-height:1.06;letter-spacing:-0.03em;
          margin-bottom:48px;
          opacity:0;transform:translateY(32px);
          transition:opacity 0.9s ease 0.15s,transform 0.9s ease 0.15s;
        }
        .ofc-title.vis{opacity:1;transform:translateY(0);}
        .ofc-title-accent{color:#2563eb;}

        /* LINES */
        .ofc-lines{
          display:flex;flex-direction:column;
          max-width:500px;margin:0 auto 44px;
        }
        .ofc-line{
          font-size:clamp(15px,1.8vw,18px);color:#666;
          padding:13px 0;
          border-bottom:1px solid rgba(0,0,0,0.06);
          opacity:0;transform:translateY(12px);
          transition:opacity 0.7s ease,transform 0.7s ease,color 0.25s ease;
        }
        .ofc-line:first-child{border-top:1px solid rgba(0,0,0,0.06);}
        .ofc-line:hover{color:#111;}
        .ofc-line.vis{opacity:1;transform:translateY(0);}

        /* STATEMENT */
        .ofc-statement{
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
        .ofc-statement.vis{opacity:1;transform:translateY(0);}

        /* BUTTONS */
        .ofc-buttons{
          display:flex;flex-wrap:wrap;
          justify-content:center;gap:14px;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.8s ease,transform 0.8s ease;
        }
        .ofc-buttons.vis{opacity:1;transform:translateY(0);}

        .ofc-btn{
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
        .ofc-btn:hover{
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          border-color:transparent;color:#fff;
          transform:translateY(-3px);
          box-shadow:0 14px 40px rgba(37,99,235,0.35);
        }
        .ofc-btn-arrow{
          width:32px;height:32px;border-radius:50%;
          background:rgba(0,0,0,0.06);
          display:flex;align-items:center;justify-content:center;
          font-size:15px;flex-shrink:0;
          transition:transform 0.3s ease,background 0.3s ease;
        }
        .ofc-btn:hover .ofc-btn-arrow{
          transform:translateX(3px);
          background:rgba(255,255,255,0.2);
        }

        /* TRUST */
        .ofc-trust{
          margin-top:52px;
          display:flex;justify-content:center;
          align-items:center;gap:28px;flex-wrap:wrap;
          opacity:0;transition:opacity 0.8s ease 0.9s;
        }
        .ofc-trust.vis{opacity:1;}
        .ofc-trust-item{
          display:flex;align-items:center;gap:8px;
          font-size:12.5px;color:#aaa;
        }
        .ofc-trust-dot{
          width:4px;height:4px;border-radius:50%;
          background:#2563eb;opacity:0.5;
        }
      `}</style>

      <section className="ofc-section" ref={sectionRef}>
        <div className={`ofc-orb ofc-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`ofc-orb ofc-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="ofc-inner">

          <span className={`ofc-eyebrow ${isVisible ? "vis" : ""}`}>
            <span className="ofc-eyebrow-line" />
            Start Today
            <span className="ofc-eyebrow-line" />
          </span>

          <h2 className={`ofc-title ${isVisible ? "vis" : ""}`}>
            Let Us <span className="ofc-title-accent">Protect, Repair</span><br />
            and Boost Your Reputation
          </h2>

          <div className="ofc-lines">
            {lines.map((line, i) => (
              <p
                key={i}
                className={`ofc-line ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.38 + i * 0.1}s` : "0s" }}
              >
                {line}
              </p>
            ))}
          </div>

          <div
            className={`ofc-statement ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.78s" : "0s" }}
          >
            Let WebAce safeguard your reputation and strengthen the way the world sees you.
          </div>

          <div
            className={`ofc-buttons ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.88s" : "0s" }}
          >
            {buttons.map((btn) => (
              <button key={btn} className="ofc-btn">
                {btn}
                <span className="ofc-btn-arrow">→</span>
              </button>
            ))}
          </div>

          <div className={`ofc-trust ${isVisible ? "vis" : ""}`}>
            {["No commitment required", "Free initial consultation", "Strategy tailored to your brand"].map((t) => (
              <span className="ofc-trust-item" key={t}>
                <span className="ofc-trust-dot" />
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
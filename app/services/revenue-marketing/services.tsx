"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { name: "PPC Ads", num: "01", desc: "Capture buyers at the moment of search intent." },
  { name: "Shopping Ads", num: "02", desc: "Put your products directly in front of ready-to-buy customers." },
  { name: "Remarketing Ads", num: "03", desc: "Re-engage visitors who left before converting." },
  { name: "Lead Magnet Pages", num: "04", desc: "Turn traffic into qualified leads with precision landing pages." },
  { name: "Dynamic Social Ads", num: "05", desc: "Serve personalized creatives that adapt to audience behavior." },
  { name: "Ecommerce Funnel Optimization", num: "06", desc: "Remove friction from every step of the buying journey." },
  { name: "Lifecycle Marketing", num: "07", desc: "Nurture, retain and grow revenue from every customer." },
];

export default function RevenueServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        .rs-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 120px 0 0;
        }

        /* diagonal slice at bottom */
        .rs-section::after {
          content: '';
          display: block;
          height: 80px;
          background: #f8f9fc; /* keep slice */
          clip-path: polygon(0 100%, 100% 0, 100% 100%);
          margin-top: -1px;
        }

        /* grid overlay */
        .rs-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
        }

        /* big background number */
        .rs-bg-num {
          position: absolute;
          right: -20px; top: 40px;
          font-family: 'Syne', sans-serif;
          font-size: clamp(200px, 30vw, 420px);
          font-weight: 800;
          color: rgba(0,0,0,0.03);
          line-height: 1;
          user-select: none; pointer-events: none;
          transition: color 0.5s ease;
        }
        .rs-bg-num.active { color: rgba(37,99,235,0.07); }

        .rs-inner {
          max-width: 1100px; margin: 0 auto;
          padding: 0 24px 80px;
          position: relative; z-index: 1;
        }

        /* ── HEADER ── */
        .rs-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 72px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        @media (max-width: 720px) {
          .rs-header { flex-direction: column; align-items: flex-start; }
        }

        .rs-header-left {}

        .rs-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 18px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .rs-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .rs-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563eb; }

        .rs-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.05; letter-spacing: -0.03em;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .rs-title.vis { opacity: 1; transform: translateY(0); }
        .rs-title-accent { color: #2563eb; }

        .rs-header-right {
          max-width: 320px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .rs-header-right.vis { opacity: 1; transform: translateY(0); }

        .rs-header-sub {
          font-size: 15px; color: #666;
          line-height: 1.75;
        }

        /* ── SERVICE LIST ── */
        .rs-list { display: flex; flex-direction: column; }

        .rs-item {
          display: grid;
          grid-template-columns: 60px 1fr auto;
          align-items: center;
          gap: 0;
          padding: 28px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          cursor: default;
          position: relative;
          opacity: 0; transform: translateX(-24px);
          transition:
            opacity 0.65s ease,
            transform 0.65s ease;
        }
        .rs-item.vis { opacity: 1; transform: translateX(0); }

        /* hover fill bar */
        .rs-item::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(37,99,235,0.08), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .rs-item:hover::before { opacity: 1; }

        /* left accent bar */
        .rs-item::after {
          content: '';
          position: absolute; left: -24px; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #2563eb, #60a5fa);
          opacity: 0; transform: scaleY(0); transform-origin: top;
          transition: opacity 0.3s ease, transform 0.35s ease;
        }
        .rs-item:hover::after { opacity: 1; transform: scaleY(1); }

        .rs-item-num {
          font-family: 'Syne', sans-serif;
          font-size: 12px; font-weight: 700;
          color: rgba(0,0,0,0.2);
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }
        .rs-item:hover .rs-item-num { color: #2563eb; }

        .rs-item-body { padding: 0 24px; }

        .rs-item-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 2.8vw, 30px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.2;
          transition: color 0.3s ease;
        }
        .rs-item:hover .rs-item-name { color: #2563eb; }

        .rs-item-desc {
          font-size: 13.5px; color: rgba(0,0,0,0);
          line-height: 1.6;
          max-height: 0; overflow: hidden;
          transition: color 0.3s ease 0.05s, max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .rs-item:hover .rs-item-desc {
          color: #666;
          max-height: 60px;
          opacity: 1;
        }

        .rs-item-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.12);
          display: flex; align-items: center; justify-content: center;
          color: rgba(0,0,0,0.25);
          font-size: 16px;
          flex-shrink: 0;
          transition: border-color 0.3s ease, color 0.3s ease,
            background 0.3s ease, transform 0.3s ease;
        }
        .rs-item:hover .rs-item-arrow {
          border-color: #2563eb;
          background: #2563eb;
          color: #fff;
          transform: rotate(45deg);
        }

        /* ── FOOTER ── */
        .rs-footer {
          margin-top: 56px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          padding-top: 40px;
          border-top: 1px solid rgba(0,0,0,0.06);
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .rs-footer.vis { opacity: 1; transform: translateY(0); }

        @media (max-width: 640px) {
          .rs-footer { flex-direction: column; align-items: flex-start; }
        }

        .rs-footer-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(15px, 2vw, 20px);
          font-weight: 700; color: #888;
          line-height: 1.5;
        }
        .rs-footer-text span { color: #111; }

        .rs-footer-count {
          font-family: 'Syne', sans-serif;
          font-size: 64px; font-weight: 800;
          color: rgba(0,0,0,0.05);
          line-height: 1; flex-shrink: 0;
          user-select: none;
        }
      `}</style>

      <section className="rs-section" ref={sectionRef}>
        <div className="rs-grid-bg" />
        <div className={`rs-bg-num ${hoveredIndex !== null ? "active" : ""}`}>
          {hoveredIndex !== null ? services[hoveredIndex].num : "07"}
        </div>

        <div className="rs-inner">

          {/* ── HEADER ── */}
          <div className="rs-header">
            <div className="rs-header-left">
              <div className={`rs-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="rs-eyebrow-dot" />
                Revenue Services
              </div>
              <h2 className={`rs-title ${isVisible ? "vis" : ""}`}>
                Services Under<br />
                <span className="rs-title-accent">Revenue Marketing</span>
              </h2>
            </div>

            <div className={`rs-header-right ${isVisible ? "vis" : ""}`}>
              <p className="rs-header-sub">
                Seven powerful services that work together to maximize your conversions and revenue.
              </p>
            </div>
          </div>

          {/* ── LIST ── */}
          <div className="rs-list">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`rs-item ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.35 + i * 0.08}s` : "0s" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="rs-item-num">{svc.num}</span>
                <div className="rs-item-body">
                  <p className="rs-item-name">{svc.name}</p>
                  <p className="rs-item-desc">{svc.desc}</p>
                </div>
                <div className="rs-item-arrow">↗</div>
              </div>
            ))}
          </div>

          {/* ── FOOTER ── */}
          <div
            className={`rs-footer ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "1.05s" : "0s" }}
          >
            <p className="rs-footer-text">
              Each service has a specific responsibility<br />
              inside your <span>revenue funnel.</span>
            </p>
            <span className="rs-footer-count">07</span>
          </div>

        </div>
      </section>
    </>
  );
}
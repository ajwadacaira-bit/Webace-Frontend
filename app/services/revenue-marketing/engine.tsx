"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { num: "01", title: "PPC Ads", desc: "Capture high intent users ready to buy.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, tag: "Top of funnel" },
  { num: "02", title: "Shopping Ads", desc: "Drive ecommerce purchases.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>, tag: "Ecommerce" },
  { num: "03", title: "Remarketing", desc: "Recover lost users and convert them.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>, tag: "Recovery" },
  { num: "04", title: "Lead Magnet Pages", desc: "Increase conversion rate significantly.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, tag: "Conversion" },
  { num: "05", title: "Dynamic Social Ads", desc: "Personalize user experience.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, tag: "Personalisation" },
  { num: "06", title: "Ecommerce Funnel Optimization", desc: "Fix revenue leaks.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>, tag: "Optimisation" },
  { num: "07", title: "Lifecycle Marketing", desc: "Increase customer lifetime value.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, tag: "Retention" },
];

export default function RevenueEngineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

        .res-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .res-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(37,99,235,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(96,165,250,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .res-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .res-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: end;
          margin-bottom: 64px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        @media (max-width: 680px) { .res-header { grid-template-columns: 1fr; gap: 20px; } }

        .res-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 16px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .res-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .res-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563eb; flex-shrink: 0; }

        .res-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .res-title.vis { opacity: 1; transform: translateY(0); }
        .res-title-accent { color: #2563eb; }

        .res-header-right {
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.28s, transform 0.8s ease 0.28s;
        }
        .res-header-right.vis { opacity: 1; transform: translateY(0); }
        .res-header-sub { font-size: 15px; color: #666; line-height: 1.8; }

        /* ── ROWS ── */
        .res-rows { display: flex; flex-direction: column; margin-bottom: 56px; }

        .res-row {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          align-items: center;
          gap: 24px;
          padding: 22px 16px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          cursor: default;
          position: relative;
          border-radius: 0;
          opacity: 0; transform: translateY(18px);
          transition: opacity 0.6s ease, transform 0.6s ease,
            background 0.3s ease, border-radius 0.3s ease;
        }
        .res-row:first-child { border-top: 1px solid rgba(0,0,0,0.06); }
        .res-row.vis { opacity: 1; transform: translateY(0); }

        .res-row:hover {
          background: rgba(37,99,235,0.03);
          border-radius: 14px;
          border-color: transparent;
        }
        /* keep spacing consistent when border disappears */
        .res-row:hover + .res-row { border-top: 1px solid rgba(0,0,0,0.06); }

        @media (max-width: 580px) {
          .res-row { grid-template-columns: 40px 1fr; }
          .res-row-tag { display: none; }
        }

        .res-row-num {
          font-family: 'Syne', sans-serif;
          font-size: 12px; font-weight: 700;
          color: rgba(0,0,0,0.2); letter-spacing: 0.08em;
          transition: color 0.3s ease;
          text-align: center;
        }
        .res-row:hover .res-row-num { color: #2563eb; }

        .res-row-body { display: flex; align-items: center; gap: 18px; }

        .res-row-icon {
          width: 46px; height: 46px; flex-shrink: 0; border-radius: 13px;
          background: #f4f5f7;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .res-row:hover .res-row-icon {
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          transform: scale(1.08);
        }
        .res-row-icon svg { width: 20px; height: 20px; color: #aaa; transition: color 0.3s ease; }
        .res-row:hover .res-row-icon svg { color: #2563eb; }

        .res-row-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(16px, 2vw, 21px); font-weight: 800; color: #111;
          line-height: 1.2; transition: color 0.3s ease;
        }
        .res-row:hover .res-row-title { color: #2563eb; }

        .res-row-desc {
          font-size: 13px; color: transparent;
          line-height: 1.5; margin-top: 3px;
          transition: color 0.3s ease;
        }
        .res-row:hover .res-row-desc { color: #888; }

        .res-row-tag {
          font-size: 11px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.3);
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 100px; padding: 5px 14px;
          transition: all 0.3s ease;
          white-space: nowrap; flex-shrink: 0;
        }
        .res-row:hover .res-row-tag {
          background: rgba(37,99,235,0.08);
          color: #2563eb;
          border-color: rgba(37,99,235,0.2);
        }

        /* ── FOOTER ── */
        .res-footer {
          background: #111;
          border-radius: 22px;
          padding: 48px 56px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 32px;
          position: relative; overflow: hidden;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .res-footer.vis { opacity: 1; transform: translateY(0); }
        .res-footer::before {
          content: '';
          position: absolute; top: -80px; right: -60px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%);
          pointer-events: none;
        }
        @media (max-width: 600px) {
          .res-footer { flex-direction: column; text-align: center; padding: 36px 28px; }
        }
        .res-footer-label {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa; margin-bottom: 10px; position: relative;
        }
        .res-footer-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(18px, 2.2vw, 26px); font-weight: 800;
          color: #fff; line-height: 1.4; position: relative;
        }
        .res-footer-text span { color: #60a5fa; }
        .res-footer-count {
          font-family: 'Syne', sans-serif;
          font-size: 96px; font-weight: 800;
          color: rgba(255,255,255,0.06);
          line-height: 1; flex-shrink: 0; user-select: none; position: relative;
        }
      `}</style>

      <section className="res-section" ref={sectionRef}>
        <div className="res-inner">

          {/* ── HEADER ── */}
          <div className="res-header">
            <div>
              <div className={`res-eyebrow ${isVisible ? "vis" : ""}`}>
                <span className="res-eyebrow-dot" />
                The Full Picture
              </div>
              <h2 className={`res-title ${isVisible ? "vis" : ""}`}>
                How These Services{" "}
                <span className="res-title-accent">Work Together</span>
              </h2>
            </div>
            <div className={`res-header-right ${isVisible ? "vis" : ""}`}>
              <p className="res-header-sub">
                Each service targets a different part of the revenue journey — together they close the loop from first click to loyal customer.
              </p>
            </div>
          </div>

          {/* ── ROWS ── */}
          <div className="res-rows">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`res-row ${isVisible ? "vis" : ""}`}
                style={{ transitionDelay: isVisible ? `${0.3 + i * 0.08}s` : "0s" }}
              >
                <span className="res-row-num">{svc.num}</span>
                <div className="res-row-body">
                  <div className="res-row-icon">{svc.icon}</div>
                  <div>
                    <p className="res-row-title">{svc.title}</p>
                    <p className="res-row-desc">{svc.desc}</p>
                  </div>
                </div>
                <span className="res-row-tag">{svc.tag}</span>
              </div>
            ))}
          </div>

          {/* ── FOOTER ── */}
          <div
            className={`res-footer ${isVisible ? "vis" : ""}`}
            style={{ transitionDelay: isVisible ? "0.95s" : "0s" }}
          >
            <div>
              <p className="res-footer-label">The Result</p>
              <p className="res-footer-text">
                Together, they create a complete <span>revenue engine.</span>
              </p>
            </div>
            <span className="res-footer-count">07</span>
          </div>

        </div>
      </section>
    </>
  );
}
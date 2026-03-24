"use client";

import { useState, useEffect, useRef } from "react";

const services: Record<string, {
  heading: string;
  intro: string;
  bullets1: string[];
  bullets2: string[];
  bullets2Label?: string;
  cta: string;
  icon: React.ReactNode;
}> = {
  "Google Ads": {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
</svg>,    heading: "Appear exactly when your customers are searching",
    intro: "Google Ads is one of the strongest engines for high intent leads. People who search on Google are already looking for a solution. Your brand simply needs to appear at the right moment.",
    bullets1: ["Target high intent keywords", "Drive quality traffic to your landing pages", "Increase inquiries and conversions", "Optimize your cost per lead", "Improve visibility on search results", "Capture leads instantly from people searching right now"],
    bullets2Label: "Campaign types we run:",
    bullets2: ["Search campaigns", "Performance max campaigns", "Display remarketing", "Call only ads", "Local search ads"],
    cta: "Speak With a Google Ads Specialist",
  },
  "Meta Ads": {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    heading: "Reach your audience where they spend the most time",
    intro: "Meta platforms hold massive audience attention. From interest targeting to behavioural intelligence, Meta Ads offer incredible potential for lead generation when executed correctly.",
    bullets1: ["Reach your target customers with high accuracy", "Increase sign ups, inquiries and form fills", "Drive traffic to lead magnet pages", "Run conversion optimized campaigns", "Retarget warm audiences", "Lower CPL through intelligent optimization"],
    bullets2: [],
    cta: "",
  },
  "SEO Service": {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    heading: "Build continuous inbound leads through organic visibility",
    intro: "SEO is the long term engine of digital lead generation. Unlike ads, SEO traffic does not stop when the budget stops. It builds your brand's presence over time and attracts high intent users through search engines.",
    bullets1: ["Rank your website for valuable keywords", "Improve organic traffic", "Bring steady monthly leads", "Build trust and authority", "Optimize your website for conversions", "Improve overall visibility"],
    bullets2Label: "What we cover:",
    bullets2: ["Keyword research", "Technical optimization", "On page optimization", "Content strategy", "Link building", "Local SEO"],
    cta: "Get Your SEO Growth Plan",
  },
  "Lead Magnet Pages": {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    heading: "Convert traffic into leads with high performing landing pages",
    intro: "A good campaign fails when the landing page is weak. A great landing page can multiply conversions without increasing ad spend.",
    bullets1: ["Capture user attention instantly", "Communicate your offer clearly", "Reduce friction", "Drive sign ups and inquiries", "Improve conversion rates significantly"],
    bullets2Label: "Page types we build:",
    bullets2: ["Download pages", "Contact form pages", "Service inquiry pages", "Offer based landing pages", "Consultation or demo pages"],
    cta: "",
  },
  "Affiliate Marketing": {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    heading: "Expand lead generation through trusted affiliate partners",
    intro: "Affiliate marketing is one of the smartest approaches to generate more leads without increasing ad spend.",
    bullets1: ["Set up affiliate structures", "Recruit high quality affiliates", "Build commission models", "Track conversions", "Optimize affiliate performance"],
    bullets2: [],
    cta: "Explore Affiliate Opportunities",
  },
  "Google My Business": {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="11" cy="11" r="8"/>
  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>,
    heading: "Local visibility that brings real customer inquiries",
    intro: "For local businesses, GMB is one of the strongest lead generators. Most local searches end with an action: a call, a message or a visit.",
    bullets1: ["Improve your local ranking", "Increase calls and website visits", "Bring more map driven inquiries", "Strengthen local credibility", "Optimize your profile for conversions", "Add posts, images and reviews"],
    bullets2: [],
    cta: "",
  },
};

const serviceKeys = Object.keys(services);

export default function DigitalLeadsServices() {
  const [active, setActive] = useState("Google Ads");
  const [animating, setAnimating] = useState(false);
  const [displayed, setDisplayed] = useState("Google Ads");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const data = services[displayed];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (key: string) => {
    if (key === active) return;
    setAnimating(true);
    setActive(key);
    setTimeout(() => {
      setDisplayed(key);
      setAnimating(false);
    }, 220);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .dls-section {
          font-family: 'Kanit', sans-serif;
          background: #f8f9fc;
          position: relative;
          overflow: hidden;
          padding: 64px 24px 72px;
        }

        .dls-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(96,165,250,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .dls-orb {
          position: absolute; border-radius: 50%;
          pointer-events: none; opacity: 0;
          transition: opacity 1.4s ease;
        }
        .dls-orb.vis { opacity: 1; }
        .dls-orb-1 {
          width: 400px; height: 400px; top: -120px; right: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          animation: floatOrb 11s ease-in-out infinite;
        }
        .dls-orb-2 {
          width: 260px; height: 260px; bottom: 80px; left: -70px;
          background: radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%);
          animation: floatOrb 15s ease-in-out infinite reverse;
        }

        .dls-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── HEADER ── */
        .dls-header { text-align: center; margin-bottom: 64px; }

        .dls-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: #2563eb; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .dls-eyebrow.vis { opacity: 1; transform: translateY(0); }
        .dls-eyebrow-line { display: block; width: 28px; height: 1px; background: #2563eb; opacity: 0.4; }

        .dls-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 800; color: #0f0f0f;
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s;
        }
        .dls-title.vis { opacity: 1; transform: translateY(0); }
        .dls-title-accent { color: #2563eb; }

        .dls-intro {
          font-size: 16px; color: #555; line-height: 1.85;
          max-width: 620px; margin: 0 auto;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .dls-intro.vis { opacity: 1; transform: translateY(0); }

        /* ── TAB STRIP ── */
        .dls-tabs-wrap {
          display: flex; justify-content: center;
          margin-bottom: 56px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.8s ease 0.42s, transform 0.8s ease 0.42s;
        }
        .dls-tabs-wrap.vis { opacity: 1; transform: translateY(0); }

        .dls-tabs {
          background: #111;
          border-radius: 100px;
          padding: 6px;
          display: flex; flex-wrap: wrap; gap: 4px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        }

        .dls-tab {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          border-radius: 100px;
          font-family: 'Kanit', sans-serif;
          font-size: 13.5px; font-weight: 400;
          color: rgba(255,255,255,0.5);
          border: none; background: transparent;
          cursor: pointer;
          transition: color 0.25s ease, background 0.25s ease;
          white-space: nowrap;
        }

        .dls-tab svg { width: 15px; height: 15px; opacity: 0.6; transition: opacity 0.25s; }

        .dls-tab:hover { color: rgba(255,255,255,0.85); }
        .dls-tab:hover svg { opacity: 0.85; }

        .dls-tab.active {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: #fff;
          box-shadow: 0 4px 16px rgba(37,99,235,0.4);
        }
        .dls-tab.active svg { opacity: 1; }

        /* ── CONTENT ── */
        .dls-content {
          max-width: 780px;
          margin: 0 auto;
          opacity: 1;
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .dls-content.fade { opacity: 0; transform: translateY(10px); }

        /* ── LEFT PANEL ── */
        .dls-left {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 24px;
          padding: 44px 40px;
          position: relative; overflow: hidden;
        }

        .dls-left::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 24px 24px 0 0;
        }

        .dls-service-icon {
          width: 52px; height: 52px; border-radius: 16px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .dls-service-icon svg { width: 24px; height: 24px; color: #2563eb; }

        .dls-content-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 800; color: #111; line-height: 1.25;
          margin-bottom: 16px;
        }

        .dls-content-intro {
          font-size: 14.5px; color: #555; line-height: 1.8; margin-bottom: 28px;
        }

        .dls-list-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: #999; margin-bottom: 14px;
        }

        .dls-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }

        .dls-list-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; color: #333; line-height: 1.5;
          padding: 8px 10px; border-radius: 10px;
          transition: background 0.2s ease;
        }
        .dls-list-item:hover { background: rgba(37,99,235,0.04); }

        .dls-check {
          width: 20px; height: 20px; flex-shrink: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(37,99,235,0.3);
        }
        .dls-check svg { width: 11px; height: 11px; color: #fff; }

        .dls-cta-btn {
          margin-top: 32px;
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(0,0,0,0.06);
          color: #111; border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer; font-family: 'Kanit', sans-serif;
          font-size: 13.5px; font-weight: 500;
          border-radius: 100px; padding: 13px 22px 13px 26px;
          transition: transform 0.25s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .dls-cta-btn:hover {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent; color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.35);
        }
        .dls-cta-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: transform 0.3s ease, background 0.3s ease;
        }
        .dls-cta-btn:hover .dls-cta-arrow { transform: translateX(3px); background: rgba(255,255,255,0.2); }

      `}</style>

      <section className="dls-section" ref={sectionRef}>
        <div className={`dls-orb dls-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`dls-orb dls-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="dls-inner">

          {/* ── HEADER ── */}
          <div className="dls-header">
            <span className={`dls-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="dls-eyebrow-line" />
              Our Services
              <span className="dls-eyebrow-line" />
            </span>

            <h2 className={`dls-title ${isVisible ? "vis" : ""}`}>
              Services Under <span className="dls-title-accent">Digital Leads</span>
            </h2>

            <p className={`dls-intro ${isVisible ? "vis" : ""}`}>
              To fulfill your lead generation objectives, we offer six powerful services.
              Each service works independently but becomes even more effective when combined.
            </p>
          </div>

          {/* ── TAB STRIP ── */}
          <div className={`dls-tabs-wrap ${isVisible ? "vis" : ""}`}>
            <div className="dls-tabs">
              {serviceKeys.map((key) => (
                <button
                  key={key}
                  className={`dls-tab ${active === key ? "active" : ""}`}
                  onClick={() => handleTabChange(key)}
                >
                  <span style={{ width: 15, height: 15 }}>{services[key].icon}</span>
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div className={`dls-content ${animating ? "fade" : ""}`}>

            {/* LEFT */}
            <div className="dls-left">
              <div className="dls-service-icon">{data.icon}</div>
              <h3 className="dls-content-heading">{data.heading}</h3>
              <p className="dls-content-intro">{data.intro}</p>

              <p className="dls-list-label">What you gain:</p>
              <ul className="dls-list">
                {data.bullets1.map((item, i) => (
                  <li key={i} className="dls-list-item">
                    <span className="dls-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {data.bullets2.length > 0 && (
                <>
                  <p className="dls-list-label" style={{ marginTop: 28 }}>{data.bullets2Label || "We create:"}</p>
                  <ul className="dls-list">
                    {data.bullets2.map((item, i) => (
                      <li key={i} className="dls-list-item">
                        <span className="dls-check">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {data.cta && (
                <button className="dls-cta-btn">
                  {data.cta}
                  <span className="dls-cta-arrow">→</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
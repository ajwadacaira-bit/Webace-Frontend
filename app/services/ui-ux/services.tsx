"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    num: "01",
    title: "Brand Identity",
    tagline: "Your brand identity is the visual foundation of your business.",
    body: "It determines how people recognize you, remember you and emotionally connect with you.",
    label: "Brand Identity includes:",
    bullets: [
      { text: "Logo design", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
      { text: "Brand story and personality", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
      { text: "Color palette", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/></svg> },
      { text: "Typography system", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg> },
      { text: "Visual language", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
      { text: "Iconography", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg> },
      { text: "Brand guidelines", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
    ],
    conclusion: "A strong identity creates an unforgettable presence.",
  },
  {
    num: "02",
    title: "Brand Visibility",
    tagline: "Even the best identity fails without visibility.",
    body: "Brand Visibility ensures your brand looks consistent, recognizable and strong everywhere it appears.",
    label: "This includes:",
    bullets: [
      { text: "Visual consistency across platforms", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
      { text: "Unified storytelling", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
      { text: "Consistent color and font use", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/></svg> },
      { text: "Digital presence alignment", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
      { text: "Multi platform brand coherence", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg> },
      { text: "Social profile branding", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
      { text: "Marketing asset branding", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
    ],
    conclusion: "Brand Visibility builds memory, recall and confidence.",
  },
  {
    num: "03",
    title: "UX Design",
    tagline: "UX Design shapes how users move through your website or application.",
    body: "A good UX experience feels effortless and structured.",
    label: "UX Design includes:",
    bullets: [
      { text: "User journey mapping", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg> },
      { text: "Wireframing", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
      { text: "Information architecture", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
      { text: "Interaction flow", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg> },
      { text: "Usability improvement", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
      { text: "Conversion path clarity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> },
      { text: "Mobile first logic", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
    ],
    conclusion: "Good UX keeps users engaged and satisfied.",
  },
  {
    num: "04",
    title: "Social Media Creatives",
    tagline: "Your social identity is a reflection of your brand personality.",
    body: "We create visually premium, consistent and high quality social content.",
    label: "This includes:",
    bullets: [
      { text: "Post design", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
      { text: "Story templates", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
      { text: "Creative branding", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
      { text: "Campaign visuals", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
      { text: "Brand aligned graphic systems", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><line x1="12" y1="10" x2="5" y2="8"/><line x1="12" y1="10" x2="19" y2="8"/><line x1="12" y1="14" x2="5" y2="16"/><line x1="12" y1="14" x2="19" y2="16"/></svg> },
      { text: "Visual storytelling", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
    ],
    conclusion: "Social creatives enhance reputation, engagement and brand recall.",
  },
  {
    num: "05",
    title: "Responsive Web Design",
    tagline: "Your website must look perfect on every device and screen size.",
    body: "Responsive Web Design ensures seamless experience across mobile, tablet and desktop.",
    label: "We ensure:",
    bullets: [
      { text: "Adaptive layouts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
      { text: "Mobile friendly navigation", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg> },
      { text: "Fast load times", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
      { text: "Clean user flows", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
      { text: "Responsive typography", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg> },
      { text: "Visual consistency on all screens", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
    ],
    conclusion: "Responsiveness directly influences conversions and user trust.",
  },
  {
    num: "06",
    title: "Landing Page Design",
    tagline: "Landing pages are conversion engines.",
    body: "They must deliver clarity, trust and value instantly.",
    label: "Landing Page Design includes:",
    bullets: [
      { text: "Hero section clarity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
      { text: "Visual hierarchy", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
      { text: "Trust blocks", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
      { text: "CTA optimisation", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="5"/><circle cx="17" cy="12" r="3"/></svg> },
      { text: "Content flow", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
      { text: "Mobile layout", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
      { text: "Conversion psychology", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
    ],
    conclusion: "A well designed landing page increases sales and leads significantly.",
  },
  {
    num: "07",
    title: "Ecommerce Store Design",
    tagline: "Ecommerce requires clarity, trust, simplicity and emotional motivation to purchase.",
    body: "Every element of your store must reduce friction and drive decisions.",
    label: "We design:",
    bullets: [
      { text: "Product pages", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
      { text: "Collection layouts", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
      { text: "Navigation systems", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg> },
      { text: "Cart and checkout flow", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
      { text: "Visual merchandising", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
      { text: "Trust elements", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
      { text: "Upsell and cross sell design", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
    ],
    conclusion: "Good ecommerce UI UX increases revenue, cart value and customer satisfaction.",
  },
];

export default function UiUxServices() {
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


  // Auto-rotate every 4 seconds, pause on hover
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);
  const svc = services[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .uus-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }
        .uus-section::before {
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
        .uus-orb{position:absolute;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 1.4s ease;}
        .uus-orb.vis{opacity:1;}
        .uus-orb-1{
          width:420px;height:420px;top:-140px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .uus-orb-2{
          width:260px;height:260px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .uus-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .uus-header{text-align:center;margin-bottom:72px;}

        .uus-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .uus-eyebrow.vis{opacity:1;transform:translateY(0);}
        .uus-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .uus-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:18px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .uus-title.vis{opacity:1;transform:translateY(0);}
        .uus-title-accent{color:#2563eb;}

        .uus-sub{
          font-size:16px;color:#555;line-height:1.8;max-width:520px;margin:0 auto;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.3s,transform 0.8s ease 0.3s;
        }
        .uus-sub.vis{opacity:1;transform:translateY(0);}

        /* LAYOUT */
        .uus-layout{
          display:grid;
          grid-template-columns:280px 1fr;
          gap:28px;
          align-items:start;
        }
        @media(max-width:860px){.uus-layout{grid-template-columns:1fr;}}

        /* NAV */
        .uus-nav{
          position:sticky;top:100px;
          display:flex;flex-direction:column;gap:4px;
          opacity:0;transform:translateX(-20px);
          transition:opacity 0.8s ease 0.4s,transform 0.8s ease 0.4s;
        }
        .uus-nav.vis{opacity:1;transform:translateX(0);}

        .uus-nav-item{
          display:flex;align-items:center;gap:14px;
          padding:14px 18px;
          border-radius:14px;
          cursor:pointer;
          position:relative;
          transition:background 0.25s ease;
        }
        .uus-nav-item:hover{background:rgba(37,99,235,0.04);}
        .uus-nav-item.active{background:rgba(37,99,235,0.07);}

        .uus-nav-bar{
          position:absolute;left:0;top:8px;bottom:8px;
          width:3px;border-radius:3px;
          background:linear-gradient(180deg,#2563eb,#60a5fa);
          opacity:0;transform:scaleY(0);transform-origin:top;
          transition:opacity 0.25s ease,transform 0.3s ease;
        }
        .uus-nav-item.active .uus-nav-bar{opacity:1;transform:scaleY(1);}

        .uus-nav-num{
          font-family:'Syne',sans-serif;
          font-size:11px;font-weight:700;letter-spacing:0.1em;
          color:rgba(0,0,0,0.2);flex-shrink:0;
          transition:color 0.25s ease;
        }
        .uus-nav-item.active .uus-nav-num,
        .uus-nav-item:hover .uus-nav-num{color:#2563eb;}

        .uus-nav-label{
          font-family:'Syne',sans-serif;
          font-size:13px;font-weight:700;color:#666;line-height:1.3;
          transition:color 0.25s ease;
        }
        .uus-nav-item.active .uus-nav-label,
        .uus-nav-item:hover .uus-nav-label{color:#111;}

        /* PROGRESS BAR */
        @keyframes uusProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .uus-nav-progress {
          position: absolute;
          bottom: 6px; left: 18px; right: 18px;
          height: 2px; border-radius: 2px;
          background: rgba(37,99,235,0.12);
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .uus-nav-item.active .uus-nav-progress { opacity: 1; }
        .uus-nav-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 2px;
          width: 0%;
        }
        .uus-nav-item.active .uus-nav-progress-fill {
          animation: uusProgress 4s linear forwards;
        }

        /* CONTENT */
        .uus-content{
          background:#fff;
          border:1px solid rgba(0,0,0,0.07);
          border-radius:24px;padding:44px 40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.8s ease 0.5s,transform 0.8s ease 0.5s;
        }
        .uus-content.vis{opacity:1;transform:translateY(0);}
        .uus-content::before{
          content:'';
          position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:24px 24px 0 0;
        }
        .uus-content:hover{
          box-shadow:0 24px 64px rgba(37,99,235,0.07);
          border-color:rgba(37,99,235,0.15);
        }

        @keyframes uusFade{
          from{opacity:0;transform:translateY(10px);}
          to{opacity:1;transform:translateY(0);}
        }
        .uus-inner-content{animation:uusFade 0.3s ease;}

        .uus-content-header{
          display:flex;align-items:center;gap:20px;
          margin-bottom:28px;
        }
        .uus-content-badge{
          width:52px;height:52px;border-radius:15px;flex-shrink:0;
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 6px 20px rgba(37,99,235,0.3);
        }
        .uus-content-badge span{
          font-family:'Syne',sans-serif;font-size:14px;font-weight:800;color:#fff;
        }
        .uus-content-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(22px,2.8vw,30px);font-weight:800;color:#0f0f0f;line-height:1.2;
        }

        .uus-content-body{display:flex;flex-direction:column;gap:0;margin-bottom:28px;}
        .uus-content-line{
          font-size:15px;color:#555;line-height:1.85;
          padding:10px 0;
          border-bottom:1px solid rgba(0,0,0,0.05);
        }
        .uus-content-line:first-child{border-top:1px solid rgba(0,0,0,0.05);}

        .uus-bullets-label{
          font-size:11px;font-weight:600;letter-spacing:0.16em;
          text-transform:uppercase;color:#2563eb;margin-bottom:16px;
        }

        .uus-bullets{
          display:grid;grid-template-columns:1fr 1fr;
          gap:10px;margin-bottom:28px;
        }
        @media(max-width:580px){.uus-bullets{grid-template-columns:1fr;}}

        .uus-bullet{
          display:flex;align-items:center;gap:12px;
          padding:10px 14px;border-radius:11px;
          border:1px solid rgba(0,0,0,0.05);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .uus-bullet:hover{
          background:rgba(37,99,235,0.04);
          border-color:rgba(37,99,235,0.15);
          transform:translateX(3px);
        }
        .uus-bullet-icon{
          width:32px;height:32px;flex-shrink:0;border-radius:9px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease;
        }
        .uus-bullet:hover .uus-bullet-icon{transform:scale(1.08);}
        .uus-bullet-icon svg{width:14px;height:14px;color:#2563eb;}
        .uus-bullet-text{font-size:13px;color:#333;line-height:1.3;}

        .uus-conclusion{
          font-family:'Syne',sans-serif;
          font-size:16px;font-weight:800;color:#111;
          padding:20px 24px;
          border:1px solid rgba(37,99,235,0.15);
          border-left:3px solid #2563eb;
          border-radius:13px;
          background:rgba(37,99,235,0.03);
        }
      `}</style>

      <section className="uus-section" ref={sectionRef}>
        <div className={`uus-orb uus-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`uus-orb uus-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="uus-inner">

          {/* HEADER */}
          <div className="uus-header">
            <span className={`uus-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="uus-eyebrow-line" />
              UI UX Services
              <span className="uus-eyebrow-line" />
            </span>
            <h2 className={`uus-title ${isVisible ? "vis" : ""}`}>
              Services Under <span className="uus-title-accent">UI UX</span>
            </h2>
            <p className={`uus-sub ${isVisible ? "vis" : ""}`}>
              Here are the seven core UI UX services WebAce offers:
            </p>
          </div>

          {/* LAYOUT */}
          <div className="uus-layout">

            {/* NAV */}
            <div
              className={`uus-nav ${isVisible ? "vis" : ""}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`uus-nav-item ${active === i ? "active" : ""}`}
                  onClick={() => { setActive(i); setPaused(false); }}
                >
                  <div className="uus-nav-bar" />
                  <span className="uus-nav-num">{s.num}</span>
                  <span className="uus-nav-label">{s.title}</span>
                  <div className="uus-nav-progress">
                    <div className="uus-nav-progress-fill" key={`${i}-${active}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* CONTENT */}
            <div className={`uus-content ${isVisible ? "vis" : ""}`}>
              <div className="uus-inner-content" key={active}>

                <div className="uus-content-header">
                  <div className="uus-content-badge"><span>{svc.num}</span></div>
                  <h3 className="uus-content-title">{svc.title}</h3>
                </div>

                <div className="uus-content-body">
                  <p className="uus-content-line">{svc.tagline}</p>
                  <p className="uus-content-line">{svc.body}</p>
                </div>

                <p className="uus-bullets-label">{svc.label}</p>

                <div className="uus-bullets">
                  {svc.bullets.map((b, i) => (
                    <div key={i} className="uus-bullet">
                      <div className="uus-bullet-icon">{b.icon}</div>
                      <span className="uus-bullet-text">{b.text}</span>
                    </div>
                  ))}
                </div>

                <div className="uus-conclusion">{svc.conclusion}</div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
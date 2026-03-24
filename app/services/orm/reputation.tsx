"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    num: "01",
    title: "Social Media Reputation Management",
    tagline: "Your social platforms are where public conversations happen.",
    body: "Customers ask questions, share feedback and express opinions in real time. Ignoring these conversations can harm your reputation.",
    bullets: [
      { text: "Respond professionally to comments", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
      { text: "Handle complaints politely", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
      { text: "Reduce negativity", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> },
      { text: "Maintain tone consistency", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> },
      { text: "Build positive sentiment", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
      { text: "Improve public perception", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
      { text: "Manage sensitive conversations", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
    ],
    conclusion: "Your social media becomes a reputation safe zone instead of a risk zone.",
  },
  {
    num: "02",
    title: "Google Review Management",
    tagline: "Your Google rating directly affects your conversion rate.",
    body: "If you have a low rating or unaddressed negative reviews, customers hesitate instantly.",
    bullets: [
      { text: "Improve your rating", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
      { text: "Collect positive reviews", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
      { text: "Respond to negative reviews professionally", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
      { text: "Build credibility", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
      { text: "Encourage satisfied customers to share feedback", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
      { text: "Mitigate fake or misleading reviews", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> },
    ],
    conclusion: "Better reviews equal stronger trust and higher sales.",
  },
  {
    num: "03",
    title: "Reputation Monitoring",
    tagline: "Reputation is fragile when ignored.",
    body: "We monitor your digital footprint across platforms to ensure nothing harmful goes unnoticed.",
    bullets: [
      { text: "Mentions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg> },
      { text: "Reviews", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
      { text: "Comments", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
      { text: "Social conversations", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
      { text: "Forums", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
      { text: "News mentions", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></svg> },
      { text: "Blogs", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
      { text: "Public feedback", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
    ],
    conclusion: "Real time monitoring lets us respond, repair and safeguard quickly.",
  },
  {
    num: "04",
    title: "SERP Management",
    tagline: "Search engines create your first impression.",
    body: "Users judge your brand based on what appears on the first page of Google.",
    bullets: [
      { text: "Push down negative content", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg> },
      { text: "Promote positive assets", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/></svg> },
      { text: "Improve visibility of brand owned content", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
      { text: "Strengthen your digital footprint", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
      { text: "Optimize articles, websites and profiles", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
      { text: "Influence the first page of Google", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
    ],
    conclusion: "SERP Management ensures users see the right version of your brand.",
  },
  {
    num: "05",
    title: "Personal Branding",
    tagline: "Your brand is not just a business.",
    body: "It is also the people behind it. Founders, leaders and experts must have a strong digital identity.",
    bullets: [
      { text: "Personal positioning", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg> },
      { text: "Authority building", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
      { text: "Professional profile optimization", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
      { text: "Thought leadership content", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
      { text: "Digital footprint strengthening", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
    ],
    conclusion: "A strong personal brand builds trust for the entire company.",
  },
  {
    num: "06",
    title: "Reputation Building Content",
    tagline: "Content shapes perception.",
    body: "When you are visible with rich, positive and credible content, negativity loses power.",
    bullets: [
      { text: "Articles", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
      { text: "PR stories", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
      { text: "Interviews", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
      { text: "Social content", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
      { text: "Customer stories", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
      { text: "Thought leadership pieces", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
      { text: "Brand narratives", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
    ],
    conclusion: "Reputation Building Content strengthens credibility and supports all ORM goals.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = services[openIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Kanit:wght@300;400;500&display=swap');

        .oss-section {
          font-family: 'Kanit', sans-serif;
          background: #fff;
          position: relative; overflow: hidden;
          padding: 64px 24px 72px;
        }

        .oss-section::before {
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
        .oss-orb {
          position:absolute; border-radius:50%;
          pointer-events:none; opacity:0; transition:opacity 1.4s ease;
        }
        .oss-orb.vis{opacity:1;}
        .oss-orb-1{
          width:420px;height:420px;top:-140px;right:-120px;
          background:radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%);
          animation:floatOrb 12s ease-in-out infinite;
        }
        .oss-orb-2{
          width:260px;height:260px;bottom:60px;left:-80px;
          background:radial-gradient(circle,rgba(96,165,250,0.04) 0%,transparent 70%);
          animation:floatOrb 16s ease-in-out infinite reverse;
        }

        .oss-inner{max-width:1100px;margin:0 auto;position:relative;}

        /* HEADER */
        .oss-header{text-align:center;margin-bottom:72px;}

        .oss-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-size:11px;font-weight:500;letter-spacing:0.22em;
          text-transform:uppercase;color:#2563eb;margin-bottom:20px;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .oss-eyebrow.vis{opacity:1;transform:translateY(0);}
        .oss-eyebrow-line{display:block;width:28px;height:1px;background:#2563eb;opacity:0.4;}

        .oss-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(34px,5vw,58px);
          font-weight:800;color:#0f0f0f;
          line-height:1.1;letter-spacing:-0.02em;margin-bottom:18px;
          opacity:0;transform:translateY(28px);
          transition:opacity 0.85s ease 0.15s,transform 0.85s ease 0.15s;
        }
        .oss-title.vis{opacity:1;transform:translateY(0);}
        .oss-title-accent{color:#2563eb;}

        .oss-sub{
          font-size:16px;color:#555;line-height:1.8;max-width:560px;margin:0 auto;
          opacity:0;transform:translateY(14px);
          transition:opacity 0.8s ease 0.3s,transform 0.8s ease 0.3s;
        }
        .oss-sub.vis{opacity:1;transform:translateY(0);}

        /* LAYOUT */
        .oss-layout{
          display:grid;
          grid-template-columns:320px 1fr;
          gap:32px;
          align-items:start;
        }
        @media(max-width:860px){.oss-layout{grid-template-columns:1fr;}}

        /* LEFT NAV */
        .oss-nav{
          position:sticky;top:100px;
          display:flex;flex-direction:column;gap:0;
          opacity:0;transform:translateX(-20px);
          transition:opacity 0.8s ease 0.4s,transform 0.8s ease 0.4s;
        }
        .oss-nav.vis{opacity:1;transform:translateX(0);}

        .oss-nav-item{
          display:flex;align-items:center;gap:16px;
          padding:16px 20px;
          border-radius:14px;
          cursor:pointer;
          position:relative;
          transition:background 0.25s ease;
        }
        .oss-nav-item:hover{background:rgba(37,99,235,0.04);}
        .oss-nav-item.active{background:rgba(37,99,235,0.06);}

        .oss-nav-num{
          font-family:'Syne',sans-serif;
          font-size:11px;font-weight:700;letter-spacing:0.1em;
          color:rgba(0,0,0,0.2);flex-shrink:0;
          transition:color 0.25s ease;
        }
        .oss-nav-item.active .oss-nav-num,
        .oss-nav-item:hover .oss-nav-num{color:#2563eb;}

        .oss-nav-label{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:700;color:#555;line-height:1.3;
          transition:color 0.25s ease;
        }
        .oss-nav-item.active .oss-nav-label,
        .oss-nav-item:hover .oss-nav-label{color:#111;}

        /* active bar */
        .oss-nav-bar{
          position:absolute;left:0;top:8px;bottom:8px;
          width:3px;border-radius:3px;
          background:linear-gradient(180deg,#2563eb,#60a5fa);
          opacity:0;transform:scaleY(0);
          transition:opacity 0.25s ease,transform 0.3s ease;
        }
        .oss-nav-item.active .oss-nav-bar{opacity:1;transform:scaleY(1);}

        /* RIGHT CONTENT */
        .oss-content{
          background:#fff;
          border:1px solid rgba(0,0,0,0.07);
          border-radius:24px;padding:44px 40px;
          position:relative;overflow:hidden;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.8s ease 0.5s,transform 0.8s ease 0.5s;
        }
        .oss-content.vis{opacity:1;transform:translateY(0);}

        /* top bar always present */
        .oss-content::before{
          content:'';
          position:absolute;top:0;left:0;right:0;height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          border-radius:24px 24px 0 0;
        }

        /* fade animation when switching */
        @keyframes ossFade{
          0%{opacity:0;transform:translateY(10px);}
          100%{opacity:1;transform:translateY(0);}
        }
        .oss-content-inner{animation:ossFade 0.3s ease;}

        .oss-content-header{
          display:flex;align-items:center;gap:20px;
          margin-bottom:28px;
        }

        .oss-content-num{
          width:48px;height:48px;border-radius:14px;
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
          box-shadow:0 6px 20px rgba(37,99,235,0.3);
        }
        .oss-content-num span{
          font-family:'Syne',sans-serif;
          font-size:14px;font-weight:800;color:#fff;
        }

        .oss-content-title{
          font-family:'Syne',sans-serif;
          font-size:clamp(20px,2.5vw,28px);
          font-weight:800;color:#0f0f0f;line-height:1.2;
        }

        .oss-content-body{
          display:flex;flex-direction:column;gap:0;
          margin-bottom:28px;
        }

        .oss-content-line{
          font-size:15px;color:#555;line-height:1.85;
          padding:10px 0;
          border-bottom:1px solid rgba(0,0,0,0.05);
        }
        .oss-content-line:first-child{border-top:1px solid rgba(0,0,0,0.05);}

        .oss-bullets-label{
          font-size:11px;font-weight:600;letter-spacing:0.16em;
          text-transform:uppercase;color:#2563eb;margin-bottom:16px;
        }

        .oss-bullets{
          display:grid;grid-template-columns:1fr 1fr;
          gap:10px;margin-bottom:28px;
        }
        @media(max-width:580px){.oss-bullets{grid-template-columns:1fr;}}

        .oss-bullet{
          display:flex;align-items:center;gap:12px;
          padding:10px 14px;border-radius:11px;
          border:1px solid rgba(0,0,0,0.05);
          transition:background 0.25s ease,border-color 0.25s ease,transform 0.25s ease;
          cursor:default;
        }
        .oss-bullet:hover{
          background:rgba(37,99,235,0.04);
          border-color:rgba(37,99,235,0.15);
          transform:translateX(3px);
        }
        .oss-bullet-icon{
          width:32px;height:32px;flex-shrink:0;border-radius:9px;
          background:linear-gradient(135deg,#eff6ff,#dbeafe);
          display:flex;align-items:center;justify-content:center;
          transition:transform 0.25s ease;
        }
        .oss-bullet:hover .oss-bullet-icon{transform:scale(1.08);}
        .oss-bullet-icon svg{width:14px;height:14px;color:#2563eb;}
        .oss-bullet-text{font-size:13px;color:#333;line-height:1.3;}

        .oss-conclusion{
          font-family:'Syne',sans-serif;
          font-size:16px;font-weight:800;color:#111;
          padding:20px 24px;
          border:1px solid rgba(37,99,235,0.15);
          border-left:3px solid #2563eb;
          border-radius:13px;
          background:rgba(37,99,235,0.03);
        }
      `}</style>

      <section className="oss-section" ref={sectionRef}>
        <div className={`oss-orb oss-orb-1 ${isVisible ? "vis" : ""}`} />
        <div className={`oss-orb oss-orb-2 ${isVisible ? "vis" : ""}`} />

        <div className="oss-inner">

          {/* HEADER */}
          <div className="oss-header">
            <span className={`oss-eyebrow ${isVisible ? "vis" : ""}`}>
              <span className="oss-eyebrow-line" />
              ORM Services
              <span className="oss-eyebrow-line" />
            </span>
            <h2 className={`oss-title ${isVisible ? "vis" : ""}`}>
              Services Under <span className="oss-title-accent">ORM</span>
            </h2>
            <p className={`oss-sub ${isVisible ? "vis" : ""}`}>
              To build, repair and manage your reputation holistically, WebAce offers these six ORM services.
            </p>
          </div>

          {/* LAYOUT */}
          <div className="oss-layout">

            {/* LEFT NAV */}
            <div className={`oss-nav ${isVisible ? "vis" : ""}`}>
              {services.map((svc, i) => (
                <div
                  key={i}
                  className={`oss-nav-item ${openIndex === i ? "active" : ""}`}
                  onClick={() => setOpenIndex(i)}
                >
                  <div className="oss-nav-bar" />
                  <span className="oss-nav-num">{svc.num}</span>
                  <span className="oss-nav-label">{svc.title}</span>
                </div>
              ))}
            </div>

            {/* RIGHT CONTENT */}
            <div className={`oss-content ${isVisible ? "vis" : ""}`}>
              <div className="oss-content-inner" key={openIndex}>

                <div className="oss-content-header">
                  <div className="oss-content-num">
                    <span>{active.num}</span>
                  </div>
                  <h3 className="oss-content-title">{active.title}</h3>
                </div>

                <div className="oss-content-body">
                  <p className="oss-content-line">{active.tagline}</p>
                  <p className="oss-content-line">{active.body}</p>
                </div>

                <p className="oss-bullets-label">What we do:</p>
                <div className="oss-bullets">
                  {active.bullets.map((b, i) => (
                    <div key={i} className="oss-bullet">
                      <div className="oss-bullet-icon">{b.icon}</div>
                      <span className="oss-bullet-text">{b.text}</span>
                    </div>
                  ))}
                </div>

                <div className="oss-conclusion">{active.conclusion}</div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
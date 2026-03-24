"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  companyTop: { left: string; right: string };
  challengeTitle: string;
  challengeText: string;
  approachTitle: string;
  approachItems: string[];
  statBig: string;
  statLine1: string;
  statLine2Prefix: string;
  statLine2Bold: string;
  statLine2Suffix: string;
};

function LeftArrowIcon() {
  return (
    <svg width="27" height="46" viewBox="0 0 27 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.0731 45.0991C24.8413 46.3003 22.8555 46.3003 21.6238 45.0991L0.735113 24.7282C0.502087 24.5014 0.317211 24.2321 0.191071 23.9355C0.06493 23.639 0 23.3211 0 23C0 22.6789 0.06493 22.361 0.191071 22.0645C0.317211 21.7679 0.502087 21.4986 0.735113 21.2718L21.6238 0.900879C22.8555 -0.300293 24.8413 -0.300293 26.0731 0.900879C27.3048 2.10205 27.3048 4.03864 26.0731 5.23981L7.87398 23.0123L26.0982 40.7847C27.3048 41.9614 27.3048 43.9225 26.0731 45.0991Z"
        fill="white"
      />
    </svg>
  );
}

function RightArrowIcon() {
  return (
    <svg width="27" height="46" viewBox="0 0 27 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.926946 45.0991C2.15865 46.3003 4.14446 46.3003 5.37617 45.0991L26.2649 24.7282C26.4979 24.5014 26.6828 24.2321 26.8089 23.9355C26.9351 23.639 27 23.3211 27 23C27 22.6789 26.9351 22.361 26.8089 22.0645C26.6828 21.7679 26.4979 21.4986 26.2649 21.2718L5.37617 0.900879C4.14446 -0.300293 2.15865 -0.300293 0.926946 0.900879C-0.30476 2.10205 -0.30476 4.03864 0.926946 5.23981L19.126 23.0123L0.901808 40.7847C-0.30476 41.9614 -0.30476 43.9225 0.926946 45.0991Z"
        fill="white"
      />
    </svg>
  );
}

function CheckPillIcon() {
  return (
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="26.8" height="26" rx="13" fill="white" />
      <rect x="0.5" y="0.5" width="26.8" height="26" rx="13" stroke="white" />
      <path d="M9 13.7333L12.2667 17L18.8 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SlideCard({ s }: { s: Slide }) {
  return (
    <article className="ts-card">
      <div className="ts-badge">
        <div className="ts-badge-text">
          <span className="ts-badge-up">{s.companyTop.left} </span>
          <span className="ts-badge-low">{s.companyTop.right}</span>
        </div>
      </div>

      <div className="ts-card-body">
        <div className="ts-upper">
          <div className="ts-block">
            <div className="ts-block-title">{s.challengeTitle}</div>
            <div className="ts-block-text">{s.challengeText}</div>
          </div>

          <div className="ts-block">
            <div className="ts-block-title">{s.approachTitle}</div>

            <div className="ts-row">
              <CheckPillIcon />
              <div className="ts-row-text">{s.approachItems[0]}</div>
            </div>

            <div className="ts-row">
              <CheckPillIcon />
              <div className="ts-row-text">{s.approachItems[1]}</div>
            </div>
          </div>
        </div>

        <div className="ts-stats">
          <div className="ts-stat-big">{s.statBig}</div>
          <div className="ts-stat-line">{s.statLine1}</div>
          <div className="ts-stat-line">
            {s.statLine2Prefix} <span className="ts-stat-bold">{s.statLine2Bold}</span> {s.statLine2Suffix}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        companyTop: { left: "ABC", right: "ltd." },
        challengeTitle: "challenge",
        challengeText: "low brand visibility in competitive market",
        approachTitle: "webAce approach",
        approachItems: ["social media marketing", "video creation"],
        statBig: "300%",
        statLine1: "growth in social media",
        statLine2Prefix: "with",
        statLine2Bold: "25%",
        statLine2Suffix: "increase in brand mentions",
      },
      {
        companyTop: { left: "XYZ", right: "ltd." },
        challengeTitle: "challenge",
        challengeText: "low brand visibility in competitive market",
        approachTitle: "webAce approach",
        approachItems: ["social media marketing", "video creation"],
        statBig: "300%",
        statLine1: "growth in social media",
        statLine2Prefix: "with",
        statLine2Bold: "25%",
        statLine2Suffix: "increase in brand mentions",
      },
      {
        companyTop: { left: "PQR", right: "ltd." },
        challengeTitle: "challenge",
        challengeText: "low brand visibility in competitive market",
        approachTitle: "webAce approach",
        approachItems: ["social media marketing", "video creation"],
        statBig: "300%",
        statLine1: "growth in social media",
        statLine2Prefix: "with",
        statLine2Bold: "25%",
        statLine2Suffix: "increase in brand mentions",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const [step, setStep] = useState(520);
  const [visible, setVisible] = useState(2);
  const [centerOffset, setCenterOffset] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const viewport = viewportRef.current;
    if (!wrap || !viewport) return;

    const measure = () => {
      const first = viewport.querySelector<HTMLElement>(".ts-slide");
      if (!first) return;

      const slideW = first.getBoundingClientRect().width;

      const track = viewport.querySelector<HTMLElement>(".ts-track");
      const gap = track ? parseFloat(getComputedStyle(track).gap || "0") : 0;

      // CSS variable controls 1/2 visible cards per breakpoint
      const vRaw = getComputedStyle(wrap).getPropertyValue("--cards-visible").trim();
      const v = parseInt(vRaw || "2", 10);

      setVisible(Number.isFinite(v) ? v : 2);
      setStep(slideW + gap);

      // center the visible "window" inside viewport
      const vw = viewport.getBoundingClientRect().width;
      const windowW = slideW * (Number.isFinite(v) ? v : 2) + gap * ((Number.isFinite(v) ? v : 2) - 1);
      setCenterOffset(Math.max(0, (vw - windowW) / 2));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(0, slides.length - visible);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="ts-wrap" aria-label="Case studies slider">
      <div ref={wrapRef} className="ts-inner">
        <button type="button" className="ts-arrow ts-arrow-left" onClick={prev} aria-label="Previous">
          <span className="ts-arrow-bg" />
          <span className="ts-arrow-ico">
            <LeftArrowIcon />
          </span>
        </button>

        <div ref={viewportRef} className="ts-viewport" aria-live="polite">
          <div
            className="ts-track"
            style={{
              transform: `translateX(${centerOffset - index * step}px)`,
            }}
          >
            {slides.map((s, i) => (
              <div key={i} className="ts-slide">
                <SlideCard s={s} />
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="ts-arrow ts-arrow-right" onClick={next} aria-label="Next">
          <span className="ts-arrow-bg" />
          <span className="ts-arrow-ico">
            <RightArrowIcon />
          </span>
        </button>
      </div>
    </section>
  );
}

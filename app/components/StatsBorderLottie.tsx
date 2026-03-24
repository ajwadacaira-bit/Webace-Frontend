"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function StatsBorderLottie() {
  const [anim, setAnim] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/lottie/stats-border.json", { cache: "no-store" });
      const txt = await res.text();

      if (!txt || !txt.trim()) {
        console.error(
          "stats-border.json is EMPTY. Paste your exported Lottie JSON into public/lottie/stats-border.json"
        );
        return;
      }

      try {
        setAnim(JSON.parse(txt));
      } catch (e) {
        console.error("stats-border.json is not valid JSON:", e);
      }
    })();
  }, []);

  // Optional placeholder so you know it's loading
  if (!anim) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <Lottie animationData={anim} loop autoplay className="h-full w-full" />
    </div>
  );
}

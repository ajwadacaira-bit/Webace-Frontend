import type { Metadata } from "next";
import BrandHero from "./hero";
import Brandwhy from "./why";
import BrandApproach from "./approach";
import BrandService from "./services";
import BrandDifferent from "./different";
import BrandWhen from "./when";
import BrandPresence from "./presence";



export const metadata: Metadata = {
  title: "Brand Awareness & Engagement Services | WebAce",
  description:
    "Build powerful brand awareness and engagement strategies that increase visibility, trust, and customer loyalty.",
  alternates: {
    canonical:
      "https://www.webace.com/services/brand-awareness-engagement",
  },
  openGraph: {
    title: "Brand Awareness & Engagement Services | WebAce",
    description:
      "High-impact brand awareness and engagement campaigns designed to grow your business.",
    url: "https://www.webace.com/services/brand-awareness-engagement",
    type: "website",
  },
};

export default function BrandAwarenessPage() {
  return (
    <>
      <BrandHero />
      <Brandwhy/>
      <BrandApproach />
      <BrandService />
      <BrandDifferent />
      <BrandWhen />
      <BrandPresence />
      {/* Next sections go here */}
    </>
  );
}

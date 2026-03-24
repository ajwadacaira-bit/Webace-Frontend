import type { Metadata } from "next";
import DigitalHero from "./hero";
import DigitalMatters from "./matter";
import DigitalService from "./serve";
import DigitalWork from "./work";
import DigitalRight from "./right";
import DigitalLast from "./last";

export const metadata: Metadata = {
  title: "Digital Lead Generation Services | High Intent Leads | WebAce",
  description:
    "Generate high intent digital leads with WebAce. We turn clicks into qualified inquiries using data-driven lead generation strategies, Google Ads, Meta Ads and optimized funnels.",
  keywords: [
    "Digital Lead Generation",
    "Lead Generation Services",
    "High Intent Leads",
    "Inbound Lead Strategy",
    "Google Ads Lead Generation",
    "Meta Ads Lead Generation",
    "Performance Marketing Agency"
  ],
  alternates: {
    canonical: "https://www.webace.com/services/digital-leads",
  },
};
export default function DigitalLeadsPage() {
  return (
    <>
        <DigitalHero />
        <DigitalMatters />
        <DigitalService />
        <DigitalWork />
        <DigitalRight />
        <DigitalLast />
      {/* Next sections go here */}
    </>
  );
}
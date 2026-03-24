import type { Metadata } from "next";

import UiUxHero from "./hero";
import WhyUiUxMatters from "./matter";
import UiUxServices from "./services";
import UiUxApproach from "./approach";
import UiUxBenefits from "./benefit";
import UiUxPerformance from "./performance";
import UiUxChoose from "./choose";
import UiUxChoice from "./choice";

export const metadata: Metadata = {
  title:
    "UI UX Design Services | User Experience & Interface Design | WebAce",

  description:
    "Design intuitive, high-converting digital experiences with WebAce UI/UX design services. We create user-centered interfaces that improve usability, engagement and conversion performance.",

  keywords: [
    "UI UX Design Services",
    "User Experience Design",
    "User Interface Design",
    "Website UX Optimization",
    "Conversion Focused UX",
    "UX Research Services",
    "UX UI Agency",
    "Digital Experience Design",
    "UI UX Design Company",
    "UX Strategy Services",
  ],

  alternates: {
    canonical: "https://www.webace.com/services/ui-ux",
  },

  openGraph: {
    title: "UI UX Design Services | WebAce",
    description:
      "Create intuitive digital experiences that drive engagement and conversions with WebAce UI/UX design expertise.",
    url: "https://www.webace.com/services/ui-ux",
    siteName: "WebAce",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UI UX Design Services | WebAce",
    description:
      "Design user experiences that convert visitors into customers with WebAce UI/UX design services.",
  },
};

export default function UiUxPage() {
  return (
    <main className="bg-white">
        <UiUxHero />
        <WhyUiUxMatters />
        <UiUxServices />
        <UiUxApproach />
        <UiUxBenefits />
        <UiUxPerformance />    
        <UiUxChoose />
        <UiUxChoice />
    </main>
  );
}
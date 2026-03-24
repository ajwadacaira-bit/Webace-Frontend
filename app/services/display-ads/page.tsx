import type { Metadata } from "next";
import Link from "next/link";
import Hero from "./hero";
import Why from "./why";
import Approach from "./approach";




export const metadata: Metadata = {
  title: "Display Advertising Services | Programmatic & Banner Ads for Growth",
  description:
    "Boost brand visibility, remarketing performance, and qualified traffic with strategic display advertising services. We plan, design, target, and optimise display ad campaigns for measurable growth.",
  keywords: [
    "display advertising services",
    "display ads agency",
    "programmatic advertising services",
    "banner advertising services",
    "remarketing ads agency",
    "google display ads services",
    "performance display marketing",
    "digital display advertising company",
  ],
  alternates: {
    canonical: "https://www.webace.com/services/display-ads",
  },
  openGraph: {
    title: "Display Advertising Services | Programmatic & Banner Ads for Growth",
    description:
      "Strategic display advertising campaigns designed to increase reach, awareness, retargeting efficiency, and conversions.",
    url: "https://www.webace.com/services/display-ads",
    siteName: "WebAce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Display Advertising Services | Programmatic & Banner Ads for Growth",
    description:
      "Grow visibility and conversions with strategic display ad campaigns, retargeting, and creative optimisation.",
  },
};

const displayAdsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Display Advertising Services",
  serviceType: "Display Advertising",
  provider: {
    "@type": "Organization",
    name: "WebAce",
    url: "https://www.webace.com",
  },
  areaServed: "Worldwide",
  url: "https://www.webace.com/services/display-ads",
  description:
    "WebAce provides display advertising services including campaign strategy, audience targeting, retargeting, creative optimisation, programmatic display management, and performance reporting.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are display advertising services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Display advertising services involve planning, launching, managing, and optimising visual ad campaigns across websites, apps, and digital platforms to improve visibility, traffic, retargeting performance, and conversions.",
      },
    },
    {
      "@type": "Question",
      name: "How do display ads help business growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Display ads help businesses stay visible to relevant audiences, increase brand recall, re-engage past website visitors, support the buyer journey, and generate more qualified traffic and conversions over time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you also handle retargeting campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our display advertising services include retargeting strategies that reconnect your business with previous website visitors using segmented messaging and creative tailored to their stage in the funnel.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure display advertising success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We measure success using metrics such as impressions, reach, click-through rate, engagement quality, assisted conversions, direct conversions, cost efficiency, audience performance, and creative effectiveness.",
      },
    },
  ],
};

const benefits = [
  {
    title: "Broader Digital Visibility",
    description:
      "Put your brand in front of relevant audiences across websites, apps, and placements that align with your market, helping you build awareness beyond search alone.",
  },
  {
    title: "Smarter Retargeting",
    description:
      "Reconnect with visitors who already showed intent, using tailored messaging and audience segmentation to bring them back and move them closer to conversion.",
  },
  {
    title: "Creative That Performs",
    description:
      "We develop and refine display creatives that are aligned with your brand, designed for clarity, and optimised to improve engagement and campaign response.",
  },
  {
    title: "Data-Led Optimisation",
    description:
      "Every campaign is monitored closely so budgets, placements, formats, and audience groups can be improved continuously for better returns.",
  },
];

const process = [
  {
    step: "01",
    title: "Audience & Market Research",
    description:
      "We identify who should see your ads, where they spend time online, what messaging will resonate, and how your competitors position themselves visually.",
  },
  {
    step: "02",
    title: "Strategy & Funnel Planning",
    description:
      "We map campaigns to business objectives, whether the goal is awareness, website traffic, remarketing, lead generation, or revenue support.",
  },
  {
    step: "03",
    title: "Creative Development",
    description:
      "We create static or motion-led display ad concepts with strong visual hierarchy, clear calls to action, and consistent brand presentation.",
  },
  {
    step: "04",
    title: "Campaign Launch & Testing",
    description:
      "Your campaigns are launched with structured targeting, placement selection, bidding logic, and testing frameworks to validate what works fastest.",
  },
  {
    step: "05",
    title: "Ongoing Optimisation",
    description:
      "We refine targeting, creative, messaging, device performance, and placement quality based on real campaign data and conversion signals.",
  },
  {
    step: "06",
    title: "Reporting & Growth Insights",
    description:
      "You receive actionable reporting that shows what is driving performance and where the next layer of scale can come from.",
  },
];

const faqs = [
  {
    question: "What are display advertising services?",
    answer:
      "Display advertising services cover the strategy, creation, targeting, launch, and optimisation of visual ads shown across digital platforms. They are used to increase awareness, support remarketing, drive qualified traffic, and improve conversion opportunities.",
  },
  {
    question: "Are display ads only useful for large brands?",
    answer:
      "No. Display ads can be effective for both growing and established businesses when campaigns are built around the right audience, message, budget structure, and funnel stage.",
  },
  {
    question: "Can display advertising support lead generation?",
    answer:
      "Yes. Display campaigns can support lead generation by keeping your brand visible, re-engaging previous visitors, and guiding audiences back to focused landing pages designed to convert.",
  },
  {
    question: "Do you manage Google Display Network and remarketing?",
    answer:
      "Yes. We can manage Google Display campaigns, remarketing strategies, audience segmentation, creative testing, and performance optimisation as part of a wider growth plan.",
  },
];

export default function DisplayAdsPage() {
  return (
    <main>
      <Hero />
        <Why />
        <Approach />    
    </main>
  );
}
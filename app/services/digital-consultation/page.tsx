import type { Metadata } from "next";

import ConsultationHero from "./hero";
import ConsultationWhy from "./why";
import ConsultationProcess from "./process";
import ConsultationService from "./service";
import ConsultationChoose from "./choose";  
import ConsultationChoice from "./choice";
import ConsultationFinal from "./final";


export const metadata: Metadata = {
  title:
    "Digital Consultation Services | Strategy, Growth Planning & Marketing Guidance | WebAce",

  description:
    "Get expert digital consultation from WebAce. We analyze your brand, strategy, marketing channels and growth opportunities to create clear digital roadmaps that drive measurable results.",

  keywords: [
    "Digital Consultation Services",
    "Digital Strategy Consulting",
    "Marketing Strategy Consultation",
    "Digital Growth Consulting",
    "Business Digital Strategy",
    "Online Marketing Consultant",
    "Brand Growth Consulting",
    "Digital Transformation Consulting",
    "Marketing Planning Services",
    "Digital Strategy Agency",
  ],

  alternates: {
    canonical: "https://www.webace.com/services/digital-consultation",
  },

  openGraph: {
    title: "Digital Consultation Services | WebAce",
    description:
      "Expert guidance to build smarter digital strategies, optimize marketing channels and accelerate brand growth.",
    url: "https://www.webace.com/services/digital-consultation",
    siteName: "WebAce",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Consultation Services | WebAce",
    description:
      "Build stronger digital strategies with WebAce consultation services.",
  },
};

export default function DigitalConsultationPage() {
  return (
    <main className="bg-white">

      <ConsultationHero />
        <ConsultationWhy />
        <ConsultationProcess />
        <ConsultationService />
        <ConsultationChoose />
        <ConsultationChoice />
        <ConsultationFinal />
    </main>
  );
}
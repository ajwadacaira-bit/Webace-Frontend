import { Metadata } from "next";
import Ormhero from "./hero";
import Ormwhy from "./why";
import Ormreputation from "./reputation";
import OrmApproach from "./approach";
import Ormwhat from "./what";
import Ormimpact from "./impact";
import OrmChoose from "./choose";
import OrmChoice from "./choice";
import OrmFinalCTA from "./final";

export const metadata: Metadata = {
  title: "Online Reputation Management Services | Brand Protection & Review Management | WebAce",

  description:
    "Protect and strengthen your brand image with WebAce Online Reputation Management services. We monitor reviews, manage brand perception, repair negative search results and build lasting digital trust.",

  keywords: [
    "Online Reputation Management",
    "ORM Services",
    "Brand Reputation Management",
    "Review Management Services",
    "Google Review Management",
    "Crisis Reputation Repair",
    "Search Reputation Repair",
    "Negative Review Suppression",
    "Brand Sentiment Monitoring",
    "Reputation Management Agency"
  ],

  alternates: {
    canonical: "https://www.webace.com/services/online-reputation-management",
  },

  openGraph: {
    title:
      "Online Reputation Management Services | WebAce",
    description:
      "Manage reviews, repair negative search results and protect your brand reputation with WebAce ORM services.",
    url: "https://www.webace.com/services/online-reputation-management",
    siteName: "WebAce",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Reputation Management | WebAce",
    description:
      "Build trust, manage reviews and protect your digital brand image with WebAce ORM strategies.",
  },
};

export default function OnlineReputationManagementPage() {
  return (
     <main className="bg-white">       
        <Ormhero />
        <Ormwhy />
        <Ormreputation />
        <OrmApproach />
        <Ormwhat />
        <Ormimpact />
        <OrmChoose />
        <OrmChoice />
        <OrmFinalCTA />

    </main>
    );
}
import type { Metadata } from "next";
import WebHero from "./hero";
import WebMatters from "./matter";
import WebService from "./service"
import WebSeo from "./seo";
import WebSem from "./sem";
import WebMeta from "./meta";
import WebPublish from "./publish";
import WebChannel from "./channel";
import WebAffiliate from "./affliate";
import WebEcosystem from "./ecosystem";
import WebChoose from "./choose";
import WhyThis from "./this";
import WhyTraffic from "./traffic";

export const metadata: Metadata = {
  title: "Website Traffic Services | Increase Organic & Paid Traffic | WebAce",
  description:
    "Increase your website traffic with WebAce. We use SEO, paid ads, and strategic content distribution to drive qualified visitors that convert into leads and customers.",
  keywords: [
    "Website Traffic Services",
    "Increase Website Traffic",
    "Organic Traffic Growth",
    "Paid Traffic Campaigns",
    "SEO Traffic Strategy",
    "Performance Marketing Agency",
  ],
  alternates: {
    canonical: "https://www.webace.com/services/web-traffic",
  },
};

export default function WebTrafficPage() {
  return (
    <>
        <WebHero />
        <WebMatters />
        <WebService />
        <WebSeo />
        <WebSem />
        <WebMeta />
        <WebPublish />
        <WebChannel />
        <WebAffiliate />
        <WebEcosystem />
        <WebChoose />
        <WhyThis />
        <WhyTraffic />
    </>
  );
}
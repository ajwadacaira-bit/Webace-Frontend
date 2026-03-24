import type { Metadata } from "next";
import RevenueHero from "./hero";
import RevenueMatter from "./whymatter";
import RevenueServices from "./services";
import RevenuePPC from "./ppc";
import RevenueAds from "./shopads";
import Revenueremark from "./remarkads";
import Revenuemagnet from "./magnet";
import Revenuedynamic from "./dynamic";
import Revenueecom from "./ecom";
import Revenuelifecycle from "./lifecycle";
import Revenueengine from "./engine";
import Revenuechoose from "./choose";
import RevenueIs from "./is";
import Revenuefinal from "./final";

export const metadata: Metadata = {
  title: "Revenue Marketing Services | Growth Focused Marketing Strategy | WebAce",
  description:
    "Drive predictable revenue growth with WebAce Revenue Marketing services. We align marketing, traffic, funnels and conversion strategies to maximize business revenue.",
  keywords: [
    "Revenue Marketing",
    "Revenue Growth Strategy",
    "Marketing ROI Optimization",
    "Performance Marketing Agency",
    "Revenue Focused Marketing",
    "Conversion Driven Marketing",
  ],
  alternates: {
    canonical: "https://www.webace.com/services/revenue-marketing",
  },
};

export default function RevenueMarketingPage() {
  return (
    <main className="bg-white">
      <RevenueHero />
      <RevenueMatter />
      <RevenueServices />
      <RevenuePPC />
      <RevenueAds />
      <Revenueremark />
      <Revenuemagnet />
      <Revenuedynamic />
      <Revenueecom />
      <Revenuelifecycle />
      <Revenueengine />
      <Revenuechoose />
      <RevenueIs />
      <Revenuefinal />
    </main>
  );
}
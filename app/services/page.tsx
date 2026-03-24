import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Services | WebAce",
  description:
    "Explore WebAce digital marketing services including social media marketing, brand awareness & engagement, paid ads, and more.",
  alternates: {
    canonical: "https://www.webace.com/services",
  },
};

export default function ServicesPage() {
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-semibold mb-6">
        Our Digital Marketing Services
      </h1>

      <ul className="space-y-4">
        <li>
          <Link href="/services/brand-awareness-engagement">
            Brand Awareness & Engagement
          </Link>
        </li>
        
        <li>
          <Link href="/services/social-media-marketing">
            Social Media Marketing
          </Link>
        </li>

        <li>
          <Link href="/services/display-ads">
            Display Advertising
          </Link>
        </li>
        

      </ul>
    </section>
  );
}



"use client";

import Link from "next/link";
import { useState } from "react";

/* ================= TYPES ================= */
type MenuKey = "marketing" | "about" | "effects" | "knowledge";

type MegaLinkItem = {
  label: string;
  href: string;
};

type MegaColumn = {
  title: string;
  href: string; 
  links: MegaLinkItem[];
};

/* ================= DATA ================= */
const MEGA_MENU_DATA: Record<MenuKey, MegaColumn[]> = {
  marketing: [
    {
      title: "Brand Awareness & Engagement",
      href: "/services/brand-awareness-engagement",
      links: [
        { label: "Social Media Marketing", href: "/services/social-media-marketing" },
        { label: "Display Ads", href: "/services/display-ads" },
        { label: "YouTube Ads", href: "/services/youtube-ads" },
        { label: "Email Marketing", href: "/services/email-marketing" },
        { label: "Paid Social Campaigns", href: "/services/paid-social" },
      ],
    },
    {
      title: "Digital Leads",
      href: "/services/digital-leads",
      links: [
        { label: "Google Ads", href: "/services/google-ads" },
        { label: "Meta Ads", href: "/services/meta-ads" },
        { label: "SEO Service", href: "/services/seo" },
        { label: "Lead Magnet Pages", href: "/services/lead-magnet-pages" },
        { label: "Affiliate Marketing", href: "/services/affiliate-marketing" },
      ],
    },
    {
      title: "Web Traffic",
      href: "/services/web-traffic",
      links: [
        { label: "SEO Service", href: "/services/seo" },
        { label: "SEM Ads", href: "/services/sem" },
        { label: "Publishers & Networks", href: "/services/publishers" },
        { label: "Cross Channel Promotions", href: "/services/cross-channel" },
      ],
    },
    {
      title: "Revenue Marketing",
      href: "/services/revenue-marketing",
      links: [
        { label: "PPC Ads", href: "/services/ppc" },
        { label: "Shopping Ads", href: "/services/shopping-ads" },
        { label: "Remarketing Ads", href: "/services/remarketing" },
        { label: "Ecommerce Funnel Optimization", href: "/services/ecommerce-funnel" },
        { label: "Lifecycle Marketing", href: "/services/lifecycle-marketing" },
      ],
    },
    {
      title: "ORM",
      href: "/services/orm",
      links: [
        { label: "Social Media Reputation", href: "/services/orm/social-media" },
        { label: "Google Review Management", href: "/services/orm/google-reviews" },
        { label: "Reputation Monitoring", href: "/services/orm/monitoring" },
        { label: "SERP Management", href: "/services/orm/serp" },
      ],
    },
    {
      title: "UI/UX",
      href: "/services/ui-ux",
      links: [
        { label: "Brand Identity", href: "/services/ui-ux/brand-identity" },
        { label: "UX Design", href: "/services/ui-ux/ux-design" },
        { label: "Responsive Web Design", href: "/services/ui-ux/responsive-design" },
        { label: "Landing Page Design", href: "/services/ui-ux/landing-pages" },
      ],
    },
    {
      title: "Video Editing",
      href: "/services/video-editing",
      links: [
        { label: "Standard Editing", href: "/services/video-editing/standard-editing" },
        { label: "Advance Editing", href: "/services/video-editing/advance-editing" },
        { label: "Color Correction", href: "/services/video-editing/color-correction" },
        { label: "Sound Editing & Mixing", href: "/services/video-editing/sound-editing-mixing" },
        { label: "Subtitle & Caption Creation", href: "/services/video-editing/subtitle-caption" },
        { label: "Multi-Camera Editing", href: "/services/video-editing/multi-camera-editing" },
        { label: "Motion Graphics", href: "/services/video-editing/motion-graphics" },
        { label: "Video Stabilization", href: "/services/video-editing/video-stabilization" },
        { label: "Slow Motion & Time Lapse", href: "/services/video-editing/slow-motion-time-lapse" },
        { label: "Explainer Videos", href: "/services/video-editing/explainer-videos" },
        { label: "Product Demo", href: "/services/video-editing/product-demo" },
        { label: "Video Tutorial and How To Make Video", href: "/services/video-editing/video-tutorials" },
        { label: "Corporate Videos", href: "/services/video-editing/corporate-videos" },
        { label: "Reels & Short ", href: "/services/video-editing/reels-short" },
        { label: "Testimonial Videos", href: "/services/video-editing/testimonial-videos" },  
        { label: "Summary Videos", href: "/services/video-editing/summary-videos" },
        { label: "Promotional Videos", href: "/services/video-editing/promotional-videos" },
        { label: "Youtube Management", href: "/services/video-editing/youtube-management" },
      ],
    },
    {
      title: "Digital Consultation",
      href: "/services/digital-consultation",
      links: [
        { label: "SEO Consultancy", href: "/services/digital-consultation/seo-consultancy" },
        { label: "Social Media Consultancy", href: "/services/digital-consultation/social-media-consultancy" },
        { label: "Revenue Generation", href: "/services/digital-consultation/revenue-generation" },
        { label: "Digital Strategy", href: "/services/digital-consultation/digital-strategy" },
      ],
    },

  ],

  about: [
    {
      title: "Company",
      href: "/about",
      links: [
        { label: "Who We Are", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Leadership", href: "/leadership" },
      ],
    },
  ],

  effects: [
    {
      title: "WebAce Effect",
      href: "/webace-effect",
      links: [
        { label: "AI Marketing Stack", href: "/webace-effect/ai-marketing" },
        { label: "Revenue Dashboards", href: "/webace-effect/revenue-dashboards" },
      ],
    },
  ],

  knowledge: [
    {
      title: "Knowledge Hub",
      href: "/knowledge",
      links: [
        { label: "Blogs", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Guides", href: "/guides" },
      ],
    },
  ],
};

/* ================= HEADER ================= */
export default function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);

  return (
    <header
      className="relative z-50 bg-white border-b"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* TOP STRIP */}
      <div className="border-b text-xs">
        <div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BarsIcon />
            <span className="uppercase tracking-wide">
              Revenue driven for our clients
            </span>
            <span className="ml-4 font-medium">$ 20,54,16,849</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 hover:text-black">
              <SearchIcon />
              Search
            </button>
            <a href="tel:0987654321" className="flex items-center gap-1">
              <PhoneIcon />
              0987654321
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div>
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 font-bold">
            WebAce
            <span className="h-9 w-9 rounded bg-black text-white flex items-center justify-center">
              W
            </span>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-12 text-sm">
            <NavTrigger label="Marketing Solution" menuKey="marketing" setActiveMenu={setActiveMenu} />
            <NavTrigger label="Who We Are" menuKey="about" setActiveMenu={setActiveMenu} />
            <NavTrigger label="WebAce Effect" menuKey="effects" setActiveMenu={setActiveMenu} />
            <NavTrigger label="Knowledge Hub" menuKey="knowledge" setActiveMenu={setActiveMenu} />
          </nav>

          {/* CTA */}
          <Link
            href="#"
            className="rounded-full bg-black px-6 py-2.5 text-white text-sm font-medium"
          >
            Get a Proposal
          </Link>
        </div>
      </div>

      {/* MEGA MENU */}
        {activeMenu && (
        activeMenu === "marketing" ? (
          /* FULL MEGA MENU */
          <div className="absolute inset-x-0 top-full bg-white border-t shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="mx-auto max-w-[1280px] px-6 py-8">
              <MegaMenu columns={MEGA_MENU_DATA.marketing} />
            </div>
          </div>
        ) : (
          /* COMPACT DROPDOWN */
          <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-lg">
            <CompactMenu columns={MEGA_MENU_DATA[activeMenu]} />
          </div>
        )
      )}

    </header>
  );
}

/* ================= COMPONENTS ================= */
function NavTrigger({
  label,
  menuKey,
  setActiveMenu,
}: {
  label: string;
  menuKey: MenuKey;
  setActiveMenu: (key: MenuKey) => void;
}) {
  return (
    <button
      onMouseEnter={() => setActiveMenu(menuKey)}
      className="flex items-center gap-2 py-2"
    >
      {label}
      <ChevronDown />
    </button>
  );
}

function MegaMenu({ columns }: { columns: MegaColumn[] }) {
  return (
    <div
      className="grid gap-x-8"
      style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0,1fr))` }}
    >
      {columns.map((col, i) => (
        <div
          key={i}
          className={ i === 0 ? "pt-1": "border-l border-gray-200 pl-6 pt-1"}
        >
          {/* COLUMN TITLE */}
          <Link href={col.href} className="block">
            <h4 className="font-syne text-[15px] font-semibold tracking-[-0.01em] text-black leading-[1.3] pb-[1px]">
              {col.title}
            </h4>
          </Link>


          {/* LINKS */}
          <ul
            className={
              col.title === "Video Editing"
                ? "mt-4 space-y-2.5 text-[13.5px] leading-6 text-gray-700 max-h-[220px] overflow-y-auto pr-2"
                : "mt-4 space-y-2.5 text-[13.5px] leading-6 text-gray-700"
            }
          >
            {col.links.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block transition-all duration-200 hover:text-black hover:translate-x-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CompactMenu({ columns }: { columns: MegaColumn[] }) {
  return (
    <div className="min-w-[260px] px-6 py-4">
      {columns.map((col, i) => (
        <div key={i}>
          <h4 className="font-syne text-[15px] font-semibold text-black mb-3">
            {col.title}
          </h4>

          <ul className="space-y-2 text-[14px] text-gray-700">
            {col.links.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block transition hover:text-black hover:translate-x-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ================= ICONS ================= */
function BarsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12v7M12 5v14M19 9v10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 2h3l2 5-2 1c1 3 3 5 6 6l1-2 5 2v3c0 1-1 2-2 2-10 0-18-8-18-18 0-1 1-2 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="8" viewBox="0 0 15 8" fill="none">
      <path d="M1 1l6.5 6L14 1" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

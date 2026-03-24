import type { Metadata } from "next";

import VideoHero from "./hero"
import VideoMatter from "./matter"
import VideoServices from "./services"
import VideoProcess from "./process"
import VideoWhy from "./why"
import VideoChoice from "./choice"
import VideoFinal from "./final"

export const metadata: Metadata = {
  title:
    "Professional Video Editing Services | Social Media & Brand Video Production | WebAce",

  description:
    "Transform raw footage into powerful visual stories with WebAce video editing services. We create high-impact videos for social media, marketing campaigns, branding and digital storytelling.",

  keywords: [
    "Video Editing Services",
    "Professional Video Editing",
    "Social Media Video Editing",
    "Marketing Video Editing",
    "Brand Video Production",
    "YouTube Video Editing",
    "Short Form Video Editing",
    "Instagram Reels Editing",
    "Corporate Video Editing",
    "Video Editing Agency",
  ],

  alternates: {
    canonical: "https://www.webace.com/services/video-editing",
  },

  openGraph: {
    title: "Professional Video Editing Services | WebAce",
    description:
      "High quality video editing for brands, social media and marketing campaigns. Turn raw footage into engaging visual stories.",
    url: "https://www.webace.com/services/video-editing",
    siteName: "WebAce",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Video Editing Services | WebAce",
    description:
      "Professional video editing for social media, marketing campaigns and brand storytelling.",
  },
};

export default function VideoEditingPage() {
  return (
    <main className="bg-white">
        <VideoHero />
        <VideoMatter />
        <VideoServices />
        <VideoProcess />
        <VideoWhy />
        <VideoChoice />
        <VideoFinal />
    </main>
  );
}

import Link from "next/link";
import {
  Lightbulb,
  Calendar,
  Pencil,
  Image,
  MessageSquare,
  Hash,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const FAINT_ICONS = [
  Lightbulb,
  Calendar,
  Pencil,
  Image,
  MessageSquare,
  Hash,
  Users,
  BarChart3,
  TrendingUp,
];

export default function Deliverables() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-6">
          <h2 className="font-syne text-5xl font-bold text-black">
            What We Deliver Through Social Media Marketing
          </h2>
          <p className="mx-auto max-w-4xl font-syne text-2xl text-zinc-600">
            Designed purely for Brand Awareness & Engagement, our SMM service
            strengthens your digital presence and builds audience connection.
          </p>
        </div>

        {/* YOU GET */}
        {/* YOU GET */}
        <h2 className="text-3xl font-bold">You Get</h2>

        {/* OUTER WRAPPER (light background like video) */}
        <div className="rounded-[28px] bg-zinc-50 p-6">

          {/* INNER CARD */}
          <div
            className="
              grid grid-cols-[64px_1fr]
              rounded-[24px]
              bg-white
              border border-black/10
              shadow-[0_8px_32px_rgba(0,0,0,0.06)]
            "
          >

            {/* ICON COLUMN */}
            <div
              className="
                flex flex-col items-center
                gap-4
                py-14
                border-r border-black/5
              "
            >
              {FAINT_ICONS.map((Icon, i) => (
                <div
                  key={i}
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-black/10
                    bg-white
                    shadow-[0_2px_6px_rgba(0,0,0,0.06)]
                  "
                >
                  <Icon className="h-5 w-5 text-black/30" />
                </div>
              ))}
            </div>

            {/* CONTENT COLUMN */}
            <div className="p-14 space-y-14">
              <PhaseRow
                title="Plan"
                items={[
                  "Strategic content planning",
                  "Monthly content calendar",
                ]}
              />

              <PhaseRow
                title="Create"
                items={[
                  "High quality creatives & design",
                  "Reels, shorts & motion graphics",
                  "Daily / weekly story content",
                  "Engagement-focused copywriting",
                ]}
              />

              <PhaseRow
                title="Optimize"
                items={[
                  "Profile & branding optimization",
                  "Community management",
                  "Monthly awareness & engagement reports",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



/* -------------------- */
/* Helper Components    */
/* -------------------- */

function PhaseRow({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="space-y-6">

      <h4 className="text-3xl font-inter font-semibold text-black">
        {title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-sm">
              ✓
            </span>
            <p className="text-xl font-inter text-black">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Divider exactly like video */}
      <div className="h-px w-full bg-[#DADEE0]" />
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-[#DADEE0]" />;
}

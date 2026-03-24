// app/components/sections/knowledge-hub.tsx
// Usage: <KnowledgeHubSection />

type HubItem = {
  image: string;
  title: string;
  desc: string;
  href?: string;
};

const DEFAULT_ITEMS: HubItem[] = [
  {
    image: "https://placehold.co/400x498",
    title: "Mastering SEO for Small Businesses",
    desc: "Learn the basics of SEO to boost visibility and attract the right audience.",
    href: "#",
  },
  {
    image: "https://placehold.co/400x498",
    title: "The Power of Social Media Marketing",
    desc: "Discover strategies to engage and grow your audience on social media.",
    href: "#",
  },
  {
    image: "https://placehold.co/400x498",
    title: "Data-Driven Marketing: Why It Matters",
    desc: "Explore how data analytics can transform your marketing strategy.",
    href: "#",
  },
];

export default function KnowledgeHubSection({
  items = DEFAULT_ITEMS,
}: {
  items?: HubItem[];
}) {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px] py-12">
        <div className="flex w-full flex-col items-center gap-7">
          {/* Heading */}
          <div className="flex w-full flex-col items-center gap-2.5">
            <div className="flex items-center justify-center gap-2.5">
              <h2 className="font-['Kanit'] text-4xl font-bold capitalize tracking-wide text-black md:text-5xl">
                Knowledge Hub
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <p className="font-['Kanit'] text-4xl font-medium capitalize tracking-wide text-black md:text-5xl">
                Explore, Learn &amp; Grow
              </p>
            </div>

            <div className="flex w-full items-center justify-center gap-2.5">
              <p className="flex-1 text-center font-['Kanit'] text-xl font-light capitalize tracking-tight text-black md:text-2xl">
                Stay informed &amp; inspired with WebAce’s Knowledge Hub. Here, we
                share the latest trends, expert insights &amp; actionable strategies
                to help you succeed in the digital world.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="w-full px-5">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
              {items.slice(0, 3).map((it, idx) => (
                <article key={idx} className="flex flex-col gap-6">
                  <img
                    src={it.image}
                    alt={it.title}
                    className={[
                      "h-[498px] w-full rounded-[10px] object-cover",
                      idx === 0 ? "" : "shadow-[0px_0px_10px_0px_rgba(116,116,116,0.25)]",
                    ].join(" ")}
                    loading="lazy"
                  />

                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-center gap-2.5">
                      <h3 className="flex-1 font-['Kanit'] text-xl font-normal capitalize tracking-tight text-black">
                        {it.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-center gap-2.5">
                      <p className="flex-1 font-['Kanit'] text-base font-normal capitalize tracking-tight text-neutral-600">
                        {it.desc}
                      </p>
                    </div>

                    <div className="relative h-5">
                      <a
                        href={it.href || "#"}
                        className="absolute left-0 top-0 font-['Inter'] text-base font-medium capitalize tracking-tight text-neutral-600 underline"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* View more button */}
          <div className="rounded-[30px] bg-black px-7 py-2.5">
            <a
              href="#"
              className="text-center font-['Kanit'] text-xl font-medium capitalize text-white underline"
            >
              view more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

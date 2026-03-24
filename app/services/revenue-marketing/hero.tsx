export default function RevenueMarketingHero() {
  return (
    <section className="bg-black text-white py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* LABEL */}
            <div className="text-blue-500 text-sm font-semibold tracking-wide mb-6">
              Revenue Marketing
            </div>

            {/* HEADING */}
            <h1 className="font-semibold leading-tight mb-10">

              <span className="block text-3xl md:text-4xl lg:text-5xl">
                Drive Conversions,
              </span>

              <span className="block text-3xl md:text-4xl lg:text-5xl">
                Multiply Sales and
              </span>

              <span className="block text-2xl md:text-3xl lg:text-4xl text-blue-500 mt-2">
                Grow Revenue With Performance Focused Digital Strategies
              </span>

            </h1>

            {/* CONTENT */}
            <div className="space-y-5 text-gray-300 text-base leading-relaxed">

              <p>Visibility matters.</p>
              <p>Leads matter.</p>
              <p>Traffic matters.</p>

              <p className="text-white font-semibold">
                But in the end, what truly defines digital success is simple.
              </p>

              <p className="text-white font-semibold text-lg">
                Revenue.
              </p>

              <p>
                Revenue Marketing is the engine that turns awareness into action,
                traffic into customers and leads into long term value.
              </p>

              <p>
                It is where your brand stops hoping for sales and starts creating them
                with clarity, precision and consistency.
              </p>

              <p className="text-white font-semibold">
                At WebAce, Revenue Marketing is built around one goal:
              </p>

              <p className="text-blue-400 font-medium">
                Deliver measurable revenue outcomes through performance driven digital strategies.
              </p>

              <p>No confusion.</p>
              <p>No vanity metrics.</p>
              <p>Only results that matter to your bottom line.</p>

              <p>
                We combine data, intent, optimization, funnel design, user psychology
                and multi channel strategy to maximize your conversions and grow your
                revenue sustainably.
              </p>

            </div>

            {/* CTA AREA */}
            <div className="mt-10">

              <p className="text-white font-medium mb-4">
                Ready to scale your revenue?
              </p>

              <button
                className="bg-blue-600 hover:bg-blue-500 text-white
                           px-8 py-4 rounded-full text-base font-medium
                           transition-all duration-300
                           hover:scale-105 hover:shadow-xl"
              >
                Get Your Revenue Growth Plan →
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">

              <img
                src="/images/re.jpg"
                alt="Revenue Marketing Strategy"
                className="rounded-2xl w-full h-auto"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
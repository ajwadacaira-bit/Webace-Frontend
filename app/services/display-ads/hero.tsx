export default function DisplayAdsPage() {
  return (
    <main className="bg-black text-white">

      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">

        <div className="max-w-6xl mx-auto w-full">

          {/* HEADING */}
          <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
            Display Ads for{" "}
            <span className="text-blue-500">Brand Awareness & Engagement</span>
          </h1>

          {/* SUB HEADING */}
          <h2 className="font-kanit text-xl md:text-2xl text-gray-300 mb-10">
            Where Visibility Meets Impact. Where Your Brand Gets Seen,
            Recognized & Remembered.
          </h2>

          {/* CONTENT */}
          <div className="space-y-6 max-w-3xl">
            <p className="font-inter text-gray-400 text-base md:text-lg leading-relaxed">
              In today’s crowded digital world, your brand needs more than presence, it needs visibility, consistency, and recognition. Display Ads are the fastest, most scalable way to put your brand in front of your audience across thousands of websites, apps, and digital platforms.
            </p>

            <p className="font-inter text-gray-400 text-base md:text-lg leading-relaxed">
              At WebAce, we use Display Advertising specifically to increase brand awareness and strengthen engagement. These are not sales-driven ads, they are visibility-driven, designed to amplify your reach and impact across your industry.
            </p>

            <p className="font-inter text-gray-400 text-base md:text-lg leading-relaxed">
              Whether someone is reading an article, browsing their favorite website, watching content, or using an app — your brand stays top-of-mind.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-inter font-medium px-8 py-4 rounded-full text-sm md:text-base shadow-lg hover:shadow-blue-500/30">
              👉 Want to boost your brand visibility instantly? Request a Display Ads Strategy
            </button>
          </div>

        </div>

      </section>

    </main>
  );
}
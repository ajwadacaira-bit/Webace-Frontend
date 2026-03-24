export default function DigitalHero() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-semibold leading-tight mb-6">
              Turn Digital Interest Into 
              <span className="block text-blue-400">
                Real Business Opportunities
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-6">
              Every business wants visibility, but visibility alone is not enough. 
              To grow, you need people who act — who click, inquire, sign up and 
              raise their hands with intent.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              At WebAce, we combine strategy, data intelligence and optimized 
              funnels to convert audience interest into measurable, high-quality leads.
            </p>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition"
              >
                Get Your Lead Generation Strategy
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/images/digital.jpg"
              alt="Digital Lead Generation Strategy"
              className="rounded-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

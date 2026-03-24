export default function WebTrafficHero() {
  return (
    <section className="bg-black text-white py-28">
      <div className="container mx-auto px-6 flex justify-center">

        {/* CENTERED CONTENT */}
        <div className="max-w-3xl text-center">

          {/* REFINED HEADING */}
          <h1 className="font-semibold mb-8 leading-[1.2]">

            <span className="block text-3xl md:text-4xl lg:text-5xl">
              Bring the Right People
            </span>

            <span className="block text-3xl md:text-4xl lg:text-5xl">
              to Your Website With
            </span>

            <span className="block text-2xl md:text-3xl lg:text-4xl text-blue-500 mt-2">
              Consistent, Relevant and High Quality Traffic
            </span>

          </h1>

          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>Every business wants people to visit their website.</p>

            <p>But not all traffic is the same.</p>

            <p>
              Some visitors stay for seconds. Some explore.
              Some connect with your brand. Some convert.
            </p>

            <p>
              High quality traffic comes from{" "}
              <span className="text-blue-400 font-medium">
                intent, relevance and smart distribution.
              </span>
            </p>

            <p>
              It comes from showing your brand in the right places,
              at the right moments, in front of the right audience.
            </p>

            <p>
              At WebAce, Web Traffic is the category designed to grow
              your digital presence by driving consistent, targeted
              and meaningful visitors to your website.
            </p>

            <div className="pt-4 space-y-1 text-white font-semibold">
              <p>This is not random traffic.</p>
              <p>This is traffic that matters.</p>
              <p>Traffic that engages.</p>
              <p>Traffic that converts.</p>
            </div>

            <p className="pt-4">
              Our goal is simple.
            </p>

            <p className="text-white font-semibold text-lg">
              Bring the audience that has the highest chance of becoming your customer.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white 
                         px-8 py-4 rounded-full text-base font-medium
                         transition-all duration-300 hover:scale-105"
            >
              Get Your Web Traffic Strategy →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
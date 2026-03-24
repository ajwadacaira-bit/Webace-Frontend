// app/components/sections/energy-team.tsx

export default function EnergyTeamSection() {
  const avatars = [
    { src: "https://placehold.co/175x175", alt: "Team member 1" },
    { src: "https://placehold.co/172x172", alt: "Team member 2" },
    { src: "https://placehold.co/164x164", alt: "Team member 3" },
    { src: "https://placehold.co/198x194", alt: "Team member 4" },
    { src: "https://placehold.co/177x177", alt: "Team member 5" },
  ];

  return (
    <section className="w-full px-4 sm:px-10 py-10">
      <div className="bg-black rounded-[20px] px-4 sm:px-10 py-12 sm:py-14 overflow-hidden">
        {/* TOP TEXT */}
        <div className="text-center space-y-5">
          <h2 className="text-white text-3xl sm:text-5xl font-semibold tracking-wide">
            Experience the Energy of WebAce
          </h2>

          <p className="text-white text-lg sm:text-2xl font-normal leading-[36px] sm:leading-[50px] tracking-tight max-w-5xl mx-auto px-2 sm:px-10">
            At WebAce, our team is our greatest asset. Each member brings a unique skill set, years of experience,
            and an unwavering dedication to helping our clients succeed. We’re a close-knit group of strategists,
            creatives, and technical experts who work together to deliver innovative solutions tailored to your goals.
          </p>
        </div>

        {/* AVATARS ROW */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center">
            {avatars.map((a, i) => (
              <div
                key={i}
                className={[
                  "relative w-24 h-24 sm:w-40 sm:h-40 rounded-full border-2 border-white overflow-hidden",
                  i !== 0 ? "-ml-4 sm:-ml-6" : "",
                ].join(" ")}
              >
                {/* background layer (matches figma “colored then grey”) */}
                <div className="absolute inset-0 bg-zinc-300" />
                <img
                  src={a.src}
                  alt={a.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-12 text-center space-y-5">
          <h3 className="text-white text-3xl sm:text-5xl font-semibold tracking-wide capitalize">
            meet the aces
          </h3>

          <p className="text-white text-xl sm:text-3xl font-medium tracking-tight max-w-4xl mx-auto">
            Ready to Partner with a World-Class Team? Connect with WebAce Today
          </p>
        </div>

        {/* FORM ROW */}
        <form className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          {/* Field 1 */}
          <div className="flex items-end gap-4 sm:gap-7 w-full lg:w-auto justify-center">
            <label className="text-white text-xl sm:text-2xl font-bold capitalize tracking-tight whitespace-nowrap">
              name:
            </label>

            <div className="w-full max-w-[320px]">
              <input
                type="text"
                className="w-full bg-transparent text-white outline-none pb-2"
                placeholder=""
                aria-label="Name 1"
              />
              <div className="h-[2px] w-full bg-white rounded-full" />
            </div>
          </div>

          {/* Field 2 */}
          <div className="flex items-end gap-4 sm:gap-7 w-full lg:w-auto justify-center">
            <label className="text-white text-xl sm:text-2xl font-bold capitalize tracking-tight whitespace-nowrap">
              name:
            </label>

            <div className="w-full max-w-[320px]">
              <input
                type="text"
                className="w-full bg-transparent text-white outline-none pb-2"
                placeholder=""
                aria-label="Name 2"
              />
              <div className="h-[2px] w-full bg-white rounded-full" />
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            className="px-10 sm:px-12 py-3 bg-white rounded-[10px] text-neutral-800 text-lg sm:text-xl font-semibold capitalize tracking-tight w-full sm:w-auto"
          >
            get in touch
          </button>
        </form>
      </div>
    </section>
  );
}

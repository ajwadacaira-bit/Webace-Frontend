export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='260' viewBox='0 0 520 260'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.18)' stroke-width='14'%3E%3Cpath d='M40 60 h120 a18 18 0 0 1 18 18 v44 a18 18 0 0 1-18 18 h-86 a18 18 0 0 0-18 18 v12'/%3E%3Cpath d='M260 60 h120 a18 18 0 0 1 18 18 v44 a18 18 0 0 1-18 18 h-86 a18 18 0 0 0-18 18 v12'/%3E%3Cpath d='M40 190 h120 a18 18 0 0 1 18 18 v44 a18 18 0 0 1-18 18 h-86 a18 18 0 0 0-18 18 v12'/%3E%3Cpath d='M260 190 h120 a18 18 0 0 1 18 18 v44 a18 18 0 0 1-18 18 h-86 a18 18 0 0 0-18 18 v12'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "520px 260px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="max-w-[980px]">
          {/* EXACT 3-line heading like your image */}
          <h1 className="font-syne font-extrabold text-white tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl">
            <span className="block">Your Story</span>
            <span className="block">Your Legacy</span>
            <span className="block">Shared With The World</span>
          </h1>

          {/* paragraph width + spacing like image */}
          <p className="mt-6 max-w-[760px] font-kanit text-white/90 text-sm sm:text-base leading-relaxed">
            At <b className="text-white">WebAce</b>, we believe every brand has a unique soul. We help you,
            Build An authentic connections that inspire action &amp; create lasting relationships.
            <b className="text-white"> Let&apos;s Make Your Story Matter.</b>
          </p>

          {/* input + button aligned + compact like image */}
          <div className="mt-6 max-w-[520px]">
            <div className="group flex w-full overflow-hidden rounded-md border border-white/60 bg-black">
              <input
                placeholder="Enter Your Website"
                className="w-full bg-transparent px-4 py-2.5 font-kanit text-sm text-white outline-none placeholder:text-white/80"
              />

              <button
                className="shrink-0 border-l border-white/60 bg-transparent px-4 py-2.5 font-kanit text-sm font-semibold text-white transition
                           hover:bg-white hover:text-black"
              >
                Discover Your Brand
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

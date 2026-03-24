// app/components/sections/free-proposal.tsx
// Usage: <FreeProposalSection />

export default function FreeProposalSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="w-full rounded-[20px] bg-black px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-12">
          {/* Title */}
          <div className="mx-auto max-w-[920px] text-center">
            <h2 className="font-['Kanit'] text-[28px] font-extrabold capitalize tracking-wide text-white sm:text-[36px] lg:text-[40px]">
              reach your business goals with webAce
            </h2>
          </div>

          {/* Subtitle */}
          <div className="mx-auto mt-8 max-w-[980px] text-center">
            <p className="font-['Kanit'] text-[18px] font-normal capitalize leading-[1.75] tracking-tight text-white sm:text-[22px] sm:leading-[1.9] lg:text-[34px] lg:leading-[70px]">
              Experience a strategy crafted specifically for your business goals. Request your
              free, no-obligation proposal &amp; discover the path to sustainable growth &amp;
              measurable success
            </p>
          </div>

          {/* Form row */}
          <form
            className="mx-auto mt-10 flex w-full flex-col gap-6 lg:mt-12 lg:flex-row lg:items-end lg:gap-12"
            action="#"
            method="post"
          >
            {/* Website */}
            <div className="w-full flex-1">
              <label className="block font-['Kanit'] text-[18px] font-normal capitalize text-white sm:text-[20px]">
                website
              </label>

              <div className="mt-3">
                <input
                  type="url"
                  name="website"
                  placeholder=""
                  className="w-full bg-transparent py-3 text-white outline-none placeholder:text-white/40"
                />
                <div className="h-[3px] w-full rounded-full bg-white" />
              </div>
            </div>

            {/* Email */}
            <div className="w-full flex-1">
              <label className="block font-['Kanit'] text-[18px] font-normal capitalize text-white sm:text-[20px]">
                email
              </label>

              <div className="mt-3">
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  className="w-full bg-transparent py-3 text-white outline-none placeholder:text-white/40"
                  required
                />
                <div className="h-[3px] w-full rounded-full bg-white" />
              </div>
            </div>

            {/* Button */}
            <div className="w-full lg:w-auto">
              <button
                type="submit"
                className="w-full rounded-[10px] border-2 border-white px-6 py-3.5 text-center font-['Inter'] text-[14px] font-bold capitalize text-white transition hover:bg-white/10 sm:text-[16px] lg:w-auto"
              >
                get my free proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

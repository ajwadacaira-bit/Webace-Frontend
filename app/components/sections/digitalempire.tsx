'use client';

export default function ContactEmpireSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px] py-10">
        <div className="flex w-full flex-col items-center gap-7">

          {/* Row: "your future -" + "a digital empire" */}
          <div className="flex w-full items-center justify-center gap-2.5">
            <div className="flex flex-1 justify-end">
              <div className="font-['Kanit'] text-[40px] font-normal capitalize text-black lg:text-5xl">
                your future -
              </div>
            </div>
            <div className="flex flex-1 justify-start">
              <div className="font-['Kanit'] text-[40px] font-bold capitalize text-slate-600 lg:text-5xl">
                a digital empire
              </div>
            </div>
          </div>

          {/* Line: guiding your brand... */}
          <div className="flex w-full justify-center">
            <div className="text-center font-['Kanit'] text-2xl font-medium capitalize text-black sm:text-3xl">
              guiding your{" "}
              <span className="text-slate-600">brand</span>. growing your{" "}
              <span className="text-slate-600">audience</span>. building your{" "}
              <span className="text-slate-600">legacy</span>.
            </div>
          </div>

          {/* Paragraph */}
          <div className="flex w-full justify-center">
            <div className="text-center font-['Kanit'] text-xl font-light capitalize text-black sm:text-2xl">
              At WebAce,{" "}
              <span className="lowercase">we don’t just offer services</span>. We{" "}
              <span className="lowercase">
                help you craft a story that transforms your business into a digital powerhouse{" "}
              </span>
              <span className="font-extrabold lowercase tracking-wide text-slate-600">
                1 step at a time
              </span>
              <span className="font-extrabold lowercase tracking-wide">, </span>
              <span className="font-extrabold lowercase tracking-wide text-slate-600">
                1 strategy at a time
              </span>
              <span className="font-extrabold lowercase text-slate-600">.</span>
            </div>
          </div>

          {/* Form Box */}
          <div className="w-full px-0 sm:px-12">
            <div className="flex w-full flex-col gap-12">

              {/* White title strip */}
              <div className="w-full bg-white p-2.5 text-center">
                <div className="font-['Kanit'] text-xl font-semibold capitalize text-black sm:text-2xl">
                  Let’s Build Your Digital Empire - Share Your Vision with Us
                </div>
              </div>

              {/* Fields (2 columns) */}
              <div className="w-full px-0 sm:px-16 space-y-12">
                {/* Row 1 */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <Field label="work email address" />
                  <Field label="first and last name" />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <Field label="website" />
                  <Field label="company" />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <Field label="phone number" />
                  <Field label="project budget" />
                </div>

                {/* Row 4 (full width) */}
                <div className="grid grid-cols-1">
                  <Field label="comments or questions" full />
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="px-4 sm:px-12">
            <button
              type="button"
              className="rounded-[10px] border-2 border-black px-8 py-3.5 font-['Kanit'] text-2xl font-normal capitalize text-black transition hover:bg-black hover:text-white sm:text-3xl"
            >
              Get My Customised Growth Plan
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function Field({ label, full = false }: { label: string; full?: boolean }) {
  return (
    <div className={full ? "w-full" : "w-full"}>
      <div className="flex items-center gap-2.5">
        <div className="flex-1 font-['Kanit'] text-lg font-normal capitalize text-black">
          {label}
        </div>
      </div>

      {/* input + underline */}
      <div className="mt-12 px-[5px]">
        <input
          className="w-full bg-transparent font-['Kanit'] text-base font-normal text-black outline-none"
          placeholder=""
        />
        <div className="mt-2 h-[2px] w-full rounded-full bg-[#8A8A8A]" />
      </div>
    </div>
  );
}

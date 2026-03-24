'use client';

import React from "react";

export default function FreeAuditSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px] py-10 space-y-10">

        {/* ===== Ticker / Sliding testimonial line ===== */}
        <div className="relative h-8 overflow-hidden">
          {/* Track */}
          <div className="absolute left-0 top-0 flex w-max items-center gap-24 animate-ticker">
            <div className="whitespace-nowrap font-['Inter'] text-[28px] leading-8 text-black">
              <span className="font-normal capitalize">
                Our brand visibility skyrocketed thanks to WebAce’s innovative strategies -{" "}
              </span>
              <span className="font-bold capitalize">Bfasteners</span>
            </div>

            <div className="whitespace-nowrap font-['Inter'] text-[28px] leading-8 text-black">
              <span className="font-normal capitalize">
                “WebAce doubled our lead generation in 3 months!” -{" "}
              </span>
              <span className="font-bold capitalize">Acaira Technologies</span>
            </div>

            {/* duplicate for seamless loop */}
            <div className="whitespace-nowrap font-['Inter'] text-[28px] leading-8 text-black">
              <span className="font-normal capitalize">
                Our brand visibility skyrocketed thanks to WebAce’s innovative strategies -{" "}
              </span>
              <span className="font-bold capitalize">Bfasteners</span>
            </div>

            <div className="whitespace-nowrap font-['Inter'] text-[28px] leading-8 text-black">
              <span className="font-normal capitalize">
                “WebAce doubled our lead generation in 3 months!” -{" "}
              </span>
              <span className="font-bold capitalize">Acaira Technologies</span>
            </div>
          </div>

          {/* Optional fades (nice like premium marquee) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* ===== Heading ===== */}
        <div className="flex justify-center">
          <h2 className="text-center font-['Kanit'] text-[36px] font-normal capitalize text-black">
            Ready to See Real Growth? Let’s Get Started
          </h2>
        </div>

        {/* ===== Input + Button ===== */}
        <div className="flex justify-center">
          <form
            className="flex w-full max-w-[820px] items-stretch"
            action="#"
            method="post"
          >
            <div className="flex-1 rounded-tl-[10px] rounded-bl-[10px] outline outline-1 outline-offset-[-1px] outline-black px-14 py-5">
              <input
                name="website"
                type="url"
                placeholder="enter your website"
                className="w-full bg-transparent font-['Kanit'] text-[24px] font-light capitalize tracking-wide text-[#8A8A8A] outline-none placeholder:text-[#8A8A8A]"
              />
            </div>

            <button
              type="submit"
              className="rounded-tr-[10px] rounded-br-[10px] bg-black px-6 py-5"
            >
              <span className="font-['Kanit'] text-[24px] font-semibold capitalize tracking-wide text-white">
                request a free audit
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 18s linear infinite;
        }
      `}</style>
    </section>
  );
}

'use client';

type ClientLogo = {
  src: string;
  alt: string;
};

const DEFAULT_LOGOS: ClientLogo[] = [
  { src: 'https://placehold.co/287x146', alt: 'Client logo 1' },
  { src: 'https://placehold.co/287x146', alt: 'Client logo 2' },
  { src: 'https://placehold.co/287x146', alt: 'Client logo 3' },
  { src: 'https://placehold.co/287x146', alt: 'Client logo 4' },
  { src: 'https://placehold.co/287x146', alt: 'Client logo 5' },
  { src: 'https://placehold.co/287x146', alt: 'Client logo 6' },
];

function MarqueeRow({
  logos,
  reverse = false,
  durationSec = 22,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
  durationSec?: number;
}) {
  // Duplicate for seamless loop
  const items = [...logos, ...logos, ...logos];

  return (
    <div className="relative h-[146px] w-[1111px] max-w-full overflow-hidden">
      {/* edge fade (optional, like premium marquee) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      <div
        className={[
          'flex w-max gap-[125px] will-change-transform', // 412 - 287 = 125 gap from figma
          reverse ? 'animate-marquee-rev' : 'animate-marquee',
        ].join(' ')}
        style={
          {
            ['--duration' as any]: `${durationSec}s`,
          } as React.CSSProperties
        }
        aria-hidden="true"
      >
        {items.map((l, i) => (
          <img
            key={i}
            src={l.src}
            alt={l.alt}
            width={287}
            height={146}
            className="h-[146px] w-[287px] shrink-0 rounded-none object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection({
  logos = DEFAULT_LOGOS,
}: {
  logos?: ClientLogo[];
}) {
  return (
    <section className="bg-white px-4 md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-2.5">
        <div className="w-full bg-white py-10 shadow-[0px_0px_10px_0px_rgba(116,116,116,0.25)]">
          {/* Heading */}
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-4 md:px-10">
            <div className="flex w-full items-center justify-center">
              <h2 className="text-center font-['Kanit'] text-[32px] font-normal capitalize tracking-tight text-black md:text-4xl">
                Fueling Success for{' '}
                <span className="font-bold text-slate-600">100+ Industries </span>
                <span className="tracking-widest">Ready for a Tailored Growth Strategy</span>?
              </h2>
            </div>

            <div className="flex w-full items-center justify-center">
              <p className="text-center font-['Kanit'] text-[26px] font-normal capitalize tracking-tight text-black underline md:text-3xl">
                our clients
              </p>
            </div>
          </div>

          {/* Rows */}
          <div className="mt-16 flex flex-col items-center gap-6 px-4 md:px-10">
            {/* Row 1: left -> right */}
            <MarqueeRow logos={logos} reverse={false} durationSec={24} />

            {/* Row 2: right -> left */}
            <MarqueeRow logos={logos} reverse={true} durationSec={26} />

            {/* Row 3: left -> right */}
            <MarqueeRow logos={logos} reverse={false} durationSec={24} />
          </div>
        </div>
      </div>

      {/* Scoped animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-rev {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        .animate-marquee-rev {
          animation: marquee-rev var(--duration) linear infinite;
        }
      `}</style>
    </section>
  );
}

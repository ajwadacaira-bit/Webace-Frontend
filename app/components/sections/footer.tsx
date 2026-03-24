


// app/components/sections/footer-figma.tsx
"use client";

type LinkItem = { label: string; href?: string };

const QUICK_LINKS: LinkItem[] = [
  { label: "About Us", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Industries We Serve", href: "#" },
  { label: "Knowledge Hub", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Careers at WebAce", href: "#" },
  { label: "Contact Us", href: "#" },
];

const INDUSTRIES: LinkItem[] = [
  { label: "E-Commerce", href: "#" },
  { label: "Healthcare", href: "#" },
  { label: "Education", href: "#" },
  { label: "Real Estate", href: "#" },
  { label: "Technology", href: "#" },
  { label: "Hospitality & Travel", href: "#" },
  { label: "View All Industries", href: "#" },
];

const SERVICES: LinkItem[] = [
  { label: "SEO & Content Marketing", href: "#" },
  { label: "Social Media Marketing", href: "#" },
  { label: "PPC & Google Ads", href: "#" },
  { label: "Reputation Management", href: "#" },
  { label: "Email & CRM Campaigns", href: "#" },
  { label: "Video Production", href: "#" },
  { label: "personal branding", href: "#" },
];

export default function FooterFigmaSection() {
  return (
    <footer className="w-full bg-black px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1281px] py-10 sm:py-12">
        <div className="flex w-full flex-col gap-10 sm:gap-12">
          {/* ===== Top: Stats + Proposal ===== */}
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
            {/* Left stats grid */}
            <div className="flex w-full flex-1 flex-col gap-5 sm:gap-7">
              <div className="grid w-full grid-cols-1 gap-4 sm:gap-7 md:grid-cols-2">
                <StatBox value="48,293+" label="LEADS DRIVEN FOR CLIENTS" />
                <StatBox value="$9,27,451+" label="REVENUE DRIVEN FOR CLIENTS" />
              </div>
              <div className="grid w-full grid-cols-1 gap-4 sm:gap-7 md:grid-cols-2">
                <StatBox value="96,107" label="HOURS OF EXPERTISE" />
                <StatBox value="50" label="EXPERTS ON STAFF" />
              </div>
            </div>

            {/* Right proposal card */}
            <div className="w-full flex-1">
              <div className="rounded-[10px] bg-black px-5 sm:px-8 lg:px-10 py-7 sm:py-8 shadow-[-3px_3px_10px_rgba(186,186,186,0.25)] shadow-[3px_-3px_20px_rgba(63,63,63,0.25)]">
                <div className="flex flex-col items-center gap-5">
                  <div className="flex w-full flex-col items-center gap-6 sm:gap-7 p-2">
                    <div className="w-full max-w-[360px] text-center font-['Kanit'] text-2xl sm:text-3xl font-bold capitalize text-white [text-shadow:_2px_-2px_10px_rgb(255_255_255_/_0.35)]">
                      Grow your Business Beyond Limits
                    </div>

                    <div className="flex w-full flex-col gap-4">
                      <UnderlineRow label="website" />
                      <UnderlineRow label="email" />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="rounded-[10px] bg-white px-5 py-2.5 font-['Kanit'] text-lg sm:text-xl font-normal capitalize text-black"
                  >
                    get <span className="lowercase">a</span> Free proposal
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Divider />

          {/* ===== Middle: Columns + To top ===== */}
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Columns */}
            <div className="flex w-full flex-1 flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-20">
              {/* Quick Links */}
              <FooterCol title="Quick Links">
                {QUICK_LINKS.map((l) => (
                  <FooterLink key={l.label} href={l.href}>
                    {l.label}
                  </FooterLink>
                ))}
              </FooterCol>

              <VerticalDivider />

              {/* Industries */}
              <FooterCol title="Industries We Serve" fontFamily="nunito">
                {INDUSTRIES.map((l) => (
                  <FooterLink
                    key={l.label}
                    href={l.href}
                    variant={l.label === "View All Industries" ? "underline" : "normal"}
                    fontFamily="nunito"
                  >
                    {l.label}
                  </FooterLink>
                ))}
              </FooterCol>

              <VerticalDivider />

              {/* Services */}
              <FooterCol title="Services" fontFamily="nunito">
                {SERVICES.map((l) => (
                  <FooterLink key={l.label} href={l.href} fontFamily="nunito">
                    {l.label}
                  </FooterLink>
                ))}
              </FooterCol>
            </div>

            {/* To Top */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="
                mx-auto lg:mx-0 flex w-fit flex-col items-center justify-center
                gap-4 sm:gap-5 rounded-[999px] bg-black
                px-5 sm:px-6
                py-10 sm:py-16 lg:py-24
                shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_18px_40px_rgba(0,0,0,0.65),0_0_22px_rgba(255,255,255,0.10)]
              "
              aria-label="Back to top"
            >
              <svg
                width="18"
                height="22"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M6.75 16.75V0.75M6.75 0.75L12.75 6.75M6.75 0.75L0.75 6.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div
                className="
                  font-['Nunito_Sans'] text-lg sm:text-xl font-medium capitalize tracking-tight text-white
                  [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180
                  select-none
                "
              >
                to top
              </div>
            </button>
          </div>

          <Divider />

          {/* ===== Bottom cards row ===== */}
          <div className="grid w-full grid-cols-1 gap-5 sm:gap-7 md:grid-cols-3">
            {/* Social */}
            <div className="rounded-[10px] bg-black p-5 shadow-[-3px_3px_10px_rgba(186,186,186,0.25)] shadow-[3px_-3px_20px_rgba(63,63,63,0.25)]">
              <div className="flex flex-col gap-7">
                <div className="text-center font-['Nunito_Sans'] text-lg sm:text-xl font-extrabold capitalize tracking-tight text-white">
                  contact with us
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-5 sm:gap-7">
                    <div className="flex items-center justify-center rounded-[10px] outline outline-1 outline-white px-3.5 py-2">
                      <div className="font-['Nunito_Sans'] text-3xl font-normal underline text-white">
                        f
                      </div>
                    </div>
                    <a
                      className="font-['Kanit'] text-lg sm:text-xl font-medium underline capitalize tracking-tight text-white"
                      href="#"
                    >
                      facebook
                    </a>
                  </div>

                  <div className="flex items-center gap-5 sm:gap-7">
                    <InstagramIcon />
                    <a
                      className="font-['Kanit'] text-lg sm:text-xl font-medium underline capitalize tracking-tight text-white"
                      href="#"
                    >
                      instagram
                    </a>
                  </div>

                  <div className="flex items-center gap-5 sm:gap-7">
                    <TwitterIcon />
                    <a
                      className="font-['Kanit'] text-lg sm:text-xl font-medium underline capitalize tracking-tight text-white"
                      href="#"
                    >
                      twitter
                    </a>
                  </div>

                  <div className="flex items-center gap-5 sm:gap-7">
                    <LinkedInIcon />
                    <a
                      className="font-['Kanit'] text-lg sm:text-xl font-medium underline capitalize tracking-tight text-white"
                      href="#"
                    >
                      linked in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscribe */}
            <div className="rounded-[10px] bg-black px-5 pt-5 pb-10 sm:pb-12 shadow-[-3px_3px_10px_rgba(186,186,186,0.25)] shadow-[3px_-3px_20px_rgba(63,63,63,0.25)]">
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="text-center font-['Nunito_Sans'] text-lg sm:text-xl font-extrabold capitalize tracking-tight text-white">
                  subscribe for updates
                </div>

                <div className="flex flex-col items-center gap-10 sm:gap-12">
                  <div className="flex w-full items-end gap-4 sm:gap-7">
                    <div className="font-['Kanit'] text-lg sm:text-xl font-normal capitalize text-white">
                      email
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-transparent font-['Kanit'] text-base text-white outline-none"
                        placeholder=""
                      />
                      <div className="mt-2 h-px w-full rounded-full bg-white" />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="rounded-[10px] bg-white px-7 py-3.5 font-['Kanit'] text-base font-normal capitalize tracking-tight text-black outline outline-1 outline-white"
                  >
                    subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="rounded-[10px] bg-black p-5 shadow-[-3px_3px_10px_rgba(186,186,186,0.25)] shadow-[3px_-3px_20px_rgba(63,63,63,0.25)]">
              <div className="flex flex-col gap-7">
                <div className="text-center font-['Nunito_Sans'] text-lg sm:text-xl font-extrabold capitalize tracking-tight text-white">
                  contact with us
                </div>

                <div className="flex flex-col gap-7 sm:gap-9">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <PhoneIcon />
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="font-['Kanit'] text-lg sm:text-xl font-bold capitalize text-white">
                        phone:
                      </div>
                      <div className="font-['Inter'] text-lg sm:text-xl font-normal uppercase text-white">
                        7666333440
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <MailIcon />
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="font-['Kanit'] text-lg sm:text-xl font-bold text-white">
                        Email:
                      </div>
                      <div className="font-['Nunito_Sans'] text-lg sm:text-xl font-normal lowercase text-white break-all">
                        info@webace.in
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <PinIcon />
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="font-['Kanit'] text-lg sm:text-xl font-bold text-white">
                        Address:
                      </div>
                      <div className="font-['Nunito_Sans'] text-lg sm:text-xl font-normal capitalize text-white">
                        Mumbai, Maharashtra
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex w-full justify-center">
            <div className="text-center font-['Kanit'] text-base sm:text-xl font-semibold capitalize text-white">
              © 2024 WebAce Digital Agency. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== Small components ===== */

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-black p-2.5">
      <div className="font-['Kanit'] text-2xl sm:text-3xl font-black capitalize tracking-tight text-white">
        {value}
      </div>
      <div className="mt-2 font-['Kanit'] text-xl sm:text-3xl font-medium capitalize tracking-tight text-white">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="w-full py-2.5">
      <div className="h-[2px] w-full rounded-full bg-white" />
    </div>
  );
}

function VerticalDivider() {
  return (
    <div className="hidden py-16 lg:flex">
      <div className="h-[260px] w-[2px] rounded-full bg-white" />
    </div>
  );
}

/**
 * Input row: makes underline full width on mobile, matches figma feel on desktop.
 */
function UnderlineRow({ label }: { label: string }) {
  return (
    <div className="flex w-full items-end gap-4 sm:gap-7">
      <div className="font-['Kanit'] text-lg sm:text-xl font-normal capitalize text-white">
        {label}
      </div>
      <div className="flex-1">
        <input className="w-full bg-transparent font-['Kanit'] text-base text-white outline-none" />
        <div className="mt-2 h-px w-full rounded-full bg-white" />
      </div>
    </div>
  );
}

function FooterCol({
  title,
  children,
  fontFamily,
}: {
  title: string;
  children: React.ReactNode;
  fontFamily?: "nunito";
}) {
  return (
    <div className="min-w-0 lg:min-w-[200px]">
      <h4 className="font-['Kanit'] text-lg sm:text-xl font-semibold capitalize tracking-tight text-white">
        {title}
      </h4>

      {/* responsive spacing: tighter on mobile, same on desktop */}
      <ul className="mt-6 sm:mt-10 lg:mt-[60px] space-y-4 sm:space-y-6 lg:space-y-[35px]">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  variant = "normal",
  fontFamily,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "normal" | "underline";
  fontFamily?: "nunito";
}) {
  const base =
    fontFamily === "nunito"
      ? "font-['Nunito_Sans']"
      : "font-['Kanit']";

  return (
    <li>
      <a
        href={href || "#"}
        className={[
          base,
          "text-lg sm:text-xl capitalize tracking-tight text-white",
          variant === "underline" ? "font-medium underline" : "font-light",
        ].join(" ")}
      >
        {children}
      </a>
    </li>
  );
}

/* ===== Icons (your original svgs) ===== */

function InstagramIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.75 29.6401C23.1075 29.6401 25.3684 28.7036 27.0354 27.0366C28.7024 25.3696 29.6389 23.1087 29.6389 20.7512C29.6389 18.3937 28.7024 16.1328 27.0354 14.4658C25.3684 12.7988 23.1075 11.8623 20.75 11.8623C18.3925 11.8623 16.1316 12.7988 14.4646 14.4658C12.7976 16.1328 11.8611 18.3937 11.8611 20.7512C11.8611 23.1087 12.7976 25.3696 14.4646 27.0366C16.1316 28.7036 18.3925 29.6401 20.75 29.6401Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.75 29.6389V11.8611C0.75 8.91426 1.92063 6.08811 4.00437 4.00437C6.08811 1.92063 8.91426 0.75 11.8611 0.75H29.6389C32.5857 0.75 35.4119 1.92063 37.4956 4.00437C39.5794 6.08811 40.75 8.91426 40.75 11.8611V29.6389C40.75 32.5857 39.5794 35.4119 37.4956 37.4956C35.4119 39.5794 32.5857 40.75 29.6389 40.75H11.8611C8.91426 40.75 6.08811 39.5794 4.00437 37.4956C1.92063 35.4119 0.75 32.5857 0.75 29.6389Z" stroke="white" strokeWidth="1.5"/>
      <path d="M32.9723 8.54886L32.9954 8.52344" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.6914 0.5C28.7457 0.498254 29.7895 0.711778 30.7568 1.12695C31.7242 1.54212 32.5947 2.15034 33.3145 2.91309L33.5029 3.1123L33.7725 3.06055C35.196 2.78631 36.576 2.33089 37.8789 1.70801C37.2201 2.92912 36.2376 3.96063 35.0234 4.68066L35.3379 5.60645C36.4359 5.47397 37.5166 5.23482 38.5664 4.89746C37.7016 5.92958 36.7098 6.85329 35.6104 7.64355L35.3896 7.80176L35.4023 8.07324C35.4181 8.40753 35.418 8.74574 35.418 9.0957C35.4179 19.6239 27.3279 31.7578 12.5635 31.7578C8.9044 31.7587 5.31116 30.8849 2.07812 29.2295C5.84324 29.2079 9.49556 27.9461 12.458 25.6357L13.5732 24.7666L12.1592 24.7422C10.5495 24.7143 8.98952 24.1864 7.69824 23.2344C6.62838 22.4456 5.7884 21.3979 5.25293 20.1982C5.5055 20.2202 5.76095 20.2324 6.01953 20.2324V20.2314C6.79475 20.2342 7.56717 20.1336 8.31445 19.9287L8.28125 18.9561C6.53667 18.6032 4.96863 17.6637 3.84277 16.2979C2.86654 15.1134 2.27409 13.6711 2.13281 12.1592C3.13306 12.584 4.20487 12.8267 5.29688 12.8662L7.06836 12.9307L5.59082 11.9502C3.959 10.8675 2.80497 9.21 2.36133 7.31543C1.97252 5.65455 2.15491 3.91897 2.86816 2.38184C4.88683 4.69166 7.33917 6.59333 10.0918 7.97754C13.0686 9.47443 16.3291 10.3338 19.6621 10.5L20.3105 10.5322L20.1768 9.89746C20.055 9.3214 19.9805 8.73634 19.9805 8.14355L19.9902 7.76562C20.0861 5.87791 20.8842 4.08613 22.2393 2.74219C23.5943 1.39833 25.4022 0.605196 27.3086 0.509766L27.6914 0.5Z" stroke="white"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.4287 10.7861C30.6302 10.7862 33.701 12.0575 35.9648 14.3213C38.2285 16.5851 39.5 19.656 39.5 22.8574V39.5H35.9287V22.8574C35.9287 20.6032 35.0334 18.4407 33.4395 16.8467C31.8454 15.2527 29.683 14.3575 27.4287 14.3574C25.1744 14.3574 23.012 15.2526 21.418 16.8467C19.824 18.4407 18.9287 20.6031 18.9287 22.8574V39.5H15.3574V11.9287H18.9287V15.0547L19.7861 14.1787C21.8058 12.115 24.4117 10.7861 27.4287 10.7861ZM5.21387 11.9287V39.5H1.64258V11.9287H5.21387ZM3.42871 0.5C4.2052 0.500037 4.94988 0.808459 5.49902 1.35742C6.04824 1.90664 6.35742 2.65201 6.35742 3.42871C6.35738 4.20537 6.0482 4.94984 5.49902 5.49902C4.94984 6.0482 4.20537 6.35738 3.42871 6.35742C2.65201 6.35742 1.90664 6.04824 1.35742 5.49902C0.808459 4.94988 0.500037 4.2052 0.5 3.42871C0.5 2.65201 0.808208 1.90664 1.35742 1.35742C1.90664 0.808208 2.65201 0.5 3.42871 0.5Z" stroke="white"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.667 10.5H17.5C17.8094 10.5 18.1064 10.623 18.3252 10.8418C18.5439 11.0606 18.667 11.3576 18.667 11.667C18.667 13.8038 19.0084 15.8566 19.6416 17.7734C19.7684 18.185 19.6739 18.6355 19.3467 18.9629L15.4229 22.8867L15.5879 23.21C18.0359 28.0209 21.9791 31.9641 26.79 34.4121L27.1133 34.5771L31.0371 30.6533C31.3653 30.3253 31.8171 30.2312 32.2295 30.3594C34.1455 30.992 36.1973 31.333 38.333 31.333C38.6424 31.333 38.9394 31.4561 39.1582 31.6748C39.377 31.8936 39.5 32.1906 39.5 32.5V38.333C39.5 38.6424 39.377 38.9394 39.1582 39.1582C38.9394 39.377 38.6424 39.5 38.333 39.5C30.9513 39.4999 23.872 36.5673 18.6523 31.3477C13.4327 26.128 10.5001 19.0487 10.5 11.667C10.5 11.3576 10.623 11.0606 10.8418 10.8418C11.0606 10.623 11.3576 10.5 11.667 10.5Z" stroke="white"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7373 10.2002H35.2627C36.4659 10.2002 37.6199 10.6785 38.4707 11.5293C39.3215 12.3801 39.7998 13.5341 39.7998 14.7373V28.9473C39.7998 30.1505 39.3215 31.3045 38.4707 32.1553C37.6199 33.006 36.4659 33.4844 35.2627 33.4844H14.7373C13.5341 33.4844 12.3801 33.006 11.5293 32.1553C10.6785 31.3045 10.2002 30.1505 10.2002 28.9473V14.7373C10.2002 13.5341 10.6785 12.3801 11.5293 11.5293C12.3801 10.6785 13.5341 10.2002 14.7373 10.2002Z" fill="white" stroke="black" strokeWidth="0.4"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="50" height="59" viewBox="0 0 50 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 10.2998C28.8973 10.3044 32.6339 11.8546 35.3896 14.6104C38.1454 17.3661 39.6956 21.1027 39.7002 25L39.6924 25.498C39.5437 30.6558 37.0939 36.1253 32.54 41.3623V41.3633C30.4196 43.8138 28.0321 46.0194 25.4238 47.9424C25.299 48.0287 25.1518 48.0762 25 48.0762C24.8479 48.0762 24.7001 48.029 24.5752 47.9424C21.9671 46.0195 19.5802 43.8136 17.46 41.3633V41.3623L17.0254 40.8545C12.6077 35.6029 10.2998 30.1319 10.2998 25L10.3047 24.6357C10.4023 20.8706 11.9405 17.2802 14.6104 14.6104C17.2802 11.9405 20.8706 10.4023 24.6357 10.3047L25 10.2998Z" fill="white" stroke="black" strokeWidth="0.6"/>
    </svg>
  );
}

import "./globals.css";
import { Nunito_Sans, Syne, Kanit, Inter } from "next/font/google";
import SiteHeader from "@/app/components/layout/siteheader";
import FooterFigmaSection from "@/app/components/sections/footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="en"
  className={`${nunito.variable} ${syne.variable} ${kanit.variable} ${inter.variable}`}
>
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <FooterFigmaSection />
      </body>
    </html>
  );
}

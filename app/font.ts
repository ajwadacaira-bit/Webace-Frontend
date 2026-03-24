import localFont from "next/font/local";

export const kanit = localFont({
  src: [
    { path: "./assets/fonts/Kanit/Kanit-Light.ttf", weight: "300", style: "normal" },
    { path: "./assets/fonts/Kanit/Kanit-Regular.ttf", weight: "400", style: "normal" },
    { path: "./assets/fonts/Kanit/Kanit-Medium.ttf", weight: "500", style: "normal" },
    { path: "./assets/fonts/Kanit/Kanit-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./assets/fonts/Kanit/Kanit-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-kanit",
  display: "swap",
});

export const syne = localFont({
  src: [
    { path: "./assets/fonts/Syne/Syne-Regular.ttf", weight: "400", style: "normal" },
    { path: "./assets/fonts/Syne/Syne-Medium.ttf", weight: "500", style: "normal" },
    { path: "./assets/fonts/Syne/Syne-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./assets/fonts/Syne/Syne-Bold.ttf", weight: "700", style: "normal" },
    { path: "./assets/fonts/Syne/Syne-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-syne",
  display: "swap",
});

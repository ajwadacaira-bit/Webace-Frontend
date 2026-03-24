import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      kanit: ["Kanit", "system-ui", "sans-serif"],
      syne: ["Syne", "system-ui", "sans-serif"],
    },
    },
  },
  plugins: [],
};

export default config;

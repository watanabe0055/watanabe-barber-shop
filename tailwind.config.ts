import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        colorHunt_blue1: "#191D88",
        colorHunt_blue2: "#1450A3",
        colorHunt_blue3: "#1450A3",
        colorHunt_yellow: "#FFC436",
        colorHunt_red: "#FF3B30",
        colorHunt_hadairo: "#EEE9DA",
      },
    },
  },
  plugins: [],
};
export default config;

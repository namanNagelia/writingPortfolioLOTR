import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lotr-gold": "#c9b037",
        "lotr-silver": "#B4B4B4",
        "lotr-bronze": "#AD8A56",
        parchment: "#F4E8D1",
        "forest-green": "#228B22",
        mirkwood: "#1A3409",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        ringbearer: ["var(--font-ringbearer)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

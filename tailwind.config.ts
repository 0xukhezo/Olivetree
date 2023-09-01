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
        neutral0: "#FDFBF4",
        neutral1: "#FFFFFF",
        neutral2: "#F2F0E7",
        neutral3: "#E0E5E4",
        neutral6: "#3C4A47",
        greenLight: "#C9F269",
        greenDark: "#083C2F",
      },
    },
  },
  plugins: [],
};
export default config;

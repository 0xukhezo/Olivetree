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
        neutral5: "#7F8C89",
        neutral6: "#3C4A47",
        greenLight: "#C9F269",
        greenDark: "#083C2F",
        greenUltra: "#042C22",
      },
      borderWidth: { 1: "1px" },
      screens: {
        roadmap: "907px",
        treeDesktop: "1128px",
      },
      fontFamily: {
        spectral: ["Spectral", "regular"],
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#070708",
        panel: "#111114",
        crimson: "#e11d2e",
      },
      animation: {
        "red-pulse": "redPulse 4s ease-in-out infinite",
      },
      keyframes: {
        redPulse: {
          "0%, 100%": { opacity: "0.38", transform: "scale(1)" },
          "50%": { opacity: "0.82", transform: "scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

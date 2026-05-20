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
        "green-primary": "#1a7a3a",
        "green-light": "#22a34d",
        "green-neon": "#2ecc71",
        "green-dark": "#0d3d1e",
        gold: "#c9a84c",
        "gold-light": "#e8c96a",
        "dark-bg": "#080c09",
        "dark-card": "#0e1410",
        "dark-surface": "#111a12",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(135deg, #1a7a3a, #22a34d)",
        "gradient-gold": "linear-gradient(135deg, #c9a84c, #e8c96a, #c9a84c)",
        "gradient-dark": "linear-gradient(to bottom, #080c09, #0a0f0b)",
      },
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;

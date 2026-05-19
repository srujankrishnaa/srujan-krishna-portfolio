import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        aurora: "0 0 55px rgba(80, 145, 255, 0.28), 0 0 120px rgba(166, 108, 255, 0.18)",
        phone: "0 0 0 1px rgba(255,255,255,.08), 0 35px 120px rgba(75,104,255,.28)",
      },
      animation: {
        "matrix-pan": "matrix-pan 26s linear infinite",
        "star-drift": "star-drift 40s linear infinite",
        "pulse-slow": "pulse-slow 5s ease-in-out infinite",
      },
      keyframes: {
        "matrix-pan": {
          "0%": { transform: "translate3d(-2%, 0, 0)" },
          "100%": { transform: "translate3d(-42%, 0, 0)" },
        },
        "star-drift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-260px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.56", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

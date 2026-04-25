import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#0a0a0b",
          900: "#0f0f11",
          800: "#16161a",
          700: "#1d1d22",
          600: "#27272d",
          500: "#3a3a42",
          400: "#6b6b75",
          300: "#9b9ba6",
          200: "#c8c8d0",
          100: "#e8e8ee",
        },
        accent: {
          blue: "#7aa6ff",
          cyan: "#7ee7ff",
          green: "#9ee493",
          yellow: "#ffd57a",
          orange: "#ffa86b",
          pink: "#ff92c4",
          purple: "#c79bff",
          red: "#ff7a8a",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "blink": "blink 1s steps(2, start) infinite",
        "shimmer": "shimmer 2.4s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

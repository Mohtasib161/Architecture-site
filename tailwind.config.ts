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
        accent: "#ffb74d",
        dark: "#010d0d",
        muted: "#424242",
        bg: "#f7f8fa",
        "bg-menu": "#fcfdff",
        "text-body": "#424242",
      },
      fontFamily: {
        sans: ["var(--font-josefin)", "sans-serif"],
        heading: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "display-1": ["72px", { lineHeight: "84px", fontWeight: "900" }],
        "display-2": ["48px", { lineHeight: "66px", fontWeight: "900" }],
        "display-3": ["32px", { lineHeight: "40px", fontWeight: "900" }],
        "display-4": ["22px", { lineHeight: "30px", fontWeight: "900" }],
        label: [
          "11px",
          { lineHeight: "15px", fontWeight: "600", letterSpacing: "2px" },
        ],
        subtitle: [
          "13px",
          { lineHeight: "15px", fontWeight: "600", letterSpacing: "3px" },
        ],
        body: ["16px", { lineHeight: "22px", fontWeight: "300" }],
      },
      spacing: {
        "100": "100px",
        "140": "140px",
      },
      zIndex: {
        "99": "99",
        "98": "98",
        "999": "999",
        "9999": "9999",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        curtain: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        curtain: "curtain 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

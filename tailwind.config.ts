import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        panel: "var(--panel)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(225, 6, 0, 0.32)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, rgba(225,6,0,0.9), rgba(225,6,0,0.4))",
      },
    },
  },
  plugins: [],
};

export default config;

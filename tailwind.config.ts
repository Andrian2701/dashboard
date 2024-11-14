import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        sm: "0.7rem",
        base: "0.9rem",
        xl: "1rem",
      },
      colors: {
        white: "#f7f7f7",
        black: "#232423",
        gray: "#dbdbdb",
        purple: "#9a9ae6",
        blue: "#6161ed",
      },
    },
  },
  plugins: [],
} satisfies Config;

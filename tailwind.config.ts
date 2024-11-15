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
        xl: "1.2rem",
      },
      colors: {
        white: "#f7f7f7",
        black: "#232423",
        gray: "#9e9e9e",
        "light-gray": "#dbdbdb",
        purple: "#9a9ae6",
        blue: "#6e8cf0",
      },
    },
  },
  plugins: [],
} satisfies Config;

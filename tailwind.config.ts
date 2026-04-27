import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#9333ea",
        accent: "#f59e0b",
      },
    },
  },
  plugins: [],
} satisfies Config;
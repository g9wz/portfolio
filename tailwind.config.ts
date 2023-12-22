import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#121212",
        secondary: "#1E1E1E"
      },
      textColor: {
        primary: "#EAEAEA",
        secondary: "#B0B0B0"
      },
      colors: {
        accent: "#FF6B6B"
      },
      borderColor: {
        primary: "#313131",
        secondary: "#1E1E1E"
      }
    }
  },
  plugins: []
};
export default config;

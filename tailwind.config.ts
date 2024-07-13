import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "cosmic-gradient":
          "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
        "cosmic-gradient-three-shades":
          "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

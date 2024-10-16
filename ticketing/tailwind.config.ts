import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowxdarkjo: "#805f2d",
        yellowdarkjo: "#cc9747",
        yellowjo: "#ffbd59",
        yellowlightjo: "#ffebcd",
        yellowxlightjo: "#fff8ee",

        bluexdarkjo: "#26596c",
        bluedarkjo: "#3c8eac",
        bluejo: "#4bb1d7",
        bluelightjo: "#dbeff7",
        bluexlightjo: "#edf7fb",
      },
    },
  },
  plugins: [],
};
export default config;

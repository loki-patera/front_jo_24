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
        yellowjo: "#ffbd59",
        yellowmidlightjo: "#ffd79b",
        yellowlightjo: "#fff2de",
        yellowdarkjo: "#cc9747",
        yellowxlightjo: "#fff8ee",
        bluejo: "#4bb1d7",
        bluemidlightjo: "#93d0e7",
        bluelightjo: "#dbeff7",
        bluedarkjo: "#3c8eac",
        bluexlightjo: "#edf7fb"
      },
    },
  },
  plugins: [],
};
export default config;

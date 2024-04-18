import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:{
          light:"#FEEFED",
          dark:"#F7684D",
          hover: "#d4553d"
        },
        background:{
          white: "#FFFFF"
        },
        secondary: "#6FBD6F",
        grey: "#7C7676"
      }
    },
  },
  plugins: [],
};
export default config;

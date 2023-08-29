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
        gray1: "#E2E6EC",
        gray2: "#DADFE7",
        primary: "#3D60FF",
      },
      textColor: {
        primary: "#252525",
      },
      fontFamily: {
        rota: ["Rota"],
      },
    },
  },
  plugins: [],
};
export default config;

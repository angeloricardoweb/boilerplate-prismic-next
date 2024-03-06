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
        brand: {
          pink: "#CC20FF",
          violet: "#6401B4",
          green: "#00AEA4",
          gray: {
            50: "#949494",
          },
          blue: {
            50: '#F6F7FF',
          },
          purple: {
            600: '#5F69E2'
          },
          yellow: {
            100: "#DACE00"
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

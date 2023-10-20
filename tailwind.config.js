/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
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
  plugins: [require('@tailwindcss/line-clamp')],
}

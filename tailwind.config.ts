import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00AEA4',
          gray: {
            50: '#949494',
          },
        },
      },
    },
    animation: {
      enter: 'fadeInRight 300ms ease-out',
      leave: 'fadeOutLeft 300ms ease-in forwards',
      spin: 'spin 1s linear infinite',
      fadeIn: 'fadeIn 100ms ease-out',
      fadeOut: 'fadeOut 100ms ease-in forwards',
    },
    keyframes: {
      fadeInRight: {
        '0%': {
          opacity: '0',
          transform: 'translate(2rem)',
        },
        '100%': {
          opacity: '1',
          transform: 'translate(0)',
        },
      },
      fadeOutLeft: {
        '0%': {
          opacity: '1',
        },
        '100%': {
          opacity: '0',
        },
      },
      spin: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
      fadeIn: {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      fadeOut: {
        '0%': {
          opacity: '1',
        },
        '100%': {
          opacity: '0',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config

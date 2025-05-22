/* eslint-disable prettier/prettier */
import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite-react/lib/**/*.js',
	],
	theme: {
		extend: {
			keyframes: {
				shine: {
					'0%': { backgroundPosition: '200% 0' },
					'25%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '-200% 0' },
				},
				gradientFlow: {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' },
				},
			},
			animation: {
				shine: 'shine 3s ease-out infinite',
				'gradient-flow': 'gradientFlow 10s ease 0s infinite normal none running',
			},

			colors: {
				brand: {
					green: '#00AEA4',
					gray: {
						'50': '#949494',
						'100': '#696969'
					}
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
		animation: {
			enter: 'fadeInRight 300ms ease-out',
			leave: 'fadeOutLeft 300ms ease-in forwards',
			spin: 'spin 1s linear infinite',
			fadeIn: 'fadeIn 100ms ease-out',
			fadeOut: 'fadeOut 100ms ease-in forwards',
			shine: 'shine 3s ease-out infinite',
			'gradient-flow': 'gradientFlow 10s ease 0s infinite normal none running'
		},
		keyframes: {
			shine: {
				'0%': {
					backgroundPosition: '200% 0'
				},
				'25%': {
					backgroundPosition: '-200% 0'
				},
				'100%': {
					backgroundPosition: '-200% 0'
				}
			},
			gradientFlow: {
				'0%': {
					'background-position': '0% 50%'
				},
				'50%': {
					'background-position': '100% 50%'
				},
				'100%': {
					'background-position': '0% 50%'
				}
			},
			fadeInRight: {
				'0%': {
					opacity: '0',
					transform: 'translate(2rem)'
				},
				'100%': {
					opacity: '1',
					transform: 'translate(0)'
				}
			},
			fadeOutLeft: {
				'0%': {
					opacity: '1'
				},
				'100%': {
					opacity: '0'
				}
			},
			spin: {
				'0%': {
					transform: 'rotate(0deg)'
				},
				'100%': {
					transform: 'rotate(360deg)'
				}
			},
			fadeIn: {
				'0%': {
					opacity: '0'
				},
				'100%': {
					opacity: '1'
				}
			},
			fadeOut: {
				'0%': {
					opacity: '1'
				},
				'100%': {
					opacity: '0'
				}
			}
		}
	},
	plugins: [require('flowbite/plugin'), require("tailwindcss-animate")],
}
export default config

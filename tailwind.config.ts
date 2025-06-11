
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'space': ['Space Grotesk', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				'gradient-shift': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translate3d(0, 0, 0) rotate(0deg)'
					},
					'33%': {
						transform: 'translate3d(30px, -30px, 0) rotate(120deg)'
					},
					'66%': {
						transform: 'translate3d(-20px, 20px, 0) rotate(240deg)'
					}
				},
				'float-slower': {
					'0%, 100%': {
						transform: 'translate3d(0, 0, 0) rotate(0deg)'
					},
					'33%': {
						transform: 'translate3d(-30px, 30px, 0) rotate(-120deg)'
					},
					'66%': {
						transform: 'translate3d(20px, -20px, 0) rotate(-240deg)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 50px rgba(139, 92, 246, 0.6), 0 0 80px rgba(236, 72, 153, 0.4)'
					}
				},
				'shimmer-wave': {
					'0%': {
						'background-position': '-200% 0'
					},
					'100%': {
						'background-position': '200% 0'
					}
				},
				'typing-dots': {
					'0%, 20%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.2)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'breathe': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.8'
					}
				}
			},
			animation: {
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'float-slow': 'float-slow 20s ease-in-out infinite',
				'float-slower': 'float-slower 25s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'shimmer-wave': 'shimmer-wave 2s ease-in-out infinite',
				'typing-dots': 'typing-dots 1.4s ease-in-out infinite',
				'breathe': 'breathe 4s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

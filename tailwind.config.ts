import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        konohaGreen: '#2d4f2f',
        hokageOrange: '#f97316',
        sharinganRed: '#dc2626',
        chakraPurple: '#6b21a8',
      },
    },
  },
  plugins: [],
}

export default config
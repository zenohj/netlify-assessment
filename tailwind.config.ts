import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  extend: {
    colors: {
      konohaGreen: '#3B7A57',
      hokageOrange: '#F57C00',
      sharinganRed: '#B71C1C',
      rasenganBlue: '#2196F3',
      chakraPurple: '#6A1B9A',
    },
  },
}

  plugins: [],
}
export default config

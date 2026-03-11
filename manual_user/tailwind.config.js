/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfcf0',
          100: '#f7f1cc',
          200: '#efdf9b',
          300: '#e5c461',
          400: '#ddab3a',
          500: '#c1a35f', // Beige/Tan principal
          600: '#a6854b',
          700: '#8c6d3d',
          800: '#755b35',
          900: '#614c2f',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b', // Navy/Dark Slate
          900: '#0a0a0a', // Black
        },
        accent: {
          100: '#f2ecec',
          300: '#d1bebe',
          500: '#9a7d7d', // Mauve/Muted Rose
          700: '#6d4f4f',
          900: '#4a3728', // Brown
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

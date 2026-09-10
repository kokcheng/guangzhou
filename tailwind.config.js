/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gz: {
          dark: '#0f172a',
          card: '#1e293b',
          border: '#334155',
          primary: '#0d9488', // Jade Emerald
          accent: '#f59e0b', // Pearl Gold
          red: '#e11d48', // Cantonese Imperial Red
          blue: '#2563eb', // Pearl River Blue
        },
        metro: {
          line1: '#eab308', // Yellow
          line2: '#3b82f6', // Blue
          line3: '#f97316', // Orange
          line5: '#ef4444', // Red
          line6: '#a855f7', // Purple
          apm: '#06b6d4',   // Teal
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

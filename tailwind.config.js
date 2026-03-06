/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', ' -apple-system', 'Segoe UI', 'Roboto'],
      },
      colors: {
        accent: 'var(--color-accent)',
      },
      boxShadow: {
        soft: '0 6px 18px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
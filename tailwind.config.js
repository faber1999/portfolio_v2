/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-gradient-start': 'var(--bg-gradient-start)',
        'bg-gradient-end': 'var(--bg-gradient-end)',
      },
      backgroundColor: {
        primary: 'var(--primary-bg)',
      },
    },
  },
  plugins: [],
}

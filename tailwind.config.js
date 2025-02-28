/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e',
        secondary: '#e3f2fd',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
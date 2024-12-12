/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F26B4E',
        'alt-color': '#4A869E'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 5px 5px rgba(255, 174, 0, 0.4)',
      },
      colors: {
        customYellow: '#FFB30E',
      },
    },
  },
  plugins: [],
}
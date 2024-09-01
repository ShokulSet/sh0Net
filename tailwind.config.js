/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#282828",
        "fg": "#928374",
      },
    },
  },
  plugins: [],
}   
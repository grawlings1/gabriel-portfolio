// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ THIS IS WHAT WAS MISSING
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

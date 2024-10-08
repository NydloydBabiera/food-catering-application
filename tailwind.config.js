/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      serif: ['Lucida Handwriting','monospace'],
      sans:['Times New Roman', 'sans-serif']
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    listStyleType: {
      square: 'square',
      roman: 'upper-roman',
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["night", "cupcake"],
  },
}
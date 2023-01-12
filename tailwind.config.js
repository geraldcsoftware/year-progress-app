/** @type {import('tailwindcss').Config} */
var colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./apps/**/*.{html,ts}",
    "./libs/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'cool-gray': colors.coolGray
      }
    },
  },
  plugins: [],
}

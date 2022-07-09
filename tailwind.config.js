/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{hbs,js}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '420px',
        'xs': '500px',
      }
    },
  },
  plugins: [],
}

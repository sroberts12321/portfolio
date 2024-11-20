/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#051F3B',
        'background': '#f2edd1',
        'primary': '#9F2E1B',
        'secondary': '#D2951C',
        'accent': '#5B3A1F',
 /* --cornsilk: #f2edd1ff; */
 /* --kobicha: #5b3a1fff; */
 /* --rufous: #9f2e1bff; */
 /* --harvest-gold: #d2951cff; */
 /* --olive: #6d7328ff; */
 /* --oxford-blue: #051f3bff; */
      },
    },
  },
  plugins: [],
}

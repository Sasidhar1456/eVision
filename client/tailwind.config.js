/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary : '#1995AD',
        secondary: '#F1F1F2',
      },

      fontFamily: {
        jom: ['Jomhuria','serif'],
      },
      width : {
        97  : '30rem',
        100 : '35rem',
        110 : '40rem',
      },
    },
  },
  plugins: [],
}


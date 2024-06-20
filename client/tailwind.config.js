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
        third : '#F5F1F1'
      },

      fontFamily: {
        jom: ['Jomhuria','serif'],
      },
      width : {
        '82'  : '22rem',
        '97'  : '30rem',
        '100' : '35rem',
        '110' : '40rem',
      },
      height : {
        '97'  : '30rem',
        '100' : '35rem',
        '110' : '40rem',
      },
      maxHeight : {
        '97'  : '30rem',
        '100' : '35rem',
        '110' : '40rem',
      },
    },
  },
  plugins: [],
}


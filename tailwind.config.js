/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Substituindo a fonte sans padrão
      },
      colors: {
        'light-yellow': '#FDE68A'
      },
      spacing: {
        "9pc": '90%',
        "8pc": '80%',
        "7pc": '70%',
        "6pc": '60%',
        "5pc": '50%',
        "4pc": '40%',
        "3pc": '30%',
        "2pc": '20%',
        "1-5pc": '15%',
        "1pc": '10%'
      },
      boxShadow: {
        'box-shadow': '10px 11px 28px -8px rgba(0,0,0,0.68)'
      },
      maxWidth: {
        '13': '1300px'
      },
      screens: {
        '850': '850px'
      }
    },
  },
  plugins: [],
}
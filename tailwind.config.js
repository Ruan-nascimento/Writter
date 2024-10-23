/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: [
        'Inter', ['sans-serif']
      ],
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
        "1pc": '10%',
        '126': '504px'
      },
    },
  },
  plugins: [],
}

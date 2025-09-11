/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#183287',
        'secondary-color': '#fefcf7',
        'main-bg': '#ffd444',
        green: {
          750: '#25c45d',
        },
        sky: {
          750: '#377feb',
        },
        blue: {
          750: '#6651d5',
        },
        red: {
          750: '#d72638',
        },
      },
    },
  },
  plugins: [],
}

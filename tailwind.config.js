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
          750: '#25c45d',      // اصلی
          850: '#1fa74e',      // تیره‌تر برای active
        },
        sky: {
          750: '#377feb',
          850: '#2e6cd1',
        },
        blue: {
          750: '#6651d5',
          850: '#5644b3',
        },
        red: {
          750: '#fc5537',
          850: '#e04b2f',
        }
      },
    },
    fontFamily:{
      "PressStartBold": "Press Start 2P Bold",
      "PressStartRegular": "Press Start 2P Regular",
    }
  },
  plugins: [],
}

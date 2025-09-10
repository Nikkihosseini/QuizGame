/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      'pirmary-color': '#183287',
      'secondary-color': '#fefcf7',
      'main-bg': '#ffd444',
      green:{
        750: '#25c45d',
      },
      sky:{
        750: '#377feb'
      },
      blue:{
        750: '#6651d5'
      },
      red:{
        750: '#6651d5'
      },
     }
    },
  },
  plugins: [],
}


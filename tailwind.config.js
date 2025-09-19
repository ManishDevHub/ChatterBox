/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:{
         1: '#1C1F2E',
         2: '#161925',
        },
        blue: {
          1: '#0E78F9'
        }
      
      }
    },
  },
  plugins: [],
}


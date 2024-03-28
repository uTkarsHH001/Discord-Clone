/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        lightBlue : "#404EED"
      },
      fontFamily: {
        'ggsans': ['ggsans-normal'],
        
      },
      spacing: {
        '30' : '120px'
      }
    },
  },
  plugins: [],
}

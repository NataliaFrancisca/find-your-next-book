/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'londrina-solid': ['Londrina Solid', 'sans-serif'],
        'londrina-sketch': ['Londrina Sketch', 'sans-serif'],
      },
      colors: {
        'base-black': '#202020',
        'primary': '#5738AF',
        'secondary': '#D0D5FD',
        'background': '#F7F4EF'
      },
      boxShadow: {
        'default': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      borderWidth: {
        '3': '3px'
      },
      borderRadius: {
        '3': '3px'
      }
    },
  },
  plugins: [],
}

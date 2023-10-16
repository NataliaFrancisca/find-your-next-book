/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'base-black': '#202020',
        'primary': '#64A100',
        'background': '#E1EDFF'
      },
      boxShadow: {
        'default': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      borderWidth: {
        '3': '3px'
      }
      
    },
  },
  plugins: [],
}

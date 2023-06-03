/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': 'rgba(57, 125, 119, 0.24)',
        'light-green': 'rgba(93, 166, 150, 0.05)',
      },
      boxShadow: {
        'default': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
      
    },
  },
  plugins: [],
}

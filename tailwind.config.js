/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   

    extend: {
      colors: {
        'gr': '#1d1d1d',
        'gr1':'#b5b5b5',        
        'sk': '#25abf4',
        'sk1':'#564DCA',
        'gre':'#18D48C',

        primary: "#00040f",
        secondary: "#00f6ff",
        
      },
    },
  },
  plugins: [],
}


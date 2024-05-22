/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        customGreen: '#D1FAE5',
        iconColor: '#6D727B',
      },
       screens: {
        'sm': '100px', 

       }
    },
  },
  plugins: [],
}


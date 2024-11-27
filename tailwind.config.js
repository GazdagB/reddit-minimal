/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       "mdc": "990px"
      },
      colors: {
        primary: 'rgb(var(--color-primary))'
      }
    },
  },
  plugins: [],
}


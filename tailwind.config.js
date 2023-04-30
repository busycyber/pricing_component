/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A2A7F0',
          dark: ' #696EDD'
        },
        neutral: {
          light: '#F7F7FE',
          medium: '#6E728E',
          dark: '#4A4D60'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
    screens: {
      mobile: '375px',
      desktop: '1440px'
    }
  },
  plugins: []
}

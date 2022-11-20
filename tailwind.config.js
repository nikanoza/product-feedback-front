/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: '#AD1FEA',
        electric: '#4661E6',
        electricHover: '#7C91F9',
        darkBlue: '#373F68',
        lightGray: '#F2F4FF',
        extraLightGray: '#F7F8FD',
        darkBlueTwo: '#3A4374',
        gray: '#647196',
        carrot: '#F49F85',
        sky: '#62BCFA',
        blood: '#D73737',
        violetHover: '#C75AF6',
        skyHover: '#7C91F9',
        boxGray: '#CFD7FF',
        darkBlueTwoHover: '#656EA3',
        bloodHover: '#E98888',
      },
      backgroundImage: {
        headerGradient:
          'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)',
      },
      height: {
        18: '4.5rem',
        149: '37.25rem',
      },
      spacing: {
        18: '4.5rem',
      },
      borderRadius: {
        cardBorderRadius: '10px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: '#fff7ed',
          600: '#ea580c',
        },
        maroon: {
          50: '#fdf2f2',
          600: '#9B2C2C',
          700: '#822727',
        },
        orange: {
          50: '#fff7ed',
          600: '#ea580c',
        },
        yellow: {
          500: '#eab308',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'width': {
          '0%': { width: '0' },
          '100%': { width: '6rem' },
        },
        'float': {
          '0%': { transform: 'translateY(0) rotate(45deg)' },
          '100%': { transform: 'translateY(-20px) rotate(225deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        lineMove: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(200%)' }
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'width': 'width 1s ease-out forwards',
        'float': 'float 3s infinite alternate ease-in-out',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'slideUp': 'slideUp 1s ease-out forwards',
        'scaleIn': 'scaleIn 0.5s ease-out forwards',
        'lineMove': 'lineMove 3s ease-in-out infinite',
        'slide': 'slide 3s ease-in-out infinite'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'xs': '475px',
      },
    },
  },
  plugins: [],
} 
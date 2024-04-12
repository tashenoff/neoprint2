/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],

  theme: {
    extend: {
        colors: {

            primary: '#281633',
            secondary: '#DF2389',
            service: '#0d0b16'

        },

        zIndex: {
            '100': '100',
        }
    },


    container: {
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '7rem',
            xl: '7rem',
            '2xl': '9rem',
        },
    },
},
  plugins: [],
}


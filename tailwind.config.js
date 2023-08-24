/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './*.vue',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '75rem',
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      colors: {
        main: '#91C8E4',
        'darken-main': '#749BC2',
        'dark-main': '#4682A9',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'neon-pink': '0px 0px 40px #f637ec',
      },
      animation: {
        'ping-slow': 'focuse 1.5s linear infinite',
        jello: 'jello-horizontal 0.9s both',
        shine: 'shine 1s',
        reveal: 'reveal 5s',
        slidein: 'slidein 5s',
        showup: 'showup 5s',
        glowing: 'glowing 20s linear infinite',
      },
      transitionDuration: {
        4000: '4000ms',
      },
      fontFamily: {
        sans: ['"Poppins"', ...fontFamily.sans],
        tektur: ['"Tektur'],
      },
      keyframes: {
        glowing: {
          '0%': { 'background-position': '0 0' },
          '50%': { 'background-position': '400% 0' },
          '100%': { 'background-position': '0 0' },
        },
        showup: {
          '0%': { opacity: 0 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { opacity: 1 },
        },
        slidein: {
          '0%': { 'margin-left': '-800px' },
          '20%': { 'margin-left': '-800px' },
          '35%': { 'margin-left': '0.5rem' },
          '100%': { 'margin-left': '0.5rem' },
        },
        reveal: {
          '0%': { opacity: 0, width: '0px' },
          '20%': { opacity: 1, width: '0px' },
          '30%': { width: 'fit-content' },
          '80%': { opacity: 1 },
          '100%': { width: 'fit-content' },
        },
        focuse: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '75%': { transform: 'scale(1.2)', opacity: 0 },
          '100%': { transform: 'scale(1.2)', opacity: 0 },
        },
        'jello-horizontal': {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
        'clip-text': {
          from: {
            'clip-path': 'inset(0 100% 0 0)',
          },
          to: {
            'clip-path': 'inset(0 0 0 0)',
          },
        },
        shine: {
          '100%': { left: '125%' },
        },
        'text-revealer': {
          '0%, 50%': {
            transform: '0 50%',
          },
          '60%, 100%': {
            transform: '100% 50%',
          },
          '60%': {
            transform: 'scaleX(1)',
          },
          '100%': {
            transform: 'scaleX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

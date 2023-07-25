/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './*.vue'
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '85rem'
      },
      colors: {
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'neon-pink': '0px 0px 40px #f637ec'

      },
      transitionDuration: {
        4000: '4000ms'
      },
      fontFamily: {
        sans: ['"Poppins"', ...fontFamily.sans],
        tektur: ['"Tektur']
      },
      keyframes: {
        'clip-text': {
          from: {
            'clip-path': 'inset(0 100% 0 0)'
          },
          to: {
            'clip-path': 'inset(0 0 0 0)'
          }
        },
        'text-revealer': {
          '0%, 50%': {
            transform: '0 50%'
          },
          '60%, 100%': {
            transform: '100% 50%'
          },
          '60%': {
            transform: 'scaleX(1)'
          },
          '100%': {
            transform: 'scaleX(0)'
          }
        }
      }
    }
  },
  plugins: []
}
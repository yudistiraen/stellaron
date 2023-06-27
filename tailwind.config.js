/** @type {import('tailwindcss').Config} */
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
      transitionDuration: {
        '4000': '4000ms',
      }
    }
  },
  plugins: []
}
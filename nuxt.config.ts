export default defineNuxtConfig({
    appConfig: {
        app: {
            name: 'stellaron',
            version: '1.0.0'
        }
    },
    css: ['~/assets/tailwind.sass'],
    plugins: [],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
})
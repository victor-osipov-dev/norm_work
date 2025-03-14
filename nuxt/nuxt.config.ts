// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    modules: [
      '@pinia/nuxt',
      '@vueuse/nuxt',
      '@nuxtjs/google-fonts',
      '@nuxtjs/tailwindcss',
      'vuetify-nuxt-module',
      '@nuxtjs/i18n',
      '@primevue/nuxt-module'
    ],
    components: [
        {
            path: '~/src',
            pathPrefix: false,
        },
    ],
    alias: {
        "@": '../src'
    },
    googleFonts: {
        download: true,
        families: {
            'Open Sans': true,
            'Montserrat': true,
        }
    },
    i18n: {
        strategy: 'prefix_and_default',
        defaultLocale: 'ru',
        locales: [
            { code: 'en', language: 'en-US', file: 'en-US.json' },
            { code: 'ru', language: 'ru-RU', file: 'ru-RU.json' }
        ],
        lazy: true,
        restructureDir: './src/app/i18n',
    },
    dir: {
        pages: './src/pages',
        layouts: './src/app/layouts'
    }
})
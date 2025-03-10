// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@pinia/nuxt',
      '@vueuse/nuxt',
      '@nuxtjs/google-fonts',
      '@nuxtjs/tailwindcss',
      'vuetify-nuxt-module',
      '@nuxtjs/i18n'
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
    dir: {
        pages: './src/pages',
        layouts: './src/app/layouts'
    },
    googleFonts: {
        download: true,
        families: {
            'Open Sans': true
        }
    },
    i18n: {
        vueI18n: './i18n.config.ts',
        strategy: 'prefix_and_default',
        defaultLocale: 'ru',
        locales: [
            { code: 'en', language: 'en-US' },
            { code: 'ru', language: 'ru-RU' }
        ],
    },
})
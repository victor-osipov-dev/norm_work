import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';


const MyPreset = definePreset(Aura, {
    components: {
        treeselect: {
            background: '{surface.0}',
            borderColor: '{surface.300}',
            focusBorderColor: 'var(--color-yellow-400)',
            color: 'black'
        },
        inputtext: {
            focusBorderColor: 'var(--p-yellow-400)'
        }
    }
});

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@pinia/nuxt',
      '@vueuse/nuxt',
      '@nuxtjs/google-fonts',
      '@nuxtjs/tailwindcss',
      'vuetify-nuxt-module',
      '@nuxtjs/i18n',
      '@primevue/nuxt-module',
      //   '@nuxtjs/html-validator',
      '@nuxt/icon',
      '@nuxtjs/color-mode'
    ],
    runtimeConfig: {
        public: {
            'backend_url': 'laravel:8000'
        }
    },
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
            { code: 'en', language: 'en-US', file: 'en-US.ts' },
            { code: 'ru', language: 'ru-RU', file: 'ru-RU.ts' }
        ],
        lazy: true,
        restructureDir: './src/app/i18n',
        baseUrl: 'http://localhost:3000',
        bundle: {
            optimizeTranslationDirective: false,
        },
    },
    dir: {
        pages: './src/pages',
        layouts: './src/app/layouts'
    },
    primevue: {
        autoImport: false,
        options: {
            theme: {
                preset: MyPreset,
                options: {
                    // darkModeSelector: false
                }
            },
        },
    },
    vuetify: {
        moduleOptions: {
            styles: {
                configFile: './src/shared/styles/settings.scss'
            }
        },
        vuetifyOptions: {
            /* vuetify options */
        }
    },
    $development: {
        vite: { 
            server: {
                watch: {
                    usePolling: true,
                    interval: 300 // ms
                }
            }
        },
    }
})
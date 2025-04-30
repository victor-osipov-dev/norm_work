import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';


const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            dark: {
                formField: {
                    background: "{surface.0}",
                    disabledBackground: "{surface.200}",
                    filledBackground: "{surface.50}",
                    filledHoverBackground: "{surface.50}",
                    filledFocusBackground: "{surface.50}",
                    borderColor: "{surface.300}",
                    hoverBorderColor: "{surface.400}",
                    focusBorderColor: "{primary.color}",
                    invalidBorderColor: "{red.400}",
                    color: "{surface.700}",
                    disabledColor: "{surface.500}",
                    placeholderColor: "{surface.500}",
                    invalidPlaceholderColor: "{red.600}",
                    floatLabelColor: "{surface.500}",
                    floatLabelFocusColor: "{primary.600}",
                    floatLabelActiveColor: "{surface.500}",
                    floatLabelInvalidColor:
                        "{form.field.invalid.placeholder.color}",
                    iconColor: "{surface.400}",
                    shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)",
                },
                text: {
                    color: '{surface.700}',
                    hoverColor: '{surface.800}',
                    mutedColor: '{surface.500}',
                    hoverMutedColor: '{surface.600}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    }
                },
                content: {
                    background: '{surface.0}',
                    hoverBackground: '{surface.100}',
                    borderColor: '{surface.200}',
                    color: '{text.color}',
                    hoverColor: '{text.hover.color}'
                },
            },
            
        },
    },
    components: {
        treeselect: {
            
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
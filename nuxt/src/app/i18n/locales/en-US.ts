import en from '~/src/app/i18n/locales/json/en-US.json'
import { en as $vuetify } from 'vuetify/locale'


export default defineI18nLocale(locale => ({
    ...en,
    $vuetify
}))
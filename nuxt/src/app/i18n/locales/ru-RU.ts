import ru from "~/src/app/i18n/locales/json/ru-RU.json"
import { ru as $vuetify } from 'vuetify/locale'

export default defineI18nLocale(locale => ({
    ...ru,
    $vuetify
}))
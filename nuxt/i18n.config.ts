export default defineI18nConfig(() => ({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        en: {
            'programming': 'Programming',
            'design': 'Design'
        },
        ru: {
            'programming': 'Программирование',
            'design': 'Дизайн'
        }
    },
}))

export default defineI18nConfig(() => ({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        en: {
            'programming': 'Programming',
            'design': 'Design',
            'signin': 'Signin',
            'orders': 'Orders',
            'posts': 'Posts'
        },
        ru: {
            'programming': 'Программирование',
            'design': 'Дизайн',
            'signin': 'Войти',
            'orders': 'Заказы',
            'posts': 'Обьявления'
        }
    },
}))

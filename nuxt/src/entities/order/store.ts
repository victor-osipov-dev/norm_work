import type { IOrder } from "./types"

export const useOrderStore =  defineStore('order', () => {
    const orders = ref<IOrder[]>([
        {
            id: 1,
            title: 'Доработка фронтенда на Vue JS',
            description: `Нужно доработать фронтенд на Vue JS 3 для mini-app в Telegram. Ничего из API Telegram использовать не понадобится, чисто vue js, просто сообщаю для контекста.
ТЗ доступно по ссылке на гугл док: https://docs.google.com/document/d/18T6-nCj5kAbG28L2iu3k8uZv2xAjzDWBSfOf0Ni6_Ug/edit?usp=sharing
В ТЗ написал задачи с пояснениями и примерами + вводными в начале.
Работа будет через github -- я дам доступ.
По срокам -- хочется успеть за 3-5 дней.`,
            user: {
                first_name: 'Victor',
                last_name: 'Osipov',
                number_reviews: 5,
                rating: 5,
            },
            number_feedbacks: 2,
            min_price: 2000,
            max_price: 9000,
            is_favorite: true,
            is_viewed: false
        },
        {
            id: 2,
            title: 'Верстка на Vue',
            description: `Нужна верстка на Vue для одного из проектов (интернет-магазин) с интеграцией с Api. Техническое задание предоставлю индивидуально. Просьба показать и описать ваши работы на Vue, и уточнить вашу ставку часа. Приоритет отдаю внимательному и аккуратному исполнителю.`,
            user: {
                first_name: 'Victor',
                last_name: 'Osipov',
                number_reviews: 15,
                rating: 5,
            },
            number_feedbacks: 10,
            min_price: 30000,
            max_price: 180000,
            is_favorite: false,
            is_viewed: false
        },
        {
            id: 3,
            title: 'Fullstack разработка Telegram Mini Apps',
            description: `Мы - агентство blesstor.agency, агентство разработки чат-ботов и mini apps под ключ. Ищем в свою команду fullstack девелопера для разработки telegram mini apps на долгосрочное сотрудничество
Стек:
- JavaScript, node js, vue js, html, css
- Базы данных: PostgreSQL/Mysql, redis
В отклике отправлять:
1) Примеры выполненых вами мини приложений (Если нету то сайтов)
2) Рассказ о себе, ваш стэк, опыт работы и тд.`,
            user: {
                first_name: 'Victor',
                last_name: 'Osipov',
                number_reviews: 5,
                rating: 5,
            },
            number_feedbacks: 7,
            min_price: 60000,
            max_price: 200000,
            is_favorite: false,
            is_viewed: false
        },
    ])


    return {
        orders
    }
})
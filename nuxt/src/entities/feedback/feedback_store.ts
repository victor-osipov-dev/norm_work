import type { IFeedback } from "./types"

export const useFeedbackStore = defineStore('feedback', () => {
    const feedbacks = ref<IFeedback[]>([
        {
            id: 1,
            user: {
                first_name: 'Victor',
                last_name: 'Osipov',
                rating: 4.5,
                number_reviews: 2,
            },
            data: [
                {
                    text: 'Спасибо большое за работу',
                    estimation: 4,
                    files: ['https://cdn-edge.kwork.ru/files/portfolio/t0/30/678814040d1b9054baa0619a5eeae71e6dc4c55d-1732278130.jpg'],
                    created_at: '2025-01-01'
                },
                {
                    text: 'быстро и качественно спасибо.',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-02'
                },
                {
                    text: 'еще раз спасибо',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-03'
                },
                {
                    text: 'еще раз спасибо',
                    estimation: 5,
                    files: ['https://cdn-edge.kwork.ru/files/portfolio/t0/95/6056ebe3c8a1a358e9f219f179e6641e93407362-1733780195.jpg', 'https://cdn-edge.kwork.ru/files/portfolio/t3/72/2d66991edd03a828bf85549b581155abccb46c32-1741187472.jpg'],
                    created_at: '2025-01-04'
                },
                {
                    text: 'быстро и качественно',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-05'
                },
                {
                    text: 'еще раз спасибо',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-06'
                },
                {
                    text: 'Я рекомендую',
                    estimation: 4,
                    files: [],
                    created_at: '2025-01-07'
                },
                {
                    text: 'еще раз спасибо',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-08'
                },
                {
                    text: 'быстро и качественно',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-09'
                },
                {
                    text: 'Молодец я доволен, ответственный исполнитель',
                    estimation: 4,
                    files: [],
                    created_at: '2025-01-10'
                },
                {
                    text: 'отличная работа. спасибо',
                    estimation: 4,
                    files: [],
                    created_at: '2025-01-11'
                },
            ]
        },
        {
            id: 2,
            user: {
                first_name: 'Dima',
                last_name: 'Test',
                rating: 5,
                number_reviews: 2,
            },
            data: [
                {
                    text: 'Спасибо большое за работу',
                    estimation: 4,
                    files: [],
                    created_at: '2025-01-01'
                },
            ]
        }
    ]) 


    return {
        feedbacks
    }
})
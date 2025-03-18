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
                    id: 1,
                    text: 'Спасибо большое за работу',
                    estimation: 4,
                    files: ['https://cdn-edge.kwork.ru/files/portfolio/t0/30/678814040d1b9054baa0619a5eeae71e6dc4c55d-1732278130.jpg'],
                    created_at: '2025-01-01'
                },
                {
                    id: 2,
                    text: 'быстро и качественно спасибо.',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-02'
                },
                {
                    id: 3,
                    text: 'еще раз спасибо',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-03'
                },
                {
                    id: 4,
                    text: 'еще раз спасибо',
                    estimation: 5,
                    files: ['https://cdn-edge.kwork.ru/files/portfolio/t0/95/6056ebe3c8a1a358e9f219f179e6641e93407362-1733780195.jpg', 'https://cdn-edge.kwork.ru/files/portfolio/t3/72/2d66991edd03a828bf85549b581155abccb46c32-1741187472.jpg'],
                    created_at: '2025-01-04'
                },
                {
                    id: 5,
                    text: 'быстро и качественно',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-05'
                },
                {
                    id: 6,
                    text: 'еще раз спасибо',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-06'
                },
                {
                    id: 7,
                    text: 'Я рекомендую',
                    estimation: 4,
                    files: [],
                    created_at: '2025-01-07'
                },
                {
                    id: 8,
                    text: 'еще раз спасибо',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-08'
                },
                {
                    id: 9,
                    text: 'быстро и качественно',
                    estimation: 5,
                    files: [],
                    created_at: '2025-01-09'
                },
                {
                    id: 10,
                    text: 'Молодец я доволен, ответственный исполнитель',
                    estimation: 4,
                    files: [],
                    created_at: '2025-01-10'
                },
                {
                    id: 11,
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
                    id: 1,
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
import type { IFeedback } from "./feedback_types"

export const useFeedbackStore = defineStore('feedback', () => {
    const feedbacks = ref<IFeedback[]>([])
    const current_post_id = ref<number | null>(null)

    function fetchFeedbacks(post_id: number) {
        if (current_post_id.value !== post_id) {
            current_post_id.value = post_id
            feedbacksClear()
        }

        $fetch<IFeedback[]>('http://localhost:8000/feedbacks/' + current_post_id.value)
        .then((res) => {
            console.log(res);
            feedbacks.value = res
        })
    }

    function feedbacksClear() {
        feedbacks.value = []
    }

    return {
        feedbacks,
        fetchFeedbacks,
        feedbacksClear
    }
})
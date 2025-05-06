import type { IFeedback } from "./feedback_types"

export const useFeedbackStore = defineStore('feedback', () => {
    const feedbacks = ref<IFeedback[]>([])

    function fetchFeedbacks(post_id: number) {
        $fetch('http://localhost:8000/feedbacks/' + post_id)
        .then((res) => {
            console.log(res);
            feedbacks.value = res
        })
    }

    return {
        feedbacks,
        fetchFeedbacks
    }
})
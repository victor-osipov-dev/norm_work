import type { Categories } from "~/src/shared/types"
import type { IPost } from "./post_types" 

export const usePostStore = defineStore('post', () => {
    const posts = ref<IPost[]>([])
    const post = ref<IPost | null>(null)


    function fetchPost(id: number) {
        $fetch('http://localhost:8000/posts/' + id)
    }

    return {
        posts,
        post,
        fetchPost
    }
})
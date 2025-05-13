import type { Categories, PostsByCategory } from "~/src/shared/types"
import type { IPost } from "./post_types" 

export const usePostStore = defineStore('post', () => {
    const posts = ref<IPost[]>([])
    const all_posts = computed<IPost[]>(() => {
        return posts.value.concat(
            ...Object.values(posts_by_category.value ?? {})
        )
    })

    function fetchPost(id: number) {
        $fetch('http://localhost:8000/posts/' + id)
    }

    const { data: posts_by_category } = useFetch<PostsByCategory>('http://localhost:8000/posts/by_category', { server: false })

    return {
        posts,
        all_posts,
        fetchPost,
        posts_by_category,
    }
})
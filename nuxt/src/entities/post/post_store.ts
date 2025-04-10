import type { Categories, PostsByCategory } from "~/src/shared/types"
import type { IPost } from "./post_types" 

export const usePostStore = defineStore('post', () => {
    const posts = ref<IPost[]>([])
    const post = ref<IPost | null>(null)


    function fetchPost(id: number) {
        $fetch('http://localhost:8000/posts/' + id)
    }

    const { data: posts_by_category } = useFetch<PostsByCategory>('http://localhost:8000/posts/by_category', { server: true })

    function getCategoryPosts(type: Categories): IPost[] {
        return posts_by_category.value?.[type] ?? []
    }

    return {
        posts,
        post,
        fetchPost,
        posts_by_category,
        getCategoryPosts,
    }
})
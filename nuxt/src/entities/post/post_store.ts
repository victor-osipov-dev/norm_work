import type { Categories, PostsByCategory } from "~/src/shared/types"
import type { IPost } from "./post_types" 

export const usePostStore = defineStore('post', () => {
    const posts = ref<IPost[]>([])
    const post = ref<IPost | null>(null)


    function fetchPost(id: number) {
        $fetch('http://localhost:8000/posts/' + id)
    }

    const { data: posts_by_category } = useAsyncData<PostsByCategory>('post_store:posts_by_category', () => 
        $fetch<PostsByCategory>('http://127.0.0.1:8000/posts/by_category')
    )

    function getCategoryPosts(type: Categories): IPost[] {
        return posts_by_category.value?.[type] ?? []
    }

    return {
        posts,
        post,
        fetchPost,
        posts_by_category,
        getCategoryPosts
    }
})
import type { Categories } from "~/src/shared/types"
import type { IPost } from "./post_types" 

export const usePostStore = defineStore('post', () => {
    const posts = ref<IPost[]>([])

    return {
        posts
    }
})
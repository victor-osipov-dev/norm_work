import type { IPost } from "./types"

export const usePostStore = defineStore('post', () => {
    const posts = ref<IPost[]>([
        {
            id: 1,
            title: 'VueJS, Nuxt, Vuetify, VueUse',
            description: 'programming on VueJS, Nuxt, Vuetify, VueUse',
            type: 'programming'
        },
        {
            id: 2,
            title: 'VueJS, Nuxt, Vuetify, VueUse',
            description: 'programming on VueJS, Nuxt, Vuetify, VueUse',
            type: 'programming'
        },
        {
            id: 3,
            title: 'Figma design',
            description: 'design on Figma',
            type: 'design'
        },
        {
            id: 4,
            title: 'Figma design',
            description: 'design on Figma',
            type: 'design'
        },
    ])
    const usePostType = (type: Ref<string> | string): IPost[] => {
        return posts.value.filter(post => post.type == toValue(type))
    }



    return {
        posts,
        usePostType
    }
})
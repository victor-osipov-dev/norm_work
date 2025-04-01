<template>
    <div class="container mx-auto mb-4">
        <PagePost v-if="post" :post="post"></PagePost>
    </div>

    <div class="container mx-auto">
        <div class="feedbacks flex flex-col gap-4">
            <Feedback v-for="feedback in feedback_store.feedbacks" :feedback :key="feedback.id"></Feedback>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFeedbackStore } from '~/src/entities/feedback/feedback_store'
import { usePostStore } from '~/src/entities/post/post_store'
import type { IPost } from '~/src/entities/post/post_types'
import type { Categories, PostsByCategory } from '~/src/shared/types'

definePageMeta({
    name: 'post'
})
const route = useRoute()
const post_store = usePostStore()
const feedback_store = useFeedbackStore()

const post = computed(() => {
    return (Object.keys(post_store.posts_by_category ?? {}) as Categories[]).reduce((acc: IPost[], value: Categories): IPost[] => {
        return post_store.posts_by_category?.[value] ? [
            ...acc,
            ...post_store.posts_by_category[value]
        ] : acc;
    }, [])
    .find((post: IPost) => post.id == Number(route.params.id))
})
</script>

<style scoped></style>
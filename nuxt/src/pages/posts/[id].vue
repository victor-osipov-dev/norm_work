<template>
    <div class="container mx-auto">
        <PagePost v-if="post" :post="post"></PagePost>
    </div>
</template>

<script setup lang="ts">
import { usePostStore } from '~/src/entities/post/store'
import type { IPost } from '~/src/entities/post/types'

definePageMeta({
    name: 'post'
})
const route = useRoute()
const post_store = usePostStore()

const post = computed(() => {
    return post_store.posts.find((post: IPost) => post.id == Number(route.params.id))
})
</script>

<style scoped></style>
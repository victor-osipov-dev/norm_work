<template>
    <AppFilter class="mb-4"></AppFilter>

    <PostList :posts="posts ?? []"></PostList>
</template>

<script setup lang="ts">
import type { IPost } from '~/src/entities/post/post_types';

definePageMeta({
    name: 'search-posts'
})

const route = useRoute()

const { data: posts, error } = useFetch<IPost[]>('http://localhost:8000/posts/search?query=' + route.query.query)
watchEffect(() => {
    console.log(error.value);
    
})
</script>

<style scoped>

</style>
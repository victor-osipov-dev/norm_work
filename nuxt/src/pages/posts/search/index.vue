<template>
    <AppFilter @search="searachHandle" class="mb-4"></AppFilter>

    <PostList :posts="posts ?? []"></PostList>
</template>

<script setup lang="ts">
import type { IPost } from '~/src/entities/post/post_types';

definePageMeta({
    name: 'search-posts'
})

const localePath = useLocalePath()
const route = useRoute()
const query = ref(route.query.query)
const { data: posts, error } = useFetch<IPost[]>(() => 'http://localhost:8000/posts/search?query=' + query.value)



function searachHandle(str: string) {
    query.value = str;
    navigateTo(localePath({name: 'search-posts', query: { query: query.value }}))
}
</script>

<style scoped>

</style>
<template>
    <div class="container mx-auto mb-4">
        <h1 class="text-3xl text-center">NormWork - простая фриланс биржа</h1>
    </div>
    <div>{{ route.query.auth_profider }}</div>
    <div>{{ route.query.token }}</div>
    <!-- {{ user_store.user ? user_store.user : 'user is missing' }} -->

    <CategorySearch></CategorySearch>

    <CategoryList :posts="programming_posts" post_type="programming"></CategoryList>
    <CategoryList :posts="design_posts" post_type="design"></CategoryList>
    <CategoryList :posts="video_audio_posts" post_type="video/audio"></CategoryList>
    <CategoryList :posts="texts_posts" post_type="texts"></CategoryList>
    <CategoryList :posts="marketing_posts" post_type="marketing"></CategoryList>
    <CategoryList :posts="seo_posts" post_type="seo"></CategoryList>
    
</template>

<script lang="ts" setup>
import type { IPost } from '../entities/post/post_types';
import { useUserStore } from '../entities/user/user_store';
import type { Categories, PostsByCategory } from '../shared/types';

definePageMeta({
    name: 'home'
})
useHead({
    title: 'Главная',
})


const user_store = useUserStore()
const route = useRoute()


onMounted(() => {
    console.log(route.query.auth_profider, route.query.token);
    
    user_store.fetchUser(route.query.auth_profider, route.query.token)
})

const { data: posts_by_category } = useFetch<PostsByCategory>('http://127.0.0.1:8000/posts/by_category')

function getCategoryPosts(type: Categories): IPost[] {
    return posts_by_category.value?.[type] ?? []
}

const programming_posts = computed(() => getCategoryPosts('programming'))
const design_posts = computed(() => getCategoryPosts('design'))
const video_audio_posts = computed(() => getCategoryPosts('video/audio'))
const texts_posts = computed(() => getCategoryPosts('texts'))
const marketing_posts = computed(() => getCategoryPosts('marketing'))
const seo_posts = computed(() => getCategoryPosts('seo'))
</script>

<style lang="scss" scoped>

</style>
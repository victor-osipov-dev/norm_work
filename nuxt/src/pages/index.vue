<template>
    <div class="container mx-auto mb-4">
        <h1 class="text-3xl text-center">NormWork - простая фриланс биржа</h1>
    </div>

    {{ user }}

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


// const user_store = useUserStore()
const user = ref<any>(null)
// const { data: user } = useFetch('http://localhost:8000/user/profile/1')
// useAsyncData(() => $fetch('http://localhost:8000/user/profile/1').then(res => user.value = res))
callOnce(() => $fetch<PostsByCategory>('http://localhost:8000/user/profile/4').then(res => user.value = res), {mode: 'navigation'})
useHead({
    title: 'Главная',
})



const data = ref<PostsByCategory | null>(null)
// const { data } = useFetch< Partial<Record<categories, IPost[]>> >('http://127.0.0.1:8000/posts', {
//     deep: true
// })
callOnce(() => $fetch<PostsByCategory>('http://127.0.0.1:8000/posts').then(res => data.value = res), {mode: 'navigation'})

function getCategoryPosts(type: Categories): IPost[] {
    return data.value?.[type] ?? []
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
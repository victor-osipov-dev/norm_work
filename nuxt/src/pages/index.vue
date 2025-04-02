<template>
    <div class="container mx-auto mb-4">
        hello
        <h1 class="text-3xl text-center">NormWork - простая фриланс биржа</h1>
    </div>

    <CategorySearch></CategorySearch>

    <CategoryList :posts="programming_posts" post_type="programming"></CategoryList>
    <CategoryList :posts="design_posts" post_type="design"></CategoryList>
    <CategoryList :posts="video_audio_posts" post_type="video/audio"></CategoryList>
    <CategoryList :posts="texts_posts" post_type="texts"></CategoryList>
    <CategoryList :posts="marketing_posts" post_type="marketing"></CategoryList>
    <CategoryList :posts="seo_posts" post_type="seo"></CategoryList>
    
</template>

<script lang="ts" setup>
import { usePostStore } from '../entities/post/post_store';

definePageMeta({
    name: 'home'
})
useHead({
    title: 'Главная',
})

const post_store = usePostStore()

const programming_posts = computed(() => post_store.getCategoryPosts('programming'))
const design_posts = computed(() => post_store.getCategoryPosts('design'))
const video_audio_posts = computed(() => post_store.getCategoryPosts('video/audio'))
const texts_posts = computed(() => post_store.getCategoryPosts('texts'))
const marketing_posts = computed(() => post_store.getCategoryPosts('marketing'))
const seo_posts = computed(() => post_store.getCategoryPosts('seo'))
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="container mx-auto mb-4">
        <h1 class="text-3xl text-center text-theme">NormWork - простая фриланс биржа</h1>
    </div>
    <CategorySearch></CategorySearch>


    <CategoryList v-for="(posts, category) in post_store.posts_by_category" :posts="posts" :post_type="category"></CategoryList>
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
</script>

<style lang="scss" scoped>

</style>
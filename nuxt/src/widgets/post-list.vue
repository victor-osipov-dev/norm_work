<template>
    <div class="container mx-auto">
        <div class="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AppPost v-for="post in posts" :post="post"></AppPost>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePostStore } from '../entities/post/post_store';
import type { IPost } from '../entities/post/post_types';

const props = defineProps<{
    posts: IPost[]
}>()

// const post_store = usePostStore()
</script>

<style scoped>

</style>
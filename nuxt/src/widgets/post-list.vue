<template>
    <div class="container mx-auto">
        <div class="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AppPost v-for="post in posts" :post="post"></AppPost>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePostStore } from '../entities/post/store';
import type { IPost } from '../entities/post/types';

const props = defineProps<{
    post_type: string
}>()

const post_store = usePostStore()
const posts: Ref<IPost[]> = computed(() => post_store.getPostsType(props.post_type))
</script>

<style scoped>

</style>
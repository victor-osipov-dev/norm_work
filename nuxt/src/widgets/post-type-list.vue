<template>
    <div class="container mx-auto p-2">
        <h2 class="mb-2">{{ $t(post_type) }}</h2>
        <PostList :posts="posts"></PostList>
    </div>
</template>

<script lang="ts" setup>
import { usePostStore } from '../entities/app-post/store';
import type { IPost } from '../entities/app-post/types';

const props = defineProps<{
    post_type: string
}>()
const post_store = usePostStore()

const posts: IPost[] = post_store.usePostType(props.post_type)
</script>

<style lang="scss" scoped>

</style>
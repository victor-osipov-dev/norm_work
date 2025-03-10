<template>
    <div :id="post_type" class="container mx-auto p-2">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-gray-900 text-2xl">{{ $t(post_type) }}</h2>

            <img class="w-10 cursor-pointer" src="@/shared/img/arrow-right.png" alt="">
        </div>
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
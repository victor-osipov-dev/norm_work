<template>
    <div :id="post_type" class="container mx-auto p-2">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-gray-900 text-2xl">
                <NuxtLinkLocale :to="{ name: 'posts' }">{{ $t(post_type) }}</NuxtLinkLocale>
            </h2>

            <NuxtLinkLocale :to="{ name: 'posts' }"><img class="w-10 cursor-pointer" src="@/shared/img/arrow-right.png"
                    alt=""></NuxtLinkLocale>
        </div>
        <PostList :posts="posts"></PostList>
    </div>
</template>

<script lang="ts" setup>
import { usePostStore } from '../entities/post/store';
import type { IPost } from '../entities/post/types';

const props = defineProps<{
    post_type: string
}>()
const post_store = usePostStore()

const posts: IPost[] = post_store.usePostType(props.post_type)
</script>

<style lang="scss" scoped></style>
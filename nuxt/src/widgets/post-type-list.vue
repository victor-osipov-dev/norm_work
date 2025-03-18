<template>
    <div :id="post_type" class="container mx-auto p-2">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-gray-900 text-2xl">
                <NuxtLinkLocale :to="{ name: 'posts', params: { type: post_type } }">{{ $t(post_type) }}</NuxtLinkLocale>
            </h2>

            <NuxtLinkLocale :to="{ name: 'posts', params: { type: post_type } }"><img class="w-10 cursor-pointer" src="@/shared/img/arrow-right.png"
                    alt=""></NuxtLinkLocale>
        </div>
        <MiniPostList :posts="posts"></MiniPostList>
    </div>
</template>

<script lang="ts" setup>
import { usePostStore } from '../entities/post/post_store';
import type { IPost } from '../entities/post/post_types';

const props = defineProps<{
    post_type: string
}>()
const post_store = usePostStore()

const posts: Ref<IPost[]> = computed(() => post_store.getPostsType(props.post_type))
</script>

<style lang="scss" scoped></style>
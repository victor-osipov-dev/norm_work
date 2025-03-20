<template>
    <div :id="post_type" class="container mx-auto p-2">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-gray-900 text-2xl">
                <NuxtLinkLocale alt="posts page" :to="{ name: 'posts', params: { type: post_type } }">{{ $t(post_type) }}</NuxtLinkLocale>
            </h2>

            <NuxtLinkLocale :to="{ name: 'posts', params: { type: post_type } }"><img alt="posts page" class="w-10 cursor-pointer" src="@/shared/img/arrow-right.png"
                    ></NuxtLinkLocale>
        </div>
        <CategoryPostList :posts></CategoryPostList>
    </div>
</template>

<script lang="ts" setup>
import type { IPost } from '../entities/post/post_types';
import type { Categories } from '../shared/types';

const props = defineProps<{
    post_type: Categories,
    posts: IPost[] | null
}>()
</script>

<style lang="scss" scoped></style>
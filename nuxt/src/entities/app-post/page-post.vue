<template>
    <div class="app-post bg-pink-50 rounded-md flex p-4 gap-4">
        <div class="">
            <h3 class="text-2xl mb-4">{{ post.title }}</h3>
            <p class="app-post__description  whitespace-pre-wrap max-w-[50rem]">{{ post.description }}</p>
        </div>

        <div class="app-post__header relative overflow-hidden rounded self-start flex-grow-1">
            <img class="app-post__img w-full" v-if="post.images?.[0]" :src="post.images[0]" alt="">
            

            <div
                class="app-post__header-content p-1 flex items-center justify-between px-2 text-white bg-gray-900">
                <p class="text-green-400 text-xl font-bold">{{ post.min_price }} – {{ post.max_price }} ₽</p>

                <div class="flex items-center gap-1">
                    <img class="h-4 mb-0.5" src="@/shared/img/star.png" alt="">
                    <p>{{ post.rating }}</p>
                    <p>({{ post.number_reviews }})</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IPost } from './types';

defineProps<{
    post: IPost
}>()
</script>

<style scoped>

</style>
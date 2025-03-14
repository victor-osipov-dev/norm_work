<template>
    <div class="app-post bg-pink-50 rounded-md flex  p-8 gap-8">

        <div class="app-post__header overflow-hidden rounded self-start flex-grow-1 max-w-[50rem]">
            <div class="rounded-md overflow-hidden mb-6">
                <img class="app-post__img w-full " v-if="post.images?.[0]" :src="post.images[0]" alt="">
            
                <div
                    class="app-post__header-content p-1 flex items-center justify-between px-2 text-white bg-gray-900">
                    <p class="text-green-400 text-xl font-bold">{{ post.min_price }} – {{ post.max_price }} ₽</p>

                    <div class="flex items-center gap-1 ">
                        <img class="h-4 mb-0.5" src="@/shared/img/star.png" alt="">
                        <p>{{ post.rating }}</p>
                        <p>({{ post.number_reviews }})</p>
                    </div>
                </div>
            </div>


            <div class="flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <img v-if="post.user.avatar" class="max-h-14 rounded-full" :src="post.user.avatar" alt="avatar">
                    <img v-else class="max-h-14 rounded-full" src="@/shared/img/avatar.avif" alt="avatar">

                    <div class="text-2xl flex gap-1 text-gray-500">
                        <p>{{ post.user.first_name }}</p>
                        <p>{{ post.user.last_name }}</p>
                    </div>
                </div>

                <AppButton class="bg-yellow-400">Связаться</AppButton>
            </div>
        </div>

        <div>
            <h3 class="text-2xl mb-4">{{ post.title }}</h3>
            <div class="app-post__description whitespace-pre-wrap max-w-[50rem] flex flex-col gap-4">
                <p v-for="row in description_arr">{{ row }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IPost } from './types';

const props = defineProps<{
    post: IPost
}>()

const description_arr = computed(() => {
    return props.post.description.split('\n').filter(row => row != '')
})
</script>

<style scoped>

</style>
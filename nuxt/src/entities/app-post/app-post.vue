<template>
    <div class="app-post bg-pink-50 p-2 rounded-md grid grid-rows-subgrid ">
        <div class="app-post__header relative overflow-hidden rounded">
            <NuxtLinkLocale :to="{name: 'post', params: {id: post.id}}">
                <img class="app-post__img row-start-1 w-full cursor-pointer" v-if="post.images?.[0]" :src="post.images[0]" alt="">
            </NuxtLinkLocale>
            

            <div
                class="app-post__header-content absolute bottom-0 left-0 right-0 p-1 flex items-center justify-between px-2 text-white bg-black/50">
                <p class="text-green-400 text-xl font-bold">{{ post.min_price }} – {{ post.max_price }} ₽</p>

                <div class="flex items-center gap-1">
                    <img class="h-4 mb-0.5" src="@/shared/img/star.png" alt="">
                    <p>{{ post.rating }}</p>
                    <p>({{ post.number_reviews }})</p>
                </div>
            </div>
        </div>

        <h3 class="row-start-2 text-2xl hover:underline cursor-pointer"><NuxtLinkLocale :to="{name: 'post', params: {id: post.id}}">{{ post.title }}</NuxtLinkLocale></h3>
        <p class="app-post__description row-start-3">{{ post.description }}</p>
    </div>
</template>

<script setup lang="ts">
import type { IPost } from './types';

defineProps<{
    post: IPost
}>()
</script>

<style scoped lang="scss">
.app-post {
    grid-row: span 3;
    scroll-snap-align: start;
}
.app-post__img {
    box-shadow: inset 0 0 1px 1px red;
}
.app-post__description {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-height: 10rem;
    overflow: hidden;
}
.app-post__header-content {
    font-family: Montserrat;
    backdrop-filter: blur(3px);
}
</style>
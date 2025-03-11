<template>
    <div class="app-post bg-pink-50 p-2 rounded-md grid grid-rows-subgrid ">
        <div class="app-post__header relative overflow-hidden rounded">
            <img class="app-post__img row-start-1 w-full" v-if="post.images?.[0]" :src="post.images[0]" alt="">

            <div class="app-post__header-content min-h-11 absolute bottom-0 left-0 right-0 flex items-center px-2 text-white bg-black/50">
                <p v-if="post.min_price" class="text-green-400 text-lg font-bold">От {{ post.min_price }} руб.</p>
                <img src="" alt="">
            </div>
        </div>

        <h3 class="row-start-2 text-2xl">{{ post.title }}</h3>
        <p class="app-post__description row-start-3">{{ post.description }}</p>
    </div>
</template>

<script setup lang="ts">
import type { IPost } from './types';

defineProps<{
    post: IPost
}>()
</script>

<style  lang="scss">
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
    backdrop-filter: blur(1px);
}
</style>
<template>
    <div class="app-post bg-pink-50 p-2 rounded-md grid grid-rows-subgrid md:max-w-[30rem]">
        <img class="app-post__img row-start-1 w-full rounded" v-if="post.images?.[0]" :src="post.images[0]" alt="">
        <!-- 
        <div>
        </div> -->

        <p class="row-start-2 text-2xl">{{ post.title }}</p>
        <p class="row-start-3">{{ post.description.slice(0, 200) }}</p>
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
</style>
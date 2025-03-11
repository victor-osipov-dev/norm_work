<template>
    <div class="app-post bg-pink-50 p-2 rounded-md grid grid-rows-subgrid ">
        <img class="app-post__img row-start-1 w-full rounded" v-if="post.images?.[0]" :src="post.images[0]" alt="">

        <h3 class="row-start-2 text-2xl">{{ post.title }}</h3>
        <p class="app-post__description row-start-3">{{ post.description.slice(0, 200) }}</p>
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
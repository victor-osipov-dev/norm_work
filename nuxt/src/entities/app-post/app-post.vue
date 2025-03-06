<template>
    <div class="bg-pink-50 p-2 flex flex-column rounded">
        <img v-if="post.images?.[0]" :src="post.images[0]" alt="">

        <p class="">{{ post.title }}</p>
        <p>{{ post.description }}</p>
    </div>
</template>

<script setup lang="ts">
import type { IPost } from './types';

defineProps<{
    post: IPost
}>()
</script>

<style scoped lang="scss">

</style>
<template>
    <div>
        <div class="posts flex gap-2">
            <AppPost v-for="post in posts" :post="post"></AppPost>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { usePostStore } from '../entities/app-post/store';
import type { IPost } from '../entities/app-post/types';

defineProps<{
    posts: IPost[]
}>()



</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="post-list">
        <div class="posts grid grid-flow-col justify-start overflow-x-auto">
            <AppPost v-for="post in posts" :post="post"></AppPost>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IPost } from '../entities/post/post_types';


defineProps<{
    posts: IPost[] | null
}>()



</script>

<style scoped>
@tailwind components;

.posts {
    --posts-gap: 1rem;
    --number-columns: 1;
    grid-template-rows: repeat(6, auto);
    scroll-snap-type: x mandatory;
    gap: var(--posts-gap);
    grid-auto-columns: calc((100% / var(--number-columns)) - (var(--posts-gap) * (var(--number-columns) - 1)) / var(--number-columns));

    @screen sm {
        --number-columns: 2;
    }

    @screen lg {
        --number-columns: 3;
    }

    @screen 2xl {
        --number-columns: 4;
    }


}
</style>
<template>
    <div class="post-list">
        <div class="posts grid grid-flow-col justify-start gap-4 overflow-x-auto">
            <AppPost v-for="post in posts" :post="post"></AppPost>
        </div>

    </div>
</template>

<script lang="ts" setup>
import type { IPost } from '../entities/app-post/types';

defineProps<{
    posts: IPost[]
}>()



</script>

<style lang="scss" scoped>
@tailwind components;

.posts {
    grid-template-rows: repeat(6, auto);
    grid-auto-columns: minmax(calc(100%), 1fr);
    scroll-snap-type: x mandatory;
    
    @screen sm {
        $number-columns: 2;
        grid-auto-columns: minmax(calc(100% / $number-columns - 1rem), 1fr);
    }
    @screen md {
        $number-columns: 3;
        grid-auto-columns: minmax(calc((100% / $number-columns) - 1rem), 1fr);
    }
    @screen lg {
        $number-columns: 4;
        grid-auto-columns: minmax(calc(100% / $number-columns - 1rem), 1fr);
    }
}
</style>
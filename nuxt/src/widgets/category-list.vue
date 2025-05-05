<template>
    <div :id="post_type" class="container mx-auto p-2">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl text-gray-900 dark:text-yellow-400">
                <NuxtLinkLocale alt="posts page" :to="{ name: 'posts', params: { type: post_type } }">{{ $t(post_type) }}</NuxtLinkLocale>
            </h2>

            <NuxtLinkLocale :to="{ name: 'posts', params: { type: post_type } }">
                <div alt="posts page" class="h-10 w-10 cursor-pointer arrow-link bg-gray-900 dark:bg-yellow-400"></div>
            </NuxtLinkLocale>
            <!-- <div class="arrow"></div> -->
        </div>
        <CategoryPostList :posts></CategoryPostList>
    </div>
</template>

<script lang="ts" setup>
import { ClientOnly } from '#components';
import type { IPost } from '../entities/post/post_types';
import type { Categories } from '../shared/types';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const colorMode = useColorMode()

const props = defineProps<{
    post_type: Categories,
    posts: IPost[] | null
}>()
</script>

<style lang="scss" scoped>
.arrow-link {
    mask-image: url('@/shared/img/arrow-right.png');
    mask-position: center;
    mask-size: contain;
    mask-repeat: no-repeat;
}
</style>
<template>
    <div :id="post_type" class="container mx-auto p-2">
        <div class="flex justify-between items-center mb-4">
            <!-- <ClientOnly> -->
                <div class="test">
                    test
                </div>
                <h2 class="text-2xl test" :class="{'text-yellow-400': isDark, 'text-gray-900': !isDark}">
                    <NuxtLinkLocale alt="posts page" :to="{ name: 'posts', params: { type: post_type } }">{{ $t(post_type) }}</NuxtLinkLocale>
                </h2>
            <!-- </ClientOnly> -->

            <NuxtLinkLocale :to="{ name: 'posts', params: { type: post_type } }"><img alt="posts page" class="w-10 cursor-pointer" src="@/shared/img/arrow-right.png"
                    ></NuxtLinkLocale>
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
:root {
    --color-is-dark: v-bind('"red"');
}
.test {
    color: var( --color-is-dark);
}
</style>
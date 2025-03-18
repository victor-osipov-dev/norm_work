<template>
    <div class="bg-pink-50 rounded-md p-8">
        <div class="flex items-center gap-3 mb-2">
            <img v-if="feedback.user.avatar" class="max-h-14 rounded-full" :src="feedback.user.avatar" alt="avatar">
            <img v-else class="max-h-14 rounded-full" src="@/shared/img/avatar.avif" alt="avatar">

            <div class="text-2xl flex gap-1 text-gray-500">
                <p>{{ feedback.user.first_name }}</p>
                <p>{{ feedback.user.last_name }}</p>
            </div>
        </div>

        <div class="flex flex-col gap-[1px] bg-gray-300">
            <div class="bg-pink-50 py-4 flex flex-col gap-2" v-for="row in feedback.data">
                <div class="flex gap-4 items-center">
                    <Rating readonly v-model="row.estimation">
                        <template #onicon>
                            <Icon class="bg-yellow-400 cursor-auto" name="streamline:star-1-solid"/>
                        </template>
                        <template #officon>
                            <Icon class="text-gray-600 cursor-auto" name="streamline:star-1"/>
                        </template>
                    </Rating>

                    <p class="text-gray-500">{{ new Date(row.created_at).toLocaleDateString() }}</p>
                </div>

                <p>{{ row.text }}</p>

                <div class="flex flex-wrap gap-4">
                    <img class="h-[10rem]" v-for="file in row.files"  :src="file" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IFeedback } from './types';

defineProps<{
    feedback: IFeedback
}>()
</script>

<style scoped>

</style>
<template>
    <div class="bg-card rounded-md p-2">
        <div class="flex items-center gap-3 mb-2">
            <img v-if="feedback.user.avatar" class="max-h-14 rounded-full" :src="feedback.user.avatar" alt="avatar">
            <img v-else class="max-h-14 rounded-full" src="@/shared/img/avatar.avif" alt="avatar">

            <div class="text-2xl flex gap-1 text-gray-500">
                <p>{{ feedback.user.first_name }}</p>
                <p>{{ feedback.user.last_name }}</p>
            </div>
        </div>

        <div class="flex flex-col gap-[1px] bg-gray-300 dark:bg-yellow-500">

            <div class="bg-card py-2 flex flex-col gap-2" v-for="row in rows" :key="row.id">
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
                    <img class="h-[10rem]" v-for="file in row.files"  :src="file" alt="result-file">
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { IFeedback } from './feedback_types';

const props = defineProps<{
    feedback: IFeedback
}>()


const rows = computed(() => {
    return props.feedback.data.toReversed()
})
</script>

<style scoped>

</style>
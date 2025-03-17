<template>
    <div class="app-order gap-0 grid grid-cols-subgrid col-span-3 bg-pink-50 rounded-md overflow-hidden">
        <div class="bg-gray-800 text-white p-4 flex flex-col items-center">
            <img class="w-10 mb-1 rounded-full" src="@/shared/img/avatar.avif" alt="avatar">
            <p>{{ order.user.first_name }}</p>
            <p class="mb-2">{{ order.user.last_name }}</p>

            <div class="flex items-center gap-1">
                <img class="h-4 mb-0.5" src="@/shared/img/star.png" alt="">
                <p>{{ order.user.rating }}</p>
                <p>({{ order.user.number_reviews }})</p>
            </div>
        </div>

        <div class="p-4 max-w-[50rem]">
            <h2 class="mb-2 text-xl">{{ order.title }}</h2>
            <p>{{ order.description }}</p>
        </div>


        <div class="p-4 justify-self-end flex flex-col justify-between items-end">
            <transition name="star" mode="out-in">
                <Icon class="star-favorite cursor-pointer bg-yellow-400" @click="emit('toggle:is_favorite')" v-if="order.is_favorite" name="streamline:star-1-solid" size="1.5em" />
                <Icon class="cursor-pointer" @click="emit('toggle:is_favorite')" v-else name="streamline:star-1" size="1.5em" />
            </transition>
            
            

            <AppButton class="bg-yellow-400">Связаться</AppButton>

            
        </div>

    </div>
</template>

<script setup lang="ts">
import type { IOrder } from './types';

const props = defineProps<{
    order: IOrder
}>()

const emit = defineEmits(['toggle:is_favorite'])

const icon = computed(() => props.order.is_favorite ? 'streamline:star-1-solid' : 'streamline:star-1')
</script>

<style scoped>
.star-enter-active {
    transition: opacity 0.5s;
}

.star-favorite.star-enter-from {
  opacity: 0;
}
</style>
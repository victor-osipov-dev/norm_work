<template>
    <div class="app-order  gap-0 xl:grid xl:grid-cols-subgrid xl:col-span-3 bg-gray-800 rounded-md overflow-hidden">

        <div class="bg-gray-800 text-white p-4 flex xl:flex-col items-center justify-between xl:justify-start">
            <div class="flex items-center gap-1 xl:gap-0 xl:flex-col xl:mb-4">
                <Icon class="bg-gray-500 mr-1 xl:mr-0 xl:mb-2" name="streamline:user-circle-single-solid" size="2.5rem" />
                <p>{{ order.user.first_name }}</p>
                <p>{{ order.user.last_name }}</p>
            </div>

            <div class="flex items-center gap-1">
                <Icon class="bg-yellow-400 mb-0.5" name="streamline:star-1-solid" size="1em" />
                <p>{{ order.user.rating }}</p>
                <p>({{ order.user.feedbacks_number }})</p>
            </div>
        </div>

        <div class="app-order__aside bg-card col-span-2">
            <div class="p-4 max-w-[50rem] ">
                <h2 class="mb-2 text-xl">{{ order.title }}</h2>
                <p class="break-words whitespace-pre-wrap">{{ order.description }}</p>
            </div>


            <div class=" p-4 justify-between xl:justify-self-end flex xl:flex-col xl:justify-between items-end xs:items-center xl:items-end">
                <div class="flex items-center gap-4">
                    <transition name="star" mode="out-in">
                        <Icon class="star-favorite cursor-pointer bg-yellow-400" @click="emit('toggle:is_favorite')" v-if="order.is_favorite" name="streamline:star-1-solid" size="1.5em" />
                        <Icon class="cursor-pointer text-gray-600" @click="emit('toggle:is_favorite')" v-else name="streamline:star-1" size="1.5em" />
                    </transition>

                    <div class="flex items-center gap-1 text-gray-600">
                        <Icon name="uil:comment-alt-message" size="1.5rem" class="mt-1"/> 
                        <p>{{ order.number_feedbacks }}</p>
                    </div>
                </div>
                
                <div class="flex flex-col xs:flex-row gap-2 xs:gap-4 xs:items-center xl:gap-6 ">
                    <p class="font-[Montserrat] font-bold md:text-lg xs:text-base sm:text-lg">{{ format(order.min_price) }} – {{
                        format(order.max_price) }} ₽</p>

                    <AppButton class="bg-yellow-400">Связаться</AppButton>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { format } from '~/src/shared/utils/text';
import type { IOrder } from './order_types';

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
.app-order__aside {
    display: grid;
    grid-template-columns: subgrid;
}
</style>
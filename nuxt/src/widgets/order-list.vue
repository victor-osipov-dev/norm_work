<template>
    <div class="container mx-auto">
        <div class="order-list grid gap-4">
            <AppOrder 
                v-for="order in order_store.orders" 
                :order
                @toggle:is_favorite="toggleFavorite(order)" 
            ></AppOrder>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '../entities/order/store';
import type { IOrder } from '../entities/order/types';

const order_store = useOrderStore()


function toggleFavorite(order: IOrder) {
    order.is_favorite = !order.is_favorite
}
</script>

<style scoped>
.order-list {
    grid-template-columns: max-content 800px auto;

}
</style>
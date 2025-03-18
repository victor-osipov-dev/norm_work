<template>
    <div class="container mx-auto">
        <div class="order-list grid gap-4 mb-6">
            <AppOrder 
                v-for="order in order_store.orders" 
                :order
                @toggle:is_favorite="toggleFavorite(order)" 
            ></AppOrder>
        </div>

        <v-pagination :length="4"></v-pagination>
    </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '../entities/order/order_store';
import type { IOrder } from '../entities/order/order_types';

const order_store = useOrderStore()


function toggleFavorite(order: IOrder) {
    order.is_favorite = !order.is_favorite
}
</script>

<style scoped>
.order-list {
    @screen xl {
        grid-template-columns: max-content 800px auto;
    }

}
</style>
<template>
    <div class="container mx-auto">
        <div class="order-list grid gap-4">
            <AppOrder v-for="order in order_store.orders" :order></AppOrder>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '../entities/order/store';

const order_store = useOrderStore()
</script>

<style scoped>
.order-list {
    grid-template-columns: max-content 800px auto;

}
</style>
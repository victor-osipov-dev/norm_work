<template>
    <input type='text' v-model="model" class="app-input text-black bg-slate-50 rounded-md px-2 py-1 focus:outline outline-2 outline-offset-0 outline-yellow-400 border-none min-h-10">
</template>

<script setup>
const model = defineModel()
</script>

<style lang="scss" scoped>

</style>
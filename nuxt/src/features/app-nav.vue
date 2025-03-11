<template>
    <div class="app-nav flex items-center gap-1 justify-between">
        <div class="flex gap-2">
            <NuxtLink class="cursor-pointer">{{ $t('orders') }}</NuxtLink>
            <NuxtLink class="cursor-pointer">{{ $t('posts') }}</NuxtLink>
        </div>

        <AppButton @click="navigateTo('/signin')" class="cursor-pointer ml-2 bg-white">{{ $t('signin') }}</AppButton>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
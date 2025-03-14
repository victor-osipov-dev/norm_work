<template>
    <div class="app-nav flex items-center gap-1 justify-between">
        <div class="flex gap-2">
            <NuxtLinkLocale :to="{name: 'orders'}" class="cursor-pointer">{{ $t('orders') }}</NuxtLinkLocale>
            <NuxtLinkLocale :to="{name: 'home'}" class="cursor-pointer">{{ $t('posts') }}</NuxtLinkLocale>
        </div>

        <AppButton @click="navigateTo(localePath({name: 'signin'}))" class="cursor-pointer ml-2 bg-white">{{ $t('signin') }}</AppButton>
    </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>

</style>
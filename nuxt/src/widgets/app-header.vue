<template>
    <div class="bg-gray-900 text-white mb-6">
        <div class="container mx-auto flex flex-col gap-1 justify-between h-full p-2 sm:flex-row sm:items-center">
            <NuxtLinkLocale :to="{name: 'home'}" class="logo text-yellow-400">
                NormWork
            </NuxtLinkLocale>

            <AppNav></AppNav>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="app-nav flex items-center gap-4 justify-between">
        <div class="flex gap-2">
            <NuxtLinkLocale :to="{name: 'orders'}" class="cursor-pointer">{{ $t('orders') }}</NuxtLinkLocale>
            <NuxtLinkLocale :to="{name: 'home'}" class="cursor-pointer">{{ $t('posts') }}</NuxtLinkLocale>
        </div>

        <div @click="navigateTo(localePath({name: 'profile'}))" class="border border-gray-400 rounded-md px-2 py-1 font-[Montserrat]" v-if="user_store.is_login">
            {{ user_store.user?.balance ?? 0 }} ₽
        </div>
        
        <AppButton v-else @click="navigateTo(localePath({name: 'signin'}))" class="cursor-pointer bg-white">{{ $t('signin') }}</AppButton>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/src/entities/user/user_store'

const localePath = useLocalePath()
const user_store = useUserStore()


</script>

<style lang="scss" scoped>

</style>
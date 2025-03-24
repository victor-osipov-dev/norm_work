<template>
    <div class="container mx-auto">
        <h1 class="mb-2">Профиль</h1>
        <AppButton @click="logout" class="bg-sky-300">Выйти</AppButton>
    </div>

</template>


<script setup>
import { useUserStore } from '../entities/user/user_store';

definePageMeta({
    name: 'profile'
})

const xsrf_token = useCookie('XSRF-TOKEN')
const user_store = useUserStore()
user_store.fetchUser()


async function logout() {
    $fetch('http://localhost:8000/user/logout', {credentials: 'include', headers: {'X-XSRF-TOKEN': xsrf_token.value}})
    .then(() => {
        user_store.logout()
    })

}
</script>
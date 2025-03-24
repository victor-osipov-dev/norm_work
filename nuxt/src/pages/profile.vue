<template>
    <div class="container mx-auto ">
        <h1 class="mb-4 text-2xl">Профиль</h1>

        <div class="p-2 rounded-md bg-pink-50">
            <div class="flex justify-between items-center">
                <div class="flex mb-4 items-center gap-4">
                    <img v-if="user_store.user?.avatar" class="rounded-full h-20" :src="user_store.user?.avatar" alt="">
                    <img v-else class="rounded-full h-20" src="@/shared/img/avatar.avif" alt="avatar">
                    
                    <div>
                        <p class="text-2xl">{{ user_store.user?.first_name ?? 'Имя' }}</p>
                        <p class="text-2xl">{{ user_store.user?.last_name ?? 'Фамилия' }}</p>
                    </div>
                </div>
                
                <AppButton v-if="user_store.is_login" @click="logout" class="bg-sky-400 max-h-[2rem] text-white">Выйти</AppButton>
            </div>

            <p>{{ user_store.user?.email ?? 'Email' }}</p>
            <!-- <p>{{ user_store.user. }}</p> -->
        </div>
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
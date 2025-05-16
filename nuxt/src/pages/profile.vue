<template>
    <div class="container mx-auto ">
        <h1 class="mb-4 text-2xl text-theme">Профиль</h1>

        <div class="p-2 rounded-md bg-card">
            <div class="flex justify-between items-center">
                <div class="flex mb-4 items-center gap-4">
                    <!-- <div>
                        <img v-if="user_store.is_login" class="rounded-full h-20" :src="user_store.user.avatar" alt="">
                        <Icon v-else class="bg-gray-800" name="streamline:user-circle-single-solid" size="5rem" />
                    </div> -->
                    
                    <div>
                        <p class="text-2xl">{{ user_store.user?.first_name ?? 'Имя' }}</p>
                        <p class="text-2xl">{{ user_store.user?.last_name ?? 'Фамилия' }}</p>
                    </div>
                </div>
                
                <AppButton v-if="user_store.is_login" @click="logout" class="bg-red-600 max-h-[2rem] text-white">Выйти</AppButton>
            </div>

            <p>Email: {{ user_store.user?.email ?? 'Email' }}</p>
            {{ user_store.user ?? 'none' }}
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
// user_store.fetchUser()


async function logout() {
    $fetch('http://localhost:8000/user/logout', {credentials: 'include', headers: {'X-XSRF-TOKEN': xsrf_token.value}})
    .then(() => {
        user_store.logout()
    })

}
</script>
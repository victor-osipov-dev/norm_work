<template>
    <div class="container mx-auto flex-grow grid place-items-center">
        <form @submit.prevent="register" class="bg-orange-200 p-8 rounded-md" action="#">
            <h2 class="text-3xl mb-8 text-center">Регистрация</h2>

            <div class="grid gap-4 mb-8 xs:grid-cols-2">
                <AppInput v-model="form.first_name" placeholder="Имя"></AppInput>
                <AppInput v-model="form.last_name" placeholder="Фамилия"></AppInput>

                <hr class="border-slate-100 xs:hidden">

                <AppInput v-model="form.email" placeholder="Email"></AppInput>
                <AppInput v-model="form.password" placeholder="Пароль"></AppInput>
            </div>

            <div class="flex justify-between">
                <NuxtLinkLocale class="hover:underline block self-end" :to="{name: 'signin'}">Войти</NuxtLinkLocale>

                <AppButton type="submit" class="bg-white">Регистрация</AppButton>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'signup'
})

const xsrf_token = useCookie('XSRF-TOKEN')
const locale_path = useLocalePath()

const form = ref({
    'first_name': 'Vi',
    'last_name': 'Os',
    'email': 'vios@gmail.com',
    'password': '1234',
})


async function register() {
    await $fetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })

    $fetch<unknown, any, any>('http://localhost:8000/user/register', { body: form.value, credentials: 'include', method: 'POST', headers: {'X-XSRF-TOKEN': xsrf_token.value}})
    .then(() => {
        navigateTo(locale_path({name: 'home'}));
    })
}
</script>

<style scoped>

</style>
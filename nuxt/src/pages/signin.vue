<template>
    <div class=" flex-grow grid place-items-center">
        <form class="bg-sky-300 p-8 rounded-md text-white" action="#">
            <h2 class="text-3xl mb-8 text-center">Войти</h2>

            <div class="flex gap-4 flex-col xs:flex-row mb-4">
                <AppInput v-model="form.email" placeholder="Email"></AppInput>
                <AppInput v-model="form.password" placeholder="Пароль"></AppInput>
            </div>

            <NuxtLinkLocale class="hover:underline block mb-8 w-max" :to="{name: 'signup'}">Регистрация</NuxtLinkLocale>

            <div class="flex flex-col-reverse xs:flex-row gap-4 justify-between">
                <div class="flex gap-4">
                    <a class="bg-white px-4 rounded-md flex-grow xs:flex-grow-0 flex justify-center"
                        href="http://localhost:8000/auth/redirect/google"><img class="h-10"
                            src="@/shared/img/google.webp" alt="google account"></a>

                    <a class="bg-white px-4 rounded-md flex-grow xs:flex-grow-0 flex justify-center"
                        href="http://localhost:8000/auth/redirect/yandex"><img class="h-10"
                            src="@/shared/img/yandex.png" alt="yandex account"></a>
                </div>

                <AppButton @click="signin" class="bg-white">Войти</AppButton>
            </div>


        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'signin'
})

const token = useLocalStorage('token', null)
const locale_path = useLocalePath()
const xsrf_token = useCookie('XSRF-TOKEN')
const form = ref({
    email: 'vios@gmail.com',
    password: '1234',
})


async function signin() {
    await $fetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })

    $fetch<unknown, any, any>('http://localhost:8000/auth/signin', { body: form.value, credentials: 'include', method: 'POST', headers: {'X-XSRF-TOKEN': xsrf_token.value}})
    .then((res) => {
        navigateTo(locale_path({name: 'profile'}));
    })
}
</script>

<style scoped>

</style>
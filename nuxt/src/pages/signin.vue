<template>
    <div class=" flex-grow-1 grid place-items-center">
        <form class="bg-sky-300 p-8 rounded-md text-white" action="#">
            <h2 class="text-3xl mb-8 text-center">Войти</h2>

            <div class="flex gap-4 flex-col xs:flex-row mb-4">
                <AppInput placeholder="Email"></AppInput>
                <AppInput placeholder="Пароль"></AppInput>
            </div>

            <NuxtLinkLocale class="hover:underline block mb-8 w-max" :to="{name: 'signup'}">Регистрация</NuxtLinkLocale>

            <div class="flex flex-col-reverse xs:flex-row gap-4 justify-between">
                <div class="flex gap-4">
                    <a class="bg-white px-4 rounded-md flex-grow-1 xs:flex-grow-0 flex justify-center"
                        href="http://127.0.0.1:8000/auth/redirect/google"><img class="h-10"
                            src="@/shared/img/google.webp" alt="google account"></a>

                    <a class="bg-white px-4 rounded-md flex-grow-1 xs:flex-grow-0 flex justify-center"
                        href="http://127.0.0.1:8000/auth/redirect/yandex"><img class="h-10"
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


function signin() {
    console.log(123)
}
</script>

<style scoped>

</style>
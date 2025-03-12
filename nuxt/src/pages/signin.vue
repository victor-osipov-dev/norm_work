<template>
    <div class="container mx-auto flex-grow-1 grid place-items-center">
        <form class="bg-sky-300 p-8 rounded-md text-white" @click.prevent action="#">
            <h2 class="text-3xl mb-8 text-center">Войти</h2>

            <div class="form mb-4">
                <AppInput placeholder="Email"></AppInput>
                <AppInput placeholder="Пароль"></AppInput>
            </div>

            <NuxtLinkLocale class="hover:underline block mb-8" :to="{name: 'signup'}">Регистрация</NuxtLinkLocale>

            <div class="flex justify-between">
                <div class="flex gap-4">
                    <a class="bg-white px-4 rounded-md" href="#"><img class="h-10" src="@/shared/img/google.webp" alt="google account"></a>
                    <a class="bg-white px-4 rounded-md" href="#"><img class="h-10" src="@/shared/img/yandex.png" alt="yandex account"></a>
                </div>

                <AppButton class="bg-white">Войти</AppButton>
            </div>
            

        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'signin'
})
</script>

<style scoped>

</style>
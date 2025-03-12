<template>
    <div class="container mx-auto flex-grow-1 grid place-items-center">
        <form class="bg-sky-300 p-8 rounded-md text-white " @click.prevent action="#">
            <h2 class="text-3xl mb-8 text-center">Регистрация</h2>

            <div class="form mb-8">
                <AppInput placeholder="Имя"></AppInput>
                <AppInput placeholder="Фамилия"></AppInput>
                <AppInput placeholder="Email"></AppInput>
                <AppInput placeholder="Пароль"></AppInput>
            </div>

            <div class="flex justify-between">
                <NuxtLinkLocale class="hover:underline block self-end" :to="{name: 'signin'}">Войти</NuxtLinkLocale>

                <AppButton class="bg-white">Регистрация</AppButton>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'signup'
})
</script>

<style scoped>

</style>
<template>
    <div class="bg-pink-50 container mx-auto p-2 rounded-md flex flex-col items-stretch justify-between gap-4 md:flex-row-reverse md:items-center">
        <div class="flex min-h-10 max-h-12 md:items-stretch md:flex-grow-1 lg:min-w-[25rem] xl:min-w-[30rem]">
            <AppInput class="rounded-r-none outline-yellow-400 flex-grow-1" placeholder="Поиск" v-model="search"></AppInput>
            <AppButton class="rounded-l-none bg-yellow-400">Найти</AppButton>
        </div>


        <ul class="category-list grid gap-x-6 gap-y-2 text-lg md:text-base py-2 sm:!py-0">
            <li><a href="#programming">Программирование</a></li>
            <li><a href="#design">Дизайн</a></li>
            <li><a href="#video-audio">Видео/аудио</a></li>
            <li><a href="#texts">Тексты</a></li>
            <li><a href="#marketing">Маркетинг</a></li>
            <li><a href="#seo">SEO</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const search = ref('')
</script>

<style scoped>
.category-list {
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-template-rows: repeat(3, auto);
    justify-content: start;

    @screen md {
        grid-template-rows: repeat(2, auto);
    }
}
</style>
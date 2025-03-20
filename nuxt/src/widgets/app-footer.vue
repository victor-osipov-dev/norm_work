<template>
    <div class="flex-grow-1 flex flex-col justify-end">
        <div class="bg-gray-900 text-white mt-6">
            <div class="container mx-auto flex flex-col-reverse md:flex-row gap-4 justify-between md:px-2 md:py-4">
                <nav class="flex-col md:flex-row gap-5 text-sm md:gap-20 hidden md:flex">
                    <div v-for="nav in nav_list" class="flex flex-col gap-1">
                        <h3 class="text-lg">{{ nav.title }}</h3>

                        <div v-for="link in nav.links">
                            <NuxtLinkLocale>{{ link.name }}</NuxtLinkLocale>
                        </div>
                    </div>

                </nav>

                <v-expansion-panels class="md:!hidden " variant="accordion" elevation="0">
                    <v-expansion-panel v-for="nav in nav_list" class="!bg-gray-900 text-white" :title="nav.title">
                        <template #text>
                            <li v-for="link in nav.links">
                                <NuxtLinkLocale>{{ link.name }}</NuxtLinkLocale>
                            </li>
                        </template>
                    </v-expansion-panel>
                </v-expansion-panels>

                <NuxtLinkLocale :to="{ name: 'home' }" class="logo text-yellow-400 pt-4 pl-2 md:!p-0">
                    NormWork
                </NuxtLinkLocale>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const nav_list = ref([
    {
        title: 'Статьи',
        links: [
            {
                name: 'О нас',
                link: ''
            },
            {
                name: 'Для фрилансеров',
                link: ''
            },
            {
                name: 'Для клиентов',
                link: ''
            }
        ]
    },
    {
        title: 'Общее',
        links: [
            {
                name: 'Ответы на вопросы',
                link: ''
            },
            {
                name: 'Пользовательское соглашение',
                link: ''
            },
            {
                name: 'Политика конфиденциальности',
                link: ''
            }
        ]
    },
    {
        title: 'Контакты',
        links: [
            {
                name: 'Telegram канал',
                link: ''
            },
            {
                name: 'Техподдержка',
                link: ''
            },
        ]
    },
])
</script>

<style scoped>
:deep(.v-expansion-panel-title) {
    padding-inline: 0.5rem;
}
</style>
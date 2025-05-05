<template>
    <div class="bg-card container mx-auto p-2 rounded-md flex flex-col items-stretch justify-between gap-4 md:flex-row-reverse md:items-center">
        <form @submit.prevent="searchPosts" class="flex min-h-10 max-h-12 md:items-stretch md:flex-grow lg:min-w-[25rem] xl:min-w-[30rem] md:mr-4">
            <AppInput aria-label="Search input" type="search" class="rounded-r-none flex-grow" :placeholder="$t('search')" v-model="search"></AppInput>
            <AppButton class="rounded-l-none bg-yellow-400">{{ $t('find') }}</AppButton>
        </form>


        <ul class="category-list w-full md:w-max grid bg-gray-200 dark:bg-yellow-500 gap-x-[1px] gap-y-[1px] text-lg md:text-base items-center">
            <li class="bg-card py-2 px-4 text-center text-sm xs:text-base"><a href="#programming">{{ $t('programming') }}</a></li>
            <li class="bg-card py-2 px-4 text-center text-sm xs:text-base"><a href="#design">{{ $t('design') }}</a></li>
            <li class="bg-card py-2 px-4 text-center text-sm xs:text-base"><a href="#video/audio">{{ $t('video/audio') }}</a></li>
            <li class="bg-card py-2 px-4 text-center text-sm xs:text-base"><a href="#texts">{{ $t('texts') }}</a></li>
            <li class="bg-card py-2 px-4 text-center text-sm xs:text-base"><a href="#marketing">{{ $t('marketing') }}</a></li>
            <li class="bg-card py-2 px-4 text-center text-sm xs:text-base"><a href="#seo">{{ $t('seo') }}</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const search = ref('')
const localePath = useLocalePath()
// const router = useRouter()

function searchPosts() {
    navigateTo(localePath({name: 'search-posts', query: { query: search.value }}))
}
</script>

<style scoped>
.category-list {
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* justify-content: start; */

    @screen xs {
        grid-template-columns: repeat(2, 1fr);
    }
    @screen md {
        
        grid-template-rows: repeat(2, 1fr);
    }
}
</style>
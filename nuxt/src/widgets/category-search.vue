<template>
    <div class="bg-pink-50 container mx-auto p-2 rounded-md flex flex-col items-stretch justify-between gap-4 md:flex-row-reverse md:items-center">
        <div class="flex min-h-10 max-h-12 md:items-stretch md:flex-grow-1 lg:min-w-[25rem] xl:min-w-[30rem]">
            <AppInput class="rounded-r-none outline-yellow-400 flex-grow-1" :placeholder="$t('search')" v-model="search"></AppInput>
            <AppButton class="rounded-l-none bg-yellow-400">{{ $t('find') }}</AppButton>
        </div>


        <ul class="category-list w-full md:w-max grid bg-gray-200 gap-x-[1px] gap-y-[1px] text-lg md:text-base items-center">
            <li class="bg-pink-50 py-2 px-4 text-center text-sm xs:text-base"><a href="#programming">{{ $t('programming') }}</a></li>
            <li class="bg-pink-50 py-2 px-4 text-center text-sm xs:text-base"><a href="#design">{{ $t('design') }}</a></li>
            <li class="bg-pink-50 py-2 px-4 text-center text-sm xs:text-base"><a href="#video/audio">{{ $t('video/audio') }}</a></li>
            <li class="bg-pink-50 py-2 px-4 text-center text-sm xs:text-base"><a href="#texts">{{ $t('texts') }}</a></li>
            <li class="bg-pink-50 py-2 px-4 text-center text-sm xs:text-base"><a href="#marketing">{{ $t('marketing') }}</a></li>
            <li class="bg-pink-50 py-2 px-4 text-center text-sm xs:text-base"><a href="#seo">{{ $t('seo') }}</a></li>
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
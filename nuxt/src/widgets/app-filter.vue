<template>
    <div class="container mx-auto bg-card p-2 pt-4 gap-8 rounded-md flex flex-col xl:flex-row xl:items-center justify-between">
        <div class="flex flex-col md:flex-row gap-4 md:gap-8 lg:pl-2">
            <div class="w-full border-gray-200 xl:w-[20rem]">
                <p class="text-lg font-[Montserrat] mb-2 flex justify-between font-bold">
                    <span>Цена: </span>

                    <span>
                        {{ range[0].toLocaleString("ru-RU") }} -
                        {{ range[1].toLocaleString("ru-RU") }} ₽
                    </span>
                </p>

                <div class="h-[32px]">
                    <ClientOnly>
                        <v-range-slider theme="light" hide-details v-model="range" :step="1000" :min="0" :max="100_000"></v-range-slider>
                    </ClientOnly>
                </div>
            </div>

            <div class="md:w-[20rem] xl:content-center flex-shrink-0">
                <FloatLabel variant="in">
                    <TreeSelect theme="light"  ref="select_el" filter show-clear v-model="selectedValue" :options="subcategories" selectionMode="checkbox" class="w-full"/>
                    <label for="over_label">Категории</label>
                </FloatLabel>
            </div>
        </div>

        <form @submit.prevent="emit('search', search)" class="flex w-full xl:w-auto min-h-10 max-h-12 md:items-stretch md:flex-grow lg:min-w-[25rem] h-20 xl:min-w-[30rem] md:mr-4">
            <AppInput @focus="onFocus" class="rounded-r-none !outline-yellow-400 flex-grow "
                :placeholder="$t('search')" v-model="search"></AppInput>
            <AppButton type="submit" class="rounded-l-none bg-yellow-400">{{ $t('find') }}</AppButton>
        </form>
    </div>
</template>

<script setup lang="ts">
import { subcategories } from '../shared/consts';

const select_el = useTemplateRef('select_el')
const route = useRoute()

const emit = defineEmits(['search'])
// defineProps<{
//     query: string
// }>()

async function onFocus(event: any) {
    const unwatch = watchEffect(() => {
        // @ts-ignore
        if (select_el.value?.focused) {
            event.target.focus()
        }
    })
    setTimeout(() => unwatch(), 100)
}

const range = ref([0, 50_000]);
const search = ref(route.query.query ?? '')

const selectedValue = ref(null);

</script>

<style scoped>
.green {
    color: green;
}
</style>

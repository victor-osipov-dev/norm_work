<template>
    <div class="container mx-auto bg-pink-50 p-2 rounded-md flex justify-between items-center">
        <div class="flex items-center gap-8 pl-2">
            <div class="w-[20rem] border-gray-200 ">
                <p class="text-lg font-[Montserrat] mb-2 flex justify-between font-bold">
                    <span>Цена: </span>

                    <span>
                        {{ range[0].toLocaleString("ru-RU") }} -
                        {{ range[1].toLocaleString("ru-RU") }} ₽
                    </span>
                </p>

                <v-range-slider hide-details v-model="range" :step="1000" :min="0" :max="100_000"></v-range-slider>
            </div>

            <FloatLabel class="w-full md:w-80" variant="in">
                <TreeSelect ref="select_el" filter show-clear v-model="selectedValue" :options="subcategories" selectionMode="checkbox"
                    class="md:w-80 w-full" />
                <label for="over_label">Категории</label>
            </FloatLabel>
        </div>

        <div class="flex min-h-10 max-h-12 md:items-stretch md:flex-grow-1 lg:min-w-[25rem] xl:min-w-[30rem]">
            <AppInput @focus="onFocus" class="rounded-r-none outline-yellow-400 flex-grow-1"
                :placeholder="$t('search')" v-model="search"></AppInput>
            <AppButton class="rounded-l-none bg-yellow-400 mr-4">{{ $t('find') }}</AppButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { subcategories } from '../shared/consts';

const select_el = useTemplateRef('select_el')


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
const search = ref('')

const selectedValue = ref(null);

</script>

<style scoped>
.green {
    color: green;
}
</style>

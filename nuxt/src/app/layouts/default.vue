<template>
    <div  class="flex flex-col gap-6 min-h-dvh">
        <AppHeader></AppHeader>

        <slot>

        </slot>

        <AppFooter></AppFooter>
    </div>
</template>

<script lang="ts" setup>
// const i18nHead = useLocaleHead()

// useHead(() => ({
//   htmlAttrs: {
//     lang: i18nHead.value.htmlAttrs!.lang
//   },
// }))
</script>
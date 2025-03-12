<template>
    <AppHeader></AppHeader>

    <CategorySearch></CategorySearch>

    <PostTypeList post_type="programming"></PostTypeList>
    <PostTypeList post_type="design"></PostTypeList>
</template>

<script setup>
definePageMeta({
    name: 'home'
})
</script>

<style lang="scss" scoped>

</style>
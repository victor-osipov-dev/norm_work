<template>
    <div class="container mx-auto mb-4">
        <h1 class="text-3xl text-center">NormWork - простая фриланс биржа</h1>
    </div>

    <CategorySearch></CategorySearch>

    <PostTypeList post_type="programming"></PostTypeList>
    <PostTypeList post_type="design"></PostTypeList>
    <PostTypeList post_type="video/audio"></PostTypeList>
    <PostTypeList post_type="texts"></PostTypeList>
    <PostTypeList post_type="marketing"></PostTypeList>
    <PostTypeList post_type="seo"></PostTypeList>
</template>

<script setup>
definePageMeta({
    name: 'home'
})
</script>

<style lang="scss" scoped>

</style>
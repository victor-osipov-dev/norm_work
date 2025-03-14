<template>

    <PostList :post_type="'programming'"></PostList>
    {{ $route.params }}
</template>

<script setup lang="ts">
definePageMeta({
    'name': 'posts'
})
</script>

<style scoped>

</style>
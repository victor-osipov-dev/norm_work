<template>
    <PostList :post_type="$route.params.type as string"></PostList>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'posts'
})
</script>

<style scoped>

</style>
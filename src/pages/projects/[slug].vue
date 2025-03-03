<script setup lang="ts">
const router = useRoute()
const slug = computed(() => (router.params as { slug?: string }).slug ?? '')
</script>

<template>
  <div>
    <h1>Proyecto: {{ slug }}</h1>
  </div>
</template>

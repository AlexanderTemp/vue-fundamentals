<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const slug = computed(() => (router.params as { id?: string }).id ?? '')
</script>

<template>
  <div>
    <h1>Task: {{ slug }}</h1>
  </div>
</template>

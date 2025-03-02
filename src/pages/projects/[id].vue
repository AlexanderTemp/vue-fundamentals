<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const projectId = computed(() => (router.params as { id?: string }).id ?? '')
</script>

<template>
  <div>
    <h1>Proyecto {{ projectId }}</h1>
  </div>
</template>

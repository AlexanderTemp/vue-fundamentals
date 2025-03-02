<script setup lang="ts">
import { useRoute} from "vue-router"

const router = useRoute()
</script>

<template>
  <div>
    <h1>Proyecto {{ router.params?.id }}</h1>
  </div>
</template>

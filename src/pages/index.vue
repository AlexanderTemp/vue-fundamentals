<script setup lang="ts">
const { pageData } = usePageStore()

pageData.title = 'Homepage'
</script>

<template>
  <div>
    <h1>Home</h1>

    <p class="text-3xl">lol</p>
    <router-link to="/projects">Ir a proyectos</router-link>
  </div>
</template>

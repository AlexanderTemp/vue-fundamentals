<script setup lang="ts"></script>

<template>
  <div>
    <h1>Project</h1>
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }">Ir a proyecto 1</router-link>
  </div>
</template>

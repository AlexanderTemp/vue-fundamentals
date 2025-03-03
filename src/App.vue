<script setup lang="ts">
/* Se usa suspense en este caso para las peticiones asíncronas que el componentes puede llegar a tener */
</script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" timeout="0">
        <component :is="Component" :key="route.name"></component>
        <template #fallback>
          <span>Cargando...</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>

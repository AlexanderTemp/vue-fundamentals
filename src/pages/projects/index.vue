<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types.ts'
import { ref } from 'vue'

const projects = ref<Array<Tables<'projects'>> | null>(null)
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) console.error(error)

  projects.value = data
})()
</script>

<template>
  <div>
    <h1>Project</h1>
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }">Ir a proyecto 1</router-link>

    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

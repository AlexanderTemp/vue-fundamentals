<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types.ts'
import { ref } from 'vue'

const tasks = ref<Array<Tables<'tasks'>> | null>(null)
;(async () => {
  const { data, error } = await supabase.from('tasks').select()
  if (error) console.error(error)

  tasks.value = data
})()
</script>
<template>
  <div>
    <h1>Tasks page</h1>
    <router-link to="/projects">Volver a proyectos</router-link>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

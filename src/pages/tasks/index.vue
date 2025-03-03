<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { tasksQuery, type ITasksQuery } from '@/utils/supabaseQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'

const { pageData } = usePageStore()
pageData.title = 'Tasks'

const tasks = ref<ITasksQuery | null>(null)
const getTasks = async () => {
  const { data, error } = await tasksQuery
  if (error) console.log(error)

  console.log(data)
  tasks.value = data
}

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

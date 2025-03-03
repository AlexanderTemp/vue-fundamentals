<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { projectsQuery, type IProjectsQuery } from '@/utils/supabaseQueries'

const { pageData } = usePageStore()
pageData.title = 'Projects'

const projects = ref<IProjectsQuery | null>(null)
const getProjects = async () => {
  const { data, error } = await projectsQuery
  if (error) console.log(error)

  projects.value = data
}

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

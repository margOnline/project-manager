<script setup lang="ts">
import { tasksWithProjectsQuery } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'
import type { TasksWithProjects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'My tasks'

const tasks = ref<TasksWithProjects | null>(null)

const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery
  if (error) useErrorStore().setError({ error, customCode: status })

  tasks.value = data
}

await getTasks()
</script>

<template>
  <div>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  </div>
</template>

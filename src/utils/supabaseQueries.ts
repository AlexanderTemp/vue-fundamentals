import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksQuery = supabase.from('tasks').select(`*, projects(id, name,slug)`)

export type ITasksQuery = QueryData<typeof tasksQuery>

export const projectsQuery = supabase.from('projects').select()
export type IProjectsQuery = QueryData<typeof projectsQuery>

export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `*,
  tasks (
  id,
  name,
  status,
  due_date
  )
  `,
    )
    .eq('slug', slug)
    .single()
export type IProjectQuery = QueryData<ReturnType<typeof projectQuery>>

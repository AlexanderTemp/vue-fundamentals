import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksQuery = supabase.from('tasks').select(`*, projects(id, name,slug)`)

export type ITasksQuery = QueryData<typeof tasksQuery>

export const projectsQuery = supabase.from('projects').select()

export type IProjectsQuery = QueryData<typeof projectsQuery>

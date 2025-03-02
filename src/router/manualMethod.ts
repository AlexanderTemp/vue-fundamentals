import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/pages/index.vue')
    },
    {
      path: '/projects',
      name: "projects",
      component:  ()=>import('@/pages/projects/index.vue')
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: ()=>import("@/pages/projects/[id].vue")
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: h('p', {style: 'color:red;'}, '404 not found')
    }
  ],
})

export default router

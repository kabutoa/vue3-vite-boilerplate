import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index.vue')
    }
  ]
})

export default router

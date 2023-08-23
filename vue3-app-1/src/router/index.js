import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/web-view/index.vue'),
      children:[
        {
          path:'',
          name:'Home',
          component: () => import('@/pages/web-view/module/home/index.vue')
        }
      ]
    },
  ]
})

export default router

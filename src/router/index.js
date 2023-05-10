import { createRouter, createWebHashHistory } from 'vue-router'
import log_in from '../views/log_in.vue'
import '../assets/main.css'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'log_in',
      component: log_in
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/forgot.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/signUp.vue')
    }
  ]
})

export default router

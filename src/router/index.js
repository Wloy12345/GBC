import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/members',
      name: 'Members',
      component: () => import('../views/MembersView.vue')
    },
  ]
})


export default router
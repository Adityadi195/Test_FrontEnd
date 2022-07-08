import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'food.IndexView',
    component: () => import('../views/food/IndexView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/Hero.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

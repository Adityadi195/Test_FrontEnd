import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: () => import('../views/IndexView.vue')
  },
  {
    path:'/create',
    name:'CreateView',
    component: () => import('../views/CreateView')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

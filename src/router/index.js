import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import('../views/Slider.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

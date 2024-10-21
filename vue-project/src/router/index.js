import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../components/Registration.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

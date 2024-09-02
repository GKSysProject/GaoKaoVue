import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import LoginView from '@/components/login/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
}) */

export default router

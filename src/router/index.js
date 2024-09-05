import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../components/ranking/RankingView')
    
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login/LoginView.vue')
  },
  {
    path: '/schoolMap',
    name: 'SchoolMap',
    component: () => import('../components/SchoolMap.vue')
  },
  {
    path: '/enrollmentPlan',
    component: () => import('../components/plan/EnrollmentPlan.vue')
  }
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

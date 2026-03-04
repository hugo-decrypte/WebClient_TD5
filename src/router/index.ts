import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Cagnottes.vue'
import NewCagnotteView from '../views/NewCagnotte.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cagnottes/new',
      name: 'new-cagnotte',
      component: NewCagnotteView,
    }
  ],
})

export default router

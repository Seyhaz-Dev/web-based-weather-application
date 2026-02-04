import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutViews.vue'
import ServicesView from '../views/ServicesView.vue'
import TravelView from '../views/TravelView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '../views/Dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },

    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/travel',
      name: 'travel',
      component: TravelView,  
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },

  ],
})

export default router

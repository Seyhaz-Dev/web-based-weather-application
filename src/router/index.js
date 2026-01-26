import { createRouter, createWebHistory } from 'vue-router'
import HeaderView from '../views/HeaderView.vue'
import ContactView from '../views/ContactView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'header',
      component: HeaderView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    }
  ],
})

export default router

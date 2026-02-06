import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutViews.vue'
import AccurateView from '@/views/AccurateView.vue'
import ExploreView from '@/views/ExploreView.vue'
import HistoryView from '@/views/HistoryView.vue'
import ValueView from '@/views/ValueView.vue'
import ServicesView from '../views/ServicesView.vue'
import TravelView from '../views/TravelView.vue'
import RegisterView from '@/views/RegisterView.vue'

import PeopleView from '@/views/PeopleView.vue'
// import HistoryView from '@/views/HistoryView.vue'


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
      path: '/accurate',
      name: 'accurate',
      component: AccurateView,
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/value',
      name: 'value',
      component: ValueView,
    },
    {
      path: '/People',
      name: 'people',
      component: PeopleView,
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView,
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

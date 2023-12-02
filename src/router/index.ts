import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TabsPage,
    redirect: '/homepage',
    children: [
      {
        path: '/homepage',
        name: 'homepage',
        component: () => import('@/views/Homepage.vue')
      },
      {
        path: 'private-tours',
        name: 'private-tours',
        component: () => import('@/views/PrivateTours.vue')
      },
      {
        path: 'dubrovnik-guide',
        name: 'dubrovnik-guide',
        component: () => import('@/views/DubrovnikGuide.vue')
      }
    ]
  },
  {
    path: '/tours/:slug',
    name: 'Tour',
    component: () => import('@/views/tour/Tour.vue')
  },
  {
    path: '/dubrovnik-guide/:slug',
    name: 'DubrovnikGuide',
    component: () => import('@/views/dubrovnik-guide/DubrovnikGuide.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

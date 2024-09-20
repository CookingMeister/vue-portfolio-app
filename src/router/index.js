import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: AboutView
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (Portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/PortfolioView.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    // this generates a separate chunk (Resume.[hash].js) for this route
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // this generates a separate chunk (Contact.[hash].js) for this route
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    // this generates a separate chunk (Error.[hash].js) for this route
    component: () => import('../views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

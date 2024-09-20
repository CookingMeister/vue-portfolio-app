import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ResumeSection from '../components/Resume.vue'
import ContactForm from '../components/Contact.vue'
import ErrorPage from '../components/Error.vue'

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
    component: ResumeSection
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

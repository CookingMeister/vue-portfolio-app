import { createRouter, createWebHistory } from 'vue-router'
import AboutComponent from '../components/About.vue'
import PortfolioSection from '../components/Portfolio.vue'
import ResumeSection from '../components/Resume.vue'
import ContactForm from '../components/Contact.vue'
import ErrorPage from '../components/Error.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioSection
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
  history: createWebHistory(),
  routes
})

export default router

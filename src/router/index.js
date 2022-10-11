import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductsView
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServicesView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: AboutView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

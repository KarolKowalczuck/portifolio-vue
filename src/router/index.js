import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/school',
      name: 'curriculo',
      component: () => import('../views/SchoolView.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/Sobre.vue')
    },

    {
      path: '/circo',
      name: 'circo',
      component: () => import('../components/Circo.vue')
    },
    {
      path: '/books',
      name: 'livros',
      component: () => import('../components/Books.vue')
    },
    {
      path: '/bakery',
      name: 'confeitaria',
      component: () => import('../components/Bakery.vue')
    }
  ]
})

export default router

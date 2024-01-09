import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/',
    name: 'homepage',
    meta: {layout: 'main'},
    component: () => import('@/views/HomePage.vue')
  },

  {
    path: '/basket',
    name: 'basket',
    meta: {layout: 'main'},
    component: () => import('@/views/Basket.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    meta: {layout: 'main'},
    component: () => import('@/views/FeedBack.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    meta: {layout: 'main'},
    component: () => import('@/views/Menu.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta: {layout: 'main'},
    component: () => import('@/views/Order.vue')
  },
  {
    path: '/towarpage/:id',
    name: 'towarpage',
    meta: {layout: 'main'},
    component: () => import('@/views/TowarPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/compat/app';
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
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/HomePage.vue')
  },

  {
    path: '/basket',
    name: 'basket',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/Basket.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/FeedBack.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/Menu.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/Order.vue')
  },
  {
    path: '/towarpage/:id',
    name: 'towarpage',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/TowarPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth)
  if(requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router

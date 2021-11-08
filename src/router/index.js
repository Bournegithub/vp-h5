import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: routes
})
const isLogin = false;
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !isLogin) {
    next('/login')
  } else {
    next()
  }
})

export default router
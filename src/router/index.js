import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import Cookies from 'js-cookie';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: routes,
});

router.beforeEach((to, from, next) => {
  let isLogin = false;
  const token = Cookies.get('token');
  if (token && token !== '') {
    isLogin = true;
  }
  if (to.meta.requireAuth && !isLogin) {
    next('/login');
  } else {
    next();
  }
});

export default router;
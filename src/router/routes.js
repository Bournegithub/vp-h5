import Home from '@views/home/index.vue';
import Login from '@views/login/index.vue';
import Err from '@views/error/index.vue';
import Err404 from '@views/error/404.vue';


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/error',
    component: Err
  },
  {
    path: '/404',
    component: Err404
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
]

export default routes;
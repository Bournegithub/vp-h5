import Home from '@views/home/index.vue';
import Login from '@views/login/index.vue';
import Err from '@views/error/index.vue';
import Err404 from '@views/error/404.vue';
import Example from '@views/example/index.vue';


const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/example',
    component: Example,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/login',
    component: Login,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/error',
    component: Err,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/404',
    component: Err404,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];

export default routes;
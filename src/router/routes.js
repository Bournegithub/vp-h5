import Home from '@views/home/index.vue';
import Login from '@views/login/index.vue';
import Err from '@views/error/index.vue';
import Err404 from '@views/error/404.vue';
import Example from '@views/example/index.vue';
import IconFont from '@views/example/iconfont.vue';
import Store from '@views/example/store.vue';
import Language from '@views/example/language.vue';
import Charts from '@views/example/charts.vue';
import ImitateFilter from '@views/example/imitate-filter.vue';
import Mixin from '@views/example/mixin.vue';
import Table from '@views/example/table.vue';
import Directive from '@views/example/directive.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/example',
    name: 'example',
    component: Example,
    meta: {
      requireAuth: false,
    },
    children: [
      {
        path: 'iconfont',
        name: 'iconfont',
        component: IconFont,
        meta: {
          requireAuth: false,
        },
      },
      {
        path: 'store',
        name: 'store',
        component: Store,
        meta: {
          requireAuth: false,
        },
      },
      {
        path: 'language',
        name: 'language',
        component: Language,
        meta: {
          requireAuth: false,
        },
      },
      {
        path: 'charts',
        name: 'charts',
        component: Charts,
        meta: {
          requireAuth: false,
        },
      },
      {
        path: 'mixin',
        name: 'mixin',
        component: Mixin,
        meta: {
          requireAuth: false,
        },
      },
      {
        path: 'imitateFilter',
        name: 'imitateFilter',
        component: ImitateFilter,
        meta: {
          requireAuth: false,
        },
      },
      {
        path: 'table',
        name: 'table',
        component: Table,
        meta: {
          requireAuth: false,
        },
      },
      {
        path: 'directive',
        name: 'directive',
        component: Directive,
        meta: {
          requireAuth: false,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/error',
    name: 'error',
    component: Err,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/404',
    name: '404',
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
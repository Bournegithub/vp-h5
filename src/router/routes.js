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
import Api401 from '@views/example/api401.vue';
import Uploader from '@views/example/uploader.vue';
import Download from '@views/example/download.vue';
import SetUp from '@views/example/setUp.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/example',
    name: 'example',
    component: Example,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: 'iconfont',
        name: 'iconfont',
        component: IconFont,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'store',
        name: 'store',
        component: Store,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'language',
        name: 'language',
        component: Language,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'charts',
        name: 'charts',
        component: Charts,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'mixin',
        name: 'mixin',
        component: Mixin,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'imitateFilter',
        name: 'imitateFilter',
        component: ImitateFilter,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'table',
        name: 'table',
        component: Table,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'directive',
        name: 'directive',
        component: Directive,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'api401',
        name: 'api401',
        component: Api401,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'uploader',
        name: 'uploader',
        component: Uploader,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'download',
        name: 'download',
        component: Download,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: 'setUp',
        name: 'setUp',
        component: SetUp,
        meta: {
          requireAuth: true,
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
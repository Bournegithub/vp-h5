import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: routes,
});

export default router
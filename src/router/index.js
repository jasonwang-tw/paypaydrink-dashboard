import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'home',
    component: index,
  },
  // {
  //   path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/about.vue'),
  // },
  {
    path: '/profile',
    component: () => import('../views/profile.vue'),
  },
  {
    path: '/favorites',
    component: () => import('../views/favorites.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',  //開發
  mode: 'hash',  //gh-page
  routes,
});

export default router;

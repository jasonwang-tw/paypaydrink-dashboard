import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'Home',
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
  // {
  //   path: '/content',
  //   component: () => import('../views/content.vue'),
  // },
];

const router = new VueRouter({
  // mode: 'history',  //開發
  mode: 'hash',  //gh-page
  routes,
});

export default router;

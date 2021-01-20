import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home,
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
    path: '/content',
    component: () => import('../views/content.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/newaccount',
    component: () => import('../views/newAccount.vue'),
  },
  {
    path: '/verification',
    component: () => import('../views/verification.vue'),
  },
  {
    path: '/forgetPassword',
    component: () => import('../views/forgetPassword.vue'),
  },
  {
    path: '/resetPassword',
    component: () => import('../views/resetPassword.vue'),
  },
  {
    path: '/terms',
    component: () => import('../views/terms.vue'),
  },
  {
    path: '/privacy',
    component: () => import('../views/privacy.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',  //開發
  mode: 'hash',  //gh-page
  routes,
});

export default router;

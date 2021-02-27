import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: index,
  },
  {
    path: '/profile',
    component: () => import('../views/profile.vue'),
  },
  {
    path: '/favorites',
    component: () => import('../views/favorites.vue'),
  },
  {
    path: '/stock',
    component: () => import('../views/stock.vue'),
  },
  {
    path: '/order',
    component: () => import('../views/order.vue'),
  },
  {
    path: '/bank_creditCard',
    component: () => import('../views/bank_creditCard.vue'),
  },
  {
    path: '/notice',
    component: () => import('../views/notice.vue'),
  },
  {
    path: '/drinkShop',
    component: () => import('../views/drinkShop.vue'),
  },
  {
    path: '/search',
    component: () => import('../views/search.vue'),
  },
  {
    path: '/products',
    component: () => import('../views/products.vue'),
    redirect: '/products/list',
    children: [
      {
        path: 'list',
        component: () => import('../views/products/list.vue'),
      },
      {
        path: 'page',
        component: () => import('../views/products/page.vue'),
      },
    ],
  },
  {
    path: '/cart',
    component: () => import('../views/cart.vue'),
    redirect: '/cart/view',
    children: [
      {
        path: 'view',
        component: () => import('../views/cart/view.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/cart/checkout.vue'),
      },
    ],
  },
  {
    path: '/free_drink',
    component: () => import('../views/freeDrink.vue'),
    redirect: '/free_drink/portal',
    children: [
      {
        path: 'portal',
        component: () => import('../views/freedrink/portal.vue'),
      },
      {
        path: 'edit',
        component: () => import('../views/freedrink/edit.vue'),
      },
    ],
  },
  {
    path: '/notice',
    component: () => import('../views/notice.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',  //gh-page
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

export default router;

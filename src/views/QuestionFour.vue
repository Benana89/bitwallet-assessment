<template>
  <div style="text-align: left">
    <h3>Question 4:</h3>
    <div>
      There is a vue project that requires 3 portal entrances: 1. example.com/
      2. example.com/merchant/login & merchant.example.com/login 3.
      example.com/user/login & user.example.com/login please further optimize
      the following code. (If you think optimization is not needed or not
      familiar with vue, you may not answer this question.):
    </div>
    <pre>
<code>
   
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import store from './store';
import UserLogin from './components/UserLogin.vue';
import MerchantLogin from './components/MerchantLogin.vue';
import GeneralHome from './components/GeneralHome.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/user/login', component: UserLogin },
  { path: '/merchant/login', component: MerchantLogin },
  { path: '/', component: GeneralHome },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  // Example navigation guard logic
  // Check if the user is authenticated before navigating to /user/login
  if (to.path === '/user/login' && !isAuthenticated()) {
    next('/'); // Redirect to the general login page
  } else {
    next();
  }
});

function isAuthenticated() {
  // Implement your authentication logic here
  return true;
}

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
</code>
</pre>
    <h3>Answer:</h3>
    <div>
      Use lazy loading route to optimize the code. Load the components when the
      route is visited.
    </div>
    <pre>
<code>
    import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import store from './store';
import UserLogin from './components/UserLogin.vue';
import MerchantLogin from './components/MerchantLogin.vue';
import GeneralHome from './components/GeneralHome.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/user/login', component: () => import('./components/UserLogin.vue') },
  { path: '/merchant/login', component: () => import('./components/MerchantLogin.vue') },
  { path: '/', component: () => import('./components/GeneralHome.vue') },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  // Example navigation guard logic
  // Check if the user is authenticated before navigating to /user/login
  if (to.path === '/user/login' && !isAuthenticated()) {
    next('/'); // Redirect to the general login page
  } else {
    next();
  }
});

function isAuthenticated() {
  // Implement your authentication logic here
  return true;
}

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
    </code>
</pre>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

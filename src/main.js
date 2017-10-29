// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueSweetAlert from 'vue-sweetalert';
import Toasted from 'vue-toasted';
import App from './App';
import router from './router';

window.NProgress = require('nprogress');

window.NProgress.configure({ showSpinner: false, trickleSpeed: 1000, easing: 'ease', speed: 500, minimum: 0.3 });

Vue.use(Toasted, { position: 'bottom-right', duration: 3000 });
Vue.use(VueSweetAlert);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import tHead from './components/head.vue'
import taurus from "aid-taurus-desktop"
import 'aid-elements/dist/css/aid.min.css'
Vue.config.productionTip = false;
Vue.use(taurus);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App}
})

/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import App2 from './App2'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
new Vue({
  el: '#app-2',
  router,
  components: { App2 },
  data: {
    messagess: 'You Loaded this page on' + new Date().toLocaleString()
  }
})

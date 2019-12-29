import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import App from './App.vue'
import router from './router.js'
import store from './store.js'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueHead)

new Vue({
  render: h => h(App),
  router: router,
  store : store
}).$mount('#app')

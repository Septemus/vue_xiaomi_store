import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css' //引用bootstrap的样式
import 'bootstrap/dist/js/bootstrap.min.js' //引用bootstrap的js
import 'bootstrap/dist/js/bootstrap.bundle.min.js' //引用bootstrap的js
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(VueRouter)

import 'font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false

var vue=new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
console.log(vue)
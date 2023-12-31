import "@babel/polyfill" 
// import Es6Promise from 'es6-promise'
import Vconsole from 'vconsole'
new Vconsole()

// Es6Promise.polyfill()


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
import { BvModal } from 'bootstrap-vue'
// import SvgIcon from '@/components/IconSvg.vue'
import '@/assets/iconfont/iconfont.css'
// Vue.component('svg-icon', SvgIcon);
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.component('BvModal', BvModal)
import 'font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false
Vue.config.errorHandler=(err)=>{
  console.log(err)
}
var vue=new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
store.$vue=vue
console.log(vue)
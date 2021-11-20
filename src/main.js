import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from "@/components/TypeNav";
import Pagination from "@/components/Pagination";
import "./public/swiper" //加载swiper组件
import "./mock/mockServer"
import "./public/element" //加载swiper组件

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

//注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')

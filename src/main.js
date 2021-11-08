import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from "@/components/TypeNav";
import "./public/swiper" //加载swiper组件
import "./mock/mockServer"
//注册全局组件
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

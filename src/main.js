import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import routes from './routers'

Vue.use(VueRouter)

//const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' };
//const secondcomponent = {  template: '<div><h2>我是第 2 个子页面</h2></div>'  };
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
});
/* eslint-disable no-new */
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

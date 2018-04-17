// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/**
*注册全局过滤器
*/
import filters from './filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

/**
*引入状态管理，下面搭载到全局，跟路由搭载方式一样
*/
import store from './store'


/**
*引入数据交互方式
*/
import axios from 'axios'
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:3333';//基本域名

/**
*路由控制
*进入路由之后
*进入路由之前
*/
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
router.beforeEach((to, from, next) => {
  next()
  /*if (to.matched.some(m => m.meta.auth)) {
    if (store.state.loginState) {
      next()
    } else {
      next({path: '/login', query: {Rurl: to.fullPath}})
    }
  } else {
    next()
  }*/
});

//搭载common使用方法
// 全局函数
import common from './common';
Vue.use(common);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  components: { App },
  template: '<App/>'
})

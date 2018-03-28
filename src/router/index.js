import Vue from 'vue'
import Router from 'vue-router'
import hai from '@/components/swiperOut'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'hai',
      component: hai
    }
  ]
})

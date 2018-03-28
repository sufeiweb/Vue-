import Vue from 'vue'
import Router from 'vue-router'
import hai from '@/components/hai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hai',
      component: hai
    }
  ]
})

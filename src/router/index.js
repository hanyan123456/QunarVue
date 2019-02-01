import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Home',
    component: resolve =>require(['../pages/home/home.vue'],resolve)
  }, {
    path: '/city',
    name: 'City',
    component: resolve =>require(['../pages/city/city.vue'],resolve)
  }],
  mode: 'history',
})

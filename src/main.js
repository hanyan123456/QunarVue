import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './mock/index'
import  './style/reset.css'
import store from './store'
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

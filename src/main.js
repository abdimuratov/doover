import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/styles/main.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

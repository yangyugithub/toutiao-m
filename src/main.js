import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'


import Vant from 'vant'

import { Lazyload } from 'vant'

import 'amfe-flexible'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(Lazyload, {
  lazyComponent: true,
})
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

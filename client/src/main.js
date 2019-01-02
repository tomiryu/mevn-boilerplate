import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store.js'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false

Vue.use(Vuetify)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
  template: '<App/>'
}).$mount('#app')

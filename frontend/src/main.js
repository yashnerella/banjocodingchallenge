import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import componentRegistration from './componentRegistration'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.axios = require('axios')
window.axios.defaults.headers.common = {
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest'
}
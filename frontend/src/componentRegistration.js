import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import Signup from './components/Signup'
import Signin from './components/Signin'

Vue.use(BootstrapVue)
Vue.component('signup', Signup)
Vue.component('signin', Signin)

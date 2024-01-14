import Vue from 'vue'
import Bootstrap from 'bootstrap'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.Bootstrap = Bootstrap
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

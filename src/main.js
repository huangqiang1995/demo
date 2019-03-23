import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import {
  axios
} from '@/api/axios.js'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

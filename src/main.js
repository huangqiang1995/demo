import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import { axios } from '@/api/axios.js'

import { Button, Cell,Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Toast.name, Toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

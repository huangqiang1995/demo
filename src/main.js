import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import {
  axios
} from '@/api/axios.js'
import 'mint-ui/lib/style.css'
import '@/assets/css/my-mint.css'
import '@/api/directive.js'
import {
  Header,
  Tabbar,
  TabItem
} from 'mint-ui'

import '@/assets/font/iconfont.css'
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Header.name, Header)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

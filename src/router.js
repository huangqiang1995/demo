import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import News from './views/News.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    meta: {
      index: 0
    },
    component: Home
  }, {
    path: '/list',
    name: 'list',
    meta: {
      index: 1
    },
    component: List
  }, {
    path: '/news',
    name: 'news',
    meta: {
      index: 2
    },
    component: News
  }, {
    path: '/user',
    name: 'user',
    meta: {
      index: 3
    },
    component: User
  }]
})

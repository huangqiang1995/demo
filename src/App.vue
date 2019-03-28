<template>
  <div id="app">
    <mt-header fixed
               title="lib-flexible"></mt-header>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <mt-tabbar id='tab'>
      <mt-tab-item id="tab1">
        <router-link to='/home'>home</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <router-link to='/news'>news</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <router-link to='/list'>list</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <router-link to='/user'>user</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {// 使用watch 监听$router的变化
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

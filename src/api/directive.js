import Vue from 'vue'

Vue.directive('scroll', function (el, binding, vnode) {
  el.onscroll = function () {
    var scrollTop = this.scrollTop || this.scrollTop
    console.log(scrollTop)
  }
})

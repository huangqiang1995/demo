<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  created () {
    Toast({
      message: '提示',
      position: 'bottom',
      duration: 5000
    })
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

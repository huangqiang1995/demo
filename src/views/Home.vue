<template>
  <div>

  </div>
</template>

<script>
export default {
  created () {
    this.$post('/men', {
      name: '王',
      docType: 'pson',
      requestName: 'name02'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style>
</style>

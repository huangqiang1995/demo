<template>
  <div class='home'>
    <!-- <input class="js_upFile cover1"
           type="file"
           name="cover"
           accept="image/*"
           capture="camera"
           multiple
           @change='loadImg($event)' />
    <img class='img'
         src=""
         alt=""> -->
    <p class='p'>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
    <p>item</p>
  </div>
</template>

<script>
export default {
  created () {
    // this.$post('/men', {
    //   name: '王',
    //   docType: 'pson',
    //   requestName: 'name02'
    // }).then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    loadImg (ev) {
      var obj = ev.target
      var img = document.getElementsByClassName('img')[0]
      var fr = new FileReader()
      fr.readAsDataURL(obj.files[0])
      fr.onload = function () {
        img.src = this.result
      }
    }
  }
}
</script>

<style>
.home {
  padding-top: 100px;
  padding-bottom: 100px;
  height: 100%;
  overflow: auto;
}
.p {
  font-size: 16px;
}
</style>

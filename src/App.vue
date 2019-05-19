<template>
  <div id="app">
    <navbar />
    <div class="cont">
      <!-- <h1>hello world</h1> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import navbar from 'components/navbar'
export default {
  components: {
    navbar
  }
}
</script>
<style lang="stylus">
#app
  color #2c3e50
  width 80%
  margin 0 auto
#nav
  padding 30px
  background-color #ccc
  a
    color #2c3e50
    display block
    line-height 30px
    &.router-link-exact-active
      color #42b983
</style>

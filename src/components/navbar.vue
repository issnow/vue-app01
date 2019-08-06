<template>
  <div class="container">
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/class-style">class-style</router-link>
    <router-link to="/debounce">debounce</router-link>
    <router-link to="/swiper">swiper</router-link>
    <router-link to="/input">input</router-link>
    <router-link to="/flex">flex布局</router-link>
    <router-link to="/grid">grid布局</router-link>
    <router-link to="/map">map</router-link>
    <router-link to="/user/1003">1003</router-link>
    <router-link to="/user/1004">1004</router-link>
  </div>
</template>

<script>
import 'echarts/map/js/china.js'
export default {
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus">
.container
  display flex
  justify-content flex-start
  align-items center
  a
    margin-right 20px
    background-color #ccc
    padding 10px
    border-radius 3px
    color #454545
</style>

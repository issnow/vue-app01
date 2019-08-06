<template>
  <div class="container">
    home
    <div @click="handleClick">去user</div>
    <router-link :to="{name: 'user', params: {id: 1008, age: 77}}">路由组件传参布尔模式</router-link> <br>
    <router-link :to="{name: 'profile'}">路由组件传参对象模式</router-link> <br>
    <router-link :to="{name: 'hobby', params: {color: 'blue', weather: 'rain'}}">路由组件传参函数模式</router-link>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$router.push({name: 'user',params: {id: 1005}})
    }
  },
}
</script>

<style scoped lang="stylus"></style>

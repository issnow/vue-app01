<template>
  <div>
    <h3>路由组件传参函数模式</h3>
    <div>color: {{color}}</div>
    <div>weather: {{weather}}</div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: ['weather', 'color'],
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped lang="stylus">

</style>

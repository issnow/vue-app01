<template>
  <div>
    <router-link to="/about" tag='el-button' exact>about1</router-link>
    <!-- <router-link to="about1">about1</router-link> -->
    <router-link to="/about/about2" tag="el-button" exact>about2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
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
.one
  color red
</style>

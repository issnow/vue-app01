<template>
  <div class="container">
    hello debounce
  </div>
</template>

<script>
import { debounce } from 'common/js/util.js'
export default {
  components: {},
  mounted() {
    window.addEventListener(
      'resize',
      debounce(() => {
        console.log(123)
      }, 300)
    )
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus">
.container
  color #008000
</style>

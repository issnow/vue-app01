<template>
  <div class="container">
    <div class="wrapper">
      <p
        v-for="e in 6"
        :key="e"
        :style="{ backgroundColor: bgColor[(e - 1) % 5] }"
      >
        {{ e }}
      </p>
    </div>
    <div class="one point">
      <p></p>
    </div>
    <div class="two point">
      <p></p>
      <p></p>
    </div>
    <div class="three point">
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="four point">
      <div>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bgColor: ['#1890FF', '#1EA18F', '#E49643', '#008000', '#bfa']
    }
  }
}
</script>

<style scoped lang="stylus">
.container
  height 2000px
  .point
    display flex
    width 300px
    height 300px
    border 1px solid #000
    p
      width 100px
      background-color #1890FF
      border-radius 50%
  .six

  .five
    justify-content space-between
    div
      display flex
      flex-direction column
      justify-content space-between
    &>p
      align-self center
  .three
    justify-items flex-start
    justify-content space-between
    :nth-child(2)
      align-self center
    :nth-child(3)
      align-self flex-end
    p
      height 33.33%
  .four
    flex-direction column
    div
      flex 1
      display flex
      justify-content space-between
      p
        height 66.66%
    :last-child
      align-items flex-end
  .two
    flex-direction column
    align-items center
    justify-content space-between
    p
      height 33.33%
  .one
    justify-content center
    align-items center
    p
      height 33.33%
  .wrapper
    height 300px
    background-color #ccc
    display flex
    justify-content space-between
    flex-wrap wrap
    // align-items center
    align-content space-evenly
    p
      width 100px
      height 100px
      // &:nth-of-type(1)
        // background-color red
      &:nth-of-type(3)
        order -1
</style>

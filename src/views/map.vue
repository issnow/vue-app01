<template>
  <div>
    <el-button @click="showCom(0)">content1</el-button>
    <el-button @click="showCom(1)">content2</el-button>
    <keep-alive>
      <component :is="cur"></component>
    </keep-alive>
    <content0 ref="content"></content0>
    <el-button type="primary" @click="click">click</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur: ''
    }
  },
  mounted() {
    // console.log(this.$root)
    this.showCom()
  },
  methods: {
    showCom(v = 0) {
      this.cur = 'content' + v
    },
    click() {
      console.log(this.$refs.content)
      this.$refs.content.print()
    }
  }
}
</script>

<style lang="scss" scoped></style>

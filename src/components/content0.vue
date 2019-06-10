<template>
  <div>
    <h1>content0</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  // name: 'content0'
  created() {
    console.log(this.$parent)
    console.log('init')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick() {},
    print() {
      console.log('content0组件中的方法')
    }
  }
}
</script>

<style lang="scss" scoped></style>

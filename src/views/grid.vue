<template>
  <div>
    grid
    <el-row>
      <el-col :span="4">
        <span>hello-world</span>
      </el-col>
      <el-col :span="5">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="success">click</el-button>
      </el-col>
      <el-col :span="6">
        <demo></demo>
      </el-col>
    </el-row>

    <helloWorld />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      num: 0
    }
  },
  mounted() {
    // this.getList()
  },
  watch: {
    input: {
      handler: 'getList',
      immediate: true
    }
    // input(newValue, oldValue) {
    //   this.getList()
    // }
  },
  methods: {
    getList() {
      this.num++
      console.log(this.num)
    }
  }
}
</script>

<style lang="stylus" scoped></style>

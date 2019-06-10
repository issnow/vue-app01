<template>
  <div class="container">
    <!-- 表单 -->
    <input
      type="text"
      placeholder="input请输入"
      v-model="input"
      @input="edit"
    />
    <input type="radio" name="radio" value="a" v-model="radio" />a
    <input type="radio" name="radio" value="b" v-model="radio" />b
    {{ radio }}

    <h4>basicInput</h4>
    <basic-input v-model="check"></basic-input>
    {{ check }}<br />
    <label-input
      @focus.native="onFocus"
      label="测试"
      value=""
      @input="alert(1)"
    ></label-input>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      input: '',
      radio: '',
      radio2: '',
      check: true
    }
  },
  methods: {
    edit() {
      console.log(this.input)
    },
    onFocus() {
      console.log('focus')
    }
  }
}
</script>

<style scoped lang="stylus"></style>

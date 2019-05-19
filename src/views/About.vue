<template>
  <div class="container">
    about <br />
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <div v-if="seen">现在你看到我了</div>
    <ol>
      <li v-for="(e, i) in todos" :key="i">{{ e }}</li>
    </ol>
    <p>{{ input01 }}</p>
    <el-input v-model="input01" :width="100"></el-input>
    <el-button type="primary" @click="reverse" plain>逆转消息</el-button>
    <ol>
      <todo-item v-for="(e, i) in groceryList" :key="i" :todo="e"></todo-item>
    </ol>
    <!-- 动态参数 -->
    <input type="text" @[event]="dothing" />
    <p>{{ msg01 }}</p>
    <p>{{ revMsg01 }}</p>
  </div>
</template>

<script>
import todoItem from 'components/todo-item'
export default {
  components: { todoItem },
  data() {
    return {
      // 动态参数
      event: 'blur' /* 事件名可以随便取 */,
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      msg01: 'hello vue.js',
      input01: '',
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
  },
  computed: {
    revMsg01() {
      return this.msg01
        .split('')
        .reverse()
        .join('')
    }
  },
  mounted() {
    window.addEventListener(
      'resize',
      this._.debounce(() => {
        console.log('scroll')
      }, 1000)
    )
  },
  methods: {
    dothing() {
      console.log('onfocus')
    },
    reverse() {
      this.msg01 = this.msg01
        .split('')
        .reverse()
        .join('')
    }
  }
}
</script>

<style scoped lang="stylus"></style>

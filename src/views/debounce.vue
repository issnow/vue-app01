<template>
  <div class="container">
    hello debounce<br />
    <el-button type="primary" size="mini" @click="_increment">+</el-button>
    <span>{{ count }}</span>
    <el-button type="primary" size="mini" @click="_decrement">-</el-button>

    <!-- <h3>买过的手机：</h3>
    <div>{{ doneTodos }}</div>
    <h3>数量：{{ doneTodosCount }}</h3>
    <h3>query</h3>
    <div>{{ todoId }}</div> -->
    <el-button type="primary" @click="getList">获取list</el-button> 
  </div>
</template>

<script>
import { debounce } from 'common/js/util.js'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
  },
  computed: {
    // @count 老的写法
    // count() {
    //   return this.$store.state.count
    // }

    // 新的写法
    // ...mapState({ count: state => state.count })

    // 还可以简化 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    // ...mapState(['count']),
    // todo() {
    //   return this.$store.getters.doneTodos
    // },
    // todoCount() {
    //   return this.$store.getters.doneTodosCount
    // },
    // todoId() {
    //   return this.$store.getters.getTodoById(2)
    // },
    // ...mapGetters(['doneTodos', 'doneTodosCount'])
    ...mapState('moduleA', ['count'])
  },
  methods: {
    _increment() {
      // this.$store.commit('increment', { amount: 3 })
      this.increment({ amount: 2 })
    },
    _decrement() {
      // this.$store.commit('decrement', 2)
      this.decrement(4)
    },
    // ...mapMutations(['increment', 'decrement']),
    ...mapActions('moduleB',['getList']),
    ...mapMutations('moduleA', ['increment', 'decrement'])
  }
}
</script>

<style scoped lang="stylus">
.container
  color #008000
</style>

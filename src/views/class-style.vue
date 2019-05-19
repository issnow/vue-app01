<template>
  <div class="container">
    style <br />
    <el-button @click="click">click</el-button>
    <div :class="{ active: isActive }">
      hello world
    </div>
    <div :class="className">hello world</div>
    <div :class="classObj">hello guocheng</div>
    <!-- v-bind class可直接用于组件上 -->
    <class-com :class="{ active: isActive }"></class-com>

    <template v-if="showLi">
      <ul>
        <li v-for="e in 3" :key="e">{{ e }}</li>
      </ul>
    </template>
    <p v-else>oh! no</p>

    <!-- <div v-for="(e, i) in 10" :key="e" v-if="e % 2">{{ e }}</div> -->

    <hr />
    <form @submit.prevent="addNewTodo">
      <label for="input">
        add new item
      </label>
      <input type="text" id="input" v-model="newTodo" />
      <button>add</button>
      <ul>
        <li
          is="todo-item"
          v-for="(e, i) in todos"
          :key="i"
          :todo="e.title"
          @remove="todos.splice(i, 1)"
        >
          <!-- <template v-slot="txt">
            <p>ahh</p>
            <div>some context</div>
          </template> -->
        </li>
      </ul>
    </form>

    <!-- style写法 -->
    <div :style="style">v-bind:style</div>
  </div>
</template>

<script>
import classCom from 'components/classCom'
import todoItem from 'components/todo-item'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { classCom, todoItem },
  data() {
    return {
      style: {
        color: 'red',
        fontSize: '20px'
      },
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      showLi: false,
      isActive: true,
      // 类名对象的定义可以拿出来
      className: {
        bigFont: true
      },
      newTodo: ''
    }
  },
  computed: {
    // class类名使用计算属性处理。这是一个常用且强大的模式
    classObj() {
      return {
        active: this.isActive,
        bigFont: this.className.bigFont
      }
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.newTodo
      })
      this.newTodo = ''
    },
    click() {
      this.isActive = !this.isActive
      this.className.bigFont = !this.className.bigFont
    }
  }
}
</script>

<style scoped lang="stylus">
.active
  font-style italic
.bigFont
  font-size 40px
</style>

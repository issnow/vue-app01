import Vue from 'vue'
import Vuex from 'vuex'
// Vuex 自带一个日志插件用于一般的调试
import createLogger from 'vuex/dist/logger'
import * as api from 'request/api';
Vue.use(Vuex)
// 用于开发调试
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'iphone', done: true },
      { id: 2, text: 'sansang', done: false },
      { id: 3, text: 'hauwei', done: false },
      { id: 4, text: 'xiaomi', done: false },
      { id: 5, text: 'redmi', done: true },
      { id: 6, text: 'vivo', done: true }
    ],
    list: []
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(e => e.done)
    },

    /** 每个getters提供两个参数 state,getters
     * @state store中的state
     * @getters 指getters对象
     */
    doneTodosCount: (state, getters) => {
      // console.log(state, getters)
      return getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(e => e.id == id)
    }
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    },
    cecrement(state, n) {
      state.count -= n
    },
    setList(state, payload) {
      state.list = payload.data
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    async getList({ commit, state }) {
      try {
        var res = await api.getTable()
        commit('setList', res)
      } catch (err) {
        
      }
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

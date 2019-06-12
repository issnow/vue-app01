export default {
  // 命名空间 模块化vuex 强无敌
  namespaced: true,
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    },
    decrement(state, payload) {
      state.count -= payload
    }
  },
  actions: {}
}

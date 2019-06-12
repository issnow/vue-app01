import * as api from 'request/api';
export default {
  // 命名空间 强无敌
  namespaced: true,
  state: {
    list: []
  },
  getters: {},
  mutations: {
    setList(state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList({ commit, state }) {
      try {
        var res = await api.getTable()
        console.log(res)
        commit('setList', res)
      } catch (err) {
        
      }
    }
  }
}

import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
import moduleA from './modules/moduleA';
import moduleB from './modules/moduleB';
export default new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})

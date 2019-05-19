import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 公共样式
import 'common/stylus/main.styl'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// lodash
import _ from 'lodash'
Vue.prototype._ = _

// swiper
import 'swiper/dist/css/swiper.min.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
 * （无需注册组建）直接使用
 *  注意：1.components中的组件不能以-连接
 *       2.建议驼峰式命名vue文件(大驼峰、小驼峰都可以)
 */
import 'components/global.js'

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

// echarts
import echarts from 'echarts'

// font-awesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

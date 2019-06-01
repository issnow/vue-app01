import vue from 'vue'
import router from 'vue-router'
vue.use(router)
export default new router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('views/home')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('views/about')
    },
    {
      path: '/class-style',
      name: 'class-style',
      component: () => import('views/class-style')
    },
    {
      path: '/debounce',
      name: 'debounce',
      component: () => import('views/debounce')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('views/swiper')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('views/input')
    },
    {
      path: '/flex',
      name: 'flex',
      component: () => import('views/flex')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('views/grid')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('views/map')
    }
  ]
})

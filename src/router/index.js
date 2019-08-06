import vue from 'vue'
import router from 'vue-router'
vue.use(router)
export default new router({
  linkActiveClass: 'one',
  mode: 'history',
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
      component: () => import('views/about/about'),
      children: [
        {
          path: '',
          name: 'about1',
          component: ()=>import('views/about/about1')
        },
        {
          path: 'about2',
          component: ()=>import('views/about/about2')
        }
      ]
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
      path: '/user/:id/:age',
      name: 'user',
      component: () => import('views/user'),
      /**
       * 路由组件传参 通过 props 解耦 三种模式
       * @布尔模式 如果 props 被设置为 true，route.params 将会被设置为组件属性。(推荐使用)
       * @对象模式  
       * @函数模式
       */
      props: true,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ()=>import('views/profile'),
      /**
       * 路由组件传参 通过 props 解耦 三种模式
       * @对象模式  当 props 是静态的时候有用 (不推荐使用)
       */
      props: {
        name: 'laodeng',
        age: 22
      }
    },
    {
      path: '/hobby/:color/:weather',
      name: 'hobby',
      component: ()=>import('views/hobby'),
      /**
       * 路由组件传参 通过 props 解耦 三种模式
       * @函数模式  你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等(不推荐)
       */
      props: route=>({
        color: route.params.color,
        weather: route.params.weather
      })
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('views/map')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('views/login')
    },
    {
      path: '/drag',
      name: 'drag',
      component: ()=>import('views/drag')
    }
  ]
})

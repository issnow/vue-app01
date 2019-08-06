<template>
  <div>
    <h3>user组件</h3>
    <div>id:{{id}}</div>
    <div>age: {{age}}</div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: ['id', 'age'],
  data() {
    return {

    }
  },
  computed: {
    // id(){
    //   return this.$route.params.id
    // }
  },
  watch: {
    // '$route'(to,from) {
    //   console.log(to, from)
    // }
  },
  created() {

  },
  mounted() {
    // console.log(this.$route)
    // console.log(this.$router)
  },
  methods: {

  },
  // beforeRouteUpdate(to, from, next) {
  //   // console.log(to, from)
  //   console.log(this, 'beforeRouteUpdate')
  //   next()
  // },
  beforeRouteEnter(to, from, next) {
    console.log('获取数据。。。。')
    setTimeout(() => {
      
      next(vm=>{
        console.log(vm.$route)
      })
    }, 2000);
    // next(vm=>{
    //   console.log(vm.$route)
    // })
  },
  beforeRouteLeave (to, from, next) {
    // console.log(this, 'beforeRouteLeave')
    // next()
    if(confirm('确认离开吗？')){
      next()
    }else {
      next(false)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>

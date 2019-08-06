<template>
  <div>
    <h3>about2</h3>
    <ul>
      <router-link v-for="(e,i) in users" :key="i" tag="li" :to="'/user/'+e.id">
        <a>user{{e.id}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      users: [
        {
          id: 1001,
          name: 'lily'
        },
        {
          id: 1002,
          name: 'apple'
        },
        {
          id: 1003,
          name: 'orange'
        },
      ]
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped lang="stylus">

</style>

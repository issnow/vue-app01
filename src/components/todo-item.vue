<template>
  <li class="container">
    {{ todo }}
    <button @click="$emit('remove')">remove</button>
    <slot name="txt"></slot>
  </li>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  props: {
    todo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="stylus"></style>

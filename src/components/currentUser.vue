<template>
  <div>
    <h3>current-user组件</h3>
    <slot :user="user"></slot> <br />
    <slot name="age" :user="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'lily',
        age: 18
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

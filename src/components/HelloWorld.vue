<template>
  <div>
    小写
    <div :style="obj">
      hello world
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        background: '#ccc',
        width: '300px',
        height: '300px',
        border: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
div {
  align-items: '';
  justify-content: space-around;
}
</style>

<template>
  <div>
    <input
      type="checkbox"
      :checked="check"
      @change="$emit('changed', $event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'check',
    event: 'changed'
  },
  props: {
    check: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus" scoped></style>

<template>
  <label v-show="label">{{ label }}</label>
  <input :type="type" :placeholder="placeholder" />
</template>

<script lang="js">
export default {
  name: "Input",
  props: {
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>

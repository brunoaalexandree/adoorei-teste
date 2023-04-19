<template>
  <label v-show="label">{{ label }}</label>
  <input :type="type" :placeholder="placeholder" :style="style" @input="onChangeText" />
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    style: String,
  },
  methods: {
    onChangeText(event) {
      this.$emit('inputChanged', event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>

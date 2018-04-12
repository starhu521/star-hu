<template>
  <canvas ref="canvas" class="canvas">
  </canvas>
</template>

<script>
import S from './S.js'

export default {
  name: 'ShapShifter',
  props: {
    contents: {
      type: null,
      required: false,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    S.init()
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .canvas
    display inline-block
</style>



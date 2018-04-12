<template>
  <canvas class="canvas">
  </canvas>
</template>

<script>
import S from './index'

export default {
  name: 'ShapShifter',
  props: {
    text: {
      type: null,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      drawing: {
        canvas: null,
        context: null,
        renderFn: null,
        requestFrame: window.requestAnimationFrame || 
                      window.webkitRequestAnimationFrame ||
                      window.mozRequestAnimationFrame ||
                      window.oRequestAnimationFrame ||
                      window.msRequestAnimationFrame ||
                      function(callback) { window.setTimeout(callback, 1000/60) }
      }
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



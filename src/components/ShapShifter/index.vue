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
    },
    showWhole: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    S.init()
  },
  watch: {
    contents: function(val, oldval) {
      val += ''
      S.UI.simulate(val[val.length-1])
    },
    showWhole: function(val, oldval) {
      if(val === true) {
        S.UI.simulate(this.contents)
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .canvas
    display inline-block
</style>



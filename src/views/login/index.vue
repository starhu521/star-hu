<template>
  <div class="login-container">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particleNumber="80"
      shapeType="circle"
      :particleSize="1"
      linesColor="#dedede"
      :linesWidth="1"
      :linesLinked="true"
      :linesOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.login-container
  position fixed
  background-image url('~@/assets/login/login-bg.jpg')
  background-size cover
  top 0
  left 0
  width 100%
  height 100%
</style>

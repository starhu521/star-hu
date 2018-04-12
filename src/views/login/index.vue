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
    <el-form
      :model="loginForm"
      status-icon
      :rules="loginRules"
      ref="loginForm"
      id="loginForm">
      <el-form-item prop="name">
        <el-input placeholder="请输入用户名" v-model="loginForm.name" auto-complete="off">
          <i slot="prefix" class="icon iconfont-star icon-star-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" type="password" v-model="loginForm.password" auto-complete="off">
          <i slot="prefix" class="icon iconfont-star icon-star-mima"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('loginForm')">登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    const checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入账号'))
      }
      callback()
    }
    const checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      }
      callback()
    }
    return {
      loginForm: {
        name: '',
        password: ''
      },
      loginRules: {
        name: [
          { required: true, trigger: 'blur', validator: checkUserName }
        ],
        password: [
          { required: true, trigger: 'blur', validator: checkPassword }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.$router.push({ path: '/cool' })
        } else {
          this.$message({
            message: '还不是时候',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-container
    position fixed
    background-image url('~@/assets/login/login-bg.jpg')
    background-size cover
    width 100%
    height 100%
    min-width 350px
  #loginForm
    position absolute
    top 50%
    left 50%
    width 350px
    padding 35px 35px 15px 35px
    margin 120px auto
    transform translate(-50%, -30%)
  .el-input >>> input
    height 47px
    background-color #47474aab
    color #ffffff
  button
    background-color #47474aab
    color #ffffff
    border-color #000000
    width 100%
  button:hover
    background-color #000000
  .el-form-item
    margin 25px auto
</style>

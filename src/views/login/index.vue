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
      label-width="100px"
      id="loginForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录
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
  top 0
  left 0
  width 100%
  height 100%
  min-width 350px
#loginForm
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -30%)
  .el-input
    height 47px
    width 85%
    .input
      height 47px
</style>

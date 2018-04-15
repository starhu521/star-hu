<template>
  <el-container>
      <el-header>
          <el-menu
            mode="horizontal"
            class="el-menu-demo"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse-transition="true">
            <el-menu-item index="1">社交</el-menu-item>
            <el-menu-item index="2">博客</el-menu-item>
            <el-submenu index="3">
                <template slot="title">娱乐</template>
                <el-menu-item index="3-1">画板</el-menu-item>
                <el-menu-item index="3-2">广播</el-menu-item>
                <el-menu-item index="3-3">H5</el-menu-item>
                <el-submenu index="3-4">
                <template slot="title">待定</template>
                <el-menu-item index="3-4-1">选项1</el-menu-item>
                <el-menu-item index="3-4-2">选项2</el-menu-item>
                <el-menu-item index="3-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="4">数据</el-menu-item>
            <el-submenu index="5" class="user-controller">
                <template slot="title">
                  <i class="icon iconfont-star icon-star-wode"></i>
                </template>
                <el-menu-item index="/home">主页</el-menu-item>
                <el-menu-item index="5-2">退出</el-menu-item>
            </el-submenu>
          </el-menu>
      </el-header>
      <el-main>
      </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted: {

  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key.includes('/')) {
        this.$router.push(key)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-header
    padding 0
  .el-dropdown
    color #ffffff
  .user-controller
    float right
    color #ffffff
</style>

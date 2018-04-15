// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueParticles from 'vue-particles'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/assets/icon/iconfont.css'
import '@/styles/index.scss' // global css

Vue.use(VueParticles)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  window.console.log = function () {}
  window.console.dir = function () {}
  window.console.warn = function () {}
  window.console.table = function () {}
  window.console.info = function () {}
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

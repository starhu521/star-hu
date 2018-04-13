import Vue from 'vue'
export default {
  // check the login status
  checkLoginAuth(to, from, next) {
    if (to.meta.title && to.meta.title[Vue.config.lang]) {
      window.document.title = to.meta.title[Vue.config.lang]
    }
  }
} 
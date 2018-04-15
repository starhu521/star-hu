import Vue from 'vue'
import { checkSession } from '@/utils/auth'
export default {
  // check the login status
  checkLoginAuth (to, from, next) {
    if (to.meta.title && to.meta.title[Vue.config.lang]) {
      window.document.title = to.meta.title[Vue.config.lang]
    }

    if (to.meta && to.meta.igboreAuth) {
      next()
    } else {
      if (checkSession()) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    }
  },
  // check role permissons
  checkPageAuth (to, from, next) {
    if (to.meta && to.meta.igboreAuth) {
      next()
    } else {
      // some rules here
      next()
    }
  }
}

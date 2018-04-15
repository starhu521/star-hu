import Vue from 'vue'
import Router from 'vue-router'

// import _ from '@/utils/lodash'
import RoutesMapConfig from './routes'
// import beforeEachHooks from './beforeEachHooks'
import commonRoutesMap from './commonRoutes'

Vue.use(Router)

const routerInstance = new Router({
  // mode: 'history',
  // linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: RoutesMapConfig.concat(commonRoutesMap)
})
// 路由鉴权
// _.values(beforeEachHooks).forEach((hook) => {
//   routerInstance.beforeEach(hook)
// })

export default routerInstance

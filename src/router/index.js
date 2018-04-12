import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routesMap = [
  {
    path: '/login',
    component: () => import('../views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('../views/notFound/index'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/cool',
    component: () => import('@/components/ShapShifter/index')
  }
]

export default new Router({
  routes: routesMap,
  scrollBehavior: () => ({y: 0})
})

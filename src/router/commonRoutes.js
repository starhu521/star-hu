
export default [
  {
    path: '/login',
    meta: {
      title: '登录',
      ignoreAuth: true
    },
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    meta: {
      title: '页面未找到',
      ignoreAuth: true
    },
    component: () => import('@/views/notFound/index'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/home',
    hidden: true
  }
]
import Layout from '@/views/layout/index'

export default [
  {
    path: '/home',
    component: Layout,
    name: 'home',
    meta: {
      title: '后台',
      ignoreAuth: false
    },
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '首页',
        meta: {
          title: '首页',
          ignoreAuth: false
        },
        component: () => import('@/views/home/index')
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    name: 'home',
    meta: {
      title: '后台',
      ignoreAuth: false
    },
    children: [
      {
        path: 'blogList',
        name: '博客列表',
        meta: {
          title: '博客列表',
          ignoreAuth: false
        },
        component: () => import('@/views/blogList/index')
      }
    ]
  }
]

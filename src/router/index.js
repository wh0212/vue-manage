import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import Notfound from "../components/pages/404.vue"

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/dashboard'
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import("../components/pages/dashboard.vue"),
        meta: { title: '系统首页' }
      },
      {
        path: '/from',
        name: 'from',
        component: () => import("../components/pages/from.vue"),
        meta: { title: '基本表单' }
      },
      {
        path: '/tab',
        name: 'tab',
        component: () => import("../components/pages/tab.vue"),
        meta: { title: 'tab选项卡' }
      },
      {
        path: '/table',
        name: 'table',
        component: () => import("../components/pages/table.vue"),
        meta: { title: '基础表格' }
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import("../components/pages/icons.vue"),
        meta: { title: '自定义图标' }
      }
    ]
  },
  {
    path: "/login",
    component: () => import("../components/pages/Login.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: '*',
    name: '/404',
    component: Notfound
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

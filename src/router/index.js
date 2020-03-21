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
      },
      {
        path: '/from',
        name: 'from',
        component: () => import("../components/pages/from.vue"),
      },
      {
        path: '/tab',
        name: 'tab',
        component: () => import("../components/pages/tab.vue"),
      },
      {
        path: '/table',
        name: 'table',
        component: () => import("../components/pages/table.vue"),
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import("../components/pages/icons.vue"),
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

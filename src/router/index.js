import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import Notfound from "../components/pages/404.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

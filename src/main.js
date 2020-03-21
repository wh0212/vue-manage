import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // console.log(to);
  document.title = to.meta.title ? to.meta.title : "vue-manage"
  const user = localStorage.getItem("ms_username")
  if (!user && to.path != "/login") {
    next("/login")
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    user === "admin" ? next() : next("/404")
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    } else {
      next();
    }
  }
})











Vue.use(ElementUI, {
  size: 'small'
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'

// 把VueRouter安装为Vue的插件
Vue.use(VueRouter)

// 路由规则的数组
const routes = []

// 创建路由实例对象
const router = new VueRouter({
  routes
})

export default router

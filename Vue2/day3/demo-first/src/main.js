// 导入vue这个包 得到Vue构造函数
import Vue from 'vue'
// 导入App.vue根组件 将来要把App.vue中的模板结构渲染到html页面中
// import App from './App.vue'
import Test from './test.vue'

Vue.config.productionTip = false
// 创建Vue的实例对象
new Vue({
  // 把 render 函数指定的组件，渲染到html页面中
  render: h => h(Test),
}).$mount('#app') //$mount()挂载函数

// Vue实例的$mount()方法 作用和el属性完全一样

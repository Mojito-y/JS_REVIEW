<template>
  <div class="left-container">
    <h3>Left 组件 --- {{count}}</h3>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  // 当提供name属性之后 组件的名称就是name属性的值
  // 对比：
  // 1.组件的"注册名称"的主要应用场景是：以标签的形式 把注册好的组件 渲染和使用到页面结构中
  // 2.组件声明时候的“name”名称的主要应用场景：结合<keep-alive>标签实现组件缓存功能 以及在调试工具中看到组件的 name 名称
  name:'JaychouLeft',
  data () {
    return {
      count:0
    }
  },
  created () {
    console.log('Left组件被创建了');
  },
  destroyed () {
    console.log('Left组件被销毁了');
  },
  // 当组件第一次被创建的时候 既会执行created生命周期 也会执行activated生命周期
  // 但是 当组件被激活的时候 只会触发activated 不再触发created 因为组件没有被重新创建
  activated () {
    console.log('组件被激活了 activated');
  },
  deactivated () {
    console.log('组件被缓存了 deactivated');
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>

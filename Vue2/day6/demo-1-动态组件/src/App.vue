<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />

    <button @click="comName = 'Left'">展示Left组件</button>
    <button @click="comName = 'Right'">展示Right组件</button>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 1.component标签是Vue内置的。作用：组件的占位符 -->
      <!-- 2.is属性的值，表示要渲染的组件的名字 -->
      <!-- 3.is属性的值，应该是组件在components节点下的注册名称 -->

      <!-- keep-alive 可以把内部的组件进行缓存，而不是销毁组件 -->
      <!-- 在使用keep-alive的时候 可用include属性指定哪些组件需要被缓存 -->
      <!-- 可以使用exclude指定哪些不需要被缓存 但是两个不要同时使用 -->
      <keep-alive include="JaychouLeft,JaychouRight">
        <component :is="comName"></component> 
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Left from './components/Left.vue'
  import Right from './components/Right.vue'
export default {
  data () {
    return {
      // comName表示要展示的组件的名字
      comName:'Left'  
    }
  },
  components: {
    // 如果在“声明组件”的时候,没有为组件指定name名称，则组件的名称默认为注册时候的名称
    Left,
    Right
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>

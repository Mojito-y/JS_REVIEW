<template>
  <div class="app-container">
    <!-- Header 头部区域 -->
    <Header></Header>
    <h1>App 根组件</h1>
  </div>
</template>

<script>
// 导入需要的组件
import Header from './components/Header/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>

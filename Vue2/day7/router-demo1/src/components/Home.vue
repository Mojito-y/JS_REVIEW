<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <button @click="goToDaynight1">通过 push 跳转'白夜追凶'页面</button>
    <button @click="goToDaynight2">通过 replace 跳转到'白夜追凶'页面</button>
    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToDaynight1(){
      // 通过编程式导航API 跳转到指定页面
      this.$router.push('/movie/1');
    },
    goToDaynight2(){
      this.$router.replace('/movie/1')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>

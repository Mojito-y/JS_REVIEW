<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <!-- 当安装和配置了vue-router之后 可使用router-link 来替代普通的a链接 -->
    <!-- <a href="#/home">首页</a> -->
    <!-- <a href="#/movie">电影</a> -->
    <!-- <a href="#/about">关于</a> -->
    <router-link to="/home">首页</router-link>
    <!-- 注意1：在hash地址中，/后面的参数项 叫做“路径参数” -->
    <!-- 在路由"参数对象this.$route"中 需要使用this.$route.params来访问路径参数 -->
    <router-link to="/movie/1">白夜追凶</router-link>
    <!-- 注意2: 在hash地址中 ?后面的参数项 叫做"查询参数" -->
    <!-- 在路由"参数对象"中 需要使用this.$route.query来访问查询参数 -->
    <!-- 注意3: 在this.$route中 path只是路径部分;fullpath是完整路径 -->
    <router-link to="/movie/2?name=zs&age=18">怒晴湘西</router-link>
    <router-link to="/movie/3">昆仑神宫</router-link>
    <router-link to="/about">关于</router-link>
    <hr />

    <!-- 只要在项目中安装和配置了vue-router 就可以使用 router-view 这个组件-->
    <!-- 作用：占位符 -->
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>

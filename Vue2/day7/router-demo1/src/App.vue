<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <hr />

    <component :is="comName"></component>
  </div>
</template>

<script>
// 导入组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

export default {
  name: 'App',
  data () {
    return {
      // 在动态组件的位置 要展示的组件的名字 值必须是字符串
      comName:'Home'
    }
  },
  created () {
    // 只要当前的App组件 一被创建 就立即监听window对象的onhashchange事件
    window.onhashchange = () => {
      console.log('hash地址变化了',location.hash);
      if (location.hash === '#/home') {
        this.comName = 'Home';
      }else if (location.hash === '#/movie') {
        this.comName = 'Movie';
      }else if (location.hash === '#/about') {
        this.comName = 'About';
      }
    }
  },
  // 注册组件
  components: {
    Home,
    Movie,
    About
  }
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

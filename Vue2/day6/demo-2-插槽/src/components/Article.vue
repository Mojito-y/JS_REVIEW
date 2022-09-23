<template>
  <div class="article-container">
    <h2 v-color="'red'">Article组件</h2>
    <!-- 文章标题 -->
    <div class="header-box">
        <slot name="title"></slot>
    </div>
    <!-- 文章内容 -->
    <div class="content-box">
        <!-- 在封装组件时 为预留的<slot>提供属性对应的值 这种用法 叫做“作用域插槽” -->
        <slot name="content" msg="hello vue.js" :user="userinfo"></slot>
    </div>
    
    <!-- 文章作者 -->
    <div class="author-box">
        <slot name="author"></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Article',
  data () {
    return {
        // 用户的信息对象
        userinfo:{
            name:'周杰伦',
            age:18
        }
    }
  }
}
</script>
<style lang="less" scoped>
.article-container{
    > div{
        min-height: 150px;
    }
    .header-box{
        background-color: pink;
    }
    .content-box{
        background-color: lightblue;
    }
    .author-box{
        background-color: lightsalmon;
    }
}
</style>

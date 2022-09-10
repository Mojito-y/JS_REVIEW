<template>
  <div class="test-container">
    <h3 id="myh3">Test.vue 组件 --- {{books.length}}本图书</h3>
    <p id="ppp">message 的值是：{{message}}</p>
    <button @click="message += '~'">修改 message 的值</button>
  </div>
</template>
<script>
export default {
  props: ['info'],
  data () {
    return {
      message:'hello vue.js!',
      // 定义books 数组 存储的是所有图书的列表数据 默认为空数组
      books:[]
    }
  },
  methods: {
    show(){
      console.log('调用了 Test 组件的show方法！');
    },
    // 使用Ajax请求图书列表的数据
    initBookList(){
      const xhr = new XMLHttpRequest();
      xhr.open('get','http://www.liulongbin.top:3006/api/getbooks');
      xhr.send();
      xhr.addEventListener('load',() => {
        const res = JSON.parse(xhr.responseText)
        console.log(res);
        this.books = res.data;
        console.log(this.books);
      })
      
    }
  },
  // 创建阶段的第1个生命周期函数
  beforeCreate () {
    // console.log(this.info);
    // console.log(this.message);
    // this.show();
  },
  created () {
    // created 生命周期函数 非常常用
    // 经常在它里面 调用 methods中的方法 来请求服务器中的数据
    // 并且 把请求到的数据 转存到data中 供template模板渲染时使用！
    this.initBookList();
  },
  beforeMount () {
    // console.log('beforeMount');
  },
  // 如果要操作当前组件的dom 最早只能在mounted阶段执行
  mounted () {
    // console.log(this.$el);
    // const dom = document.querySelector('#myh3');
    // console.log(dom);
  },
  beforeUpdate () {
    // console.log('beforeUpdate');
    // console.log(this.message);
    // const dom = document.querySelector('#ppp');
    // console.log(dom.innerHTML);
  },
  // 当数据变化之后 为了能够操作到最新dom 必须把代码写到updated生命周期函数里
  updated () {
    console.log('updated');
    console.log(this.message);
    const dom = document.querySelector('#ppp');
    console.log(dom.innerHTML);
  },
  beforeDestroy () {
    console.log('beforeDestroy');
    console.log(this.message);
  },
  destroyed () {
    console.log('destroyed');
    console.log(this.message);
  }
}
</script>
<style lang="less" scoped>
.test-container{
  background-color: pink;
  height: 200px;
}
</style>

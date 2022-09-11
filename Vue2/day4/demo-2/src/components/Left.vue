<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg的值是{{msg}}</p>
    <p>user的姓名是{{user.name}} user的年龄是{{user.age}}</p>
    <button @click="user.name = '石阳'">修改user</button>
    <button @click="send">发送数据给Right</button>
    <hr>
    <div v-for="item in arr">{{item.name}}</div>
  </div>
</template>

<script>
// 1.导入eventBus.js模块
import bus from "./eventBus";
export default {
  props: ['msg','user'],
  data () {
    return {
      hello:'Hello JayChou',
      arr:[
        {id:1,name:'周杰伦'},
        {id:2,name:'石阳'},
      ]
    }
  },
  methods: {
    send(){
      // 通过eventBus来发送数据
      bus.$emit('share',this.hello)
    }
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

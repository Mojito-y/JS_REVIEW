<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印 this</button>
    <button @click="onReset">重置Left组件的count值为0</button>
    <hr />

    <input type="text" v-if="inputVisible" @blur="showButton" ref="input">
    <button v-else @click="showInput">展示输入框</button>
    <hr>

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left ref="comLeft"></Left>
    </div>
  </div>
</template>

<script>
import Left from './components/Left.vue'
export default {
  data () {
    return {
      // 控制输入框和按钮的按需切换
      // 默认值为false 表示默认展示按钮 隐藏输入框
      inputVisible:false,  
    }
  },
  methods: {
    showThis(){
      console.log(this);
      // console.log(this.$refs.myh1);
      this.$refs.myh1.style.color = 'pink'
    },
    // 点击按钮 重置left组件的count
    onReset(){
      this.$refs.comLeft.resetCount();
    },
    // 点击按钮展示输入框
    showInput(){
      // 1.切换布尔值 展示文本框
      this.inputVisible = true;
      // 2.让展示出来的文本框 自动获取焦点
      this.$nextTick(() => {
        this.$refs.input.focus();
      })
    },
    // 输入框失去焦点时隐藏输入框 显示按钮
    showButton(){
      this.inputVisible = false
    }
  },
  components: {
    Left
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

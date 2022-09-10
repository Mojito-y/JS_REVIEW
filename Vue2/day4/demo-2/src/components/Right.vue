<template>
  <div class="right-container">
    <h3>Right 组件 --- {{count}}</h3>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 子组件自己的数据 将来希望把count值传给父组件
      count:0
    }
  },
  methods: {
    add(){
      this.count++;
      // 修改数据时 通过$emit() 触发自定义事件 传给父组件
      this.$emit('numChange',this.count);
    }
  }
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>

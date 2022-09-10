<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg的值是{{msg}}</p>
    <p>user的姓名是{{user.name}} user的年龄是{{user.age}}</p>
    <button @click="user.name = '石阳'">修改user</button>
  </div>
</template>

<script>
export default {
  props: ['msg','user']
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

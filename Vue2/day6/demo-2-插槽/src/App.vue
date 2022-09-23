<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <p v-color="'red'">测试</p>
    <button @click="color = 'green'">改变color的颜色值</button>
    <hr />

    <Article>
      <template #title>
        <h3>一首诗</h3>
      </template>

      <template #content="{user,msg}">
        <div>
          <p>浩荡离愁白日斜，吟鞭东指即天涯。</p>
          <p>落红不是无情物，化作春泥更护花。</p>
          <p>{{msg}}</p>
          <p>{{user.name}}</p>
        </div>
      </template>

      <template #author>
        作者：龚自珍
      </template>
    </Article>

    <hr>

    <div class="box" style="display: none">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 默认情况下 在使用组件的时候 提供的内容都会被填充到名字为default的插槽当中 -->
        <!-- 1.如果要把内容填充到指定名称的插槽中 需要使用v-slot指令 -->
        <!-- 2.v-slot:后面要跟上插槽的名字 -->
        <!-- 3.v-slot指令不能直接使用在元素身上，必须使用在template标签或组件标签中 -->
        <!-- 4.template标签 是个虚拟的标签 只起到包裹性质的作用 不会被渲染为任何实质性的html 元素 -->
        <!-- 5.v-slot:指令的简写形式 # -->
        <template #jaychou>
          <p>周杰伦(插槽)</p>          
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Article from './components/Article.vue'
export default {
  data () {
    return {
      color:'blue'
    }
  },
  components: {
    Left,
    Article
  },
  // 私有自定义属性的节点
  directives: {
    // 定义名为color的指令 指向一个配置对象
    /* color:{
      // 当指令第一次被绑定到元素上的时候，会立即触发bind函数
      // 形参中的el表示当前指令所绑定到的那个DOM对象
      bind(el,binding){
        console.log('触发了v-color的bind函数');
        el.style.color = binding.value
      },
      // 在DOM更新的时候会触发update函数
      update(el,binding){
        console.log('触发了v-color的update函数');
        el.style.color = binding.value
      }
    } */
    // 简写形式 相当于同时在bind()和update()里分别写了一次
    color(el,binding){
      el.style.color = binding.value
    }
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

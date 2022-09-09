<template>
  <div>
    <h5>Count 组件</h5>
    <p>count 的值是{{count}}</p>
    <button @click="add">+1</button>
    <button @click="show">打印this</button>
  </div>
</template>
<script>
export default {
  // props是自定义属性 允许使用者通过自定义属性为当前组件指定初始值
  // 自定义的属性名字 是封装者自定义的（只要名称合法即可）
  // props中的数据可以直接在模板结构中被使用
  // 注意 props是只读的 不要直接修改props的值 否则终端会报错
  // props: ['init'],//这种写法无法给初始值
  props: {
    // 自定义属性A：{/*配置选项*/}
    init:{
      // 如果外界使用Count组件没有传递init属性 则默认值生效
      default:0,
      // init的值必须是Number 数字
      type:Number,
      // 必填项校验
      required:true

    }
  },
  data () {
    return {
      count:this.init
    }
  },
  methods: {
    add(){
      this.count++
    },
    show(){
      console.log(this);
    }
  }
}
</script>
<style lang='less'>

</style>

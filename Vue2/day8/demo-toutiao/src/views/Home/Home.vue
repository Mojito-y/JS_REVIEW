<template>
  <div>
    <van-nav-bar
      title="Mojito_枫"
      fixed
      placeholder
    />

    <!-- 导入 注册 并使用ArticleInfo 组件 -->
    <!-- 在使用组建的时候 如果某个属性名是“小驼峰”形式，则绑定属性的时候 建议携程“连字符”格式 -->
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleInfo 
        v-for="item in artlist" 
        :key="item.art_id"
        :title="item.title"
        :author="item.aut_name"
        :comment="item.comm_count"
        :pubdate="item.pubdate"
        :cover="item.cover"
        ></ArticleInfo>
      </van-list>
  </van-pull-refresh>
  </div>
</template>
<script>
// 按需导入API接口
import {getArticleListAPI} from '../../api/articleAPI.js'
import ArticleInfo from '../../components/Article/ArticleInfo.vue'
export default {
  name: 'Home',
  data () {
    return {
      // 页码值
      page:1,
      // 每页显示多少条数据
      limit:10,
      // 文章的数组
      artlist:[],
      // 是否正在加载下一页数据，如果loading为true 则不会反复触发load事件
      // 每当下一页数据请求回来之后 千万要记得把loading从true改为false
      loading:true,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把finished改成true
      finished:false,
      // 是否正在下拉刷新
      isLoading:false
    }
  },
  created () {
    this.initArticleList();
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh){
      // 发起get请求 获取文章的列表数据
      const {data:res} = await getArticleListAPI(this.page,this.limit);
      console.log(res);

      if (isRefresh) {
        // 证明是下拉刷新
        // this.artlist = [新数据在前，旧数据在后];
        this.artlist = [...res,...this.artlist];
        this.isLoading = false;
      }else{  //证明是上拉加载更多 this.artlist = [旧数据在前，新数据在后];
        this.artlist = [...this.artlist,...res];
        this.loading = false;
      }
      
      if (res.length === 0) {
        // 证明没有下一页数据了 直接把finished改为true 表示数据加载完了
        this.finished = true;
      }
    },
    // 只要onload被调用 请求下一页数据
    onLoad(){
      console.log('触发了load事件！');
      // 1.让页码值＋1
      this.page++;
      // 重新请求接口获取数据
      this.initArticleList();
    },
    // 下拉刷新的处理函数
    onRefresh(){
      console.log('触发了下拉刷新');
      // 1.让页码值＋1
      this.page++;
      // 2.重新请求接口获取数据
      this.initArticleList(true);

    }
  },
  components: {
    ArticleInfo
  }
}
</script>
<style lang="less" scoped>
</style>

// 文章相关的API 都封装到这个模块中
import request from "../utils/request"
// 向外导出一个API函数
export const getArticleListAPI = function(_page,_limit){
  return request.get('/articles',{
    params:{
      _page:_page,
      _limit:_limit
    }
  })
}
// 导入 express
const express = require('express')
// 创建服务器实例
const app = express()
// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))
// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp',(req,res) => {
  // todo 定义 JSONP接口具体的实现过程
  // 1.获取客户端发过来的回调函数的名字
  const funcName = req.query.callback
  // 2.定义要发送给客户端的数据对象
  const data = {name:'周杰伦',age:'30'}
  // 3.根据前两步得到的数据 拼接处一个函数调用的字符串
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4.把上一步拼接得到的字符串 响应给客户端的<script>标签进行解析执行
  res.send(scriptStr)
})
// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())
// 导入路由模块
const router = require('./16.apiRouter')
// 把路由模块，注册到 app 上
app.use('/api',router)
// 启动服务器
app.listen(8081,() => {
  console.log('服务已启动，8081端口监听中 http://127.0.0.1:8081');
})
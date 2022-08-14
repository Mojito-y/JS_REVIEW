const { log } = require('console')
const http = require('http')
const server = http.createServer()

server.on('request',(req,res) => {
  // ① 获取请求的 url 地址
  const url = req.url
  // ② 设置默认的响应内容为 404 Not found
  let content = '<h1>404 Not found</h1>'
  // ③ 判断用户请求的是否为 / 或 /index.html 首页
  // ④ 判断用户请求的是否为 /about.html 关于页面
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  }else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }
  // ⑤ 设置 Content-Type 响应头，防止中文乱码
  res.setHeader('Content-Type','text/html; charset=utf-8')
  // ⑥ 使用 res.end() 把内容响应给客户端
  res.end(content)

})

server.listen(8081,() => {
  console.log('server running at http://127.0.0.1:8081');
})
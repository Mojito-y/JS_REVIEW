// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 模块
const fs = require('fs')
// 1.3 导入 path 模块
const path = require('path')

// 2.1创建web服务器
const server = http.createServer()
// 2.2监听web服务器的 request 事件
server.on('request',(req,res) => {
  // 3.1 获取到客户端请求的url地址
  //      /clock/index.html
  //      /clock/index.css
  //      /clock/index.js
  const url = req.url
  // 3.2 把 请求的url地址，映射为本地文件的存放路径
  // const fpath = path.join(__dirname,url)
  // 5.1 预定义空白的文件存放路径
  let fpath = ''
  if (url === '/') {
    fpath = path.join(__dirname,'./clock/index.html')
  }else{
    fpath = path.join(__dirname,'./clock',url)
  }
  // 4.1 根据“映射”过来的文件路径读取文件
  fs.readFile(fpath,'utf8',(err,dataStr) => {
    // 4.2 读取文件失败后 向客户端响应固定的错误消息
    if (err) {
      return res.end('404 Not Fount.')
    }
    // 4.3 读取文件成功后 向客户端响应“读取成功的内容”
    res.end(dataStr)
  })
  
})
// 2.3启动web服务器
server.listen(8081,() => {
  console.log('server running at http://127.0.0.1:8081');
})



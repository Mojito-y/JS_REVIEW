const express = require('express')
const app = express()

// 调用express.static()方法，快速的对外提供静态资源
app.use(express.static('./clock'))
app.use(express.static('./files'))



app.listen(8081,() => {
  console.log('express server running at http://127.0.0.1:8081');
})
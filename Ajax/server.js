//1. 引入express
const { request, response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域 解决跨域问题
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX');
});
// all可以接收任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域 解决跨域问题
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send('HELLO AJAX POST');
});
// JSON响应
app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域 解决跨域问题
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据
    const data = {
        name:'jaychou'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    //设置响应体
    response.send(str);
});
// 针对 IE 缓存
app.get('/ie',(req,res) => {
    //设置响应头  设置允许跨域 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('Hello IE -5')
})
// 延时响应
app.all('/delay',(req,res) => {
    //设置响应头  设置允许跨域 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','*');
    setTimeout(() => {
        // 设置响应体
        res.send('Hello AJAX 延迟响应')
    },3000)
    
})
// jQuery 服务
app.all('/jQuery',(req,res) => {
    //设置响应头  设置允许跨域 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','*');
    const data = {name:'jaychou'};
    // res.send(('hello jQuery Ajax！'));
    res.send(JSON.stringify(data));
    
})
// axios 服务
app.all('/axios',(req,res) => {
    //设置响应头  设置允许跨域 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','*');
    const data = {name:'jaychou'};
    // res.send(('hello jQuery Ajax！'));
    res.send(JSON.stringify(data));
    
})
// fetch 服务
app.all('/fetch',(req,res) => {
    //设置响应头  设置允许跨域 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','*');
    const data = {name:'jaychou'};
    // res.send(('hello jQuery Ajax！'));
    res.send(JSON.stringify(data));
})
// jsonp 服务
app.all('/jsonp',(request,response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name:'jaychou'
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
})
// 用户名检测是否存在
app.all('/check-username',(request,response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exist:1,
        msg:'用户名已经存在'
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
})
// 用户名检测是否存在
app.all('/jquery-jsonp-server',(request,response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name:'jaychou',
        city:['北京','上海','深圳']
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 接收callback 参数
    let cb = request.query.callback;
    // 返回结果
    response.end(`${cb}(${str})`);
})

// CORS跨域解决方案
app.all('/cors',(request,response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.setHeader('Access-Control-Allow-Method','*');
    response.send('hello cors');
})
// 4.启动服务 监听端口
app.listen(8000,() => {
    console.log('服务已经启动，8000端口监听中……');
})
const path = require('path')

// 1.导入HTML插件 得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2.new构造函数 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html',    //指定要复制那个页面
    filename:'./index.html',    //指定复制出来的文件名和存放路径
})

// 使用Node.js中的导出语法 向外导出一个webpack的配置对象
module.exports = {
    devServer: {
        open:true,      //初次打包完成后自动打开浏览器
        host:'127.0.0.1',   //实时打包所使用的主机地址
        port: 8081,     //实时打包所使用的端口号
    },
    // 代表webpack的运行模式 可选值有两个 development和production
    // 结论：开发的时候一定要使用development 因为追求的是打包的速度
    // 反过来 发布上线一定要用production 因为上线追求的是体积小
    mode:'development',
    // entry：'指定要处理的文件'
    entry:path.join(__dirname,'./src/index.js'),
    // 指定生成的文件放在哪里
    output:{
        path:path.join(__dirname,'./dist'), //输出文件的存放路径
        filename:'bundle.js'    //输出文件的名称
    },
    // 3.插件的数组 将来webpack运行时会加载并调用这些插件
    plugins:[htmlPlugin],
    //所有第三方文件模块的匹配规则
    module:{           
        rules:[ // 文件后缀名的匹配规则
            // test 表示匹配的文件类型， use 表示对应要调用的 loader
            {test:/\.css$/,use:['style-loader','css-loader']},
            // 处理.less文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    },
}
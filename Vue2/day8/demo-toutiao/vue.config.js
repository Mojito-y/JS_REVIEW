// 这个文件是 vue-cli 创建出来的项目的配置文件
// 再 vue.config.js这个配置文件中 可以对整个项目的打包、构建进行全局性的配置

const path = require('path')
const themePath = path.join(__dirname,'./src/theme.less')

module.exports = {
  publicPath:'./',
  css:{
    loaderOptions:{
      less:{
        modifyVars:{
          // less文件覆盖
          hack:`true;@import "${themePath}";`
        }
      }
    }
  }
}
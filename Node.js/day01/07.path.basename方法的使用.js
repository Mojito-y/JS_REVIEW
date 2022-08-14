const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName)

const nameWihoutExt = path.basename(fpath,'.html')
console.log(nameWihoutExt);
// 获取文件扩展名
const nameExt = path.extname(fpath)
console.log(nameExt);

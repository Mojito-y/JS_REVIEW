const jaychou = require('./jaychou-sy')

// 格式化时间的功能
const dtStr = jaychou.dateFormat(new Date())
console.log(dtStr)
console.log('-----------')

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = jaychou.htmlEscape(htmlStr)
console.log(str)
console.log('-----------')

const str2 = jaychou.htmlUnEscape(str)
console.log(str2)

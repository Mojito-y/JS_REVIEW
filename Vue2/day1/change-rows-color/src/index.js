// 1.使用ES6导入语法，导入jQuery
import $ from 'jquery'
// 导入样式(在webpack中一切皆模块，都可以通过ES6导入语法进行导入和使用)
import './css/index.css'
import './css/index.less'

// 1.导入图片，得到

// 2.定义 jQuery的入口函数
$(function(){
    // 3.实现奇偶行的变色效果
    // 奇数行为红色
    $('li:odd').css('background-color','green')
    // 偶数行
    $('li:even').css('background-color','pink')
})
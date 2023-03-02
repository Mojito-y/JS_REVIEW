// 基于promise的方式读取文件

import thenFs from 'then-fs'

thenFs.readFile('./files/1.txt','utf8').then((r1) => {console.log(r1)})
thenFs.readFile('./files/2.txt','utf8').then((r2) => {console.log(r2)})
thenFs.readFile('./files/3.txt','utf8').then((r3) => {console.log(r3)})
// thenFs.readFile('./files/4.txt','utf8').then((r3) => {console.log(r3)},err => {console.log(err.message);})
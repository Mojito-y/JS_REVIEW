import thenFs from 'then-fs'

const promiseArr = [
  thenFs.readFile('./files/2.txt','utf8'),
  thenFs.readFile('./files/1.txt','utf8'),
  thenFs.readFile('./files/3.txt','utf8')
]

Promise.all(promiseArr).then(([r1,r2,r3]) => {  //数组解构
  console.log(r1,r2,r3);
}).catch(error => {
  console.log(error.message);
})

Promise.race(promiseArr).then(result => { //只要任何一个异步操作完成，就立即执行下一步的.then 操作（赛跑机制）
  console.log(result);
}).catch(error => {
  console.log(error.message);
})
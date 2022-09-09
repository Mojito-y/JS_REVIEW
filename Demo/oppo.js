// const wait = (time) => new Promise(resolve => {
//     setTimeout(() => resolve(),time)
// });
// let res = 0;
// async function asyncGetNum(num){
//     await wait(100);
//     return num;
// }
// async function asyncAdd(num){
//     res += await asyncGetNum(num)
// }
// asyncAdd(3)
// asyncAdd(2)
// asyncAdd(1)
// wait(150).then(()=>{
//     console.log(res);
// })

// let obj={}
// Object.defineProperty(obj,'a',{value:1});
// console.log(Object.keys(obj).includes('a'));
// console.log(obj.hasOwnProperty('a'));

// const [a=1,b=2,c=3] = [4,null]
// console.log(a,b,c);

// let [head,...tail] = [1,2,3,4]
// console.log(head,tail);
// let[x,y,...z] = ['a']
// console.log(x,y,z);
// let [a,[b],c] = [1,[2,3,],4]
// console.log(b);

// new Promise((resolve,reject) => {
//     resolve(1)
//     console.log('2');
// }).then(r=>{
//     console.log('1');
// })

// const temp=10
// const myObj={
//     temp:20,
//     func:()=>{console.log(this.temp)}
// }
// myObj.func();//1
// var youObj={temp:30}
// myObj.func.apply(youObj)//2

// (function(){
//     var a=b=5;
// })();
// console.log(b);
// console.log(a);

// function rgb2hex(sRGB) {
//     let reg = /^(rgb|RGB)\((\d+),\s*(\d+),\s*(\d+)\)$/
//     if(!reg.test(sRGB)) return sRGB
//     let tempArr = sRGB.replace(reg, '$2,$3,$4').split(',')
//     let newArr = tempArr.map(item => {
//         if(+item > 16) return (+item).toString(16)
//         return '0' + (+item).toString(16)
//     })
//     return '#' + newArr.join('')
// }
// console.log(rgb2hex('rgb(255,255,255)'))

function namespace(oNamespace, sPackage) {
    var arr = sPackage.split('.')
    var obj = oNamespace
    arr.forEach(item=>{
        // 判断对象中是否有该属性名
        if(typeof obj[item] !== 'object') {
            obj[item] = {}
        };
        // 接下来就合并对象
        Object.assign(obj[item],{})
        obj = obj[item]
    })
    return oNamespace
}

   console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d')); 
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
    

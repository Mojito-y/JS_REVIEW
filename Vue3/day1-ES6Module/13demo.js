setTimeout(() => {
  console.log('2');
  new Promise(function (resolve) {
    console.log('3');
    resolve();
  }).then(function(){
    console.log('4');
  })
}, 2000);
setTimeout(() => {
  console.log('5');
  new Promise(function (resolve) {
    console.log('6');
    resolve();
  }).then(function(){
    console.log('7');
  })
}, 500);
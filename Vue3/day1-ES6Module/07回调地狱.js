setTimeout(() => {
  console.log('延迟1秒');
  setTimeout(() => {
    console.log('延迟2秒');
    setTimeout(() => {
      console.log('延迟3秒');
    }, 3000);
  }, 2000);
}, 1000);
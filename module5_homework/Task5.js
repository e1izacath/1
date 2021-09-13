const x = [2, 15, 24, 32, 6, 77, 12];
console.log('quantity:'+x.length);
x.forEach(el => {
  setTimeout(() => {
    console.log(el)
  }, 1000)
})
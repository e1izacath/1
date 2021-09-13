let x=prompt('enter a number/word')
x=+x
typeof x
let a=x%2
if (x!==x) {
  console.log('Error')
} else if (a==0) {
  console.log(x+' is an even')
} else if (a==1) {
  console.log(x+' is an odd')
} else {
  console.log('Oops, it seems you were wrong')
}
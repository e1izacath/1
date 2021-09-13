const arr = [1, 2, 3, 3]
let reference = arr[0];
for (let item of arr) {
               if (item !== reference) {
                              isEqual = false;
               } else {
                isEqual = true;
               }
}
console.log(isEqual)
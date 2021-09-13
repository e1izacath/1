let myMap = new Map();
myMap.set(1, 'cat');
myMap.set(2, 'dog');
myMap.set(3, 'frog');
for(let elem of myMap.entries()) {
console.log(`Ключ-${elem[0]}, значение-${elem[1]}`);
}
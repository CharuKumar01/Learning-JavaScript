// array


const myHeros = ["saktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr);

// Array methods

// myArr.push(6)
// myArr.push(7) // to put value in last index of array
// myArr.pop()   // to remove last index value from array

// myArr.unshift(9) // to add value in first index of array
// myArr.shift() // to remove first index from array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts array into strings but values remains same

// console.log(myArr);
// console.log(newArr);

// slice, splice 
const myArr = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr);

const myn1 = myArr.slice(2,3) // slice select from starting point to (range-1)/totol index given in the slice method
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(0,4) // splice took a whole part of array from starting point to totol given index of array and it manuplates original array
console.log("C ", myArr);
console.log(myn2);

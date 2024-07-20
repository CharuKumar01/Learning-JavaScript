// Primitive 
// 7 types : String, Number, Boolean, null, undefined, symbol, big int

// const score = 100
// console.log(typeof(score))

// const id = Symbol("98")
// const anotherId = Symbol("98")

// console.log(id === anotherId)

// const bigNumber = 131543545644135n // BigInt

// Reference (Non - Primitive)
// Array, Objects, Functions

const heros = ["saktiman", "naagraj", "doga"]
const hero = {
    name: "charu",
    age: 90
}

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
myFunction()
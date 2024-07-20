const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

// const myNewObj = Object.create()

let chai = {
    name: "Ginger chai",
    price: 250,
    isAvailable: true
}


Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// chai.name = "kadak chai"
// console.log(chai);

for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} ${value}`);
}
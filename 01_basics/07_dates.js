// let myDate = new Date()
// console.log(myDate.toString())
// console.log()

// let myCreatedDate = new Date(2023, 1, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 1, 23, 5, 3)
let myCreatedDate = new Date("2023-01-25")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // to convert in seconds


let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate.toLocaleString())
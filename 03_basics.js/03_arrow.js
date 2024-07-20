const user = {
    username: 'hitesh',
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "charu"
// user.welcomeMessage()

// console.log(this);

// function chai(){
    // let username = 'charu'
    // console.log(this.username);
    // }
    
    // chai()
    
// const chai = () => {
//     let username = 'charu' // this method does not work with function
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return 
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // implicit return
// const addTwo = (num1, num2) => ({username: 'hitesh'})

// console.log(addTwo(4,3));

const myArray = [2,5,4,3,4]

// myArray.forEach()

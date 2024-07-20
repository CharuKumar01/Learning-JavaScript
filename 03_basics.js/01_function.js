
function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}



const result = addTwoNumbers(3, 5) // 3 and 5 are arguments 

// console.log(`result = ${result}`);


function loginUserMessage(username = 'sam'){ // default argument is sam
    if(!username){
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('charu'))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: 'hitesh',
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: 'sam',
    price: 399
})


const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 200]));
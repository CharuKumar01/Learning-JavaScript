// const user = {
//     username: "hitesh",
//     loginCount: 5,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from DB");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }



// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

function user(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new user("charu", 12, true)
const userTwo = new user("Kumar", 12, false)
console.log(userOne)
console.log(userTwo)

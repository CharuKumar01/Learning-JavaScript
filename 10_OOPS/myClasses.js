// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("charu", "happy@123", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene 

function user1(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new user1("charu", "afdds", 123)
console.log(tea.encryptPassword()); 
function multipeBy5(num){
    return num*5
}

multipeBy5.no = 2

console.log(multipeBy5(5));
console.log(multipeBy5.no);
console.log(multipeBy5.prototype);

function createUser(username, score){
    this.username = username 
    this.score = score   
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const user1 = new createUser("charu", 78)
const user2 = new createUser("kumar", 78)
console.log(user1)

user1.increment()
user1.printMe()

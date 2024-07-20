class user{
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email 
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "Chai@teacher.com", 123)
chai.addCourse()
const Tea = new user("masalaChai")
Tea.logMe()

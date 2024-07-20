class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const charu = new user("Charu")
console.log(charu.createId())

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Iphone = new teacher("charu", "i@af")
Iphone.createId()
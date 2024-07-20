class user{
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get password(){
        return `${this._password}Charu`
    }

    set password(value){
        return this._password = value
    }
}

const charu = new user("Charu@google.com", "abc")
console.log(charu.password)
console.log(charu.email)
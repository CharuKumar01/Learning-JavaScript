// singleton - made by constructor
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Charu", 
    'full name': "Charu Kumar",
    [mySym]: "mykey1",  // to use symbol as key and with syntax
    age: 18,
    location: "Uttarakhand", 
    email: "charu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// console.log(JsUser.email)
// console.log(JsUser["full name"])  // can't access by dot operator, so we are using the second method to print object values
// console.log(JsUser["email"])
// console.log(typeof JsUser[mySym])

JsUser.email = "charu@booble.com"
// Object.freeze(JsUser) // now the whole object is freezed and now values can't be changed
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("hello charu boy");
// }
// JsUser.greeting2 = function(){
//     console.log(`hello js user, ${this.name}`);
// }

// console.log(JsUser.greeting2());
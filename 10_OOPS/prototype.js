// let myName = "charu    "
// console.log(myName.truelength);

// let myHeros = ["thor", 'spider-man']

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = () => {
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyCharu = () => {
//     console.log("Charu says Hello");
// }

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyCharu()
// heroPower.heyCharu()

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TaSupport = {
    makeAssignment: "js ",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = TeachingSupport

// modern syntax of prototype inheritance
Object.setPrototypeOf(Teacher, TaSupport)

console.log(Teacher.makeAssignment);


let username = "chai   "

String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}

username.trueLength()
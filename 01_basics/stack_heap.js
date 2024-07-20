// Stack (Primitive), Heap (Non-Primitive)

// let myYoutubeName = "charu.com"

// let anotherName = myYoutubeName
// anotherName = "happy.com"

// console.log(myYoutubeName)
// console.log(anotherName)

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "charu@google.com"

console.log(user2)

// stack gives you copy and heap memory gives you reference
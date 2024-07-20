// const promiseOne = new Promise((resolve, reject) => {
//     //do an async task
//     //db calls, cryptography, network
//     setTimeout(() => {
//         console.log("Aysnc task is complete");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(() => {
//     console.log("Promise consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task 2');
//         resolve()
//     }, 1000);
// }).then(() => {
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({username: "Charu",
//             email: "charu@example.com"
//         })
//     },1000);
// })

// promiseThree.then((user) => {
//     console.log(user);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({username: "Charu Kumar", password: 123})
//         } else{
//             reject("ERROR 404")
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("The promise is either resolved or rejected")
// })

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({username: "JavaScript", password: 123})
//         } else{
//             reject("ERROR 405")
//         }
//     }, 1000)
// }) 

// const consumePromiseFive = async () => {
//     try {
//         const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

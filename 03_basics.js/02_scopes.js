// var c = 300
// let a = 300

// if(true){
//     let a = 10 
//     const b = 20 
//     // var c = 30 
//     console.log('inner: ', a);

// }

// console.log(a, b);
// console.log(c);
// console.log(a);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

function one(){
    const username = 'charu'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

// if(true){
//     const username = 'charu'

//     if(username === "charu"){
//         const website = ' youtube'
//         console.log(username + website);
//     }
//     // console.log(website);
// }

// console.log(username);


// +++++++++++++++++++ intereseting ++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

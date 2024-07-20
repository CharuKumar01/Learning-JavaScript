// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //named IIFE
    console.log(`DB connected`); // we use iife to overcome the polution of global polution 
})(); // to end the iife we have to put ; in last, this is a special case to put ; in last of the line/function

((name) => {
    console.log(`db connected to ${name}`);
})('charu')


// JS is single threaded
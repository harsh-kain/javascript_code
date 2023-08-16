// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; is the important because IIFE function has no idea where to stop then we have to decalre ; to stop the execution of the IIFE function 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// const func = () =>{
//     console.log("kain");
// }
// func();
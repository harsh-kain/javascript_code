const user = {
    username: "harsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage() // using this keyword we can access the context of the current object
// user.username = "sam" // name was changes into sam 
// user.welcomeMessage() // now again print but name was changed 

// console.log(this); // it gives node current context that is blank curly braces {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // we can't use this keyword in function it return undifined 
// }

// chai()

// const chai = function () {
//     let username = "harsh"
//     console.log(this.username); // another way of function decleration 
// }

// const chai =  () => {
//     let username = "harsh" // another way of function decleration 
//     console.log(this); 
// }


// chai()

// const addTwo = (num1, num2) => {  // if scope was started using {} braces then we have to use return keyword otherwise it return undefined
//     return num1 + num2

// } 


// const addTwo = (num1, num2) =>  num1 + num2 // in this case scope was not started then no need to add return keyword we just simple add both variable 

// const addTwo = (num1, num2) => ( num1 + num2 ) // same as the previous one no need to add return keyword 

// const addTwo = (num1, num2) => ({username: "hitesh"}) // in the return an object we have to use (inside this bracket add object )


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val); // using simple function 
// } )

// coding.forEach( (item) => {
//     console.log(item); // using call back function 
// } )

// function printMe(item){
//     console.log(item); // declare a function and use in the forEach loop
// }

// coding.forEach(printMe) // using function 

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr); // we can pass multiple parameter where item -> item inside the array || index -> simple index number || array -> name of the array 
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { // access array of objects element using forEach loop
    
    console.log(item.languageName +  'use ' + item.languageFileName +  ' Extension ' );
} )
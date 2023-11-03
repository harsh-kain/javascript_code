/*
the problem with forEach loop is :- the foreach loop can't return any values 
and it is not possible every such cases we just have to print the value only we want something return as well 

so overcome this problem some higherOrder funtion are comes which is {map , filter , reduce }

*/

let arr = ['js','css','html']

// const value = arr.forEach(element => {
//     console.log(element);
//     return 1;
// });

// console.log(value);
// ---------------------------------------------- filter function 
// filter which return a value in form of array and object maybe 
// let number = [1,2,2,2,3,3,4,5,6,7,8];

// const newNum = number.filter( (num) => {
//     return num > 4
// } )
// console.log(newNum);

// --------------------------------------------- map function 

// const addition = number.map( (i) => {
//     return i + 10;
// })
// console.log(addition);
// console.log(number);


// ----------------------------------------------- function chaining 
// chainnig is usign the multiple function one by one for example map.map.filter 
let numbers = [1,2,3,4,5,6,7,8,9,10];

// const result = numbers
// .map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num >= 40)

// console.log(result);


// -------------------------------------------------reduce function 
// reduce take two value as a argument first was accumulator and next one is array element 

numbers.reduce((acc , num) =>{
    console.log(`num -: ${num} acc :- ${acc}`);
    return acc + num;
},5)



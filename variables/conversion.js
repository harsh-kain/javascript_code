let string = "78abc";

let stringToNumber = Number(string);
console.log(typeof stringToNumber); // convert into number but not a complete number 
console.log(stringToNumber); // it become not a number 

// in case of convert NULL into number 
// -> number become 0

// in case of convert UNDIFINED into number it convert but output is  
// -> number "undifined"

// in case of convert boolean value  into number it convert but output is  
// -> true -> 1
// -> false -> 0

// string to number 
// -> NaN 

let isLoggedIn = "kain"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " kain"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// prefix and postfix 

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


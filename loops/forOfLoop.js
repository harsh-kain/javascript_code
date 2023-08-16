// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
//A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// A Map has a property that represents the size of the map and it contain only unique values 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // same value not consider 


// console.log(map);

// for (const iterator of object) { // basic syntax of forOf loop
    
// }


// for (const [key, value] of map) {
//     console.log(key, ':-', value);  // access of both key and value from map usig forOf loop
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // objects are not iterateable by forOf loops we have to use another types of loops
    
// }
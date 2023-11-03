let arr = [1,2,3,4,5];
let str = "harshKain"


// for (const i of arr) {
//     console.log(i);
// }


for (const char of str) {
    // console.log(`Each char of my name ${char}`);
}

// ---------------------------------------- maps 

// maps is used to store the unique values 

const map = new Map;

map.set("IN" , "India")
map.set("USA" , "America")
map.set("USA" , "America") // it not consider duplicate values so the output will be only india and usa 

// console.log(map);

// looping on map 
for (const key of map) {
    // console.log(key); // it gives output in array ['IN' : 'India'] like this but if we get key and values seprately then we have to use [key, value] syntax for accessing the values 
}
// for accessing the key and values seprately
for (const [key, value] of map) {
    console.log(key + " :- " + value); 
}
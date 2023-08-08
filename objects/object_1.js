// singleton
// Object.create

const user = new Object(); // singleton object there's no difference in both singleton and object literals objects 
// object literals

const mySym = Symbol("key1") // symbol is use to declare a unique value


const JsUser = {
    name: "Harsh",
    "full name": "Harsh kain",
    [mySym]: "mykey1", // in case of symbol we have to declare with square brackets otherwise it consider as string 
    age: 22,
    location: "India",
    email: "kain@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // access obj element using "." 
// console.log(JsUser["email"]) // second way to access obj element using [""]
// console.log(JsUser["full name"])
console.log(JsUser)

JsUser.email = "harsh@gmail.com"
// Object.freeze(JsUser) // object will freeze it means not further changes will consider 
JsUser.email = "harshkain415@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this keyword is use to reference of same object , and accessing the element of same object 
}

console.log(JsUser.greeting); // function return back this funtion not call it gives the reference of the funtion 
console.log(JsUser.greetingTwo());
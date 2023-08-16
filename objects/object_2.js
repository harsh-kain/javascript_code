// const tinderUser = new Object() // singleton obj
const tinderUser = {} // literal object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: { // nested object 
        userfullname: {
            firstname: "harsh",
            lastname: "kain"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // for access the nested object, simple add dot and access all nested element of objects 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // puts all object into a single object and it return an object (target , source) {} is optional in starting but it recommended to use for safer side 

const obj3 = {...obj1, ...obj2} // spread operator 
// console.log(obj3);


const users = [ // array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // for accessing the array of objects first pass the [iterator] to treat as array and then using . operator to access the objects element
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // for getting all objects keys 
// console.log(Object.values(tinderUser)); // for getting all object values 
// console.log(Object.entries(tinderUser)); // return an array which contain key and value like [email , harshkain@gmail.com]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // for checking the object contain this property ot not and it return boolean values 


const course = {
    coursename: "js ",
    price: "999",
    courseInstructor: "harsh" 
}

// course.courseInstructor

const {courseInstructor : name} = course // object destructure 

// console.log(courseInstructor);
console.log(name);

// {
//     "name": "harsh",
//     "coursename": "js",
//     "price": "free"
// }

 // json format 
[
    {},
    {},
    {}
]

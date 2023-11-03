// de structuring of object 
let course = {
    name : "React js",
    duration : "9 month",
    fee : 9000
}

const {name,duration} = course;
// just open a curly braces and give which key you want to destructure and the object reference 
// the concept of destructure is overcome the repeation of code like 
// course.name 
// course.duration 
// course.fee
// so we just simple destructure the Object and array and reduce some steps 

// and we also add custom name as well like :- 
const {name : courseName} = course; // in this case i'll change the name of the course into courseName
console.log(courseName);
console.log(duration);
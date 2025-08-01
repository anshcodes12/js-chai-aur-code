//Objects from constructor
//Singleton objects

const regularUser = {
  email: "ansh@gmail.com",
  fullname: {
    userfullname: {
      firstname: "ansh",
      lastname: "agnihotri"
    }
  }
}
//any number of nesting is allowed

console.log(regularUser.fullname.userfullname.firstname);
//access


//combining objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2} 
// console.log(obj3);//not right way

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // {} is an optional parameter but it guarantees the combination of the objects

const obj3 = {...obj1, ...obj2}
console.log(obj3);
//mostly we use spread method(above) that assign()

const users = [
  {
    email: "anshh@gmail.com",
    age: 21,
    address: "Ghaziabad"
  }
]


console.log(Object.keys(regularUser)); // vice versa for values of keys

console.log(regularUser.hasOwnProperty('name')); //checks property


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

//destructuring
const {courseInstructor} = course

console.log(courseInstructor);

//APIs: to blame your work on someone else
//Early times api were called in xml but today in json

// {
//   name: "ansh",
//   coursename: "js in hindi",
//   price: "free"
// }

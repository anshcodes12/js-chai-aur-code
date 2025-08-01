//Objects
// declared by two ways : As a literal and as a constructor
//constructor makes singleton objects while literal do not make so, singleton object means uske jaisa bs ek object


//Object.create 
//by constructors

const mySym = Symbol("key1")

//By creating objects by literals
const JsUser = {
  name: "Ansh",
  age: 20,
  mySym: "myKey1",
  email: "ansh@gmail.com",
  location:"Ghaziabad",
  isLoggedIn : false
} //these curly brackets are the object
//object takes the key as a string

//Ways to access
// console.log(JsUser.email); //way 1
// console.log(JsUser["email"]); //way 2, email is taken as a string hence (" ") is used

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser["mySym"]);

// JsUser.email = "ansh123@gmail.com" //changed email
// Object.freeze(JsUser) // freezes to change
// JsUser.email = "emailafterfreeze@gmail.com"
// console.log(JsUser);

//square brackets are used to access

//adding functions in js
JsUser.greeting = function() {
  console.log("Hello JS User");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

//to reference a key from object 

JsUser.greetingTwo = function() {
  console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());

// things to remember use(.) to access keys but use ([]) is case where no options left


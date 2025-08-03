//arrow functions upgrade of ES6
//also brought THIS keyword: tells about current context
//current context: 

const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function() {
      console.log(`${this.username}, welcome to website`); //this refers the current context
      
  }
}
// user.welcomeMessage() //referring previous context
// user.username = "sam" //assigning new context
// user.welcomeMessage() //referring new context

// console.log(this); //throws '{}' output as there's no context 
// function chai() {
//   console.log(this);
// }
// chai()
//this is showing the reference of context only in objects not in functions

//Arrow functions
// () => {}

//basic
function addTwo(num1, num2) {
  return num1 + num2;
}
console.log(addTwo(3,4));
 
// using implicit return
addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,5));  //If written in curly braces then you have to give return statement otherwise not


addTwo = (num1, num2) => ({ username: "ansh" });
console.log(addTwo(5, 1)); // {username: "ansh"}
 //when an object is already declared it doesn't  needed to rewrite it everywhere
//Immediately Involved Function Expressions (IIFE)
//To immediately execute a function
//Sometimes global scope creates problem due its variables to avoid the at pollution iife is used

//standard iife
(function() {
  console.log(`DB connected`);
})(); //(;) is used to end the execution

//arrow function variant
(() => {
  console.log(`ansh`);
}) ()

// to write two iife we have to use (;)
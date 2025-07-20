// const is used to declare a constant value
const accountId = '123321';

/*
Prefer not to use 'var'
Because of issues in block scope and functional scope.
*/

let accountEmail = "ansh@gmail.com";
let accountHolder = "anss";
let ownerOf = "Ansi";  // ✅ use 'let' instead of undeclared variable

// Reassigning values (only to variables declared with let or var)
accountEmail = "ram@gmail.com";
// accountId = '321123'; // ❌ Uncommenting this will throw an error because 'const' cannot be reassigned
accountHolder = "Gaur";
ownerOf = "Rama";

// Display all values in a table
console.table([accountId, accountEmail, accountHolder, ownerOf]); 
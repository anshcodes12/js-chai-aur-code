//Dates
//dates is a pain point in js

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //IMPORTANT: asked many times in the interviews about the type of date is 'object' 

//to declare a specific date
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate); // unreadable
console.log(myCreatedDate.toString()); // readable
// Months start from '0' in JS

//------------------------------------------

//Time stamp (inside dates)
let myTimeStamp = Date.now()
console.log(myTimeStamp); //gives milliseconds from 1 Jan 1970
console.log(Date.now()/1000); // to convert from milliseconds to seconds, gives answer in decimals 
console.log(Math.floor(Date.now()/1000)); //removes decimal 


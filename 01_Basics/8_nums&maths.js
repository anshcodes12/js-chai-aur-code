//PART 1: Numbers
const score = 100 //most common way, auto detects its a number
console.log(score);

const number = new Number(120) //when you want to specify the type by yourself
console.log(number);

console.log(number.toString()); //changes the specified data type from number to string and now it can perform all operations a string can do
console.log(number.toFixed(2)); //for precision gives decimal places

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(2)); //gives precised value

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //American standards
console.log(hundreds.toLocaleString('en-IN')); //Indian standards
// + many more

//----------------------------------------

//PART 2 : Maths- a large library
console.log(Math);
console.log(Math.abs(-4)); //absolute value
console.log(Math.abs(4));
console.log(Math.round(3.6));
console.log(Math.ceil(3.8));
console.log(Math.floor(3.8));
console.log(Math.min(1,2,3,4,5,7,4,2,)); //similarly .max()

console.log(Math.random()); //random values always between 0 and 1
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));










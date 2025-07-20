//Arrays
//JS arrays are resizable
//we access elements in a array by indexing
//array makes a shallow copy. Shallow copy: is a copy whose properties are same as those of the source object from which the copy was made.
//deep copy: properties do not share the same reference

//method 1 to declare an array
const myArr = [0,1,2,3,4,5, true, "ansh"]
const myHeroes = ["superman", "shaktiman"]

//method 2 to declare an array
const myArr2 = new Array(1,2,3,4)

//Array methods
myArr.push(6) //pushes
console.log(myArr);

myArr.pop() //pops last value
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(3)); //checks the availability
console.log(myArr.indexOf('ansh'));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

//slice, splice

console.log("A ", myArr);

const myNew1 = myArr.slice(1,3)

console.log(myNew1);
console.log("B ", myArr);

const myNew2 = myArr.splice(1,3)
console.log(myNew2);
console.log("C ", myArr);


//in slice original array is not manipulated but manipulated in splice 

const marvel_heroes = ["thor", "ironman", "spiderman"]

const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); //array inside array

//we can concat 
marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes); //returning only marvel

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);// does right job

//spread operator
const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);
//(...) individualize the array elements 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = another_array.flat(Infinity) 
console.log(realAnotherArray);

//another_array.flat(): flattens the array, here infinity is telling the depth by using infinity it will flatten until infinity although we should specify the depth as a right practice to code

console.log(Array.isArray("Ansh")); //checks if array
console.log(Array.from("Ansh")); //converts to an array from given input
console.log(Array.from({name: "Ansh"})); //It can't make array out of it until specifies the key value pair **interesting for Interview**

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //made array



//Method 1 to create a string
const name = "ansh"
const repoCount = 4

//concatenating the strings 
console.log(name + repoCount + " Value");  //this syntax is outdated

//concatenating in modern time uses back ticks (``)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // we can do modification to the string

//Method 2: another way to declare a string
const gameName = new String('anshhhh')
console.log(gameName); //mastering all the methods of a string is mastering the string

//discussing some methods
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));
console.log(gameName.substring(0,3));
console.log(gameName.slice(0,-3)); //can use negative positioning

const newString = "   anshhyaar   "
console.log(newString);
console.log(newString.trim()); //removes unnecessary spaces
//trimStart() & trimEnd() are its subparts

const url = "https://anshagnihotri.art.blog" //.replace() is used in urls to replace a particular sequence of words or the entire url 
console.log(url.replace('art', 'fart'));//syntax: nameOfString.replace('the part you want to change', 'the new replacement')

console.log(url.includes('ansh')); //checks whether the asked term/keyword is in the string

//.split(): used to make array out of a string on the basis of a separator you specify
//syntax: split('separator', 'limit')
const string1 = "ansh-is-learning-to-code"
console.log(string1.split('-')); //we specified (-) as the separator here 

//Readout MDN docs for more info


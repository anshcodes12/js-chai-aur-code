//For of
// [" ", " ", " "] // strings in array
// [{ }, { }, { }] // objects in array

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//   console.log(num);
  
// }


//maps
// const map = new Map() //holds key value pairs
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ':-', value);
// }

// // const myObject = {
// //   'game1' : 'NFS'
// //   'game2' : 'Spiderman'

// // }

// for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
// }

//for in (to apply loop on objects and much more)
const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'swift by apple'
}
for (const key in myObject) {
  console.log(key);
  
}


//for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//   console.log(val);
// })

// coding.forEach((item) => {
//   console.log(item);
// })

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe)

coding.forEach(item) =>
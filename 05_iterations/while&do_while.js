//while

//unlike for loop we initiate index outside the loop
let index = 0
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index++ //introduces variation to let it terminate
}


let myArray = ['flash', 'batman', 'superman']
let arr = 0
while(arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr++
  
}

//do while
//it does the work first then checks the condition

// let score = 0
// do {
//   console.log(`The score is ${score}`);
//   score++
// } while (score <= 10) 

let score = 11
do {
  console.log(`The score is ${score}`);
  score++
} while (score <= 10) //it gives the output even if the score was initialized from 11 
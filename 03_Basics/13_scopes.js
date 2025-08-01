// scopes

//let,var,const

let a = 10
const b = 20
var c = 30

//Block scope
/*let and const. These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block*/
console.log(a);
console.log(b);
console.log(c);


function one() {
  const username = "ansh"
     
     function two () {
        const website = "youtube"
        console.log(username);
       }

      //  console.log(website);
       two()
// this phenomenon is also called closure where the child component can access the parent component and there more info left about it
}
one()


//=-=-=-=-=-==-=-=--=-=-=-=-==-=-=-=-==-=-=-=-=-=-=-=

//same thing happens in if-else

if(true) {
  const username = "anshhh"
    if(username === "anshhh") {
      const website = "youtube"
      console.log(username + website);
  }
  // console.log(website); //error1
}
// console.log(username); //error2


//++++++++++++++++++++++++++++==++++++++++++++++++++++++++++++======+++++++

function addOne(num) {
  return num + 1
}

addOne(2) //putting this addone() above its declaration will not through an error


const addTwo = function(num) {
     return num + 2
}

addTwo(5) //but this will through an error
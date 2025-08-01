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
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
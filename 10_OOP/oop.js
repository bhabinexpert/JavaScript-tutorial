const user = {
    username: "Vabin",
    loginInCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("got user details");
        // console.log(`username:${this.username}`)
        console.log(this)
    }

} // object literals

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this)

//  constructor function:

function userRat(username, age, height){
    this.username = username
    this.age = age
    this.height = height

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this
}

const userOne = new userRat("Bhabin",19, 5.5)
console.log(userOne.constructor)
// constructor property is the reference of ownself

const userTwo = new userRat("Anonymous", 20, 5.2)
// console.log(userTwo)



// an empty instance is created by using new keywords and constructor function is called because of new keyword and the arguments are injected to the function by this keyword.



// <<<<<Objects in JS>>>>>> //

// objects can be defined in multiple way literals, constructor, singleton...

// object literals

const myS = Symbol("key1")
// Object.create()// constructor method
const jsUser = {
    "fullname":"Vabin Dulal",
    name: "Vabin",
    age: 18,
    location: "Jhapa",
    email: "test@mail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Sunday", "Monday"],
    [myS]:"key1"//  adding the symbol in the object
}
// objects are defined in key valued pair inside the curly braces..

console.log(jsUser.name) // if the key is declared inside the doublequote that is string then this method can't exctract the value...it throws an error..


console.log(jsUser["fullname"]) // this is the correct syntax to extract the value from the object

console.log(jsUser["email"]) // In javaScript keys are automatically defined as string so while accessing the the value we have to write key as the String..

console.log(jsUser[myS])
console.log(typeof (jsUser[myS]))


jsUser.email = "chatgpt.com" // changing the value inside the object
// Object.freeze(jsUser) // after freezing the object no change thereafter is executed...

jsUser.email = "vabin.hero@gmail.com" // can't be executed because the object is freeze already..
console.log(jsUser)



// <<<<<<functions>>>>>> //

jsUser.greeting = function(){
    console.log("Hello! Js User")
}

jsUser.greeting2 = function(){
    console.log(`hello JsUser, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2 ());

// <<<<<<<<<< Objects Part-2 >>>>>>>

// object singleton which is declrade by constructor..

// const onlyFansUser = new Object() // singleton object;  a singleton is an object that is created only once and then reused wherever needed. 
const onlyFansUser = {} //non-singleton object


onlyFansUser.id ="123qwe"
onlyFansUser.name = "Kp"
onlyFansUser.isLoggedIn = true


// console.log(onlyFansUser)
const regularUser ={
    email: "kp@chor.com",
    fullname: {
        username:{
            firstname: "KP",
            lastname:"Oli"
        }
    }
}

console.log(regularUser.fullname.username.firstname)


const obj1 = {
    1:"q",
    2:"w"
}

const obj2 ={3:"r", 4:"t"}

const obj3 = Object.assign({}, obj1, obj2) // curly braces inside the parenthesis is optionable and Object.assign() methods copy all the values of the object given in the parathesis
console.log(obj3)

const obj4 = {...obj1, ...obj2} // mostly used syntax to merge the objects.
console.log(obj4)

const user = [
    {
        id: 1,
        email:"h@mail.com",
    }
]
console.log(onlyFansUser)
console.log(Object.keys(onlyFansUser)) // returns array.
console.log(Object.values(onlyFansUser)) // returns array.
console.log(Object.entries(onlyFansUser)) // returns array where every key values pair are in array itself..
console.log(onlyFansUser.hasOwnProperty('isLoggedIn')) // checks the availability of the property in the object and returns the boolean value. 
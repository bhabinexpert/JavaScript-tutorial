// let myName = "vabin  "

// console.log(myName.truelength)

// function truelength(){

// }

let arr = ["superman", "spiderman","mrbeast"]


let power ={
    superman: "fly",
    spiderman: "web",
    mrbeast: "money",

    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.bhabin = function(){
    console.log(`bhabin is present in all objects`)
}


Array.prototype.helloVabin = function(){
    console.log(`Vabin says hello`)
}
// power.helloVabin()

arr.helloVabin()
// power.bhabin()


// Inheritance

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false

}

const User = {
    name: "salmon",
    email: "salmonbhai@mail.com"
    
}


const taSupport = {
    makeAssignment: `JS assignment`,
    fulltime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User

// modern syntax::

Object.setPrototypeOf(teachingSupport, teacher)


let userSecond = "BhabinDulal     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)
}

userSecond.trueLength();
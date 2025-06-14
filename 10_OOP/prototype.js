// let myName = "vabin"

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

const taSupport = {
    makeAssignment: `JS assignment`,
    fulltime: true,
}
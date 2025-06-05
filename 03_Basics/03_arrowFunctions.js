// <<<<<<<Arrow functions and this keyword>>>>>>>>>>>//

const user = {
    username : "bhabin",
    price : 2020,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to my Website`)
        console.log(this) // this keywords works to represent the particular instance of that particular objects within the same objects 

    }
    
}
// user.welcomeMessage()

// user.username = "Ram"

// user.welcomeMessage()

// console.log(this)

// function coffee(){
//     let name = "bhabin"
//     console.log(this.name)

// }

// coffee()


//    <<<<<<< Arrow functionS>>>>>>>>>>>>     ///

const coffee = ()=>{           //arow functions
    let username = "name"
    console.log(this)
}
// coffee()


const add = (num1, num2) => {
    return num1+num2  //explicit return
}

const add2 = (num1, num2) => (num1+num2) //implicit return

const add3 = (num1, num2) => num1+num2

const add4 = (num1, num2) => ({username: "vabin"}) // to return the object, wrapp it inside the parethesis...


console.log(add4(4,6))
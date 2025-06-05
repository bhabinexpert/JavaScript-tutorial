// <<<<<<<<Functions>>>>>
//  package of copies of code which can be used wherever inside the file. reduces the line of code and increases the code reusability...

// function myname(){
//     console.log("B");
//     console.log("h");
//     console.log("a");
//     console.log("b");
//     console.log("i");
//     console.log("n");

    
// }

// myname()

// function addTwoNumber(x,y){
//     console.log(x+y);
// }

addTwoNumber(3, 5)
addTwoNumber(3, "5") // treats both as string...



function addTwoNumber(x,y){
    // let result = x + y
    // return result

    return x + y
}

const result = addTwoNumber(3, 2) 
// console.log("result:", result)

function message(username){
    if(username === undefined /* !username */ ){
        console.log("Please enter the username!!");
        return

    }
    return `${username} just loggedin`

}
// console.log((message("Bhabin")))
// console.log((message()))


function calculatePrice(...num1){ // returns all the value given in parameter because of rest operator...
    return num1
}
console.log(calculatePrice(2, 4, 5))


const user = {
    username:"vabin",
    price: 800
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

handleObject({
    username: "Bhabin",
    price: 900
})

const myArr = [1000, 300, 400, 6999]

function giveSecondValue(myArr){
    return myArr[1]
}

console.log(giveSecondValue(myArr))
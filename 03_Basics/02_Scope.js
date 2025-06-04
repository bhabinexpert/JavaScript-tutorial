// <<<<Global and local Scope>>>> 



// {}curly braces in conditional statements and functions are scope....

//var c = 20

let a = 300 // global scope, accessed evrywhere within the program

if (true){
    let a = 10 // can't be executed outside the scope..
    const b = 20  // can't be executed outside the scope..
    var c = 30 // is accessed outside the scope too so it's not practised usually.
    // console.log("inner:", a)
}


// console.log(a)
// console.log(b)
// console.log(c)


// function one(){
//     const userName = "bhabin"

//     function two(){
//         const website = "youtube"
//         console.log(userName);
//     }
//     // console.log(website); // can't be executed

//     two()
// }

// one()

if (true){
    const username = "Bhabin"
    if (username==="Bhabin"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website) can't be accessed outside the scope
}
// console.log(username) can't be accessed outside the scope.


// +++++++++++++++++++++interesting++++++++++++++//
console.log(add1(5)) // executable because the function is declared.
function add1(number){
    return number + 1
}



console.log(add2(5)) // can't be executed because the function is stored in the variable

const add2 = function(number){
    return number + 2
}


// add2(5)// only returns
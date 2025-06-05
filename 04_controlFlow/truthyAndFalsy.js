const email = "test.gmail.com"

if (email ){ // assumimg the value of email as true
    console.log("got the user's emamil")
}else{
    console.log("not got the email")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// "0",'false', "", {}, [], function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty")
}
// Nullish Coalescing Operator(??): null undefined


let val1;
// val1 = 5 ?? 10
val1 = null ?? 10 // if the value is null then it assigns another value


var1 = undefined ?? 15

var2 = null ?? 10 ?? 15 // returns the first value after null or undefined

console.log(var2)

console.log(var1)
console.log(val1)



//  terniary operator

// condition ? true: false


const fruit = 100
fruit >= 80 ? console.log("more than 80"): console.log("less then 80")

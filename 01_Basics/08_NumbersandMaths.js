const score =  20

const amount = new Number(9000)
console.log(amount)
console.log(typeof amount)


console.log(amount.toString())
console.log(typeof amount)
console.log(amount.toString().length)
console.log(amount.toFixed(2)) // keeps to decimal number after decimal points

const number = 1000000
console.log(number.toLocaleString())



// *************Maths****************//
// default libraries comes with JS

console.log(Math);
console.log(Math.abs(-4)) // changes negative value to positive
console.log(Math.round(3.3))
console.log(Math.round(3.6))


console.log(Math.random()) // random decimal values in between 0 and 1

console.log(Math.floor(Math.random()*10)) // random value from 0 to 9

const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // prints the random number from 10 - 20
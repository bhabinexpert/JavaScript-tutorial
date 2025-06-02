// Date and Time:



let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
// while declaring the date the months starts from 0 except in yy--mm--dd format in JS.
console.log(typeof myDate)
let myOwnDate = new Date("01-14-2023")
console.log(myOwnDate.toLocaleString())


let timeStamp = Date.now()/1000 // gives the value in second.
console.log(Math.floor(timeStamp))


// *************Arrays*****************//
const myArray = [0, 1, 2, 3, 4, 5]
// collection of multiple items in single variables aand it is resizeable. The value of the array is accessed by using indexing.


const array2 = new Array(1, 2, 3)

//  Methods of Array:

myArray.push(6)
myArray.push(7)
myArray.pop()
myArray.unshift(8) // add the value in the first positions. it's not practised in regularbase.
myArray.shift()
// removes the first element from the array.

// console.log(myArray);

// console.log(myArray.includes(9)); // returns the boolean
// console.log(myArray.indexOf(9)); // returns -1 if the value doesn't exists in the array.

// console.log(myArray.indexOf(3))


const newArray = myArray.join() // change the value of array in string seperated by commas.


// console.log(myArray)


// console.log(newArray)

// console.log(typeof (newArray))


// Slice and splice>>>>

// console.log("a", myArray)

const myA1  = myArray.slice(1,3) // starts the array from one index to 3rd index but the third index is excluded.
// console.log(myA1)

// console.log("b", myArray)

const myA2 = myArray.splice(1,3) //manipulate the original array and extract the range of prathesis from the original array.

// console.log("c", myArray)
// console.log(myA2)

// <<<<Arrays Part-2>>>>>> //

const heros = ["KPbaa", "prachanda", "deuba"]
const heros2 = ["balen", "rabi", "Harkey"]

// heros.push(heros2)
// console.log(heros) // insert the array inside the array.

const nepaliHeros = heros.concat(heros2) // return the new array after merging the two existing arrays
console.log(nepaliHeros)

const nepalKoHeros = [...heros,...heros2] // spread operatos which also merge the two existing arrays and returns new array. Mostly Practised.
console.log(nepalKoHeros)

const Number = [1,2, 3, [4, 5, 6,], 7, [8, 9, [0, 0, 0]]]

const realArr2 =  Number.flat(Infinity) // flat property makes all the elements are arranged in a single array only. and the pranthesis of flat should be defined
console.log(realArr2)

console.log(Array.isArray("vabin"))
console.log(Array.from("vabin")) // converts the parathesis into the array..

console.log(Array.from({name:"vabin"})) // returns empty array because it is not stated to make the aary of either keys or values.

let Score1 = 100
let Score2 = 200
let Score3 = 300

console.log(Array.of(Score1,Score2, Score3)) // also return the array.
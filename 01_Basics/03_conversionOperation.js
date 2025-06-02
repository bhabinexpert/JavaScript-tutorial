// let score = 
// console.log(typeof score);
// console.log(typeof(score));


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33"== 33
//  "33abc" ==NaN
// true ==1; false == 0;


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//  1 is converted in true and 0 is converted in false
//  empty string is converted in false
// string is converted in true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber))


// ******************Operations********************//


let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2%2)
// console.log(2/2)


let str1 = 'hello'
let str2 = 'vabin'

let str3 = str1 + str2
console.log(str3)


console.log("1"+ 2)
console.log(2 + "3")
console.log("2"+ 3 + 3)
console.log(2 + 2 + "3")


//  first ma string deko xa vaney Output string mei change hunx and if number first ma chha vaney number calculations hunxa ani string ma conversion hunx..

console.log(+true)

let score = 20
score++;
// ++score;
console.log(score)

// here the post increment changes the value in the variable in original container keeping the value same as previous in the container  where it is stored and pre increment changes the value in both the contianer where the variable are stored....


let postIncrement = 3;
const after = postIncrement++;
console.log(postIncrement,after);

let preIncrement = 3;
const after2 = ++preIncrement;
console.log(preIncrement,after2);

// here in the variable 'after' the value of postIncrement remains same previously declared but it changes in the variable name 'postIncrement'  and the variable "preIncrement" is declared  as 3 which was incremented in both variables "preIncrement" and "after2".
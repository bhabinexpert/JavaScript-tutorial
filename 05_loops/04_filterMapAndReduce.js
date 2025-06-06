//  filter

// const coding = ["Java", "Python", "JavaScript", "Cpp"]

// const values = coding.forEach((item) =>{
//   console.log(item);
//   return item   // doesn't return any values..
// })

// console.log(values)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = num.filter( (num)=> num > 4) // explicit return

// const newNum = num.filter( (num)=>{
//     return num > 4
// })

console.log(newNum) // return the value also 

const newNums = []
num.forEach( (num)=>{
    if (num > 4){
        newNums.push(num)
    }
} )

console.log(newNums)


// Map


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = myNum.map( (num) => num + 10 ) // if the scope is opened then must return the value.
console.log(result)


//  chaining: using the same methods more then once

const number = myNum
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 30)  // checks the conditions with iterations
            
console.log(number)



// reduce 

const bhabin = [1,2, 3];

// // const intialValue = 0;
// const myResult = bhabin.reduce(function (acc, currval){
//     console.log(`acc:${acc} and currval ${currval}`)
//     return acc + currval
// }, 0 /* intial value */ )
// console.log(myResult)

//output:
// acc:0 and currval 1
// acc:1 and currval 2
// acc:3 and currval 3
// 6

const myResult = bhabin.reduce((acc, curr) => acc + curr, 0)
console.log(myResult)


const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 1599
    },
    {
        itemName: "Data Scientist Course",
        price: 15999
    },
    {
        itemName: "Ai/ Ml Course",
        price: 9999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(priceToPay)

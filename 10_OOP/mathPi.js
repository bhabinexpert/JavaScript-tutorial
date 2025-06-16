// object

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter)

// console.log(Math.PI);


const chai = {
    name : 'Masala Chai',
    price: 50,
    isAvailable : true,

    oderChai: function(){
        console.log("Chai nehi Bana")
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
console.log(Object.getOwnPropertyDescriptor(chai, 'price'))

Object.defineProperty(chai, 'price', {   // changing the particular property from the obejct.
    writable: false,
    enumerable: false // makes the price of the object inenumerable or not iterateabale
})
console.log(Object.getOwnPropertyDescriptor(chai, 'price'))

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`)
        
    }
    
}
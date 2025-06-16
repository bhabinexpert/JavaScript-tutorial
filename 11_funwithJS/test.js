const myArr = []
//%DebugPrint(myArr) // runs through v8 engine to see the details of array.


// continious , Holey



//  SMI (small integer)
// Packed element
// Double (float, String, function)


const arr = [1, 2, 3, 4, 5]
// Packed _SMI_Elements

arr.push(6.0)
// Packed_Double_Elements

arr.push("7")
// Packed_Elements

arr[10] = 11
// Holey_Elements

console.log(arr)
console.log(arr.length)
console.log(arr[9])

// bound check
// hasOwnProperty(arr, 9)
// hasOwnProperty(arr.prototype, 10)has
// hasOwnProperty(Object.prototype, 10)

// holes are very Expensive in js

const arr2 = [1, 2, 3, 4, 5]
console.log(arr2[2]);

// SMI > DOUBLE >> PACKED
// H_SMI > H_DOUBLE >> H_PACKED

const arr3 = new Array(3);
// just 3 holes.HOLEY_SMI_ELEMENTS

arr3[0] = "1" // HOLEY_ELEMENTS
arr3[1] = "2" // HOLEY_ELEMENTS
arr3[2] = "3" // HOLEY_ELEMENTS


const arr4 = []
arr4.push('1') // PACKED_ELEMENTS
arr4.push('2') // PACKED_ELEMENTS
arr4.push('3') // PACKED_ELEMENTS

const arr5 = [1, 2, 3, 4, 5]
arr5.push(NaN)   //PACKED_DOUBLE

// for, for-of, for-Each (prefer pre-defined loops:) for better Optimization


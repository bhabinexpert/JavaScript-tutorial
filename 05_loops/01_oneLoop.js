// // for loops:

// for (let i = 0;/* initialization */  i < 10; /* condition */ i++ /* Increment/Decrement */ ) {
//     // const element = i;
//     console.log(i);  
// }

// for (let i = 1; i<=10; i++ ){
//     console.log(`Outer loop value: ${i}`)
//     for(let j = 1; j<=10; j++){
//         // console.log(`Inner loop value: ${j}`)
//         console.log(i + "*" + j + "=" + i * j)

//     }
// }

// let myheros = ["kp", "prachanda", "rabi"]

// for(let i = 0; i < myheros.length; i++){
//     const element = myheros[i];
//     console.log(element);
// }


//  break and continue:

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break      // exits the loop  
//     }
//     console.log(`value of index is ${index}`)
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue // skips the current iteration>>>
    }
    console.log(`value of index is ${index}`)
    
}
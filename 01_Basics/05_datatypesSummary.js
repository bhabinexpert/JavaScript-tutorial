// Primitive and Non-Primitive Datatypes:
// Primitive Data Types:(Call by Values)
// 7 categories: String, Number, Boolean, null, undefined, Symbol(used to make the values unique), BigInt


// JavaScript is Dynamically typed programming language.



const tempOfJhapa = null
let email =  undefined
let password; // this is also undefined


const id = Symbol('111')
const id2 = Symbol('111')

console.log(id == id2);

// Non-Primitive or Reference 
// Array, Objects, Functions



const heros = ["Anmol Kc", "Batman Rai", "Spiderman karki"];

let myObjects = {
    name: "Vabin",
    age: 20,
};

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(id))

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
// for of loop:

// const arr = [1, 2, 3, 4]

// for (const value of arr /* the object on which the iteration is to be done */ ) {
//     console.log(value) // shouldn't have to define conditions, starpoint, and increment/decrement
    
// }

const greeting = "Hello World"
for (const value of greeting){
    if (value == " ") {
        continue        
    }
    console.log(value)
    
}

// maps:


const map = new Map() // map holds the key value pair in order.. no duplications of value
map.set("Province", "Koshi")
map.set("City", "Damak")
map.set("District", "Jhapa")

console.log(map);

// looping over map:

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}

// const myObject = {
//     "game1":"FF",
//     "game2": "PUBG"
// }

// for (const [key,value] of myObject) {
//     console.log(key, ":-", value)
    
// } object isn't iterable as map...

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    py: "Python"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
   
}

const programming = ["Java","React", "Python"]

for (const key in programming) {
    console.log(programming[key])
  
}

// for each loops:
const coding = ["Java", "Python", "JavaScript", "Cpp"]
coding.forEach(function(value){  // for each loop with normal function
    console.log(value)
})
coding.forEach((item, index, arr) =>{   // for each loops with arrow function.. the parameter of call back function also carries the index and the array within it..
    console.log(item, index, arr)
})
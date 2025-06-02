// Memories types:
// **********Stack memory and heap memory*************//
// Stack memory is used where primitive datatypes are used...
// Heap memeory is used where non-primitive or reference datatypes are used..



let myCollage= "IIC"


let anotherCollage = myCollage
anotherCollage = "Islington"

console.log(anotherCollage);
console.log(myCollage)

//  In the stack memeory when you take the reference of some variables then it provides the copy of the reference and makes the original value unchanged but in the Heap memory it gives the original value of the variable and both original and referenced variables are changed..


let user1 ={
    email: "bhabindulal@youtube.com",
    age: 19
}

let user2 = user1

user1.email = "try@gmail.com"

console.log(user1.email);
console.log(user2.email);
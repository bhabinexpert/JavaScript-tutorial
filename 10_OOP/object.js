function multiplyBy5(num){
    return num  * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)
// function is also an object in js.
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.Increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const vabin = new createUser("bhabin", 20)
const tea = new createUser("tea", 10)

vabin.printMe()

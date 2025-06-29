const name = "vabin"
const streakCount = 100

console.log(name + streakCount + "Value")  // String Concatenate outdated syntax..

console.log(`Hello my name is ${name} and my Streak Count is ${streakCount}`);


const gameName = new String("Chained-Together")

console.log(gameName[0]);
console.log(gameName.__proto__); // prints the objects
console.log(gameName.length)
console.log(gameName.toUpperCase()); // doesn't changes the origianl value as it is stored in stack memory..

console.log(gameName.charAt(5));
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0, 4); // slices the string from 0 index to 4 but 4th index is exclusive so return upto 3rd index only  *****
console.log(newString)


const anotherString = gameName.slice(-1, -3)
console.log(anotherString);


const newString1 = "    Vabin    "
console.log(newString1.trim()) // removes white spaces in front and back  from string


const url = "https://bhabin.com/bhabin%dulal"
console.log(url.replace('%',""))
console.log(url.includes("bhabin"))
console.log(url.includes('iic'))


console.log(gameName.split("-")) // split the string into arrays on the basis of parenthesis

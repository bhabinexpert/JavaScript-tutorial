// Objects de- Structure and JSON API intro...

// de- Structuring......

const course = {
    name: "Js tutorial",
    price: 999,
    instructor: "Vabin"
}

const{instructor:teacher} = course // destructring of object.
// console.log(instructor)
console.log(teacher)


// <<<<<<<<API>>>>>>>>
// values from the databases are extracted in the form of JSON. JSON is a kind of javaScript Object....
// Sample of JSON:

/*{
    "name":"vabin",
    "course":"JS",
    "fee": "free"
}*/

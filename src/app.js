//TODO
/*
JS Variables
*/

var fullName = "Tristan"
var classcode = 503

console.log(fullName)

// JS Objects
var person = {
    first_name: "Tristan",
    last_name: "Bulmer",
    course_number: classcode
}

console.log(person.last_name)

// JS Functions

function add_two_nums(numA, numB) {
    return numA + numB
}

console.log( add_two_nums(9, 10) )

// JS Loops

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// JS Conditionals

var number = 10

if (number === 10){
    console.log("Number is 10")
}
else{
    console.log("Number is not 10")
}

// const = constant
let num = 3
console.log(num)

num = "e"
console.log(num)

// (==) vs (===), === is strict on datatype

// statements vs expressions

// statement
var x, y
if (y >= 0){
    x = y
}
else{
    x = -y
}

// expression
// var x = y >= 0 ? y : -y

var something = {}
something.foo = 100

console.log(something)

console.log(person.first_name.toUpperCase())

var obj1 = 123
var obj2 = 123

console.log(obj1 === obj2)

var string = "Glerbur"
console.log(string.length = 912)

var ray = ["Cheese", -101.285, string]
console.log(ray)

console.clear()

var test
if (test == undefined){
    console.log("It's undefined")
}
else if (test == null){
    console.log("It's null")
}